import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Project from '../../../models/Project';
import Location from '../../../models/Location';
import Amenity from '../../../models/Amenity';

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


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
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

    // Create new project with filtered data
    const project = new Project(filteredBody);

    await project.save();

    return NextResponse.json({
      success: true,
      data: project,
      message: 'Project created successfully'
    });
  } catch (error: any) {
    console.error('Error creating project:', error);
    
    // Handle specific MongoDB validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: validationErrors 
        },
        { status: 400 }
      );
    }
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        { 
          success: false, 
          error: `${field} already exists` 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create project',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
