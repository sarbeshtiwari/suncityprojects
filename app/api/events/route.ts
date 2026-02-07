import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Event from '../../../models/Event';

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find({ isActive: true, isPublished: true })
      .sort({ eventDate: 1 }); // Sort by event date ascending (upcoming first)
    
    return NextResponse.json({
      success: true,
      data: events
    });
  } catch (error: any) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'title', 'slug', 'description', 'galleryImages'
    ];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields', details: missingFields },
        { status: 400 }
      );
    }

    const event = new Event(body);
    await event.save();

    return NextResponse.json({
      success: true,
      data: event
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create event', details: error.message },
      { status: 500 }
    );
  }
}
