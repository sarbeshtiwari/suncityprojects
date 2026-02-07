'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AddProjectPage from '../../add/page';

interface Location {
  _id: string;
  name: string;
  city: string;
  state: string;
}

interface Amenity {
  _id: string;
  heading: string;
  subHeading: string;
  image: string;
  caption: string;
}

interface Project {
  _id: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  otherMetaTags: string;
  schemaScript: string;
  projectName: string;
  slug: string;
  category: string;
  reraNumber: string;
  longDescription: string;
  shortDescription: string;
  projectLocation: string;
  status: string;
  area: string;
  type: string;
  heading: string;
  projectLogo: string;
  locationImage: string;
  locationAltText: string;
  locationType: string;
  locationIframe: string;
  isActive: boolean;
  bannerVideo: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  bannerVideoPoster: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  sitePlanImage: {
    original: string;
    mobile: string;
    desktop: string;
    altText: string;
  };
  galleryImages: any[];
  nearbyLocations: any[];
  floorPlans: any[];
  faqs: any[];
  amenities: string[];
}

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchProject(params.id as string);
    }
  }, [params.id]);

  const fetchProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/manage/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setProject(data.data);
      } else {
        setError('Failed to fetch project');
      }
    } catch (err) {
      setError('Error fetching project');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="alert alert-warning" role="alert">
        Project not found
      </div>
    );
  }

  return (
    <AddProjectPage 
      initialData={project}
      isEditMode={true}
      projectId={params.id as string}
    />
  );
}
