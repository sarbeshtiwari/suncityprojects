'use client';

import Link from 'next/link';

function SubhashChanderAggarwalPage() {

	return (
		<div className="wrapper overflow-hidden">
			<div className="teamContainer">
				<div className="row g-0 h-100">
					<div className="col-lg-6 team-image" data-aos="fade-down"><img src="/images/leadership/mr-subhash-chander-aggarwal-director-big.webp" className="object-cover" alt="Mr. Subhash Chander Aggarwal" /></div>
					<div className="col-lg-6 teamTextContainer" data-aos="fade-up">
						<div className="inner h-100">
							<Link href="/about-us#team" className="closeBtn">Close [X]</Link>
							<div className="scroller">
								{/* <div className="team-title">Director</div> */}
								<div className="heading mx-auto text-center ms-lg-0 text-lg-start">
									<h2 className="title-xxl mb-0 text-primary">Mr. Subhash Chander Aggarwal</h2>
								</div>
								<p className="team-quote position-relative fs-4 fw-light"><i className="fa-solid fa-quote-left"></i> Our true strength comes from people, partners, and customers, building communities rooted in trust, togetherness, security, and shared celebrations of life.</p>
								<div className="team-details">
									<section>
										<div className="team-title">Education</div>
										<p className="fs-4 fw-light">Mr. Subhash Aggarwal holds a graduate degree in commerce and management, equipping him with strong business acumen and leadership expertise in real estate</p>
									</section>
									<section>
										<div className="team-title">Biography</div>
										<p>Mr. Subhash Aggarwal has played a key role in shaping Suncity Projects’ vision of building integrated communities that transcend mere structures. With a solid background in commerce and management, he has combined business expertise with a people-centric philosophy. His leadership is defined by fostering trust, cultivating long-term relationships, and ensuring that customers and partners alike feel valued.</p>
										<p>Mr. Aggarwal firmly believes that real estate is not just about constructing buildings, but about building bonds that make families feel connected, celebrated, and secure. Under his guidance, Suncity has flourished into a brand that stands for reliability, quality, and community living. His commitment to enriching lives continues to strengthen the company’s journey towards creating thriving, future-ready environments.</p>
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

export default SubhashChanderAggarwalPage;



