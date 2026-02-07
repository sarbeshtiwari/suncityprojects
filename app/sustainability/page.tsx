'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function SustainabilityPage() {

	return (
		<div className="wrapper">
			<div className="emptyBox"></div>
			
			{/* Breadcrumb */}
			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link href="/">Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link href="/about-us">About Us</Link>
						</li>
						<li className="breadcrumb-item active">Sustainability</li>
					</ol>         
				</div>
			</div>

			{/* Main Sustainability Section */}
			<div className="w-100 padding position-relative bg-light Sustainability-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
					<p className="hidden-title" data-position="left">Sustainability</p>
				</div>
				<div className="container-lg">
					<div className="row flex-row-reverse gy-5">
						{/* Video Section */}
						<div className="col-xl-5 side-imgWrapper" data-aos="fade-in">
							<video 
								src="/videos/sustainability2.mp4" 
								autoPlay 
								loop 
								muted 
								poster="/images/sustainablity-video-th.webp" 
								className="h-100 object-cover"
							></video>
						</div>
						
						<div className="col-xl-7 about-text text-center text-xl-start">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto ms-xl-0 text-center text-xl-start">
									<h2 className="title-xxl mb-0 text-primary">Sustainability</h2>
								</div>
								<h5 className="fw-light mb-3 mb-md-4">Sustainability has been a central theme of our work for more than five decades.</h5>
								<p>We collaborate closely with our clients to develop customized design solutions that are optimized for operational efficiency and environmental stewardship.</p>
								<p className="mb-0">By incorporating energy-efficient systems, eco-friendly materials, and sustainable planning practices, we ensure our projects not only meet the present needs but also safeguard the future. At Suncity Projects, every development reflects our commitment to creating healthier, greener, and more resilient communities for generations to come.</p>
								
								<div className="project-icons mt-5">
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon">
												<img src="/images/icons/green-living.svg" alt="Green Living" />
											</div>
											<p className="mb-0">
												<span>Green Living</span>
											</p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon">
												<img src="/images/icons/eco-innovation.svg" alt="Eco Innovation" />
											</div>
											<p className="mb-0">
												<span>Eco Innovation</span>
											</p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon">
												<img src="/images/icons/future-ready.svg" alt="Future Ready" />
											</div>
											<p className="mb-0">
												<span>Future Ready</span>
											</p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon">
												<img src="/images/icons/responsible-growth.svg" alt="Responsible Growth" />
											</div>
											<p className="mb-0">
												<span>Responsible Growth</span>
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
	);
}
