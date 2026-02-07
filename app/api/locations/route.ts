import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET() {
  try {
    await connectDB();
    
    const locations = await Location.find({})
      .select('name city state country createdAt updatedAt')
      .sort({ name: 1 });
    
    return NextResponse.json({
      success: true,
      data: locations
    });
  } catch (error: any) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch locations' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, city, state, country } = body;
    
    // Validate required fields
    if (!name || !city || !state || !country) {
      return NextResponse.json(
        { success: false, error: 'All fields (name, city, state, country) are required' },
        { status: 400 }
      );
    }
    
    // Check if location already exists
    const existingLocation = await Location.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') },
      city: { $regex: new RegExp(`^${city}$`, 'i') }
    });
    
    if (existingLocation) {
      return NextResponse.json(
        { success: false, error: 'Location with this name and city already exists' },
        { status: 409 }
      );
    }
    
    // Create new location
    const newLocation = new Location({
      name,
      city,
      state,
      country
    });
    
    const savedLocation = await newLocation.save();
    
    return NextResponse.json({
      success: true,
      data: savedLocation,
      message: 'Location created successfully'
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error creating location:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create location' },
      { status: 500 }
    );
  }
}