'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

function CommunityPage() {
	return (
		<div className="wrapper">
			<div className="emptyBox"></div>

			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item"><Link href="/about-us">About Us</Link></li>
						<li className="breadcrumb-item active">Community</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding position-relative bg-light Community-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">Community</p></div>
				<div className="container-lg">
					<div className="row flex-row-reverse gy-5">
						<div className="col-xl-5 side-imgWrapper" data-aos="fade-in">
							<video src="/videos/community.mp4" autoPlay loop muted poster="/images/community-video-th.webp" className="h-100 object-cover"></video>
						</div>
						<div className="col-xl-7 about-text text-center text-xl-start">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto ms-xl-0 text-center text-xl-start">
									<h2 className="title-xxl mb-0 text-primary">Community</h2>
								</div>
								<h5 className="fw-light mb-3 mb-md-4">At Suncity Projects, we are dedicated to creating more than just residences; we build vibrant, connected communities.</h5>
								<p>Our developments foster a sense of belonging, bringing families together in spaces that celebrate life, culture, and shared experiences.</p>
								<p className="mb-0">Every festival, milestone, and daily moment becomes an opportunity to nurture relationships and create memories that last a lifetime. With thoughtfully designed common areas, recreational zones, and social hubs, residents enjoy a balanced lifestyle where safety, comfort, and camaraderie coexist. By emphasizing inclusivity and engagement, Suncity Projects ensures that every community is not just a living space but a thriving ecosystem of togetherness.</p>
								<div className="project-icons mt-5">
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/togetherness.svg" alt="Togetherness" /></div>
											<p className="mb-0"><span>Togetherness</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/belonging.svg" alt="Belonging" /></div>
											<p className="mb-0"><span>Belonging</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/harmony.svg" alt="Harmony" /></div>
											<p className="mb-0"><span>Harmony</span></p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/celebrations.svg" alt="Celebrations" /></div>
											<p className="mb-0"><span>Celebrations</span></p>
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

export default CommunityPage;
