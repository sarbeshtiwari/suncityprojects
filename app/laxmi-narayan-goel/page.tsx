'use client';

import Link from 'next/link';

function LaxmiNarayanGoelPage() {
	return (
		<div className="wrapper overflow-hidden">
			<div className="teamContainer">
				<div className="row g-0 h-100">
					<div className="col-lg-6 team-image" data-aos="fade-down"><img src="/images/leadership/mr-ln-goel-chairman-big.webp" className="object-cover" alt="Mr. L.N. Goel" /></div>
					<div className="col-lg-6 teamTextContainer" data-aos="fade-up">
						<div className="inner h-100">
							<Link href="/about-us#team" className="closeBtn">Close [X]</Link>
							<div className="scroller">
								<div className="team-title">Chairman</div>
								<div className="heading mx-auto text-center ms-lg-0 text-lg-start">
									<h2 className="title-xxl mb-0 text-primary">Mr. L.N. Goel</h2>
								</div>
								<p className="team-quote position-relative fs-4 fw-light"><i className="fa-solid fa-quote-left"></i> My vision is to create communities that inspire growth, prosperity, and trust while driving real estate innovation with integrity and inclusivity.</p>
								<div className="team-details">
									<section>
										<div className="team-title">Education</div>
										<p className="fs-4 fw-light">Mr. Laxmi Narain Goel began his career in 1969 and, through entrepreneurial vision, business acumen, and lifelong learning, built a diversified legacy</p>
									</section>
									<section>
										<div className="team-title">Biography</div>
										<p>Shri Laxmi Narain Goel, Chairman of Suncity Projects (P) Limited, is one of the key architects behind the Group’s remarkable growth. Beginning his career in 1969 with agro commodities trading, he co-founded Rama Associates and later diversified into media, packaging, amusement parks, exports, and real estate. Under his visionary leadership, Suncity has developed over 20 million square feet of residential and commercial space, with an additional 30 million square feet under construction, encompassing pioneering townships, luxury apartments, malls, and office complexes.</p>
										<p>Beyond business, Mr. Goel is deeply engaged in philanthropy. He is a patron of Bharat Lok Shiksha Parishad and actively supports the Ekal Vidyalaya Foundation, impacting over 100,000 schools in rural India. He also heads Sewak Sabha Hospital, Hisar, while contributing to Agroha Vikas Trust and other social causes.</p>
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

export default LaxmiNarayanGoelPage;

