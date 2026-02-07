'use client';  


import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<main>
			{/* <AboutUsInit /> */}
			<div className="emptyBox"></div>
			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item active">About Us</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding position-relative about-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">Overview</p></div>
				<div className="container-lg">
					<div id="timeline" className="timeline" data-aos="fade-in">
						<video preload="auto" playsInline autoPlay loop muted poster="/images/timeline-thumb.webp" className="h-100 object-cover">
							<source src="/videos/suncity-projects-timeline.mp4" type="video/mp4" />
						</video>
					</div>
					<div id='overview' className="heading mx-auto pt-5 text-center" data-aos="fade-in">
						<h1 className="title-xxl mb-3 text-primary">Welcome to Suncity Projects</h1>
						<h2 className="h2 fw-lighter text-primary mb-0">Curating spaces for perfect wellbeing</h2>
					</div>
					<div className="row justify-content-between">
						<div className="col-lg-4">
							<div className="about-text text-center text-lg-justify" data-aos="fade-in">
								<p><span className="text-primary">Suncity Projects Pvt Ltd</span>, is a pioneer in creating exceptional real estate developments, ranging from townships and luxury apartments to shopping malls and office complexes. With a focus on innovative design, world-class construction standards, and strong community values, we take pride in fulfilling dreams while also creating lasting memories.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="about-text text-center text-lg-justify" data-aos="fade-in">
								<p>Driven by professionalism, quality, and creativity, we have successfully redefined benchmarks in the real estate industry. Every project by Suncity stands as a showpiece, reflecting meticulous planning, aesthetic brilliance, and excellence at par with the finest in the business.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="about-text text-center text-lg-justify" data-aos="fade-in">
								<p>At Suncity, we believe in building relationships based on trust and transparency. Our commitment to quality extends across every aspect — whether in construction, customer service, or corporate practices — supported by modern technology and disciplined work culture. This ethos continues to shape a better, more inspired world for our patrons and partners alike.</p>
							</div>
						</div>
						<div className="col-lg-12 statsContainer">
							<div className="inner" data-aos="fade-in">
								<div className="row g-4">
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span>20</span>+ Million Sq. Ft.</h2>
											<p className="mb-0">Of Timely Delivery</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span>14</span> Cities</h2>
											<p className="mb-0">Across India Imprints</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span>30</span>+ Years</h2>
											<p className="mb-0">Of Legacy</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span>40</span>+</h2>
											<p className="mb-0">Landmark Projects</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="mission-vision" className="w-100 padding position-relative bg-white philosophy-section">
				<div className="container-lg">
					<div className="row justify-content-between align-items-center">
						<div className="col-xl-4 col-lg-5">
							<div className="position-sticky">
								<div className="heading mb-lg-0 mx-auto ms-lg-0 text-center text-lg-start" data-aos="fade-in">
									<h2 className="title-xxl mb-0 text-primary">Our Mission</h2>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 d-none d-xl-flex align-items-center"><hr className="w-100 bg-primary" /></div>
						<div className="col-xl-5 col-lg-7 text-center text-lg-justify">
							<div className="text-area ps-lg-5" data-aos="fade-in">
								<article>
									<p className="mb-0">At Suncity Projects Pvt. Ltd., our mission is to enrich lives by creating world-class residential and commercial landmarks that redefine lifestyle standards while delivering exceptional value and enduring returns to our patrons.</p>
								</article>
							</div>
						</div>
					</div>
					<div className="my-5" style={{ borderTop: '1px dashed var(--secondary-color)' }}></div>
					<div className="row justify-content-between align-items-center">
						<div className="col-xl-4 col-lg-5">
							<div className="position-sticky">
								<div className="heading mb-lg-0 mx-auto ms-lg-0 text-center text-lg-start" data-aos="fade-in">
									<h2 className="title-xxl mb-0 text-primary">Our Vision</h2>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 d-none d-xl-flex align-items-center"><hr className="w-100 bg-primary" /></div>
						<div className="col-xl-5 col-lg-7 text-center text-lg-justify">
							<div className="text-area ps-lg-5" data-aos="fade-in">
								<article>
									<p className="mb-0">To craft pioneering real estate concepts across diverse business verticals, setting new benchmarks in professionalism, ethics, quality, and customer service within the industry. Each creation stands as a testament to elegance and innovation, transforming the very way we experience living.</p>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="board-of-directors" className="w-100 padding pb-4 position-relative bod-section bg-light">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">Directors</p></div>
				<div className="container-lg">
					<div className="heading mx-auto text-center">
						<h2 className="mb-0 title-xxl">Management Team</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-xxl-9">
							<div className="row justify-content-center gy-4">
								<div className="col-sm-6 col-xl-4 col-md-5 teamBox">
									<Link href="/laxmi-narayan-goel" className="inner d-block h-100 overflow-hidden position-relative">
										<div className="img-fluid"><img src="/images/leadership/mr-ln-goel-chairman.webp" className="h-100 object-cover" alt="Mr. L.N. Goel" /></div>
										<div className="team-content">
											<div className="name">
												<h5 className="fw-lighter">Mr. L.N. Goel</h5>
												<small className="fw-lighter text-uppercase">Chairman</small>
											</div>
											<i><img src="/images/icons/plus-icon.svg" alt="" /></i>
										</div>
									</Link>
								</div>
								<div className="col-sm-6 col-xl-4 col-md-5 teamBox">
									<Link href="/subhash-chander-aggarwal" className="inner d-block h-100 overflow-hidden position-relative">
										<div className="img-fluid"><img src="/images/leadership/mr-subhash-chander-aggarwal-director.webp" className="h-100 object-cover" alt="Mr. Subhash Chander Aggarwal" /></div>
										<div className="team-content">
											<div className="name">
												<h5 className="fw-lighter">Mr. Subhash Chander Aggarwal</h5>
												{/* <small className="fw-lighter text-uppercase">Director</small> */}
											</div>
											<i><img src="/images/icons/plus-icon.svg" alt="" /></i>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="team" className="w-100 padding pt-0 position-relative bg-light team-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="right">Management</p></div>
				<div className="container-lg">
					{/* <div className="heading mx-auto text-center">
						<h2 className="mb-0 title-xxl text-primary">Management Team</h2>
					</div> */}
					<div className="row justify-content-center">
						<div className="col-xxl-9">
							<div className="swiper team-slider">
								<div className="swiper-wrapper">																	
									<div className="swiper-slide teamBox">
										<Link href="/varun-aggarwal" className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/mr-varun-aggarwal-director.webp" className="h-100 object-cover" alt="Mr. Varun Aggarwal" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Varun Aggarwal</h5>
													{/* <small className="fw-lighter text-uppercase">Director</small> */}
												</div>
												<i><img src="/images/icons/plus-icon.svg" alt="" /></i>
											</div>
										</Link>
									</div>
									<div className="swiper-slide teamBox">
										<Link href="/arpit-goel" className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/mr-arpit-goel-director.webp" className="h-100 object-cover" alt="Mr. Arpit Goel" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Arpit Goel</h5>
													{/* <small className="fw-lighter text-uppercase">Director</small> */}
												</div>
												<i><img src="/images/icons/plus-icon.svg" alt="" /></i>
											</div>
										</Link>
									</div>
									<div className="swiper-slide teamBox">
										<Link href="/ankit-goel" className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/mr-ankit-goel-director.webp" className="h-100 object-cover" alt="Mr. Ankit Goel" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Ankit Goel</h5>
													{/* <small className="fw-lighter text-uppercase">Director</small> */}
												</div>
												<i><img src="/images/icons/plus-icon.svg" alt="" /></i>
											</div>
										</Link>
									</div>
								</div>
								<div className="swiper-button-prev bg-primary"></div>
								<div className="swiper-button-next bg-primary"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="leader" className="w-100 padding position-relative bg-white team-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">Leadership</p></div>
				<div className="container-lg">
					<div className="heading mx-auto text-center">
						<h2 className="mb-0 title-xxl text-primary">Leadership Team</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-xxl-9">
							<div className="swiper team-slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/sushil-kumar-gupta.webp" className="h-100 object-cover" alt="Sushil Kumar Gupta" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Sushil Kumar Gupta</h5>
													<small className="fw-lighter text-uppercase d-block">Head</small>
													<small className="fw-lighter text-uppercase">(Legal)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/rk-agarwal.webp" className="h-100 object-cover" alt="RK Agarwal" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. RK Agarwal</h5>
													<small className="fw-lighter text-uppercase d-block">Vice President</small>
													<small className="fw-lighter text-uppercase">(HR, Admin, IT & Maintenance)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/ashish-mittal.webp" className="h-100 object-cover" alt="Ashish Mittal" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Ashish Mittal</h5>
													<small className="fw-lighter text-uppercase d-block">Vice President</small>
													<small className="fw-lighter text-uppercase">(Marketing)</small>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/ashish-kumar-jain.webp" className="h-100 object-cover" alt="Ashish Kumar Jain" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Ashish Kumar Jain</h5>
													<small className="fw-lighter text-uppercase d-block">Vice President - Vrindavan</small>
													<small className="fw-lighter text-uppercase">(Projects - Civil)</small>
												</div>
											</div>
										</div>
									</div> */}
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/navneet-kumar.webp" className="h-100 object-cover" alt="Navneet Kumar" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Navneet Kumar</h5>
													<small className="fw-lighter text-uppercase d-block">Assistant Vice President</small>
													<small className="fw-lighter text-uppercase">(Business Development)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/ps-mathew.webp" className="h-100 object-cover" alt="PS Mathew" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. PS Mathew</h5>
													<small className="fw-lighter text-uppercase d-block">Assistant Vice President</small>
													<small className="fw-lighter text-uppercase">(Projects - E & S)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/prabhat-kumar-sah.webp" className="h-100 object-cover" alt="Prabhat Kumar Sah" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Prabhat Kumar Sah</h5>
													<small className="fw-lighter text-uppercase d-block">Assistant Vice President - Services (MEP)</small>
													<small className="fw-lighter text-uppercase">(Projects - E & S)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/anil-sharma.webp" className="h-100 object-cover" alt="Anil Sharma" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Anil Sharma</h5>
													<small className="fw-lighter text-uppercase d-block">General Manager</small>
													<small className="fw-lighter text-uppercase">(Purchase & Procurement)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/anil-gupta.webp" className="h-100 object-cover" alt="Anil Gupta" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Anil Gupta</h5>
													<small className="fw-lighter text-uppercase d-block">Head</small>
													<small className="fw-lighter text-uppercase">(Billing & Contracts)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/mihir-kumar-puraiyar.webp" className="h-100 object-cover" alt="Mr. Mihir Kumar Puraiyar" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Mihir Kumar Puraiyar</h5>
													<small className="fw-lighter text-uppercase d-block">General Manager</small>
													<small className="fw-lighter text-uppercase">(Secretarial)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/rajeev-singh.webp" className="h-100 object-cover" alt="Rajeev Singh" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Rajeev Singh</h5>
													<small className="fw-lighter text-uppercase d-block">Deputy General Manager</small>
													<small className="fw-lighter text-uppercase">(Brand Management)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/arihant-jain.webp" className="h-100 object-cover" alt="Arihant Jain" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Arihant Jain</h5>
													<small className="fw-lighter text-uppercase d-block">Deputy General Manager</small>
													<small className="fw-lighter text-uppercase">(Commercial Marketing & Leasing)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/ajit-singh.webp" className="h-100 object-cover" alt="Ajit Singh" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Ajit Singh</h5>
													<small className="fw-lighter text-uppercase d-block">Assistant General Manager</small>
													<small className="fw-lighter text-uppercase">(Club Operations)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/brij-kumar-srivastava.webp" className="h-100 object-cover" alt="Brij Kumar Srivastava" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. Brij Kumar Srivastava</h5>
													<small className="fw-lighter text-uppercase d-block">Assistant General Manager</small>
													<small className="fw-lighter text-uppercase">(Projects - Architect)</small>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide teamBox">
										<div className="inner d-block h-100 overflow-hidden position-relative">
											<div className="img-fluid"><img src="/images/leadership/yp-singh.webp" className="h-100 object-cover" alt="YP Singh" /></div>
											<div className="team-content">
												<div className="name">
													<h5 className="fw-lighter">Mr. YP Singh</h5>
													<small className="fw-lighter text-uppercase">IT - Consultant</small>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-button-prev bg-primary"></div>
								<div className="swiper-button-next bg-primary"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WhyChooseUs />

			<div id="csr" className="w-100 padding position-relative bg-light csr-section">
				<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}><p className="hidden-title" data-position="left">CSR</p></div>
				<div className="container-lg">
					<div className="row flex-row-reverse gy-5">
						<div className="col-xl-5 side-imgWrapper" data-aos="fade-in">
							<img src="/images/csr-image.jpg" className="h-100 object-cover" alt="" />
						</div>
						<div className="col-xl-7 about-text text-center text-xl-start">
							<div className="inner pe-xl-5" data-aos="fade-in">
								<div className="heading mx-auto text-center ms-xl-0 text-xl-start">
									<h2 className="title-xxl mb-0 text-primary">Corporate Social Responsibility</h2>
								</div>
								<p>At <span className="text-primary">Suncity Projects</span>, we believe that true progress extends beyond creating landmark developments—it lies in nurturing the communities we serve and safeguarding the environment we share. Our CSR philosophy is rooted in responsibility, compassion, and sustainability, ensuring that every step we take contributes positively to society.</p>
								<p>From adopting eco-conscious building practices and promoting green infrastructure to actively engaging in community welfare initiatives, we strive to build a future that is inclusive and resilient. Over the years, Suncity has invested in educational empowerment, healthcare support, and environmental preservation, creating meaningful impacts that go hand-in-hand with our vision of holistic growth.</p>
								<p>For us, CSR is not an obligation, but a commitment to shaping lives, fostering unity, and building a legacy of care and trust—a reflection of the values that define Suncity Projects.</p>
								<div className="project-icons justify-content-center justify-content-xl-start mt-5">
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/education.svg" alt="" /></div>
											<p className="mb-0">
												<span>Educational Empowerment</span>
											</p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/healthcare.svg" alt="" /></div>
											<p className="mb-0">
												<span>Healthcare Support</span>
											</p>
										</div>
									</div>
									<div className="icon-item">
										<div className="in align-items-center">
											<div className="icon"><img src="/images/icons/environment.svg" alt="" /></div>
											<p className="mb-0">
												<span>Environmental Preservation</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		</>
	);
}