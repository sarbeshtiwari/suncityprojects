import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Blog from '../../../../models/Blog';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({ })
      .sort({ publishedDate: -1 });
    
    return NextResponse.json({
      success: true,
      data: blogs
    });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs', details: error.message },
      { status: 500 }
    );
  }
}
