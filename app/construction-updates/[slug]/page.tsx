'use client';

import { useParams } from 'next/navigation';

export default function ProjectConstructionUpdates() {
	const params = useParams();
	const project = params.slug as string;

	const projectData = {
		'jewel-farms': {
			name: 'Jewel Farms',
			logo: '/images/logos/logo-jewel-farms.svg',
			images: [
				'/images/jewel-farms/gallery/gal1-th.webp',
				'/images/jewel-farms/gallery/gal2-th.webp',
				'/images/jewel-farms/gallery/gal3-th.webp',
				'/images/jewel-farms/gallery/gal4-th.webp',
				'/images/jewel-farms/gallery/gal5-th.webp',
				'/images/jewel-farms/gallery/gal6-th.webp'
			], 
			video: ''
		},
		'jewel-tower': {
			name: 'Jewel Tower',
			logo: '/images/logos/logo-jewel-tower.svg',
			images: [
				'/images/jewel-farms/gallery/gal1-th.webp',
				'/images/jewel-farms/gallery/gal2-th.webp',
				'/images/jewel-farms/gallery/gal3-th.webp',
				'/images/jewel-farms/gallery/gal4-th.webp',
				'/images/jewel-farms/gallery/gal5-th.webp',
				'/images/jewel-farms/gallery/gal6-th.webp'
			],
			video: '/videos/construction-updates/jewel-tower/jewel-tower1.mp4'
		},
		'jewel-of-india-phase-2': {
			name: 'Jewel Of India Phase-2',
			logo: '/images/logos/logo-jewel-of-india.png',
			images: [
				'/images/jewel-farms/gallery/gal1-th.webp',
				'/images/jewel-farms/gallery/gal2-th.webp',
				'/images/jewel-farms/gallery/gal3-th.webp',
				'/images/jewel-farms/gallery/gal4-th.webp',
				'/images/jewel-farms/gallery/gal5-th.webp',
				'/images/jewel-farms/gallery/gal6-th.webp'
			],
			video: ''
		},
		'suncity-ultima': {
			name: 'Suncity Ultima',
			logo: '/images/logos/logo-ultima.svg',
			images: [
				'/images/jewel-farms/gallery/gal1-th.webp',
				'/images/jewel-farms/gallery/gal2-th.webp',
				'/images/jewel-farms/gallery/gal3-th.webp',
				'/images/jewel-farms/gallery/gal4-th.webp',
				'/images/jewel-farms/gallery/gal5-th.webp',
				'/images/jewel-farms/gallery/gal6-th.webp'
			],
			video: '/videos/construction-updates/ultima/ultima2.mp4'
		},
		'the-empire': {
			name: 'The Empire',
			logo: '/images/logos/logo-the-empire.svg',
			images: [
				'/images/jewel-farms/gallery/gal1-th.webp',
				'/images/jewel-farms/gallery/gal2-th.webp',
				'/images/jewel-farms/gallery/gal3-th.webp',
				'/images/jewel-farms/gallery/gal4-th.webp',
				'/images/jewel-farms/gallery/gal5-th.webp',
				'/images/jewel-farms/gallery/gal6-th.webp'
			],
			video: '/videos/construction-updates/the-empire/empire1.mp4'
		}
	};

	const currentProject = projectData[project as keyof typeof projectData] || projectData['jewel-farms'];

	return (
		<>
			<main>
				{/* Empty Box for spacing */}
				<div className="emptyBox"></div>

				{/* Breadcrumb */}
				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="/">Home</a></li>
							<li className="breadcrumb-item"><a href="/construction-updates">Construction Updates</a></li>
							<li className="breadcrumb-item active">{currentProject.name}</li>
						</ol>         
					</div>
				</div>

				{/* Project Construction Updates Section */}
				<div className="w-100 padding position-relative bg-white event-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">{currentProject.name}</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">{currentProject.name}</h2>
							<div className="d-flex align-items-center justify-content-center gap-2">
								Construction updates as on  
								<select name="" id="" className="form-select-unstyled p-1 border fw-bold text-primary">
									<option value="January">January</option>
									<option value="February">February</option>
									<option value="March">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="August">August</option>
									<option value="September">September</option>
									<option value="October">October</option>
									<option value="November">November</option>
									<option value="December" selected>December</option>
								</select>
								2025
							</div>
						</div>
						<div className="award-slider" data-aos="fade-in" data-aos-delay="300">
							<div className="row g-4">
								<div className="col-lg-12 col-sm-12">
									{currentProject.video ? 
									<video src={currentProject.video} autoPlay muted controls webkit-playsinline></video>
										: <h3 className="title-xxl text-primary text-center">No Data Found</h3> }
									</div>
								{/* {currentProject.images.map((image, index) => (
									<div key={index} className="col-lg-4 col-sm-6">
										<div className="card gallery-card h-100 rounded-0 border-0">
											<a href={image} data-magnify="magnify" data-group="eve" data-caption="Construction Updates">
												<div className="blog-image position-relative overflow-hidden">
													<img src={image} alt="Construction Updates" className="card-img rounded-0" />
													<i className="fa-solid fa-expand position-absolute start-50 top-50 translate-middle icon-circular bg-white"></i>
												</div>
											</a>
										</div>
									</div>
								))} */}
							</div>
							<div className="readmore"><a className="button button-sm" href="/construction-updates">Back</a></div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

