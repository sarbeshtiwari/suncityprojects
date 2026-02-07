'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const categories = [
	{ id: 'group-housing', name: 'Group Housing', icon: 'fa-solid fa-building' },
	{ id: 'township', name: 'Township', icon: 'fa-solid fa-city' },
	{ id: 'commercial', name: 'Commercial', icon: 'fa-solid fa-industry' },
	{ id: 'retail', name: 'Retail', icon: 'fa-solid fa-bag-shopping' },
	{ id: 'education', name: 'Education', icon: 'fa-solid fa-school' }
];

interface Project {
	id: string | null;
	category: string | null;
	element: Element;
}

export default function DeliveredProjects() {
	const [selectedCategory, setSelectedCategory] = useState('group-housing');
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const initializeProjects = async () => {
			try {
				setLoading(true);
				setError(null);
				const projectElements = document.querySelectorAll('[data-project]');
				const projectData = Array.from(projectElements).map(element => ({
					id: element.getAttribute('data-project'),
					category: element.getAttribute('data-project'),
					element: element
				}));
				setProjects(projectData);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
				setError(errorMessage);
				console.error('Error initializing projects:', err);
			} finally {
				setLoading(false);
			}
		};

		initializeProjects();
	}, []);

	const handleCategoryClick = (categoryId: string) => {
		setSelectedCategory(categoryId);
	};

	const filteredProjects = projects.filter(project => 
		selectedCategory === 'all' || project.category === selectedCategory
	);

	useEffect(() => {
		const projectElements = document.querySelectorAll('[data-project]');
		
		projectElements.forEach(element => {
			const projectCategory = element.getAttribute('data-project');
			const htmlElement = element as HTMLElement;
			
			if (selectedCategory === 'all' || projectCategory === selectedCategory) {
				htmlElement.style.display = 'block';
				htmlElement.classList.remove('hidden');
			} else {
				htmlElement.style.display = 'none';
				htmlElement.classList.add('hidden');
			}
		});
	}, [selectedCategory]);

	return (
		<>
			{/* <style jsx>{`
				.btn.active {
					background-color: #007bff !important;
					color: white !important;
					border-color: #007bff !important;
				}
				.btn.active i {
					color: white !important;
				}
				.btn.active small {
					color: white !important;
				}
				.project-card {
					display: block;
				}
				.project-card.hidden {
					display: none;
				}
			`}</style> */}
			<main>
				<div className="emptyBox"></div>
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item"><Link href="/projects">Projects</Link></li>
							<li className="breadcrumb-item active">Delivered</li>
						</ol>
					</div>
				</div>

				<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
					<div className="container-lg">
						<div className="heading text-center mx-auto" data-aos="fade-in">
							<h1 className="title-xxl text-primary mb-0">Delivered Projects</h1>
						</div>

						<div className="page-sub-menu mb-5">
							<div className="row g-4 justify-content-center">
								{categories.map((category) => (
									<div key={category.id} className="col btns">
										<button 
											onClick={() => handleCategoryClick(category.id)}
											className={`inner btn w-100 rounded-0 d-flex flex-column align-items-center justify-content-center gap-3 text-center py-4 px-3 ${
												selectedCategory === category.id ? 'active' : ''
											}`}
										>
											<i className={category.icon}></i>
											<small className="text-uppercase ls-1">{category.name}</small>
										</button>
									</div>
								))}
							</div>
						</div>

						<div className="projectContainer" data-aos="fade-in">
							{loading && (
								<div className="text-center py-5">
									<div className="spinner-border text-primary" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
									<p className="mt-3">Loading projects...</p>
								</div>
							)}
							
							{error && (
								<div className="alert alert-danger text-center" role="alert">
									<h4 className="alert-heading">Error!</h4>
									<p>{error}</p>
									<hr />
									<p className="mb-0">Please try refreshing the page.</p>
								</div>
							)}
							
							{!loading && !error && (
							<div className="project-slider">
								<div className="row gy-5">									
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/jewel-farms.webp" alt="Jewel Farms" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Jewel Farms</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> 
															RAJ/P/2023/2897</p>
															<p>Redefining urban living with architectural excellence. Nestled in the heart of Jaipur on JLN Marg. The first time ever in Jaipur, a farm with a luxurious clubhouse. Swimming pool, restaurant, café, sauna and many more. Proximity to Jaipur Airport, Delhi/NCR, JLN Marg & other major Hotels.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Kukas, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2025</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>22.6 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/jewel-of-india.webp" alt="Jewel of India" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Jewel of India</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> RAJ/P/2017/244</p>
															<p>Two apartments per floor for privacy, lush garden views, natural light, cross ventilation, modular kitchens, European fittings & air-conditioning. 30,000 sq. ft. clubhouse with health club, spa, sauna, swimming pools, sports facilities, library, banquet hall and multi-cuisine dining. 24/7 retail with a supermarket, coffee shop, salon, ATM, bank, florist, chemist and dry-cleaning, plus ample parking with a two-level basement.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>JLN Marg, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2019</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>11.34 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/platinum-towers.webp" alt="Platinum Towers" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Platinum Towers</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> HARERA/GGM/2018/04</p>
															<p>3 BHK apartments, Club House with 12-foot ceilings, car washing, spa, gym, jogging track, & European fittings. 2 passenger and 1 service elevator per block, banquet hall, business center, restaurant and kids' play area. Apartments are well cross-ventilated, ensuring a comfortable and airy living environment.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 28, MG Road, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2023</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>5.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/suncity-township-gurgaon.webp" alt="Suncity Township Gurgaon" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Township Gurgaon</h2>
															</div>
															<p>A magnificently planned township that offers plots, built-up floors, apartments, penthouses, shops, etc. Exceptional amenities like a clubhouse, schools, a hospital, a shopping center, dispensary. Features such as drip irrigation and water harvesting systems, parks and jogging trails, wide roads, 100% power backup for group housing and commercial, ample parking space and round-the-clock security.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 54, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2005</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>140 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/la-lagune.webp" alt="La Lagune" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">La Lagune</h2>
															</div>
															<p>La Lagune is a high-end, gated residential project developed by Suncity Projects in partnership with ABW Group, positioned along Golf Course Road in Sector 54, Gurgaon. It features 11 towers (G+18 floors), housing approximately 314–318 spacious luxury units. Homes range from 4 BHK to 5 BHK and duplex penthouses, designed with premium finishes like imported marble, modular kitchens, and smart security systems. Thoughtfully landscaped around tranquil water bodies, the project offers a serene, upscale lifestyle combined with top-tier amenities.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 54, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2013</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>11.34 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/suncity-parikarma.webp" alt="Suncity Parikrama" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Parikrama</h2>
															</div>
															<p>Apartment Options: Choice of air-conditioned and non-airconditioned apartments (1850 & 2150 sq. ft). Club with swimming pool, squash and badminton courts, bar, health club, steam, sauna and more. On-site primary and play schools, along with convenience stores.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 20, Panchkula</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2016</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>27 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/essel-tower.webp" alt="Essel Towers" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Essel Towers</h2>
															</div>
															<p>Two apartments per floor for privacy, lush garden views, natural light, cross ventilation, modular kitchens, European fittings, & air-conditioning. 30,000 sq. ft. clubhouse with health club, spa, sauna, swimming pools, sports facilities, library, banquet hall and multi-cuisine dining. 24/7 retail with a supermarket, coffee shop, salon, ATM, bank, florist, chemist and dry-cleaning, plus ample parking with a two-level basement.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 28, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2002</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>34 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/suncity-vatsal-valley.webp" alt="Suncity Vatsal Valley" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Vatsal Valley</h2>
															</div>
															<p>2 & 3 BHK Independent Premium Floors with stilt car parking and an elegant entrance lobby. Close to Golf Course, Suncity School (Golf Course Road), & MG Road, Gurugram, with easy access to the Delhi Border. Nearby IBM, TCS, Mercer, Ericsson Campus, National Institute of Solar Energy and BHEL Campus.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 02, Gwal Pahari, Gurugram</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2024</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>9.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Residential</span>
														<img src="/images/project-thumbs/delivered/suncity-anantam.webp" alt="Suncity Anantam" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Suncity Anantam</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> UPRERAPRJ704813, UPRERAPRJ975804, UPRERAPRJ734 (Sector 3), UPRERAPRJ541853 (Sector 2), UPRERAPRJ277104 (Anantam Kunj - EWS/LIG)</p>
															<p>Gated community with boundary walls, main gate and CCTV surveillance. Spaces for health, shopping, schools, a world-class clubhouse and essential services like ATMs, banks and fire stations. Advanced drainage, sewage systems and a facilitation cell for home design.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>NH-2, Vrindavan, Mathura</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2024</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>281 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/business-tower.webp" alt="Suncity Business Tower" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading">
																<h2 className="h2 fw-light text-primary ">Suncity Business Tower</h2>
															</div>
															<p>Situated on a 60-meter-wide road with a 160-meter (525-feet) frontage and imposing architecture. Multi-restaurant hub, advanced electrical fixtures and high-tech security systems. Three-level basement parking and landscaping by renowned architects.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 54, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2010</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>3.5 Lac sq. ft.</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/time-tower.webp" alt="Time Tower" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading">
																<h2 className="h2 fw-light text-primary">Time Tower</h2>
															</div>
															<p>Three-level basement parking, large floor plates (25,000–60,000 sq. ft.) and wide grids. High-end gym, health club, specialty restaurant and a 5,500 sq. ft. atrium. Over one acre of landscaping with terraces and landscaped views for most offices.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sector 28, MG Road, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2011</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>4 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/suncity-success-tower.webp" alt="Suncity Success Tower" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading">
																<h2 className="h2 fw-light text-primary">Suncity Success Tower</h2>
															</div>
															<p>Approx. 270 meters (885 feet) frontage with imposing architecture and façade. Centrally air-conditioned, modern high-speed elevators and 100% power backup. Ample parking across three basements, floor plates of 50,000–80,000 sq. ft., advanced landscaping and high-tech security with surveillance cameras and explosive detectors.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 65, Gurugram</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2015</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>4.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/vasant-square-mall.webp" alt="Vasant Square Mall" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading ">
																<h2 className="h2 fw-light text-primary">Vasant Square Mall</h2>
															</div>
															<p>Multi-cuisine restaurants and an open amphitheater with a 1,300-person capacity. Glass capsule lifts, an Integrated Building Management System and three-level parking for over 700 vehicles. Water bodies and beautifully landscaped surroundings for a refreshing atmosphere. </p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Vasant Kunj, New Delhi</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2008</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>6.4 Lac Sq. Ft.</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
                                    <div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/horizon-tower.webp" alt="Horizon Tower" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Horizon Tower</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i>
															 RAJ/P/2017/564</p>
															<p>A new world of luxury has taken shape. Attracting the finest and the most well-profiled to come and stay. This is the Jewel of India...exclusively crafted for the uber-rich. And here, right within the Jewel of India, is ensconced - The Horizon
															A hotbed of opulent opportunities, it is a super-premium showroom cum office complex. The 15 ultra-premium showrooms are ideal for top-end, luxury brands across genres. Complementing the project mix, there’s a super-modern, aesthetic space for top-end Offices and high-street retail.
															</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>JLN Marg, Jaypur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2022</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>2.9 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Township</span>
														<img src="/images/project-thumbs/delivered/suncity-township-vistara.webp" alt="Suncity Vistara" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Vistara</h2>
															</div>
															<p>Suncity Vistara is a master-planned, integrated township located along the AB Bypass (NH-3) on the Agra-Mumbai highway in Indore, offering a blend of independent plots (2,153–11,000 sq ft), designer villas, and smart mid-rise housing (Vistara Emerald). Developed through collaboration between Suncity Projects, Dhoot Developers, and Landmark Holdings Group, the township includes dedicated zones for commercial spaces, educational facilities, medical centers, and leisure. It promises a holistic, metropolitan lifestyle through sustainable design, premium amenities, and strategic connectivity.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Indore Bypass Road, Indore</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2010</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>200 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Group Housing</span>
														<img src="/images/project-thumbs/delivered/suncity-avenue-102.webp" alt="Suncity Avenue 102" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Suncity Avenue 102</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> 91 OF 2017 DATED 24.08.2017</p>
															<p>Near NPR (Dwarka Expressway), future metro link and 10 km from Delhi/NH-8, with access to 250 feet and 80 feet wide Sector 76 road. 70% open space with a central green area, ensuring a serene environment. Includes a commercial shopping center, community hall and Anganwadi/Creche within the campus.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 102, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2019</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="group-housing">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Group Housing</span>
														<img src="/images/project-thumbs/delivered/suncity-avenue-76.webp" alt="Suncity Avenue 76"/>
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-0">Suncity Avenue 76</h2>
															</div>
															<p className="text-primary d-flex align-items-center gap-2 mt-3"><i className="fa fa-shield-halved"></i> HARERA/GGM/384/116/2019/78</p>
															<p>The development consists of 12 towers housing a total of 1,464 flats, offering a large residential community. 2 minutes from NH 08 and Haldiram, 15 minutes from shopping malls and hospitals. Just 30 minutes from the airport.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 76, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2024</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>10 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="retail">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Retail</span>
														<img src="/images/project-thumbs/delivered/crossriver-mall.webp" alt="Cross River Mall" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading">
																<h2 className="h2 fw-light text-primary">Cross River Mall</h2>
															</div>
															<p>The longest mall in Delhi with a 2,323 sq. ft. atrium and a 25,000 sq. ft. food court. Four-screen multiplex by Fun Republic with 1,291 seats & two-level basement parking for over 700 vehicles. Integrated building management systems, modern elevators and escalators for smooth operations.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Vishwas Nagar, Shahdara, Delhi</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2006</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>0.3 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="retail">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Retail</span>
														<img src="/images/project-thumbs/delivered/triton-mall.webp" alt="Triton Mall" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading">
																<h2 className="h2 fw-light text-primary">Triton Mall</h2>
															</div>
															<p>Retail spaces (500–10,000 sq. ft.) and a 50,000 sq. ft. hypermarket. Heritage Bazaar with 165 shops and a 13-counter food court (13,000 sq. ft.). Entertainment zone with gaming, bowling and a 4-screen Cinepolis multiplex with 959 seats.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Jhotwara Road, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2008</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>3.77 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Township</span>
														<img src="/images/project-thumbs/delivered/suncity-township-jaipur.webp" alt="Suncity Township Jaipur" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Township Jaipur</h2>
															</div>
															<p>Play area, landscaped parks with walking trails, retail spaces, a world-class school and a proposed hospital. Wide, tree-lined, well-lit roads with ample power, water supply and easy access. Rainwater harvesting, hi-tech security and a clubhouse with modern amenities for residents.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sikar Road, Jaipur</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2012</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>400 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="commercial">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Commercial</span>
														<img src="/images/project-thumbs/delivered/suncity-trade-tower.webp" alt="Suncity Trade Tower" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Trade Tower</h2>
															</div>
															<p>Situated on a 60-meter-wide Gurgaon road with a 70-meter (230 ft) frontage and imposing architecture. Large lobby with high-speed lifts, floor plates of 28,000–36,000 sq. ft. and office spaces of 1,500–3,000 sq. ft. Ample parking, beautiful landscaping, 100% power backup and an Integrated Security Management System with surveillance cameras.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 21, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2012</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>2.2 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Township</span>
														<img src="/images/project-thumbs/delivered/suncity-township-rohtak.webp" alt="Suncity Township Rohtak" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Township Rohtak</h2>
															</div>
															<p>46 km from the Delhi border, 1.5 km from NH-10, located in sectors 34-36A with excellent railway access. Commercial mall with multiplex, top education and healthcare and hi-tech security. Wide, tree-lined roads, ample power and water supply for smooth living.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 34, 35, 36, Rohtak, Haryana</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>Na</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>365.4 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Township</span>
														<img src="/images/project-thumbs/delivered/suncity-township-kaithal.webp" alt="Suncity Township Kaithal" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Township Kaithal</h2>
															</div>
															<p>Landscaped greens, 12m wide roads, hi-tech telecom network and commercial spaces for retail and businesses. Multi-cuisine restaurants, schools, nursing homes, banks, post offices and other essential community facilities. Hi-tech security, ample power and a reliable water supply ensure a safe and seamless living experience.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Kaithal, Haryana</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>Na</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>100 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="township">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Township</span>
														<img src="/images/project-thumbs/delivered/suncity-township-rewari.webp" alt="Suncity Township Rewari" />
													</div>
												</div>
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-0">
																<h2 className="h2 fw-light text-primary mb-3">Suncity Township Rewari</h2>
															</div>
															<p>Features modern facilities, landscaped gardens, kids' play area, wide, tree-lined and well-lit roads. Ample power and water supply, hi-tech security and close proximity to the new bus stand. Access to the finest education and healthcare facilities for a well-rounded lifestyle.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sec 6, Rewari</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2019</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>135 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="education">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Education</span>
														<img src="/images/project-thumbs/education-projects/school-building-54&ia.jpg" alt="Suncity School" />
													</div>
												</div> 
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Suncity School 54</h2>
															</div>
															<p>Suncity School in Sector 54 is a premier co-educational institution offering multiple curricula—CBSE, CAIE (Cambridge), and IBDP. It is primarily a day-school setup, with a day-boarding option for elementary learners. The focus is on academic excellence, holistic development, and value-based education embedded in ‘Sanskaars’—a set of timeless ethical principles guiding character formation. With a favorable student-teacher ratio (about 10:1), it emphasizes personalized attention, creative learning, and building confident, future-ready individuals. </p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sector 54, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2005</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>5.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hm-featured-slide delivered-slide" data-project="education">
										<div className="inner">
											<div className="row h-100 flex-column">
												<div className="hm-featured-slide-img col-md-12 col-12">
													<div className="img-fluid overflow-hidden position-relative">
														<span className="badge bg-white rounded-pill position-absolute start-0 top-0 m-3 text-dark fw-normal">Education</span>
														<img src="/images/project-thumbs/education-projects/suncity-school-45.webp" alt="Suncity School" />
													</div>
												</div> 
												<div className="hm-featured-slide-text-container col-md-12 col-12 flex-grow-1">
													<div className="hm-featured-slide-text">
														<div className="project-text">
															<div className="featured-box-heading mb-3">
																<h2 className="h2 fw-light text-primary mb-0">Suncity School 45</h2>
															</div>
															<p>Nestled within Greenwood City, Suncity School in Sector 45 is part of a trusted legacy of Suncity educational institutions. The school emphasizes holistic development, progressive teaching methodologies, and ‘Sanskaars’—value-based education. With a favorable student-teacher ratio (10:1) and small class sizes (~28 students), it fosters personalized attention. Infrastructure includes ergonomic classrooms, labs, libraries, a refectory, an infirmary, and secure transport facilities.</p>
														</div>
														<div className="project-icons">
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Location</small>
																		<span>Sector 45, Gurgaon</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/construction-completed.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Completed In</small>
																		<span>2018</span>
																	</p>
																</div>
															</div>
															<div className="icon-item">
																<div className="in">
																	<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																	<p className="mb-0">
																		<small className="d-block">Area</small>
																		<span>1.5 Acres</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}