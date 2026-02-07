import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find({ isActive: true })
      .select(
        '_id projectName slug category reraNumber shortDescription ' +
        'projectLocation status area projectThumbnail locationAltText'
      )
      .populate({
        path: 'projectLocation',
        select: 'name city',
        options: { strictPopulate: false }
      })
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    return NextResponse.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}