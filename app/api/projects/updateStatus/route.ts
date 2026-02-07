import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from '../../../../models/Project';

import Location from '../../../../models/Location';
import Amenity from '../../../../models/Amenity';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { _id, isActive } = body;

    if (!_id) {
      return NextResponse.json({ success: false, message: "Missing project ID" });
    }

    const updated = await Project.findByIdAndUpdate(
      _id,
      { isActive },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Project not found" });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}

export async function GET() {
  try {
    await connectDB();
    
    // First try to get projects without populate to see if basic query works
    const projects = await Project.find({}).sort({ createdAt: -1 });
    
    // If we have projects, try to populate them
    if (projects.length > 0) {
      try {
        const populatedProjects = await Project.find({})
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
          })
          .sort({ createdAt: -1 });
        
        return NextResponse.json({
          success: true,
          data: populatedProjects
        });
      } catch (populateError) {
        console.warn('Populate failed, returning basic project data:', populateError);
        return NextResponse.json({
          success: true,
          data: projects
        });
      }
    }
    
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