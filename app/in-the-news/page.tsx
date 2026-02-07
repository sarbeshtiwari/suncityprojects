
import MediaNavigation from '@/components/MediaNavigation';
import Link from 'next/link';

export default function InTheNews() {
	return (
		<>
			<main>
				{/* Empty Box for spacing */}
				<div className="emptyBox"></div>

				{/* Breadcrumb */}
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item">Media</li>
							<li className="breadcrumb-item active">In the News</li>
						</ol>         
					</div>
				</div>

				{/* Media Navigation */}
				<div className="bg-white">
					<MediaNavigation activePage="in-the-news" />
				</div>

				{/* News Section */}
				<div className="w-100 padding position-relative bg-white news-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">News</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">In the News</h2>
							<p>Over the years, Suncity Projects Pvt. Ltd. has made its mark across the real estate landscape, often featured in leading publications for its innovation, trust and timely delivery. From township developments to luxury residences and commercial landmarks, our projects continue to capture headlines for setting benchmarks in design and execution.</p>
							<p>Our initiatives in <b>sustainability, community building and modern construction technologies</b> have also been widely recognized by the media. With projects applying for <b>IGBC Gold ratings</b>, the adoption of advanced <b>MIVAN technology</b> and a commitment to creating thriving communities, Suncity Projects is consistently acknowledged for shaping a responsible and progressive real estate future.</p>
							<p className="mb-0">Be it <b>new project launches, milestone achievements, dealer felicitations, or community celebrations</b>, the presence of Suncity Projects in the news reflects the trust we share with stakeholders, customers and partners alike. Every feature, article or recognition echoes our philosophy of building not just spaces, but legacies of excellence.</p>
						</div>
						<div className="award-slider" data-aos="fade-in" data-aos-delay="300">
							<div className="row g-4">
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card news-card h-100 rounded-0 border-0">
										<a href="pdfs/DJ-20-3-2018.pdf" target="_blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/logos/logo-dainik-jagaran.jpg" alt="Dainik Jagaran" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<div className="d-flex justify-content-between align-items-center mb-3">
													<div className="d-flex align-items-center text-muted">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check me-1" style={{width: '1rem', height: '1rem'}}>
															<path d="M8 2v4" />
															<path d="M16 2v4" />
															<rect width="18" height="18" x="3" y="4" rx="2" />
															<path d="M3 10h18" />
															<path d="m9 16 2 2 4-4" />
														</svg>
														<span className="small">July 30th, 2025</span>
													</div>
												</div>
												<h6 className="card-title fw-light text-primary mb-3">Dainik Jagaran</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card news-card h-100 rounded-0 border-0">
										<a href="images/news/ET-Realty-16-01-09-corporate.jpg" data-magnify="magnify" data-group="news" data-caption="ET Realty">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/logos/logo-etrealty.jpg" alt="ET Realty" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<div className="d-flex justify-content-between align-items-center mb-3">
													<div className="d-flex align-items-center text-muted">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check me-1" style={{width: '1rem', height: '1rem'}}>
															<path d="M8 2v4" />
															<path d="M16 2v4" />
															<rect width="18" height="18" x="3" y="4" rx="2" />
															<path d="M3 10h18" />
															<path d="m9 16 2 2 4-4" />
														</svg>
														<span className="small">July 30th, 2025</span>
													</div>
												</div>
												<h6 className="card-title fw-light text-primary mb-3">ET Realty</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card news-card h-100 rounded-0 border-0">
										<a href="images/news/ET-Realty-9-01-09-corporate.jpg" data-magnify="magnify" data-group="news" data-caption="ET Realty">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/logos/logo-etrealty.jpg" alt="ET Realty" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<div className="d-flex justify-content-between align-items-center mb-3">
													<div className="d-flex align-items-center text-muted">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check me-1" style={{width: '1rem', height: '1rem'}}>
															<path d="M8 2v4" />
															<path d="M16 2v4" />
															<rect width="18" height="18" x="3" y="4" rx="2" />
															<path d="M3 10h18" />
															<path d="m9 16 2 2 4-4" />
														</svg>
														<span className="small">July 30th, 2025</span>
													</div>
												</div>
												<h6 className="card-title fw-light text-primary mb-3">ET Realty</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card news-card h-100 rounded-0 border-0">
										<a href="images/news/maya-india-nov 08-Triton.jpg" data-magnify="magnify" data-group="news" data-caption="Maya India">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/logos/logo-maya.jpg" alt="Maya India" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<div className="d-flex justify-content-between align-items-center mb-3">
													<div className="d-flex align-items-center text-muted">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check me-1" style={{width: '1rem', height: '1rem'}}>
															<path d="M8 2v4" />
															<path d="M16 2v4" />
															<rect width="18" height="18" x="3" y="4" rx="2" />
															<path d="M3 10h18" />
															<path d="m9 16 2 2 4-4" />
														</svg>
														<span className="small">July 30th, 2025</span>
													</div>
												</div>
												<h6 className="card-title fw-light text-primary mb-3">Maya India</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
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