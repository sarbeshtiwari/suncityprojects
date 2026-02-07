import Link from "next/link";

export default function RetailProjects() {
	return (
		<>
			<main>
				<div className="emptyBox"></div>
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item"><Link href="/projects">Projects</Link></li>
							<li className="breadcrumb-item active">Retail</li>
						</ol>
					</div>
				</div>

				<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
					<div className="container-lg">
						<div className="heading text-center mx-auto" data-aos="fade-in">
							<h1 className="title-xxl text-primary mb-0">Retail Projects</h1>
						</div>
						<div className="projectContainer" data-aos="fade-in">
							<div className="project-slider">
								<div className="row gy-5">
									<div className="col-lg-6 hm-featured-slide delivered-slide">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12" data-aos="fade" data-aos-delay="100" data-aos-offset="0">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Retail</span>
														<span className="badge bg-secondary rounded-pill position-absolute end-0 top-0 m-3 text-dark fw-normal"><i className="fa fa-check-double"></i> Delivered</span>
														<img src="/images/project-thumbs/retail-projects/crossriver-mall.jpg" alt="Cross River Mall, Delhi" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Cross River Mall</h2>
															</div>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Vishwas Nagar, Shahdara, Delhi</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2004</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>0.3 Acres</span>
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
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Retail</span>
														<span className="badge bg-secondary rounded-pill position-absolute end-0 top-0 m-3 text-dark fw-normal"><i className="fa fa-check-double"></i> Delivered</span>
														<img src="/images/project-thumbs/retail-projects/triton-mall.jpg" alt="Triton Mall, Jaipur" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Triton Mall</h2>
															</div>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Jhotwara Road, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2006</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>3.7 Acres</span>
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