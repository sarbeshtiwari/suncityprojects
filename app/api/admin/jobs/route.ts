import connectDB from "@/lib/mongodb";
import JobForm from '../../../../models/jobPosting';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { position_name, experience_required, CTC, job_responsibilities, qualifications } = body;

    // Validation
    if (!position_name || !experience_required || !CTC || !job_responsibilities || !qualifications) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new career form entry
    const careerForm = new JobForm({
      position_name,
      experience_required,
      CTC,
      job_responsibilities,
      qualifications,
    });

    await careerForm.save();

    return NextResponse.json(
      { message: 'Job application submitted successfully', id: careerForm },
      { status: 201 }
    );
  } catch (error) {
    console.error('Job form submission error:', error);
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

    const forms = await JobForm.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await JobForm.countDocuments();

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
    console.error('Error fetching career forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
