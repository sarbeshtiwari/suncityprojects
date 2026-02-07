import Link from 'next/link';

function PrivacyPolicyPage() {

	return (
		<div className="wrapper">
			<div className="emptyBox"></div>

			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item active">Privacy Policy</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding position-relative bg-light privacy-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
					<p className="hidden-title" data-position="left">Privacy Policy</p>
				</div>
				<div className="container-lg">
					<div className="row justify-content-center">
						<div className="col-xl-9 about-text">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto text-center">
									<h2 className="title-xxl mb-0 text-primary">Privacy Policy</h2>
								</div>
								<p>SUNCITY is dedicated to safeguarding the privacy and integrity of the information provided by users on this site. We take appropriate steps to ensure that your personal details are protected from misuse, accidental loss, or unauthorized destruction within the SUNCITY environment. While we make every effort to provide accurate and up-to-date information on this site, SUNCITY is not liable for any loss or damage incurred by individuals relying on the content of this website.</p>
								<h4 className="fw-light text-primary mb-3 mt-5">Information Collection and Use</h4>
								<div className="listContainer mb-4">
									<ul className="list-unstyled">
										<li>We collect your personal information solely for the purpose of enhancing your experience on our site. By using this site, you consent to the collection and use of your data as outlined in this Privacy Policy.</li>
										<li>Personal information is collected when you submit an inquiry through our website or interact with our apps.</li>
										<li>While using our site, we may ask you for certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to, your name. By providing this information, you agree to be contacted by us.</li>
										<li>When you submit a form, we request your name, email address, phone number, and any details you include in your comments. After submission, the information is securely stored in our database and is not shared with any third parties.</li>
										<li>We use this information to respond to your inquiries, maintain records for future reference, and inform you about our products and services.</li>
										<li>Like many website operators, we collect information that your browser sends whenever you visit our site. This log data may include details such as your computer’s IP address, browser type, browser version, pages visited on our site, the time and date of your visit, the duration of your session, and other related statistics.</li>
										<li>We may also collect technical details such as your device information, location, and network carrier when you use our mobile app.</li>
									</ul>
								</div>
								<h4 className="fw-light text-primary mb-3 mt-5">Information Sharing and Disclosure</h4>
								<div className="listContainer mb-4">
									<ul className="list-unstyled">
										<li>We do not sell, rent, or share your personally identifiable information with third parties.</li>
										<li>We may disclose your personal information to other companies or individuals only in the following circumstances:
											<ul className="list-unstyled">
												<li>We have obtained your consent to share the information.</li>
												<li>If required by law, or if we believe that disclosure is necessary in good faith to respond to legal processes such as court orders, summons, or legal claims.</li>
												<li>To law enforcement agencies, third-party rights holders, or others when we believe the disclosure is necessary to: enforce our Privacy Policy and Terms of Service, respond to claims that content on our site violates third-party rights, or protect the safety, rights, or property of our users and the public.</li>
												<li>If your actions on our website violate our Terms of Service.</li>
											</ul>
										</li>
									</ul>
								</div>

								<h4 className="fw-light text-primary mb-3 mt-5">Intellectual Property</h4>
								<p>All content and design on this website, including images and logos, are the exclusive property of SUNCITY. You may not use, reproduce, or allow others to use or reproduce any of these materials without prior written consent from SUNCITY. Retrieval, display, reproduction, modification, or commercial use of the content on this website is strictly prohibited without permission.</p>

								<h4 className="fw-light text-primary mb-3 mt-5">Links to Other Websites</h4>
								<p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

								<h4 className="fw-light text-primary mb-3 mt-5">Changes to Privacy Policy</h4>
								<p>This Privacy Policy is subject to change. Any updates or modifications will be communicated on this page.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PrivacyPolicyPage;