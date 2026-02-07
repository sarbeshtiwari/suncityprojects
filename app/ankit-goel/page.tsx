'use client';

import Link from "next/link";

function AnkitGoelPage() {

	return (
		<div className="wrapper overflow-hidden">
			<div className="teamContainer">
				<div className="row g-0 h-100">
					<div className="col-lg-6 team-image" data-aos="fade-down"><img src="/images/leadership/mr-ankit-goel-director-big.webp" className="object-cover" alt="Mr. Ankit Goel" /></div>
					<div className="col-lg-6 teamTextContainer" data-aos="fade-up">
						<div className="inner h-100">
							<Link href="/about-us#team" className="closeBtn">Close [X]</Link>
							<div className="scroller">
								{/* <div className="team-title">Director</div> */}
								<div className="heading mx-auto text-center ms-lg-0 text-lg-start">
									<h2 className="title-xxl mb-0 text-primary">Mr. Ankit Goel</h2>
								</div>
								<p className="team-quote position-relative fs-4 fw-light"><i className="fa-solid fa-quote-left"></i> My vision is to position Suncity Projects as a trusted realty brand by exceeding expectations, fostering fairness, and prioritizing customer-centric growth.</p>
								<div className="team-details">
									<section>
										<div className="team-title">Education</div>
										<p className="fs-4 fw-light">Mr. Ankit Goel holds a coveted Master’s degree in Real Estate, which set the foundation for his dynamic career in the industry</p>
									</section>
									<section>
										<div className="team-title">Biography</div>
										<p>Mr. Ankit Goel is a dynamic leader at Suncity Projects with a comprehensive portfolio spanning marketing, sales and operations. Armed with a Master’s degree in Real Estate, he brings a strong academic foundation to his multifaceted role. His vision is rooted in building Suncity Projects into one of the most trusted names in Indian real estate by consistently exceeding expectations, embracing a customer-friendly approach, and ensuring the principle of Shubh Labh—fair prosperity for all stakeholders.</p>
										<p>Beyond real estate, Mr. Goel is deeply passionate about education, leading Suncity School, an institution designed to nurture global-ready students. With a focus on excellence, innovation, and inclusivity, he is also committed to expanding the Group’s presence in the affordable living space, thereby creating meaningful, future-oriented communities.</p>
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

export default AnkitGoelPage;



