import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import ChannelPartnerForm from '../../../../models/ChannelPartnerForm';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { 
      name, 
      email, 
      mobile, 
      companyName, 
      companyAddress, 
      teamSize, 
      reraRegNumber, 
      reraCertificate, 
      locationOfInterest, 
      otherLocation,
      message 
    } = body;

    // Validation
    if (!name || !email || !mobile || !companyName || !companyAddress || !teamSize || !reraRegNumber || !locationOfInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If locationOfInterest is "Other", otherLocation is required
    if (locationOfInterest === 'Other' && !otherLocation) {
      return NextResponse.json(
        { error: 'Please specify the location' },
        { status: 400 }
      );
    }

    // Create new channel partner form entry
    const channelPartnerForm = new ChannelPartnerForm({
      name,
      email,
      mobile,
      companyName,
      companyAddress,
      teamSize,
      reraRegNumber,
      reraCertificate: reraCertificate || '',
      locationOfInterest,
      otherLocation: otherLocation || '',
      message: message || ''
    });

    await channelPartnerForm.save();

    return NextResponse.json(
      { message: 'Channel partner registration submitted successfully', id: channelPartnerForm._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Channel partner form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const forms = await ChannelPartnerForm.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ChannelPartnerForm.countDocuments();

    return NextResponse.json({
      forms,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching channel partner forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
