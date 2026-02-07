import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import OTPVerification from '../../../../models/OTPVerification';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { mobile } = body;

    // Validation
    if (!mobile) {
      return NextResponse.json(
        { error: 'Mobile number is required' },
        { status: 400 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP in database with expiration (5 minutes)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
    
    // Remove any existing OTP for this mobile number
    await OTPVerification.deleteMany({ mobile });
    
    const otpRecord = new OTPVerification({
      mobile,
      otp,
      expiresAt,
      verified: false
    });

    await otpRecord.save();

    // Send OTP via Nimbus SMS
    const smsResponse = await sendOTPViaSMS(mobile, otp);
    
    if (!smsResponse.success) {
      // In development mode, allow OTP to be generated even if SMS fails
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
          { 
            message: 'OTP generated successfully (development mode)',
            expiresIn: 300,
            debugOtp: otp // Only in development
          },
          { status: 200 }
        );
      }
      
      // If SMS fails in production, remove the OTP record
      await OTPVerification.deleteOne({ _id: otpRecord._id });
      return NextResponse.json(
        { error: `Failed to send OTP: ${smsResponse.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'OTP sent successfully',
        expiresIn: 300 // 5 minutes in seconds
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('OTP generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendOTPViaSMS(mobile: string, otp: string) {
  try {
    
    const smsUrl = 'http://nimbusit.net/api/pushsms';
    const params = new URLSearchParams({
      user: 'suncitynet',
      authkey: '92k6XPTwY00g',
      sender: 'SPPLHR',
      mobile: mobile,
      text: `Dear Customer, Your OTP to verify your enquiry with Suncity Projects is ${otp}. Please use this code to proceed. - SUNCITY PROJECTS PRIVATE LIMITED`,
      entityid: '1301163161517200974',
      templateid: '1707176009294137468',
      rpt: '1'
    });

    const response = await fetch(`${smsUrl}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.text();

    // Check if SMS was sent successfully
    if (response.ok) {
      try {
        // Parse JSON response from Nimbus API
        const jsonResult = JSON.parse(result);
        
        // Check for success indicators in the JSON response
        if (jsonResult.STATUS === 'OK' && jsonResult.RESPONSE && jsonResult.RESPONSE.CODE === '100') {
          return { success: true, message: 'SMS sent successfully' };
        } else {
          return { success: false, message: `SMS sending failed: ${result}` };
        }
      } catch (parseError) {
        // Fallback to text-based parsing for non-JSON responses
        if (result.includes('SUCCESS') || result.includes('success') || result.includes('sent') || result.includes('Sent')) {
          return { success: true, message: 'SMS sent successfully' };
        } else {
          return { success: false, message: `SMS sending failed: ${result}` };
        }
      }
    } else {
      return { success: false, message: `SMS API error: ${response.status} - ${result}` };
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, message: `SMS sending failed: ${errorMessage}` };
  }
}
