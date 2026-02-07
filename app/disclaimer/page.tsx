
import Link from 'next/link';

function DisclaimerPage() {

	return (
		<div className="wrapper">
			<div className="emptyBox"></div>

			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item active">Disclaimer</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding position-relative bg-light privacy-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
					<p className="hidden-title" data-position="left">Disclaimer</p>
				</div>
				<div className="container-lg">
					<div className="row justify-content-center">
						<div className="col-xl-9 about-text">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto text-center">
									<h2 className="title-xxl mb-0 text-primary">Disclaimer</h2>
								</div>
								<p>The artistic content featured on this website, including but not limited to 360-degree views, elevations, walkthroughs, e-brochures, and other similar materials, is provided for illustrative purposes only. These representations do not form part of any agreement and are not legally binding upon SUNCITY. Any views expressed therein are not reflective of the actual deliverables.</p>
								<p>All product designs, technologies, and features displayed or referenced on the website are intended solely for representation and promotional purposes. The company does not guarantee the inclusion or use of any such features in the final deliverables.</p>
								<p>Specifications provided are indicative and may be subject to modification or change at the discretion of the company or relevant authorities.</p>
								<p>The information provided on this website does not constitute a warranty, nor does it expand the scope of any warranty that cannot be disclaimed under applicable laws. The content on this site is intended for general informational purposes only, and no express or implied representations or warranties are made regarding its accuracy.</p>
								<p>Any interested parties are encouraged to independently verify all information, including but not limited to designs, plans, specifications, facilities, features, payment schedules, and terms of sale, directly with the Company before making any decisions related to purchasing a unit in any of the projects.</p>
								<p>While the Company takes reasonable care to ensure the information on the website is up-to-date, accurate, and correct, we recommend that users conduct their own inquiries with the Company before relying on any details provided. Nothing on this website should be construed as advertising, marketing, booking, selling, or an offer to sell or invite the purchase of a unit in any of the Company’s projects. The Company will not be held responsible for any actions taken by viewers who rely on the information presented here without independently verifying it with the Company.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DisclaimerPage;