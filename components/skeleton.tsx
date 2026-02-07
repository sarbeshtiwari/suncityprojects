export default function ProjectSkeleton() {
	return (
		<div className="col-lg-6 hm-featured-slide">
			<div className="inner">
				<div className="row h-100 flex-column">
					{/* Image */}
					<div className="hm-featured-slide-img col-12">
						<div className="skeleton skeleton-img"></div>
					</div>

					{/* Text */}
					<div className="hm-featured-slide-text-container col-12 flex-grow-1">
						<div className="hm-featured-slide-text">
							<div className="project-text">
								<div className="skeleton skeleton-title mb-3"></div>
								<div className="skeleton skeleton-line w-50 mb-2"></div>
								<div className="skeleton skeleton-line w-100 mb-2"></div>
								<div className="skeleton skeleton-line w-90 mb-4"></div>
								<div className="skeleton skeleton-button"></div>
							</div>

							<div className="project-icons d-flex gap-3 mt-4">
								<div className="skeleton skeleton-icon"></div>
								<div className="skeleton skeleton-icon"></div>
								<div className="skeleton skeleton-icon"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
