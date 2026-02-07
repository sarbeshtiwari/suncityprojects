'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface Location {
  _id: string;
  city: string;
}

interface Project {
  _id: string;
  projectName: string;
  slug: string;
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);

  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState('');

  // Dynamic content
  const [locations, setLocations] = useState<Location[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Ref for smooth height transition
  const moreFooterRef = useRef<HTMLDivElement>(null);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle "More Footer" section with smooth height animation
  const toggleFooter = () => {
    setIsFooterExpanded((prev) => !prev);
  };

  // Newsletter subscription
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');
    setNewsletterSuccess('');

    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }

    setIsNewsletterLoading(true);
    try {
      const response = await fetch('/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail.trim(), source: 'footer' }),
      });
      const data = await response.json();
      if (response.ok) {
        setNewsletterSuccess('Thank you for subscribing to our newsletter!');
        setNewsletterEmail('');
      } else {
        setNewsletterError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setNewsletterError('Something went wrong. Please try again.');
    } finally {
      setIsNewsletterLoading(false);
    }
  };

  // Fetch locations & projects
  useEffect(() => {
    const fetchLocations = async () => {
		try {
			const response = await fetch('/api/locations');
			const data = await response.json();

			if (data.success) {
			// Cast the API data to Location[]
			const locationsData = data.data as Location[];

			// Remove duplicates based on _id or city
			const uniqueLocations: Location[] = Array.from(
				new Map(locationsData.map((loc) => [loc.city, loc])).values()
			);
			setLocations(uniqueLocations);
			}
		} catch (err) {
			console.error('Error fetching locations:', err);
		} finally {
			setLoading(false);
		}
	};

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success) setProjects(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
    fetchProjects();
  }, []);

  return (
    <footer className="footer-area overflow-hidden w-100">
      <div className="container-lg">
        <div className="footer-links">
          <div className="row g-4">
            {/* Logo + Social */}
            <div className="col-lg-3 col-sm-12 align-self-center">
              <div className="insideBox mb-4 mb-lg-0 d-flex d-lg-block gap-4 flex-column flex-sm-row justify-content-between align-items-center">
                <div className="footer-logo mb-lg-4">
                  <img src="/images/logo.svg" alt="Logo" />
                </div>
                <div className="socialBtn d-flex justify-content-center justify-content-lg-start">
                  {[
                    { href: 'https://www.facebook.com/SuncityProjects/', icon: 'fab fa-facebook-f', title: 'Facebook' },
                    { href: 'https://www.instagram.com/suncityprojectsofficial', icon: 'fab fa-instagram', title: 'Instagram' },
                    { href: 'https://in.linkedin.com/company/suncityprojects', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
                    { href: 'https://www.youtube.com/@SuncityProjectspvtltd', icon: 'fab fa-youtube', title: 'Youtube' },
                  ].map((item) => (
                    <a key={item.title} href={item.href} target="_blank" rel="noreferrer" title={item.title}>
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="col-lg-2 col-sm-4 foot-menu">
              <div className="insideBox">
                <h6 className="smallHeading">Projects</h6>
                <ul className="list-inline">
                  <li><Link href="/residential-projects">Residential</Link></li>
                  <li><Link href="/commercial-projects">Commercial</Link></li>
                  <li><Link href="/retail-projects">Retail</Link></li>
                  <li><Link href="/education-projects">Education</Link></li>
                </ul>
              </div>
            </div>

            {/* Media Links */}
            <div className="col-lg-2 col-sm-4 foot-menu">
              <div className="insideBox">
                <h6 className="smallHeading">Media</h6>
                <ul className="list-inline">
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/in-the-news">News</Link></li>
                  <li><Link href="/awards">Awards</Link></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-sm-4 foot-menu">
              <div className="insideBox">
                <h6 className="smallHeading">Quick Links</h6>
                <ul className="list-inline">
                  <li><Link href="/why-suncity">Careers</Link></li>
                  <li><Link href="/contact-us">Contact</Link></li>
                  <li><Link href="/grievance-assistance-center">Grievance Assistance Center</Link></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-sm-12 foot-menu">
				<div className="insideBox">
					<h6 className="smallHeading">Subscribe for News Update</h6>
					<form className="subscribForm" onSubmit={handleNewsletterSubmit}>
						<div className="row g-2 justify-content-center justify-content-sm-start">
							<div className="col-lg-12 col-md-8 col-sm-8">
								<div className="form-group d-flex">
									<i className="fa fa-envelope"></i>
									<input 
										type="email" 
										name="newsletterEmail" 
										id="newsletterEmail" 
										className={`form-control border-primary ${newsletterError ? 'is-invalid' : ''}`} 
										placeholder="Email*" 
										value={newsletterEmail}
										onChange={(e) => setNewsletterEmail(e.target.value)}
										required
									/>
								</div>
								{newsletterError && (
									<div className="invalid-feedback d-block">
										{newsletterError}
									</div>
								)}
								{newsletterSuccess && (
									<div className="text-success small mt-1">
										{newsletterSuccess}
									</div>
								)}
							</div>
							<div className="col-lg-6 col-md-3 col-sm-4 col-6">
								<div className="readmore mt-0 h-100">
									<button 
										type="submit" 
										className="button button-sm bg-dark text-white mw-100 w-100 h-100"
										disabled={isNewsletterLoading}
									>
										{isNewsletterLoading ? (
											<>
												<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
												Subscribing...
											</>
										) : (
											<>Subscribe <i className="fa fa-paper-plane"></i></>
										)}
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
          </div>
        </div>

        {/* Toggle More Footer */}
        <button
          className={`toggleFooterBtn btn position-relative p-0 w-100 d-flex align-items-center justify-content-center ${isFooterExpanded ? 'active' : ''}`}
          onClick={toggleFooter}
        >
          <i className="fa fa-chevron-down icon-circular"></i>
        </button>

        <div
          ref={moreFooterRef}
          className="footer-links position-relative overflow-hidden transition-height"
          style={{
            height: isFooterExpanded ? `${moreFooterRef.current?.scrollHeight}px` : '0px',
            transition: 'height 0.3s ease-in-out',
          }}
        >
          <div className="row g-4">
            <div className="col-lg-6 col-sm-12 foot-menu">
              <div className="insideBox">
                <h6 className="smallHeading">Cities</h6>
                <ul className="list-inline d-flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <li key={loc._id}>
                      <Link href={`/city/${loc.city.toLowerCase()}`}>{loc.city}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 foot-menu">
              <div className="insideBox">
                <h6 className="smallHeading">Projects</h6>
                <ul className="list-inline d-flex flex-wrap gap-2">
                  {projects.map((proj) => (
                    <li key={proj._id}>
                      <Link href={`/projects/${proj.slug}`}>{proj.projectName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mb-5 mb-lg-0 pe-5 pe-lg-0">
        <div className="container-lg">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <div className="credai-logo"><img src="/images/logo-credai.svg" alt="CREDAI" /></div>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <div className="copyrights">
            <p>© Suncity Projects 2025 | Designed &amp; Developed by: <img src="/images/ecis.png" alt="ECIS" /></p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {isVisible && (
        <div className="button-top fixed" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <i className="fa fa-chevron-up"></i>
        </div>
      )}
    </footer>
  );
}
