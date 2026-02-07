import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    await connectDB();
    const { category } = await params;
    const project = await Project.find({ category: category, isActive: true })
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
            data: project
        });
    } catch (error: any) {
        console.error('Error fetching project:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch project' },
            { status: 500 }
        );
    }
}
