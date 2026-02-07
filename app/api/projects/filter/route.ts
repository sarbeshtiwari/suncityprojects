import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Project from '../../../../models/Project';
import Location from '../../../../models/Location';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const propertyType = searchParams.get('propertyType');
    const locationId = searchParams.get('locationId');
    const locationName = searchParams.get('locationName');
    const city = searchParams.get('city');
    
    // Build the filter query
    let filterQuery: any = { isActive: true };
    
    // Add property type filter if provided
    if (propertyType && propertyType.trim() !== '') {
      filterQuery.category = propertyType;
    }
    
    // Add location filter if provided
    if (locationId && locationId.trim() !== '') {
      filterQuery.projectLocation = locationId;
    } else if (locationName && locationName.trim() !== '') {
      // Find location by name first
      const location = await Location.findOne({ 
        name: { $regex: locationName, $options: 'i' } 
      });
      if (location) {
        filterQuery.projectLocation = location._id;
      }
    } else if (city && city.trim() !== '') {
      // Find locations by city
      const locations = await Location.find({ 
        city: { $regex: city, $options: 'i' } 
      });
      if (locations.length > 0) {
        filterQuery.projectLocation = { $in: locations.map(loc => loc._id) };
      } else {
        // If no locations found for this city, return empty results
        return NextResponse.json({ success: true, data: [] });
      }
    }
    
    // Get projects with filters
    const projects = await Project.find(filterQuery)
      .populate({
        path: 'projectLocation',
        select: 'name city state country',
        model: Location,
        options: { strictPopulate: false }
      })
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error filtering projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to filter projects' },
      { status: 500 }
    );
  }
}
