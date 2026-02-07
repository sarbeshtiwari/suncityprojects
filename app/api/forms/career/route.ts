import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import CareerForm from '../../../../models/CareerForm';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { firstName, lastName, mobile, email, experience, jobPosition, resume, coverLetter } = body;

    // Validation
    if (!firstName || !lastName || !mobile || !email || !experience || !jobPosition) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new career form entry
    const careerForm = new CareerForm({
      firstName,
      lastName,
      mobile,
      email,
      experience,
      jobPosition,
      resume: resume || '',
      coverLetter: coverLetter || ''
    });

    await careerForm.save();

    return NextResponse.json(
      { message: 'Career application submitted successfully', id: careerForm._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Career form submission error:', error);
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

    const forms = await CareerForm.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await CareerForm.countDocuments();

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
