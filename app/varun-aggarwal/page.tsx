'use client';

import Link from 'next/link';

function VarunAggarwalPage() {
	return (
		<div className="wrapper overflow-hidden">
			<div className="teamContainer">
				<div className="row g-0 h-100">
					<div className="col-lg-6 team-image" data-aos="fade-down"><img src="/images/leadership/mr-varun-aggarwal-director-big.webp" className="object-cover" alt="Mr. Varun Aggarwal" /></div>
					<div className="col-lg-6 teamTextContainer" data-aos="fade-up">
						<div className="inner h-100">
							<Link href="/about-us#team" className="closeBtn">Close [X]</Link>
							<div className="scroller">
								{/* <div className="team-title">Director</div> */}
								<div className="heading mx-auto text-center ms-lg-0 text-lg-start">
									<h2 className="title-xxl mb-0 text-primary">Mr. Varun Aggarwal</h2>
								</div>
								<p className="team-quote position-relative fs-4 fw-light"><i className="fa-solid fa-quote-left"></i> With vision and commitment, we focus on sustainable, high-value developments that redefine growth, deliver trust, and shape world-class infrastructure for tomorrow.</p>
								<div className="team-details">
									<section>
										<div className="team-title">Education</div>
										<p className="fs-4 fw-light">Mr. Varun Aggarwal holds a degree in Business Administration and Finance, providing him with strong expertise in strategic planning and real estate development</p>
									</section>
									<section>
										<div className="team-title">Biography</div>
										<p>Mr. Varun Aggarwal embodies the next wave of leadership at Suncity Projects, propelling the Group toward rapid advancement. With a strong educational foundation in business administration and finance, he brings sharp strategic insight and a progressive approach to real estate development. His vision emphasizes sustainability, high-value projects, and world-class infrastructure that not only serve present needs but also anticipate future demands.</p>
										<p>Under his guidance, Suncity is actively expanding its horizons with projects worth thousands of crores, reflecting the Group’s unwavering legacy of excellence. Mr. Aggarwal is committed to blending modern innovation with trust, ensuring that every development becomes a symbol of growth and grandeur. His dynamic leadership is helping Suncity strengthen its position as one of the most trusted names in Indian real estate.</p>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VarunAggarwalPage;


