import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Project from '../../../../models/Project';
import Location from '../../../../models/Location';
import Amenity from '../../../../models/Amenity';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;
    
    // First try to get project without populate
    let project = await Project.findOne({ slug: slug, isActive: true });
    
    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Try to populate the project
    try {
      project = await Project.findOne({ slug: slug, isActive: true })
        .populate({
          path: 'projectLocation',
          select: 'name city state country',
          model: Location,
          options: { strictPopulate: false }
        })
        .populate({
          path: 'amenities',
          select: 'heading subHeading image caption',
          model: Amenity,
          options: { strictPopulate: false }
        });
    } catch (populateError) {
      console.warn('Populate failed, returning basic project data:', populateError);
    }
    
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
