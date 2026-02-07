'use client';

import { useRef, useState, useEffect } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import SwiperInit from '../components/SwiperInit';
import PropertySearch from '../components/PropertySearch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import HomeBlogs from '@/components/home-blogs';
import TestimonialVideoModal from '@/components/TestimonialVideoModal';
import ScriptReinitializer from '@/components/ScriptReinitializer';

interface Project {
  _id: string;
  projectName: string;
  slug: string;
  category: string;
  reraNumber: string;
  shortDescription: string;
  projectLocation: string | {
    _id: string;
    name: string;
    city: string;
  };
  status: string;
  area: string;
  projectThumbnail: string;
  locationAltText: string;
}

export default function HomeClient() {
  const [counters, setCounters] = useState({
    sqft: 0,
    cities: 0,
    years: 0,
    projects: 0
  });
  const [isCountersVisible, setIsCountersVisible] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects/home');
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'residential':
        return 'bg-white text-dark';
      case 'commercial':
        return 'bg-white text-dark';
      case 'retail':
        return 'bg-white text-dark';
      case 'education':
        return 'bg-white text-dark';
      case 'delivered':
        return 'bg-white text-dark';
      default:
        return 'bg-white text-dark';
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'text-primary';
      case 'completed':
        return 'text-primary';
      case 'delivered':
        return 'text-secondary';
      default:
        return 'text-muted';
    }
  };

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCountersVisible) {
            setIsCountersVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isCountersVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const finalValues = { sqft: 20, cities: 14, years: 30, projects: 40 };
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        sqft: Math.floor(finalValues.sqft * progress),
        cities: Math.floor(finalValues.cities * progress),
        years: Math.floor(finalValues.years * progress),
        projects: Math.floor(finalValues.projects * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);
  };

  const handleScrollDown = () => {
    const element = document.querySelector('.scrollto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
		<>
			<div className="banner w-100">
				<video preload="auto" playsInline autoPlay loop muted poster="/images/video-thumbs/homeBanner.png" className="hero-video h-100 object-cover">
						<source src="https://suncity-projects.s3.eu-north-1.amazonaws.com/home/mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
						<source src="https://suncity-projects.s3.eu-north-1.amazonaws.com/home/tab.mp4" type="video/mp4" media="(min-width: 768px) and (max-width: 1024px)" />
						<source src="https://suncity-projects.s3.eu-north-1.amazonaws.com/home/banner.mp4" type="video/mp4" media="(min-width: 1025px)" />
					</video>

				<div className="scrollDown" onClick={handleScrollDown} style={{ cursor: 'pointer' }}>
					<img src="/images/scroll-down-mouse.gif" alt="Scroll Down Mouse" title="Scroll Down" />
				</div>
			</div>

			<div className="w-100 scrollto padding overflow-hidden position-relative hm-overview-container animate-section1">
				<div className="container-lg">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="heading mx-auto" data-aos="fade-in">
								<h1 className="title-xxl mb-3 text-primary">Welcome to Suncity Projects</h1>
								<h2 className="h2 fw-lighter text-primary mb-0">Curating spaces for perfect wellbeing</h2>
							</div>
							<div className="hm-overview-text pe-lg-5" data-aos="fade-in">
								<p>Suncity Projects is one of the most eminent real estate companies in North India. The Group has built an unshakable reputation for quality, efficiency, trust and meticulous planning. Suncity Projects in North India are famous for offering top-quality amenities, superlative designs, timely completion, guaranteed possessions and handing over of projects ranging from Townships to Group Housing to Luxury Apartments. In Corporate and Retail space Suncity Projects offers shopping malls to Office Complexes.</p>
								<div className="viewmore"><Link href="/about-us" className="button mx-auto">Read More</Link></div>
							</div>
						</div>
						<div className="col-lg-12 statsContainer" ref={statsRef}>
							<div className="inner" data-aos="fade-in">
								<div className="row g-4">
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span className="counter">{counters.sqft}</span>+ Million Sq. Ft.</h2>
											<p className="mb-0">Of Timely Delivery</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span className="counter">{counters.cities}</span> Cities</h2>
											<p className="mb-0">Across India Imprints</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span className="counter">{counters.years}</span>+ Years</h2>
											<p className="mb-0">Of Legacy</p>
										</div>
									</div>
									<div className="col-md-3 col-6 statsBox">
										<div className="inner">
											<h2><span className="counter">{counters.projects}</span>+</h2>
											<p className="mb-0">Landmark Projects</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
				<div className="container-lg">
					<PropertySearch placeholder="Project Name/ Location" showTrendingProperties={true} />

					<div className="heading text-center mx-auto" data-aos="fade-in">
						<h2 className="h2 fw-light text-primary mb-0">Featured Projects</h2>
					</div>
					<div className="projectContainer" data-aos="fade-in">
						{loading ? 
						(
							<div className="text-center py-5">
								<div className="spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
								<p className="mt-3">Loading projects...</p>
							</div>
						) : projects.length === 0 ? (
							<div className="text-center py-5">
								<div className="alert alert-info" role="alert">
									<h4 className="alert-heading">No Projects Found</h4>
									<p>There are no projects available at the moment.</p>
								</div>
							</div>
						) : (
							<Swiper
								modules={[Navigation]}
								spaceBetween={10}
								slidesPerView={1}
								speed={2000}
								navigation={{
									nextEl: '.projects-next',
									prevEl: '.projects-prev',
								}}
								className="project-slider"
							>
								{projects.map((project, index) => (
									<SwiperSlide key={project._id} className="hm-featured-slide">
										<Link href={`/projects/${project.slug}`} className="inner" >
											<div className="row h-100 g-0 justify-content-center">
													<div className="hm-featured-slide-img col-xxl-7 col-md-6 col-12">
														<div className="img-fluid h-100 overflow-hidden position-relative">
															<span className={`badge ${getCategoryBadgeClass(project.category)} rounded-pill position-absolute start-0 top-0 m-3 fw-normal`}>
																{project.category.toUpperCase()}
															</span>
															<img 
																src={project.projectThumbnail || "/images/project-thumbs/default.webp"}  
																alt={project.locationAltText || project.projectName} 
																className="h-100 object-cover" 
															/>
														</div>
													</div>
													<div className="hm-featured-slide-text-container col-xxl-5 col-md-6 col-12">
														<div className="hm-featured-slide-text">
															<div className="project-text">
																<div className="featured-box-heading mb-3">
																	<h2 className="h2 fw-light text-primary mb-0">{project.projectName}</h2>
																</div>
																<p className="text-primary d-flex align-items-center flex-wrap gap-2">
																	<i className="fa fa-shield-halved"></i> {project.reraNumber}
																</p>
																<p className="d-block">{project.shortDescription}</p>
																<div className="icon-button">
																	<div className="round-button">
																		<div className="circle"></div><i className="fa fa-chevron-right"></i>
																	</div> LEARN MORE
																</div>
															</div>
															<div className="project-icons">
																<div className="icon-item">
																	<div className="in">
																		<div className="icon"><img src="/images/icons/location.svg" alt="" /></div>
																		<p className="mb-0">
																			<small className="d-block">Location</small>
																			<span>
																				{typeof project.projectLocation === 'string' 
																					? project.projectLocation 
																					: `${project.projectLocation?.name || 'Location'}, ${project.projectLocation?.city || ''}`
																				}
																			</span>
																		</p>
																	</div>
																</div>
																<div className="icon-item">
																	<div className="in">
																		<div className="icon"><img src="/images/icons/project-status.svg" alt="" /></div>
																		<p className="mb-0">
																			<small className="d-block">Status</small>
																			<span className={getStatusBadgeClass(project.status)}>{project.status}</span>
																		</p>
																	</div>
																</div>
																<div className="icon-item">
																	<div className="in">
																		<div className="icon"><img src="/images/icons/area.svg" alt="" /></div>
																		<p className="mb-0">
																			<small className="d-block">Area</small>
																			<span>{project.area}</span>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Link>
										</SwiperSlide>
									))}
									<div className="bottomControls">
										<div className="swiper-button-prev projects-prev"></div>
										<div className="viewmore mt-0"><Link href="/projects" className="button">View All Projects</Link></div>
										<div className="swiper-button-next projects-next"></div>
									</div>
								</Swiper>
						)}
					</div>
				</div>
			</div>

			<WhyChooseUs />
			<SwiperInit />

			{/* Stories of Happiness Section */}
			<div className="w-100 position-relative padding overflow-hidden bg-light section-testimonials" style={{ minHeight: '600px' }}>
				<div className="container-lg">
					<div className="heading mx-auto text-center d-lg-none" data-aos="fade-in">
						<h2 className="h2 fw-light text-primary mb-0">Stories of Happiness</h2>
					</div>
					<div className="swiper project-slider" data-aos="fade-in">
						<div className="swiper-wrapper">
							<div className="swiper-slide testimonial-slide">
								<div className="testimGrid">
										<div className="testimBox1 testimBox">
											<div className="testim-image h-100"><img src="/images/testimonials/alpesh.png" className="h-100 object-cover" alt="" /></div>
											<div className="testimonial-box h-100">
												<div className="inner scroller">
													<p className="mb-0">The location of the tower is wonderful, the proximity to the airport, the proximity to all the commercial landscapes is phenomenal here. It is one of the best-looking towers in the entire city. I am very-very impressed with the quality of construction.</p>
													<div className="testimonial-info">
														<span>Mr. Alpesh Rawat</span><small>Office - Horizon Tower, Jaipur</small>
													</div>
												
												</div>
											</div>
										</div>

									
									<div className="testimBox2 testimBox">
										<button className="border-0 text-start p-0 h-100 videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/ashima.mp4" data-bs-source="Mrs. Ashima">
											<div className="testim-image h-100">
												<img src="/images/testimonials/ashima.png" className="h-100 object-cover" alt="" />	
												<div className="videoBtn"><i className="fa fa-play"></i></div>
											</div>
											<div className="testimonial-box h-100">
												<div className="inner scroller">
													<div className="icon-button spin mt-0 mb-3 text-uppercase">
														<div className="round-button">
															<div className="circle"></div>
															<i className="fa fa-play"></i>
														</div> 
														Click to Listen
													</div>
													<p className="mb-0">The impeccable standard of living, the world-class infrastructure, mesmerizing lounge, everything is so well-maintained in Suncity, that we ultimately decided to buy a flat here that turned out to be our home. Fortunately, the staff here is excellent & courteous.</p>
													<div className="testimonial-info">
														<span>Mrs. Ashima</span><small>Resident - Parikrama, Panchkula</small>
													</div>
												</div>
											</div>
										</button>
									</div>
									<div className="testimBox3 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/khwhish.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">It is a dream come true to live in Suncity. It is a perfect place to live your whole dream. Suncity has each & every facility you just name it. Be it restaurants, be it green belt, small food joints, it has everything within.</p>
												<div className="testimonial-info">
													<span>Ms. Khwahish Chawla</span><small>Resident - Parikrama, Panchkula</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox4 testimBox">
										<button className="border-0 text-start p-0 h-100 videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/rishabh-jain.mp4" data-bs-source="Mr. Rishabh Jain">
											<div className="testim-image h-100">
												<img src="/images/testimonials/rishabh.png" className="h-100 object-cover" alt="" />
												<div className="videoBtn"><i className="fa fa-play"></i></div>
											</div>
											<div className="testimonial-box h-100">
												<div className="inner scroller">
													<div className="icon-button spin mt-0 mb-3 text-uppercase">
														<div className="round-button">
															<div className="circle"></div>
															<i className="fa fa-play"></i>
														</div> 
														Click to Listen
													</div>
													<p className="mb-0">I have been consistently impressed with the professionalism and the dedication demonstrated by the management team. The commitment to maintain the highest standard of services has truly set Horizon Tower apart from any other commercial property in Jaipur.</p>
													<div className="testimonial-info">
														<span>Mr. Rishabh Jain</span><small>Office - Horizon Tower, Jaipur</small>
													</div>
												</div>
											</div>
										</button>
									</div>
									<div className="testimBox5 testimBox">
										<button className="border-0 text-start p-0 h-100 w-100 videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/sejal-dokania-&-mrs-manisha-dokania.mp4" data-bs-source="Mrs. Sejal Dokania and Mrs. Manisha Dokania">
											<div className="testim-image h-100">
												<img src="/images/testimonials/sejal-manisha.jpg" className="h-100 object-cover" alt="" />
												<div className="videoBtn"><i className="fa fa-play"></i></div>
											</div>
											<div className="testimonial-box h-100">
												<div className="inner scroller">
													<div className="icon-button spin mt-0 mb-3 text-uppercase">
														<div className="round-button">
															<div className="circle"></div>
															<i className="fa fa-play"></i>
														</div> 
														Click to Listen
													</div>
													<p className="mb-0">We love the feature of massage room, it's good. We have used every feature be it library, cafe, pool and sauna everything and we enjoy each and every part of it. It's very beautiful and tidy. There is a word called elite, I call it elite.</p>
													<div className="testimonial-info">
														<span>Mrs. Sejal Dokania and Mrs. Manisha Dokania</span><small>Resident - Jewel Of India, Jaipur</small>
													</div>
												</div>
											</div>
										</button>
									</div>
									<div className="testimBox6 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/sushil-soni.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">Horizon Tower is a commercial paradise, right from planning to execution and the maintenance provided then after. We got what we were committed to. Everything here is very good and fabulous.</p>
												<div className="testimonial-info">
													<span>Mr. Sushil Soni</span><small>Office - Horizon Tower, Jaipur</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox7 testimBox">
										<button className="border-0 text-start p-0 h-100 w-100 videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/savitri-wadhwani.mp4" data-bs-source="Mrs. Savitri Wadhwani">
											<div className="testim-image h-100">
												<img src="/images/testimonials/savitri.jpg" className="h-100 object-cover" alt="" />
												<div className="videoBtn"><i className="fa fa-play"></i></div>
											</div>
											<div className="testimonial-box h-100">
												<div className="inner scroller">
													<div className="icon-button spin mt-0 mb-3 text-uppercase">
														<div className="round-button">
															<div className="circle"></div>
															<i className="fa fa-play"></i>
														</div> 
														Click to Listen
													</div>
													<p className="mb-0">Jewel of India is one of the best project in Jaipur. After moved to JOI, I am having a peaceful life because of the surroundings, safety, greenery and the environment. I feel very good at JOI and the kind of Experience I am having now, I will definitely recommend in our friends and relatives.</p>
													<div className="testimonial-info">
														<span>Mrs. Savitri Wadhwani</span><small>Resident - Jewel Of India, Jaipur</small>
													</div>
												</div>
											</div>
										</button>
									</div>
									<div className="testimBox8 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/nihal-singh.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">Yahan pe Bihari ji ka mandir, Prem mandir bohat pass mein hi hain. 2 minute main koi bhi gaadi se pohach jata hai. Security aur maintenance sab bohat acha hai yahan pe.</p>
												<div className="testimonial-info">
													<span>Mr. Nihal Singh</span><small>Resident - Suncity Anantam</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox9 testimBox d-flex align-items-center justify-content-center">
										<div className="heading mb-0 mx-auto text-center" data-aos="fade-in">
											<h2 className="h2 fw-lighter text-primary mb-0">Stories of Happiness</h2>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide testimonial-slide">
								<div className="testimGrid">
									<div className="testimBox1 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/madhubala-chaudhary.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">Mujhe koi bhi security ka issue nahi yahan pe sabse Vrindavan mein best society main aata hai Suncity Anantam. Sab kuch aas pass hai yahan se pure Vrindavan mein.</p>
												<div className="testimonial-info">
													<span>Mrs. Madhubala Chaudhary</span><small>Resident - Suncity Anantam</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox2 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/a-k-aggarwal.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">We are into manufacturing business and we shifted here 25 years back. As per the Horizon Tower is concerned, it is situated at the best locations of Jaipur. There is no other better place than this. Excellent location and I am satisfied!</p>
												<div className="testimonial-info">
													<span>Mr. A K Aggarwal</span><small>Office - Horizon Tower</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox3 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/alok-bhandari.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">The team of Suncity is very good beside from it, the architecture is very well planned, it is fully ventilated and not at all congested. There are tower executive in each tower lobby, who are always ready to help. The security is very good, for once even if your door remains open, upon feel safe and secured.</p>
												<div className="testimonial-info">
													<span>Mr. Alok Bhandari</span><small>Resident - Parikrama, Panchkula</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox4 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/ajit-saxena.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">I have moved in this flat on 24th of November and we are enjoying our stay in our newly built up home, our sweet home. - The ambience here is perfect. - And the morning walk which I was thinking I would miss here, is continuing because there were lot of, it has got lot of space in a beautiful lush green garden between the towers.</p>
												<div className="testimonial-info">
													<span>Mr. Ajit Saxena</span><small>Resident - Parikrama, Panchkula</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox5 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/prem-singh-verma.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">Construction quality, overall, the designs, the area, the locality, you can say, overall, we find here. It is kids friendly. Raat ko 10 baje bhi bache hamare campus ke andar khelte hain to no issues aaj tak koi aisa incident nahi hai. Because security wise I found it most safe because lift ke andar camera laga hai.</p>
												<div className="testimonial-info">
													<span>Mr. Prem Singh Verma</span><small>Resident - Parikrama, Panchkula</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox6 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/aashray-arora.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">There are a lot of amenities like badminton and table tennis and play area for my children, for my daughters and there's also a small park where they can play and enjoy. So there's certainly the feel of safety when you're residing here. So I would definitely recommend 100 on 100 for Platinum Towers.</p>
												<div className="testimonial-info">
													<span>Mr. Aashray Arora</span><small>Resident - Platinum Towers</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox7 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/ak-puri.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">Bar and the restaurant coming in, I think it will be an ideal place to live and stay. I will always recommend and strongly recommend to all my friends and relatives if they can and if they want to shift to Gurgaon and in the heart of the city, this is an ideal place.</p>
												<div className="testimonial-info">
													<span>Mr. AK PURI</span><small>Resident - Platinum Towers</small>
												</div>
											</div>
										</div>
									</div>
									<div className="testimBox8 testimBox">
										<div className="testim-image h-100"><img src="/images/testimonials/anuj-goel.png" className="h-100 object-cover" alt="" /></div>
										<div className="testimonial-box h-100">
											<div className="inner scroller">
												<p className="mb-0">When we me my wife and so this society and we're like, all right, this is it. This is what we wanted and I'll say right blend of luxury, amenities and I'll say all security because I travel a lot and security is one of the big concern for me because my family is alone when I'm out. So I think kind of security Platinum Towers provides, it's immense security at the outgate level, then at lobby level and at the floor level, lifts. So I think that was my primary criteria.</p>
												<div className="testimonial-info">
													<span>Mr. Anuj goel</span><small>Resident - Jewel Of India, Jaipur</small>
												</div>
											</div>
										</div>
									</div>

									<div className="testimBox9 testimBox d-flex align-items-center justify-content-center">
										<div className="heading mb-0 mx-auto text-center" data-aos="fade-in">
											<h2 className="h2 fw-lighter text-primary mb-0">Stories of Happiness</h2>
										</div>
									</div>
								</div>
							</div>

							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/sejal-manisha.jpg" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/sejal-dokania-&-mrs-manisha-dokania.mp4" data-bs-source="Mrs. Sejal Dokania and Mrs. Manisha Dokania">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>We love the feature of massage room, it's good. We have used every feature be it library, cafe, pool and sauna everything and we enjoy each and every part of it. It's very beautiful and tidy. There is a word called elite, I call it elite.</p>
									</div>
									<div className="client-speak-info">
										<span>Mrs. Sejal Dokania and Mrs. Manisha Dokania</span><small>Resident - Jewel Of India, Jaipur</small>
									</div>
								</div>
							</div>
							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/savitri.jpg" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/savitri-wadhwani.mp4" data-bs-source="Mrs. Savitri Wadhwani">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>Jewel of India is one of the best project in Jaipur. After moved to JOI, I am having a peaceful life because of the surroundings, safety, greenery and the environment. I feel very good at JOI and the kind of Experience I am having now, I will definitely recommend in our friends and relatives.</p>
									</div>
									<div className="client-speak-info">
										<span>Mrs. Savitri Wadhwani</span><small>Resident - Jewel Of India, Jaipur</small>
									</div>
								</div>
							</div>
							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/khwahish.webp" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/khwahish-chawla.mp4" data-bs-source="Ms. Khwahish Chawla">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>It is a dream come true to live in Suncity. It is a perfect place to live your whole dream. Suncity has each & every facility you just name it. Be it restaurants, be it green belt, small food joints, it has everything within.</p>
									</div>
									<div className="client-speak-info">
										<span>Ms. Khwahish Chawla</span><small>Resident - Parikrama, Panchkula</small>
									</div>
								</div>
							</div>
							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/ashima.webp" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/ashima.mp4" data-bs-source="Mrs. Ashima">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>The impeccable standard of living, the world-class infrastructure, mesmerizing lounge, everything is so well-maintained in Suncity, that we ultimately decided to buy a flat here that turned out to be our home. Fortunately, the staff here is excellent & courteous.</p>
									</div>
									<div className="client-speak-info">
										<span>Mrs. Ashima</span><small>Resident - Parikrama, Panchkula</small>
									</div>
								</div>
							</div>
							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/alpesh.webp" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/alpesh-rawat.mp4" data-bs-source="Mr. Alpesh Rawat">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>The location of the tower is wonderful, the proximity to the airport, the proximity to all the commercial landscapes is phenomenal here. It is one of the best-looking towers in the entire city. I am very-very impressed with the quality of construction.</p>
									</div>
									<div className="client-speak-info">
										<span>Mr. Alpesh Rawat</span><small>Office - Horizon Tower, Jaipur</small>
									</div>
								</div>
							</div>
							<div className="swiper-slide client-speak-slide">
								<div className="inner">
									<div className="client-img"><img src="/images/testimonials/rishabh.webp" alt="" /></div>
									<button className="icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn" data-bs-target="#video-Modal" data-bs-toggle="modal" data-src="./videos/testimonial/rishabh-jain.mp4" data-bs-source="Mr. Rishabh Jain">
										<div className="round-button">
											<div className="circle"></div>
											<i className="fa fa-play"></i>
										</div> 
										Click to Listen
									</button>
									<div className="client-speak-box">
										<p>I have been consistently impressed with the professionalism and the dedication demonstrated by the management team. The commitment to maintain the highest standard of services has truly set Horizon Tower apart from any other commercial property in Jaipur.</p>
									</div>
									<div className="client-speak-info">
										<span>Mr. Rishabh Jain</span><small>Office - Horizon Tower, Jaipur</small>
									</div>
								</div>
							</div>
						</div>
						<div className="bottomControls">
							<div className="swiper-button-prev"></div>
							<div className="viewmore mt-0"><Link href="/testimonials" className="button">Explore All</Link></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Latest Blogs Section */}
			<HomeBlogs/>
			<TestimonialVideoModal />
			
			{/* AOS CSS */}
			{/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
			
			<Script
				src="https://unpkg.com/aos@2.3.1/dist/aos.js"
				onLoad={() => {
					if (typeof window !== 'undefined') {
						const AOS = (window as any).AOS;
						if (AOS) {
							AOS.init({
								duration: 1000,
								once: true,
								offset: 100
							});
						}
					}
				}}
			/> */}
			<ScriptReinitializer />
		</>
	);
}