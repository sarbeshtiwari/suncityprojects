'use client'
import ProjectSkeleton from "@/components/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  _id: string;
  projectName: string;
  slug: string;
  category: string;
  reraNumber: string;
  shortDescription: string;
  projectLocation: string | {
    _id: string;
    name: string;
    city: string;
  };
  status: string;
  area: string;
  projectThumbnail: string;
  locationAltText: string;
}

export default function ResidentialProjects() {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState<Project[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchProjects();
	}, []);	

	const fetchProjects = async () => {
		try {
			setLoading(true);
			const response = await fetch('/api/projects/home/residential');
			const data = await response.json();
			
			if (data.success) {
				setProjects(data.data);
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
							<li className="breadcrumb-item"><Link href="/projects">Projects</Link></li>
							<li className="breadcrumb-item active">Residential</li>
						</ol>
					</div>
				</div>

				<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
					<div className="container-lg">
						<div className="heading text-center mx-auto" data-aos="fade-in">
							<h1 className="title-xxl text-primary mb-0">Residential Projects</h1>
						</div>
						<div className="projectContainer" data-aos="fade-in">
							<div className="project-slider">
								<div className="row gy-5">
									{projects.map((project) => {
										return (
											<div className="col-lg-6 hm-featured-slide" key={project._id}>
												<Link href={project.slug} className="inner">
													<div className="row h-100 flex-column">
														<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
															<div className="img-fluid overflow-hidden position-relative">
																<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">{project.category.toUpperCase()}</span>
																<img src={project.projectThumbnail} alt={project.locationAltText} />
															</div>
														</div>
														<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
															<div className="hm-featured-slide-text">
																<div className="project-text">
																	<div className="featured-box-heading mb-3">
																		<h2 className="h2 fw-light text-primary mb-0">{project.projectName}</h2>
																	</div>
																	<p className="text-primary d-flex align-items-center flex-wrap gap-2"><i className="fa fa-shield-halved"></i>{project.reraNumber}</p>
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
																				<span>{project.status}</span>
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
										)
									})}
									{/* <div className="col-lg-6 hm-featured-slide">
										<Link href="/jewel-farms" className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/jewel-farms.webp" alt="Jewel Farms" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Jewel Farms</h2>
															</div>
															<p className="text-primary d-flex align-items-center flex-wrap gap-2"><i className="fa fa-shield-halved"></i> RAJ/P/2023/2897</p>
															<p className="d-block">Jewel Farms in Kukkas, Jaipur, presents exclusive luxury farmhouse plots designed for those who desire peace and sophistication. Surrounded by greenery, it offers a tranquil escape while promising modern comforts, excellent connectivity, and an unparalleled lifestyle immersed in nature’s beauty.</p>
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
																		<span>Kukas, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/project-status.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Status</small>
																		<span>Ongoing</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>22.64 Acre</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-lg-6 hm-featured-slide">
										<Link href="/jewel-of-india-phase-2" className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/joi-ph2.webp" alt="Jewel Of India Phase-2" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Jewel Of India Phase-2</h2>
															</div>
															<p className="text-primary d-flex align-items-center flex-wrap gap-2"><i className="fa fa-shield-halved"></i> RAJ/P/2021/1712</p>
															<p className="d-block">Jewel of India Phase-II, rising at JLN Marg, Jaipur, redefines luxury living with exquisite 4 & 5 BHK residences. Building upon the success of Phase-I, it introduces new lavish amenities, offering residents an unmatched blend of elegance, comfort, and sophistication.</p>
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
																		<span>JLN Marg, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/project-status.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Status</small>
																		<span>Ongoing</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>7 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="col-lg-6 hm-featured-slide">
										<Link href="/suncity-ultima" className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/suncity-ultima.webp" alt="Suncity Ultima" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Suncity Ultima</h2>
															</div>
															<p className="text-primary d-flex align-items-center flex-wrap gap-2"><i className="fa fa-shield-halved"></i> PBRERA-SAS79-PR1049</p>
															<p className="d-block">A perfect blend of sophistication and lifestyle, Suncity Ultima redefines luxury in Zirakpur. Featuring spacious 3 BHK apartments, premium facilities and thoughtfully crafted spaces, it offers residents an address that celebrates grandeur, leisure and convenience amidst Tricity’s thriving surroundings.</p>
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
																		<span>Zirakpur, Punjab</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/project-status.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Status</small>
																		<span>Ongoing</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>6.5 acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}