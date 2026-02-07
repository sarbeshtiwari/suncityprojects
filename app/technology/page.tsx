'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

function TechnologyPage() {
	return (
		<div className="wrapper">
			<div className="emptyBox"></div>

			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item"><Link href="/about-us">About Us</Link></li>
						<li className="breadcrumb-item active">Technology</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding position-relative bg-light csr-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">Technology</p></div>
				<div className="container-lg">
					<div className="row flex-row-reverse gy-5">
						<div className="col-xl-5 side-imgWrapper" data-aos="fade-in">
							<video src="/videos/technology.mp4" autoPlay loop muted poster="/images/technology-video-th.webp" className="h-100 object-cover"></video>
						</div>
						<div className="col-xl-7 about-text text-center text-xl-start">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto ms-xl-0 text-center text-xl-start">
									<h2 className="title-xxl mb-0 text-primary">Technology</h2>
								</div>
								<h5 className="fw-light mb-3 mb-md-4">At Suncity Projects, we leverage cutting-edge construction technologies to redefine modern living.</h5>
								<p>Advanced methods like MIVAN Technology enable faster, precise, and durable construction, ensuring every project meets the highest standards of quality and safety.</p>
								<p className="mb-0">Our use of smart building practices, innovative materials, and sustainable techniques guarantees stronger foundations, superior structural integrity, and efficient resource management. By integrating technology at every stage—from design to execution—we create spaces that are not only resilient and safe but also future-ready. At Suncity Projects, innovation drives excellence, making every development a benchmark in the real estate industry.</p>
								<div className="project-icons mt-5">
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/smart-engineering.svg" alt="Smart Engineering" /></div>
											<p className="mb-0"><span>Smart <br className='d-none d-xl-block' />Engineering</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/innovative-design.svg" alt="Innovative Design" /></div>
											<p className="mb-0"><span>Innovative <br className='d-none d-xl-block' />Design</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/precision-build.svg" alt="Precision Build" /></div>
											<p className="mb-0"><span>Precision <br className='d-none d-xl-block' />Build</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/modern-methods.svg" alt="Modern Methods" /></div>
											<p className="mb-0"><span>Modern <br className='d-none d-xl-block' />Methods</span></p>
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

export default TechnologyPage;
