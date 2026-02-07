import connectDB from "@/lib/mongodb";
import JobForm from "@/models/jobPosting";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route PUT /api/jobs/[id]
 * @desc Update a job posting
 */
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const { position_name, experience_required, CTC, job_responsibilities, qualifications } = body;

    // Validate input
    if (!position_name || !experience_required || !CTC || !job_responsibilities || !qualifications) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const updatedJob = await JobForm.findByIdAndUpdate(
      id,
      {
        position_name,
        experience_required,
        CTC,
        job_responsibilities,
        qualifications,
      },
      { new: true } // return updated document
    );

    if (!updatedJob) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Job updated successfully", job: updatedJob },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @route DELETE /api/jobs/[id]
 * @desc Delete a job posting
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();

    const { id } = await params;
    const deletedJob = await JobForm.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
