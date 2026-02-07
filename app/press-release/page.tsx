import MediaNavigation from '@/components/MediaNavigation';
import Link from 'next/link';

export default function PressRelease() {
	return (
		<>
			<main>
				{/* Empty Box for spacing */}
				<div className="emptyBox"></div>

				{/* Breadcrumb */}
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item">Media</li>
							<li className="breadcrumb-item active">Press Release</li>
						</ol>         
					</div>
				</div>

				{/* Media Navigation */}
				<div className="bg-white">
					<MediaNavigation activePage="press-release" />
				</div>

				{/* Press Release Section */}
				<div className="w-100 padding position-relative bg-white news-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Press Release</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">Press Release</h2>
							<p>At <b>Suncity Projects Pvt. Ltd.</b>, every milestone is an opportunity to share our journey of growth, innovation and trust. Through official press releases, we bring forth timely updates on project launches, partnerships, community initiatives and achievements that strengthen our standing in the real estate sector.</p>
							<p>Our press communications highlight not only the <b>luxury and innovation</b> embedded in every project but also our commitment to <b>sustainability, customer satisfaction and community development</b>. Whether it is the unveiling of new residential and commercial landmarks, announcements on investments or recognition for excellence, our press releases serve as a window into our progressive vision.</p>
							<p className="mb-0">With each release, we aim to build transparency and trust among stakeholders, partners and customers. They stand as a testament to our values—delivering on promises, embracing new opportunities and continuing to create benchmarks in real estate development across India.</p>
						</div>
						<div className="award-slider" data-aos="fade-in" data-aos-delay="300">
							<div className="row g-4">
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="pdfs/TOI-18-08-2018.pdf" target="blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/TOI-18-08-2018-th.jpg" alt="Times Of India Press Release" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Times Of India (Suncity Anantam)</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="pdfs/Amar-Ujala-18-08-2018.pdf" target="blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/Amar-Ujala-18-08-2018-th.jpg" alt="Amar Ujala Press Release" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Amar Ujala (Suncity Anantam)</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="images/press-release/Amar-Ujala-F-05-11-2016-big.jpg" data-magnify="magnify" data-group="Press Release" data-caption="Amar Ujala Front Page (Suncity Anantam)">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/Amar-Ujala-F-05-11-2016-th.jpg" alt="Amar Ujala Front Page Press Release" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Amar Ujala Front Page (Suncity Anantam)</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="images/press-release/Amar-Ujala-B-05-11-2016-big.jpg" data-magnify="magnify" data-group="Press Release" data-caption="Amar Ujala Back Page (Suncity Anantam)">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/Amar-Ujala-B-05-11-2016-th.jpg" alt="Amar Ujala Press Release" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Amar Ujala Back Page (Suncity Anantam)</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="pdfs/Dainik-jagaran-Delhi15-nov.pdf" target="blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/Dainik-jagaran-Delhi15-nov-th.jpg" alt="Dainik Jagaran-Delhi (Suncity Anantam)" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Dainik Jagaran-Delhi (Suncity Anantam)</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="pdfs/pr-rohtak-pullout.pdf" target="blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/pr-rohtak-pullout-th.jpg" alt="Rohtak Pullout" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Rohtak Pullout</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card blog-card h-100 rounded-0 border-0">
										<a href="pdfs/pr-jhajjar-pullout.pdf" target="blank">
											<div className="blog-image position-relative overflow-hidden">
												<img src="/images/press-release/pr-jhajjar-pullout-th.jpg" alt="Jhajjar Pullout" className="card-img rounded-0" />
											</div>
											<div className="card-body">
												<h6 className="card-title fw-light text-primary mb-3">Jhajjar Pullout</h6>
												<div className="viewmore"><span className="button sm">Read More <i className="fa fa-arrow-up-right-from-square"></i></span></div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Press Contact Section */}
				<div className="w-100 padding position-relative bg-secondary news-section">
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary mb-0">Press Contact</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-5 col-sm-6">
								<div className="bg-light p-4">
									<h4 className="fw-light mb-3 text-primary">Rajeev Singh</h4>
									<ul className="address mt-4 list-unstyled">
										<li>
											<i className="fa fa-phone icon-circular"></i>
											<span><a href="tel:09654128152">+91 - 9654 128 152</a></span>
										</li>
										<li>
											<i className="fa fa-envelope icon-circular"></i>
											<span><a href="mailto:rajeevsingh@suncityprojects.com">rajeevsingh@suncityprojects.com</a></span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}