import AmenitiesSlider from '@/components/projectAmenities';
import ProjectEnquiry from '@/components/ProjectEnquiry';
import ProjectFAQs from '@/components/projectFaqs';
import ProjectGallery from '@/components/projectGallery';
import Link from 'next/link';

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

interface ProjectDetailPageProps {
  project: Project;
}


export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {

  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="inside-hero project-hero w-100">
          {project.bannerVideo && (project.bannerVideo.mobile || project.bannerVideo.desktop || project.bannerVideo.tablet) ? (
            <video preload="auto" playsInline webkit-playsinline autoPlay loop muted poster={project.bannerVideoPoster?.desktop || "/images/video-thumbs/default.png"} className="hero-video h-100 object-cover">
              {project.bannerVideo.mobile && <source src={project.bannerVideo.mobile} type="video/mp4" media="(max-width: 767px)" />}
              {project.bannerVideo.tablet && <source src={project.bannerVideo.tablet} type="video/mp4" media="(min-width: 768px) and (max-width: 1024px)" />}
              {project.bannerVideo.desktop && <source src={project.bannerVideo.desktop} type="video/mp4" media="(min-width: 1025px)" />}
            </video>
          ) : (
            <img
              src={project.projectThumbnail || "/images/project-thumbs/default.webp"}
              alt={project.projectName}
              className="hero-video h-100 object-cover"
            />
          )}
          <div className="container-lg position-absolute mx-auto h-100">
            <div className="heroText">
              <div className="heroText-top">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/projects">Projects</Link></li>
                  <li className="breadcrumb-item"><Link href={`/${project.category.toLowerCase()}-projects`}>{project.category.charAt(0).toUpperCase() +
  project.category.slice(1).toLowerCase()}</Link></li>
                  <li className="breadcrumb-item active">{project.projectName}</li>
                </ol>
                <div className="small location-badge">
                  <i className="fa fa-map-marker-alt"></i> 
                  {typeof project.projectLocation === 'string' 
                    ? project.projectLocation 
                    : `${project.projectLocation?.name || 'Location'}, ${project.projectLocation?.city || ''}`
                  }
                </div>
              </div>
              <div className="heroText-footer">
                <h1 className="h1 title mb-0">{project.projectName}</h1>
                <div className="viewmore mt-0 w-auto">
                  <a href="#formModal" data-bs-toggle="modal" data-bs-source="book a site visit" className="button text-white">Book a Site Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="w-100 padding overflow-hidden position-relative overview-section bg-sec bg-primary">
          <p className="hidden-title" data-position="left">Overview</p>
          <div className="container-lg">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="projects-pointers">
                  <ul className="list-unstyled d-flex flex-wrap gap-4 d-block">
                    <li>
                      <small>Total Area</small>
                      <p className="mb-0">{project.area}</p>
                    </li>
                    <li>
                      <small>Type</small>
                      <p className="mb-0">{project.type}</p>
                    </li>
                    <li>
                      <small>Status</small>
                      <p className="mb-0">{project.status}</p>
                    </li>
                    <li>
                      <small>RERA No.</small>
                      <p className="mb-0">{project.reraNumber}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading mx-auto ms-lg-0 text-center text-lg-start">
                  <h2 className="title-xxl mb-0">{project.heading}</h2>
                </div>
                <div className="overview-text pe-lg-5 scroller">
                  <p className="mb-0">{project.longDescription}</p>
                </div>
                <div className="readmore d-flex justify-content-center justify-content-lg-start">
                  <a href="#formModal" data-bs-toggle="modal" data-bs-source="download the brochure" className="button">Download Brochure</a>
                  <a href="https://api.whatsapp.com/send?phone=+918447737045&text=Hi, I am interested, please share the details." target='_blank' className="button light"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="w-100 padding overflow-hidden position-relative gallery-section bg-white">
            <p className="hidden-title" data-position="right">Gallery</p>
            <div className="container-lg">
              <div className="heading mx-auto text-center">
                <h4 className="fw-light text-primary">Explore the timeless elegance of our creations.</h4>
                <h2 className="title-xxl mb-0">A Glimpse of Grandeur</h2>
              </div>
              {/* <div className="gallery-slider swiper">
                <div className="swiper-wrapper">
                  {project.galleryImages.map((image, index) => (
                    <div key={index} className="swiper-slide gallery-slide">
                        <div className=" galBox">
                          <a href={image.original} data-magnify="magnify" data-group="gal" data-caption={image.altText || project.projectName} className="inner">
                            <img src={image.desktop || image.original} alt={image.altText || project.projectName} />
                          </a>
                        </div>
                    </div>
                  ))}
                </div>
                <div className="gallery-logo bg-white d-flex align-items-center justify-content-center col-md-4 position-absolute start-50 top-50 h-100 translate-middle">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-pagination"></div>
                  <div className="project-logo mx-auto d-none d-md-block mb-0">
                    <img src={project.projectLogo} alt={project.projectName} />
                  </div>
                </div>
              </div> */}
              <ProjectGallery
                galleryImages={project.galleryImages}
                projectName={project.projectName}
                projectLogo={project.projectLogo}
                />
            </div>
          </div>
        )}

        {/* Amenities Section */}
        {/* {project.amenities && project.amenities.length > 0 && (
          <div className="w-100 padding overflow-hidden position-relative amenities-section">
            <p className="hidden-title" data-position="left">Amenities</p>
            <div className="container-lg">
              <div className="heading mx-auto text-center">
                <h4 className="fw-light text-primary">World-class amenities for unmatched comfort and lifestyle.</h4>
                <h2 className="title-xxl mb-0">Beyond Expectations</h2>
              </div>
              <div className="swiper amenity-slider">
                <div className="swiper-wrapper">
                  {project.amenities.map((amenity, index) => {
                    // Check if amenity is populated object or just string
                    const isPopulatedAmenity = typeof amenity === 'object' && amenity !== null && 'image' in amenity;
                    const amenityData = amenity as any;
                    
                    return (
                      <div key={index} className="swiper-slide amenBox">
                        <figure>
                          <div className="img-fluid">
                            <img 
                              src={isPopulatedAmenity ? amenityData.image : '/images/icons/amenity-default.svg'} 
                              alt={isPopulatedAmenity ? amenityData.caption : amenity} 
                            />
                          </div>
                          <figcaption>{isPopulatedAmenity ? amenityData.caption : amenity}</figcaption>
                        </figure>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        )} */}

        <AmenitiesSlider amenities={project.amenities} />

        {/* Site Plan Section */}
        {project.sitePlanImage && project.sitePlanImage.original && (
          <div className="w-100 padding overflow-hidden position-relative siteplan-section bg-white">
            <p className="hidden-title" data-position="left">Site Plan</p>
            <div className="container-lg">
              <div className="heading mx-auto text-center">
                <h4 className="fw-light text-primary">Thoughtfully planned layouts for your vision of space.</h4>
                <h2 className="title-xxl mb-0">Site Blueprints of Brilliance</h2>
              </div>
              <div className="bigframe">
                <a href={project.sitePlanImage.original} data-magnify="magnify" data-group="sp" data-caption={project.sitePlanImage.altText || project.projectName} className="inner">
                  <img src={project.sitePlanImage.desktop || project.sitePlanImage.original} className="object-cover h-100" alt={project.sitePlanImage.altText || project.projectName} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Location Section */}
        <div className="w-100 padding overflow-hidden position-relative location-section bg-light">
          <p className="hidden-title" data-position="right">Location</p>
          <div className="container-lg">
            <div className="heading mx-auto text-center">
              <h4 className="fw-light text-primary">Locations that promise value today and tomorrow.</h4>
              <h2 className="title-xxl mb-0">At the Heart of Growth</h2>
            </div>
            <div className="swiper connectivity-slider connectivity">
              <div className="mapBox">
                <div className="mapIcon">
                  <img src={project.projectLogo} alt={project.projectName} />
                </div>
      {project.locationType === 'iframe' && project.locationIframe ? (
                <iframe src={project.locationIframe} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      ) : project.locationImage ? (
                <img src={project.locationImage} alt={project.locationAltText || project.projectName} className="w-100" style={{height: '450px', objectFit: 'cover'}} />
      ) : null}
              </div>
              
              {project.nearbyLocations && project.nearbyLocations.length > 0 && (
                <div className="swiper-wrapper">
                  {project.nearbyLocations.map((location, index) => (
                    <div key={index} className="swiper-slide location-icon">
                      <div className="in">
                        <div className="img-fluid p-0">
                          <img src={location.image} alt={location.altText || location.name} />
                        </div>
                        <div className="location-text">
                          <p><span className="h4">{location.distance}</span><small>{location.unit} <br/>Drive From</small></p>
                          <p className="mb-0">{location.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="swiper-button-prev bg-primary start-0"></div>
              <div className="swiper-button-next bg-primary end-0"></div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        {/* {project.faqs && project.faqs.length > 0 && (
          <div className="w-100 padding position-relative overflow-hidden bg-white">
            <p className="hidden-title" data-position="left">FAQs</p>
            <div className="container-lg">
              <div className="heading mx-auto text-center">
                <h2 className="title-xxl mb-0">FAQs</h2>
              </div>
              <ul className="accordion-list">
                {project.faqs.map((faq, index) => (
                  <li key={index}>
                    <h5>{faq.question}</h5>
                    <div className="answer">
                      <p>{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )} */}
        <ProjectFAQs faqs={project.faqs} />

      </main>
      
      <ProjectEnquiry 
        title="Premium Spaces Infinite Possibilities"
        subtitle={`Experience luxury living at ${project.projectName} with world-class amenities`}
      />
      {/* <ProjectScripts /> */}
    </>
  );
}