import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import ProjectEnquiryForm from '@/models/ProjectEnquiryForm';

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();

    const { id } = await params;
    const deletedData = await ProjectEnquiryForm.findByIdAndDelete(id);

    if (!deletedData) {
      return NextResponse.json(
        { error: "Data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting Data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
