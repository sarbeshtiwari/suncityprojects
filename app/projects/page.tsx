'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertySearch from '@/components/PropertySearch';
import Script from 'next/script';
import Link from 'next/link';
import ProjectSkeleton from '@/components/skeleton';


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
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Component that handles search params logic
function ProjectsContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const searchParams = useSearchParams();

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle search query and filters from URL parameters
  useEffect(() => {
    const query = searchParams.get('search');
    const propertyType = searchParams.get('propertyType');
    const city = searchParams.get('city');
    
    setSearchQuery(query || '');
    setPropertyTypeFilter(propertyType || '');
    setLocationFilter(city || '');
    
    // Apply all filters
    applyFilters(query || '', propertyType || '', city || '');
  }, [searchParams, projects]);

  // Re-initialize AOS when projects data loads
  useEffect(() => {
    if (projects.length > 0 && typeof window !== 'undefined') {
      // Re-initialize AOS after content loads
      setTimeout(() => {
        const AOS = (window as any).AOS;
        if (AOS) {
          AOS.refresh();
        }
      }, 100);
    }
  }, [projects]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.data);
        setFilteredProjects(data.data);
      } else {
        setError('Failed to fetch projects');
      }
    } catch (err) {
      setError('Error fetching projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredProjects = async (propertyType: string, city: string) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      
      if (propertyType) {
        queryParams.set('propertyType', propertyType);
      }
      if (city) {
        queryParams.set('city', city);
      }
      
      const response = await fetch(`/api/projects/filter?${queryParams.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setFilteredProjects(data.data);
      } else {
        setError('Failed to fetch filtered projects');
      }
    } catch (err) {
      setError('Error fetching filtered projects');
      console.error('Error fetching filtered projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (query: string, propertyType: string, city: string) => {
    // If we have property type or city filters, use the filtered API
    if (propertyType || city) {
      fetchFilteredProjects(propertyType, city);
      return;
    }
    
    // Otherwise, use the existing search functionality
    filterProjects(query);
  };

  const filterProjects = (query: string) => {
    if (!query.trim()) {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter(project => {
      const nameMatch = project.projectName.toLowerCase().includes(query.toLowerCase());
      const locationMatch = project.projectLocation && typeof project.projectLocation === 'object' && (
        project.projectLocation.name?.toLowerCase().includes(query.toLowerCase()) ||
        project.projectLocation.city?.toLowerCase().includes(query.toLowerCase()) ||
        project.projectLocation.state?.toLowerCase().includes(query.toLowerCase())
      );
      return nameMatch || locationMatch;
    });

    setFilteredProjects(filtered);
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'residential':
		return 'bg-white text-dark';
      case 'commercial':
		return 'bg-white text-dark';
      case 'retail':
		return 'bg-white text-dark';
      case 'education':
		return 'bg-white text-dark';
      case 'delivered':
        return 'bg-secondary';
      default:
        return 'bg-white text-dark';
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'text-primary';
      case 'completed':
        return 'text-primary';
      case 'delivered':
        return 'text-secondary';
      default:
        return 'text-muted';
    }
  };

  if (loading) {
		return (
			<main>
				<div className="emptyBox"></div>

				<div className="breadcrumbWrapper">
					<div className="container-lg">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item active">Projects</li>
						</ol>
					</div>
				</div>

				<div className="w-100 padding section-portfolio bg-white">
					<div className="container-lg">
						<div className="heading text-center mx-auto">
							<div className="skeleton skeleton-heading mx-auto mb-4"></div>
						</div>

						<div className="projectContainer">
							<div className="row gy-5">
								{Array.from({ length: 4 }).map((_, i) => (
									<ProjectSkeleton key={i} />
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}

  if (error) {
    return (
      <main>
        <div className="emptyBox"></div>
        <div className="breadcrumbWrapper">
          <div className="container-lg" data-aos="fade-in">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </div>
        </div>
        <div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
          <div className="container-lg">
            <div className="text-center py-5">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                <p>{error}</p>
                <div className='readmore'>
                  <button className="button button-sm" onClick={fetchProjects}>
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <div className="emptyBox"></div>
        <div className="breadcrumbWrapper">
          <div className="container-lg" data-aos="fade-in">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </div>
        </div>

        <div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
          <div className="container-lg">
            <PropertySearch placeholder="Project Name/ Location" showTrendingProperties={true} />

            <div className="heading text-center mx-auto" data-aos="fade-in">
              {searchQuery ? (
                <>
                  <h1 className="title-xxl text-primary mb-0">Search Results</h1>
                  <p className="text-muted mt-2">
                    Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </p>
                </>
              ) : (
                <h1 className="title-xxl text-primary mb-0">Featured Projects</h1>
              )}
            </div>
            <div className="projectContainer" data-aos="fade-in">
              <div className="project-slider">
                <div className="row gy-5">
                  {filteredProjects.length === 0 ? (
                    <div className="col-12 text-center">
                      <div className="alert bg-light py-5" role="alert">
                        <h4 className="alert-heading">
                          {searchQuery ? 'No Projects Found' : 'No Projects Available'}
                        </h4>
                        <p>
                          {searchQuery 
                            ? `No projects found for "${searchQuery}". Try a different search term.`
                            : 'There are no projects available at the moment.'
                          }
                        </p>
                        {searchQuery && (
                          <div className="readmore">
                            <Link href="/projects" className="button button-sm mx-auto">
                              View All Projects
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    filteredProjects.map((project, index) => (
                      <div key={project._id} className="col-lg-6 hm-featured-slide">
                        <Link href={`/projects/${project.slug}`} className="inner">
                          <div className="row h-100 flex-column">
                            <div className="hm-featured-slide-img col-md-12 col-12">
                              <div className="img-fluid overflow-hidden position-relative">
                                <span className={`badge ${getCategoryBadgeClass(project.category)} rounded-pill position-absolute start-0 top-0 m-3 fw-normal`}>
                                  {project.category.toUpperCase()}
                                </span>
                                <img 
                                  src={project.projectThumbnail || "/images/project-thumbs/default.webp"} 
                                  alt={project.projectName} 
                                />
                              </div>
                            </div>
                            <div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
                              <div className="hm-featured-slide-text">
                                <div className="project-text">
                                  <div className="featured-box-heading mb-3">
                                    <h2 className="h2 fw-light text-primary mb-0">{project.projectName}</h2>
                                  </div>
                                  <p className="text-primary d-flex align-items-center flex-wrap gap-2">
                                    <i className="fa fa-shield-halved"></i> {project.reraNumber}
                                  </p>
                                  <p className="d-block">{project.shortDescription}</p>
                                  <div className="icon-button">
                                    <div className="round-button">
                                      <div className="circle"></div><i className="fa fa-chevron-right"></i>
                                    </div> LEARN MORE
                                  </div>
                                </div>
                                <div className="project-icons">
                                  <div className="icon-item">
                                    <div className="in">
                                      <div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
                                      <p className="mb-0">
                                        <small className="d-block">Location</small>
                                        <span>
                                          {typeof project.projectLocation === 'string' 
                                            ? project.projectLocation 
                                            : String((project.projectLocation as any)?.name || 'Location')
                                          }
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="icon-item">
                                    <div className="in">
                                      <div className="icon"><img src="/images/icons/project-status.svg" alt="" /></div>
                                      <p className="mb-0">
                                        <small className="d-block">Status</small>
                                        <span className={getStatusBadgeClass(project.status)}>{project.status}</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="icon-item">
                                    <div className="in">
                                      <div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
                                      <p className="mb-0">
                                        <small className="d-block">Area</small>
                                        <span>{project.area}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </>
  );
}

// Main page component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={
      <div className="container-lg py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading projects...</p>
        </div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}