import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import OTPVerification from '../../../../models/OTPVerification';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { mobile, otp } = body;

    // Validation
    if (!mobile || !otp) {
      return NextResponse.json(
        { error: 'Mobile number and OTP are required' },
        { status: 400 }
      );
    }

    // Find the OTP record
    const otpRecord = await OTPVerification.findOne({ 
      mobile, 
      otp,
      verified: false,
      expiresAt: { $gt: new Date() } // Check if not expired
    });

    if (!otpRecord) {
      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    // Mark OTP as verified
    otpRecord.verified = true;
    otpRecord.verifiedAt = new Date();
    await otpRecord.save();

    return NextResponse.json(
      { 
        message: 'OTP verified successfully',
        verified: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('OTP verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
