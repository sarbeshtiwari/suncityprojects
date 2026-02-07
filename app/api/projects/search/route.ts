import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Project from '../../../../models/Project';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json({ projects: [] });
    }

    // First get all active projects with populated locations
    const allProjects = await Project.find({ isActive: true })
      .select('projectName slug projectLocation type')
      .populate('projectLocation', 'name city state')
      .sort({ projectName: 1 });

    // Then filter by search query (project name OR location)
    const projects = allProjects.filter(project => {
      const nameMatch = project.projectName.toLowerCase().includes(query.toLowerCase());
      // const locationMatch = project.projectLocation && (
      //   project.projectLocation.name?.toLowerCase().includes(query.toLowerCase()) ||
      //   project.projectLocation.city?.toLowerCase().includes(query.toLowerCase()) ||
      //   project.projectLocation.state?.toLowerCase().includes(query.toLowerCase())
      // );
      return nameMatch 
      // || locationMatch;
    }).slice(0, 10);

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Project search error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}