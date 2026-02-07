import Link from "next/link";

export default function EducationProjects() {
	return (
		<>
			<main>
				<div className="emptyBox"></div>
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item"><Link href="/projects">Projects</Link></li>
							<li className="breadcrumb-item active">Education</li>
						</ol>         
					</div>
				</div>

				<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
					<div className="container-lg">
						<div className="heading text-center mx-auto" data-aos="fade-in">
							<h1 className="title-xxl text-primary mb-0">Educational Projects</h1>
						</div>
						<div className="projectContainer" data-aos="fade-in">
							<div className="project-slider">
								<div className="row gy-5">
									<div className="col-lg-6 hm-featured-slide delivered-slide">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Education</span>
														<span className="badge bg-secondary rounded-pill position-absolute end-0 top-0 m-3 text-dark fw-normal"><i className="fa fa-check-double"></i> Delivered</span>
														<img src="/images/project-thumbs/education-projects/school-building-54&ia.jpg" alt="Suncity School" />
													</div>
												</div> 
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Suncity School 54</h2>
															</div>
															<p>Suncity School in Sector 54 is a premier co-educational institution offering multiple curricula—CBSE, CAIE (Cambridge), and IBDP. It is primarily a day-school setup, with a day-boarding option for elementary learners. The focus is on academic excellence, holistic development, and value-based education embedded in ‘Sanskaars’—a set of timeless ethical principles guiding character formation. With a favorable student-teacher ratio (about 10:1), it emphasizes personalized attention, creative learning, and building confident, future-ready individuals. </p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sector 54, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2005</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>5.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Education</span>
														<span className="badge bg-secondary rounded-pill position-absolute end-0 top-0 m-3 text-dark fw-normal"><i className="fa fa-check-double"></i> Delivered</span>
														<img src="/images/project-thumbs/education-projects/suncity-school-45.webp" alt="Suncity School" />
													</div>
												</div> 
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Suncity School 45</h2>
															</div>
															<p>Nestled within Greenwood City, Suncity School in Sector 45 is part of a trusted legacy of Suncity educational institutions. The school emphasizes holistic development, progressive teaching methodologies, and ‘Sanskaars’—value-based education. With a favorable student-teacher ratio (10:1) and small class sizes (~28 students), it fosters personalized attention. Infrastructure includes ergonomic classrooms, labs, libraries, a refectory, an infirmary, and secure transport facilities.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sector 45, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2018</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>1.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}