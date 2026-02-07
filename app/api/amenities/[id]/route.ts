import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Amenity from '../../../../models/Amenity';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const {id} = await params;
    
    const amenity = await Amenity.findById(id);
    
    if (!amenity) {
      return NextResponse.json(
        { success: false, error: 'Amenity not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: amenity
    });
  } catch (error) {
    console.error('Error fetching amenity:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch amenity' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const {id} = await params;
    
    const body = await request.json();
    const { image, caption } = body;

    // Validation
    if (!image || !caption) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const amenity = await Amenity.findByIdAndUpdate(
      id,
      { image, caption },
      { new: true, runValidators: true }
    );

    if (!amenity) {
      return NextResponse.json(
        { success: false, error: 'Amenity not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: amenity,
      message: 'Amenity updated successfully'
    });
  } catch (error) {
    console.error('Error updating amenity:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update amenity' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const {id} = await params;
    
    const amenity = await Amenity.findByIdAndDelete(id);

    if (!amenity) {
      return NextResponse.json(
        { success: false, error: 'Amenity not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Amenity deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting amenity:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete amenity' },
      { status: 500 }
    );
  }
}
