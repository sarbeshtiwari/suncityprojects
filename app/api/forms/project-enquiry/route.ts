import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import ProjectEnquiryForm from '../../../../models/ProjectEnquiryForm';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, mobile, enquiryType, visitDate, source, pageName, keepUpdated } = body;

    // Validation
    if (!name || !email || !mobile || !source) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new project enquiry form entry
    const projectEnquiryForm = new ProjectEnquiryForm({
      name,
      email,
      mobile,
      enquiryType: enquiryType || undefined,
      visitDate: visitDate || undefined,
      source,
      pageName: pageName || undefined,
      keepUpdated: keepUpdated || false
    });

    await projectEnquiryForm.save();

    return NextResponse.json(
      { message: 'Project enquiry submitted successfully', id: projectEnquiryForm._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Project enquiry form submission error:', error);
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

    const forms = await ProjectEnquiryForm.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ProjectEnquiryForm.countDocuments();

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
    console.error('Error fetching project enquiry forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
