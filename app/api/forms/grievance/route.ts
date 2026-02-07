import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import GrievanceForm from '../../../../models/GrievanceForm';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, mobile, projectName, flatNumber, message, image } = body;

    // Validation
    if (!name || !email || !mobile || !projectName || !flatNumber || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new grievance form entry
    const grievanceForm = new GrievanceForm({
      name,
      email,
      mobile,
      projectName,
      flatNumber,
      message, image
    });

    await grievanceForm.save();

    return NextResponse.json(
      { message: 'Grievance submitted successfully', id: grievanceForm._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Grievance form submission error:', error);
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

    const forms = await GrievanceForm.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await GrievanceForm.countDocuments();

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
    console.error('Error fetching grievance forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
