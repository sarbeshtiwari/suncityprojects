'use client';

import CareerNavigation from '@/components/CareerNavigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function WhySuncity() {


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
							<li className="breadcrumb-item">Careers</li>
							<li className="breadcrumb-item active">Why Suncity</li>
						</ol>         
					</div>
				</div>

				{/* Career Navigation */}
				<CareerNavigation activePage="why-suncity" />

				{/* Hero Section */}
				<div className="w-100 padding position-relative career-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="right">Careers</p>
					</div>
					<div className="container-lg">
						<div className="row justify-content-center align-items-center gy-5">
							<div className="col-lg-4 career-img" data-aos="fade-up">
								<img src="/images/why-suncity-career-image.jpg" className="aspect-ratio_4x5 object-cover" alt="" />
							</div>
							<div className="col-lg-6">
								<div className="text-area ps-lg-5" data-aos="fade-up">
									<div className="heading mx-auto ms-lg-0 text-center text-lg-start">
										<h2 className="h2 fw-lighter text-primary mb-0">Build tomorrow’s landmarks with Suncity Projects.</h2>
									</div>
									<article>
										<p>At <span className="text-primary">Suncity Projects Pvt Ltd</span>, we don't just build landmarks, we build careers. With over three decades of legacy in redefining real estate, we offer a dynamic work environment where innovation, integrity, and growth thrive together. Our culture fosters learning, collaboration, and opportunities to excel, ensuring every team member contributes to creating spaces that inspire and communities that flourish. Join us to be part of a visionary journey where your potential meets limitless possibilities.</p>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Our People Section */}
				<div className="w-100 padding position-relative bg-white career-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Our People</p>
					</div>
					<div className="container-lg">
						<div className="row justify-content-between align-items-center">
							<div className="col-xl-6 col-lg-6 position-relative">
								<div className="position-sticky">
									<div className="heading mx-auto ms-lg-0" data-aos="fade-in">
										<h1 className="title-xxl mb-3 text-primary">Our greatest asset is our people</h1>
										<p className="mb-0">With a team of approximately 4,700+ associates, we live by our Employee Value Proposition - Build the Best, Be the Best.</p>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 text-justify">
								<div className="about-text ps-lg-5" data-aos="fade-up">
									<div className="swiper people-slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide h-auto people-slide">
												<div className="inner h-100 position-relative bg-image" style={{backgroundImage: 'url(/images/career-pride.webp)'}}>
													<div>
														<h3 className="fw-light text-center mb-3">Pride</h3>
														<p className="mb-0">Our pride lies in the dedication and passion of our people. Every achievement, every landmark and every satisfied customer is a reflection of their unwavering commitment. Together, we take pride not only in the spaces we create but also in the values we uphold—integrity, trust and excellence. It is this collective pride that drives us to set new benchmarks in real estate and deliver experiences that stand the test of time.</p>
													</div>
												</div>
											</div>
											<div className="swiper-slide h-auto people-slide">
												<div className="inner h-100 position-relative bg-image" style={{backgroundImage: 'url(/images/career-growth.webp)'}}>
													<div>
														<h3 className="fw-light text-center mb-3">Learning & Growth</h3>
														<p className="mb-0">We believe that continuous learning fuels innovation and growth. Our culture encourages employees to explore new ideas, sharpen their skills and embrace challenges as opportunities. Through knowledge sharing, training and mentorship, we empower our people to evolve both personally and professionally, creating a workforce that is future-ready and inspired to shape the real estate landscape.</p>
													</div>
												</div>
											</div>
											<div className="swiper-slide h-auto people-slide">
												<div className="inner h-100 position-relative bg-image" style={{backgroundImage: 'url(/images/career-purpose.webp)'}}>
													<div>
														<h3 className="fw-light text-center mb-3">Purpose</h3>
														<p className="mb-0">At Suncity Projects, our people are the driving force behind every milestone we achieve. With a shared vision of innovation, integrity and excellence, our employees form the foundation of our success. We nurture a culture of collaboration, growth and empowerment, where every individual contributes to shaping iconic spaces and building lasting value for our customers and communities.</p>
													</div>
												</div>
											</div>
										</div>
										<div className="swiper-pagination light"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Work With The Best Section */}
				<div className="w-100 padding position-relative opportunity-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="right">Opportunities</p>
					</div>
					<div className="container-lg">
						<div className="row gy-5">
							<div className="col-lg-5 opportunity-img" data-aos="fade-right">
								<img src="/images/higher-education.jpg" className="h-100 object-cover" alt="" />
							</div>
							<div className="col-lg-7 opportunity-text" data-aos="fade-up" data-aos-delay="300">
								<div className="inner ps-lg-5">
									<div className="heading mx-auto ms-lg-0 text-center text-lg-start">
										<h2 className="title-xxl text-primary">Work With The Best</h2>
										<p className="mb-0">Our bright mix of talent comes from the best educational institutes and <br />organisations across the globe.</p>
									</div>
									<div className="swiper logo-slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian Institute of Management, Bangalore</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian Institute of Technology, Mumbai</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian Institute of Management, Calcutta</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian Institute of Technology, Delhi</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian Institute of Management, Ahmedabad</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Stanford Graduate School of Business</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Indian School of Business (ISB)</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">London Business School</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">Bain Capital</p>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="logo-item">
													<p className="mb-0">McKinsey & Company</p>
												</div>
											</div>
										</div>
										<div className="bottomControls justify-content-lg-start">
											<div className="swiper-button-prev"></div>
											<div className="viewmore mt-0"><Link href="/explore-career" className="button">Explore Opportunities</Link></div>
											<div className="swiper-button-next"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Awards Section */}
				<div className="w-100 padding position-relative bg-light awards-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Awards</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">A Celebrated Workplace</h2>
							<p className="mb-0">At Suncity, we thrive at creating an inclusive culture that celebrates excellence.</p>
						</div>
						<div className="swiper award-slider" data-aos="fade-in" data-aos-delay="300">
							<div className="swiper-wrapper">
								<div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Switch Delhi to EV <br />2022</p>
									</div>
								</div>
								<div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Iconic Luxury Project, Gurugram <br />Platinum Towers by Suncity Projects</p>
									</div>
								</div>
								
								{/* <div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Switch Delhi to EV <br />2022</p>
									</div>
								</div>
								<div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Switch Delhi to EV <br />2022</p>
									</div>
								</div>
								<div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Switch Delhi to EV <br />2022</p>
									</div>
								</div>
								<div className="swiper-slide h-auto award-slide">
									<div className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="" /></div>
										<p className="mb-0">Switch Delhi to EV <br />2022</p>
									</div>
								</div> */}
							</div>
							<div className="bottomControls">
								<div className="swiper-button-prev"></div>
								<div className="viewmore mt-0"><Link href="/awards" className="button">View All Awards</Link></div>
								<div className="swiper-button-next"></div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}