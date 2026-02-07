import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Project from '../../../../../models/Project';
import Location from '../../../../../models/Location';
import Amenity from '../../../../../models/Amenity';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    
    // First try to get project without populate
    let project = await Project.findById(id);
    
    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Try to populate the project
    try {
      project = await Project.findById(id)
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    
    // Filter out unwanted fields that are not in the Project schema
    const unwantedFields = ['subHeading', 'address', 'galleryHeading', 'gallerySubHeading', 'sitePlanHeading', 'sitePlanSubHeading'];
    const filteredBody = { ...body };
    unwantedFields.forEach(field => {
      if (filteredBody[field] !== undefined) {
        delete filteredBody[field];
      }
    });

    // Validate required fields
    const requiredFields = [
      'projectName', 'slug', 'category', 'reraNumber', 'longDescription', 
      'shortDescription', 'projectLocation', 'status', 'area', 'type', 
      'heading', 'projectLogo', 'locationImage', 'locationAltText'
    ];
    
    const missingFields = requiredFields.filter(field => !filteredBody[field]);
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Update project
    const project = await Project.findByIdAndUpdate(
      id,
      filteredBody,
      { new: true, runValidators: true }
    );

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: project,
      message: 'Project updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update project',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
