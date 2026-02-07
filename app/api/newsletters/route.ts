import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Newsletter from '../../../models/Newsletter';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { email, source = 'footer' } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingNewsletter = await Newsletter.findOne({ email });
    if (existingNewsletter) {
      if (existingNewsletter.isActive) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        );
      } else {
        // Reactivate the subscription
        existingNewsletter.isActive = true;
        existingNewsletter.source = source;
        await existingNewsletter.save();
        
        return NextResponse.json(
          { message: 'Newsletter subscription reactivated successfully', id: existingNewsletter._id },
          { status: 200 }
        );
      }
    }

    // Create new newsletter subscription
    const newsletter = new Newsletter({
      email,
      source,
      isActive: true
    });

    await newsletter.save();

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', id: newsletter._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
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
    const search = searchParams.get('search') || '';

    let query = {};
    if (search) {
      query = { email: { $regex: search, $options: 'i' } };
    }

    const newsletters = await Newsletter.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments(query);

    return NextResponse.json({
      newsletters,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
