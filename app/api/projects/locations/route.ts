import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Project from '../../../../models/Project';
import Location from '../../../../models/Location';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const propertyType = searchParams.get('propertyType');
    
    // Build the filter query
    let filterQuery: any = { isActive: true };
    
    // Add property type filter if provided
    if (propertyType && propertyType.trim() !== '') {
      filterQuery.category = propertyType;
    }
    
    // Get projects with the filter
    const projects = await Project.find(filterQuery)
      .populate({
        path: 'projectLocation',
        select: 'name city state country',
        model: Location,
        options: { strictPopulate: false }
      });
    
    // Extract unique locations from the projects
    const locationMap = new Map();
    projects.forEach(project => {
      if (project.projectLocation && typeof project.projectLocation === 'object') {
        const location = project.projectLocation as any;
        if (!locationMap.has(location._id)) {
          locationMap.set(location._id, {
            _id: location._id,
            name: location.name,
            city: location.city,
            state: location.state,
            country: location.country
          });
        }
      }
    });
    
    const locations = Array.from(locationMap.values());
    
    return NextResponse.json({
      success: true,
      data: locations
    });
  } catch (error) {
    console.error('Error getting locations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get locations' },
      { status: 500 }
    );
  }
}
