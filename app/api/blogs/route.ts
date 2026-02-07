import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Blog from '../../../models/Blog';

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find(
      { isActive: true, isPublished: true }
    )
      .select('_id title slug excerpt image altText publishedDate')
      .sort({ publishedDate: -1 })
      .lean(); // optional but recommended

    return NextResponse.json({
      success: true,
      data: blogs
    });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'content', 'excerpt', 'image', 'altText'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields', details: missingFields },
        { status: 400 }
      );
    }

    const blog = new Blog(body);
    await blog.save();

    return NextResponse.json({
      success: true,
      data: blog
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog', details: error.message },
      { status: 500 }
    );
  }
}
