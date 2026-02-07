import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Project from '../../../../models/Project';
import Location from '../../../../models/Location';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const locationId = searchParams.get('locationId');
    const locationName = searchParams.get('locationName');
    const city = searchParams.get('city');
    
    // Build the filter query
    let filterQuery: any = { isActive: true };
    
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
      } else {
        // If location not found, return empty array
        return NextResponse.json({
          success: true,
          data: []
        });
      }
    } else if (city && city.trim() !== '') {
      // Find locations by city
      const locations = await Location.find({ 
        city: { $regex: city, $options: 'i' } 
      });
      if (locations.length > 0) {
        filterQuery.projectLocation = { $in: locations.map(loc => loc._id) };
      } else {
        // If no locations found for this city, return empty array
        return NextResponse.json({
          success: true,
          data: []
        });
      }
    }
    
    // Get distinct property types (categories) for the filtered projects
    const propertyTypes = await Project.distinct('category', filterQuery);
    
    return NextResponse.json({
      success: true,
      data: propertyTypes
    });
  } catch (error) {
    console.error('Error getting property types:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get property types' },
      { status: 500 }
    );
  }
}
