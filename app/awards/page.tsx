
import MediaNavigation from '@/components/MediaNavigation';
import Link from 'next/link';

export default function Awards() {
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
							<li className="breadcrumb-item active">Awards</li>
						</ol>         
					</div>
				</div>

				{/* Media Navigation */}
				<div className="bg-light">
					<MediaNavigation activePage="awards" />
				</div>

				{/* Awards Section */}
				<div className="w-100 padding position-relative bg-light awards-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Awards</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">Awards & Recognition</h2>
							<p>At <b>Suncity Projects Pvt. Ltd.</b>, excellence has always been at the core of everything we do, and our consistent pursuit of quality has earned us prestigious awards over the years. These accolades reflect not only our superior standards in construction and design but also our unwavering commitment to customer satisfaction and community development.</p>
							<p>Our journey has been recognized through honors such as the <b>Best Developer Award by ASSOCHAM</b>, the <b>Excellence in Real Estate Award by Times Group</b>, and the <b>Emerging Developer of the Year by Realty Plus</b>. Additionally, we take pride in being acknowledged for <b>Green Building Initiatives by IGBC</b>, which reaffirms our vision of sustainable and responsible development.</p>
							<p className="mb-0">Every award stands as a milestone in our legacy—symbolizing trust, innovation, and leadership in the real estate industry. These recognitions inspire us to set new benchmarks with each project, delivering world-class spaces that combine luxury, functionality, and sustainability for generations to come.</p>
						</div>
						<div className="award-slider" data-aos="fade-in" data-aos-delay="300">
							<div className="row g-4">
								<div className="col-md-4 col-sm-6 award-slide">
									<a href="images/award/switch-delhi-to-ev.jpg" data-magnify="magnify" data-caption="Switch Delhi to EV, 2022" className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="Award" /></div>
										<div>
											<p className="mb-0">Switch Delhi to EV <br />2022</p>
											<i className="fa fa-plus icon-circular position-absolute end-0 bottom-0 me-2 mb-2"></i>
										</div>
									</a>
								</div>
								<div className="col-md-4 col-sm-6 award-slide">
									<a href="#" className="inner bg-white">
										<div className="icon"><img src="/images/icons/award-leaf.svg" alt="Award" /></div>
										<div>
											<p className="mb-0">Iconic Luxury Project, Gurugram <br />Platinum Towers by Suncity Projects</p>
											<i className="fa fa-plus icon-circular position-absolute end-0 bottom-0 me-2 mb-2"></i>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}