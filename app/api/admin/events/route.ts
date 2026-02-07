import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Event from '../../../../models/Event';

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find({}).sort({ eventDate: -1 });
    return NextResponse.json({ success: true, data: events });
  } catch (error: any) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events', details: error.message },
      { status: 500 }
    );
  }
}
