'use client';

import Link from "next/link";

export default function ConstructionUpdates() {
	return (
		<>
			<main>
				<div className="emptyBox"></div>

				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item active">Construction Updates</li>
						</ol>         
					</div>
				</div>

				<div className="w-100 padding position-relative bg-light cu-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Updates</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">Construction Updates</h2>
							<p className="mb-0">Stay Updated on Our Progress</p>
						</div>
						<div className="row g-4 justify-content-center mb-5" data-aos="fade-up">
							<div className="col-xxl-3 col-md-4 col-sm-4 col-6 logoBox">
								<Link href="/construction-updates/the-empire" className="inner">
									<div className="img-fluid"><img src="/images/logos/logo-the-empire-dark.png" alt="The Empire" /></div>
									<div className="facade-image">
										<img src="/images/project-thumbs/the-empire.webp" className="h-100 object-cover" alt="The Empire" />
									</div>
								</Link>
							</div>
							<div className="col-xxl-3 col-md-4 col-sm-4 col-6 logoBox">
								<Link href="/construction-updates/jewel-farms" className="inner">
									<div className="img-fluid"><img src="/images/logos/logo-jewel-farms-dark.png" alt="Jewel Farms" /></div>
									<div className="facade-image">
										<img src="/images/project-thumbs/jewel-farms.webp" className="h-100 object-cover" alt="Jewel Farms" />
									</div>
								</Link>
							</div>
							<div className="col-xxl-3 col-md-4 col-sm-4 col-6 logoBox">
								<Link href="/construction-updates/jewel-tower" className="inner">
									<div className="img-fluid"><img src="/images/logos/logo-jewel-tower-dark.png" alt="Jewel Tower" /></div>
									<div className="facade-image">
										<img src="/images/project-thumbs/jewel-tower.webp" className="h-100 object-cover" alt="Jewel Tower" />
									</div>
								</Link>
							</div>
							<div className="col-xxl-3 col-md-4 col-sm-4 col-6 logoBox">
								<Link href="/construction-updates/jewel-of-india-phase-2" className="inner">
									<div className="img-fluid"><img src="/images/logos/logo-jewel-of-india-dark.png" alt="Jewel Of India Phase-2" /></div>
									<div className="facade-image">
										<img src="/images/project-thumbs/joi-ph2.webp" className="h-100 object-cover" alt="Jewel Of India Phase-2" />
									</div>
								</Link>
							</div>
							<div className="col-xxl-3 col-md-4 col-sm-4 col-6 logoBox">
								<Link href="/construction-updates/suncity-ultima" className="inner">
									<div className="img-fluid"><img src="/images/logos/logo-ultima-dark.png" alt="Suncity Ultima" /></div>
									<div className="facade-image">
										<img src="/images/project-thumbs/suncity-ultima.webp" className="h-100 object-cover" alt="Suncity Ultima" />
									</div>
								</Link>
							</div>
							
						</div>
					</div>
				</div>
			</main>
		</>
	);
}