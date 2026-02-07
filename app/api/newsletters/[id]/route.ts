import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Newsletter from '../../../../models/Newsletter';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;

    const newsletter = await Newsletter.findByIdAndDelete(id);
    
    if (!newsletter) {
      return NextResponse.json(
        { error: 'Newsletter subscription not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Newsletter subscription deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    const body = await request.json();
    const { isActive } = body;

    const newsletter = await Newsletter.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    );
    
    if (!newsletter) {
      return NextResponse.json(
        { error: 'Newsletter subscription not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Newsletter subscription updated successfully', newsletter },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating newsletter:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
