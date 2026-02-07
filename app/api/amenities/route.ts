import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Amenity from '../../../models/Amenity';

export async function GET() {
  try {
    await connectDB();
    
    const amenities = await Amenity.find().sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: amenities
    });
  } catch (error) {
    console.error('Error fetching amenities:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch amenities' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { image, caption } = body;

    // Validation
    if (!image || !caption) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new amenity
    const amenity = new Amenity({
      image,
      caption
    });

    await amenity.save();

    return NextResponse.json({
      success: true,
      data: amenity,
      message: 'Amenity created successfully'
    });
  } catch (error) {
    console.error('Error creating amenity:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create amenity',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
