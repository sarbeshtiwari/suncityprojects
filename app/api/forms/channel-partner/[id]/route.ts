import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import ChannelPartnerForm from '../../../../../models/ChannelPartnerForm';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Channel partner ID is required' },
        { status: 400 }
      );
    }

    // Check if the channel partner exists
    const channelPartner = await ChannelPartnerForm.findById(id);
    
    if (!channelPartner) {
      return NextResponse.json(
        { error: 'Channel partner not found' },
        { status: 404 }
      );
    }

    // Delete the channel partner
    await ChannelPartnerForm.findByIdAndDelete(id);

    return NextResponse.json(
      { message: 'Channel partner deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting channel partner:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Channel partner ID is required' },
        { status: 400 }
      );
    }

    const channelPartner = await ChannelPartnerForm.findById(id);
    
    if (!channelPartner) {
      return NextResponse.json(
        { error: 'Channel partner not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(channelPartner);
  } catch (error) {
    console.error('Error fetching channel partner:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
