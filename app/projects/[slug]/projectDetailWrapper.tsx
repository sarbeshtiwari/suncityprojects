'use client';

import { useState, useEffect } from 'react';
import ProjectDetailPage from './client';
import { notFound } from 'next/navigation';

interface Project {
  _id: string;
  projectName: string;
  slug: string;
  category: string;
  reraNumber: string;
  longDescription: string;
  shortDescription: string;
  projectLocation: string | {
    _id: string;
    name: string;
    city: string;
    state: string;
    country: string;
  };
  status: string;
  area: string;
  type: string;
  heading: string;
  projectLogo: string;
  projectThumbnail: string;
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
  galleryImages: Array<{
    original: string;
    mobile: string;
    desktop: string;
    altText: string;
  }>;
  nearbyLocations: Array<{
    name: string;
    distance: string;
    unit: string;
    image: string;
    altText: string;
  }>;
  floorPlans: Array<{
    image: string;
    altText: string;
    planType: string;
    area: string;
    unit: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  amenities: string[] | Array<{
    _id: string;
    heading: string;
    subHeading: string;
    image: string;
    caption: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  slug: string;
}

export default function ProjectDetailWrapper({ slug }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/projects/${slug}`);
        const data = await res.json();
        setProject(data.data);
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

    if (loading) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
                <div className="spinner-border text-primary mb-3" role="status" style={{ width: '4rem', height: '4rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="h5 text-secondary">Loading project...</p>
            </div>
        );
    }

    if (!project) {
        notFound();
    }


  return <ProjectDetailPage project={project} />;
}
