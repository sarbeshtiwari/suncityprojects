'use client';

interface ProjectEnquiryProps {
	title?: string;
	subtitle?: string;
}

export default function ProjectEnquiry({ 
	title = "Premium Spaces Infinite Possibilities",
	subtitle = "Lorem ipsum dolor sit amet consectetur"
}: ProjectEnquiryProps) {
	return (
		<div className="w-100 py-5 position-relative overflow-hidden bg-primary">
			<div className="container-lg">
				<div className="row g-4 align-items-center justify-content-between">
					<div className="col-md-9 col-sm-7 heading mb-0 text-center text-sm-start">
						<h2 className="fw-lighter mb-0">{title}</h2>
						<h5 className="mb-0 fw-lighter">{subtitle}</h5>
					</div>
					<div className="col-md-3 col-sm-5 enquiry-box">
						<a href="#formModal" data-bs-toggle="modal" className="inner">
							<div className="icon"><img src="/images/icons/mail.svg" alt="Enquire Now" className="img-fluid" /></div>
							<span>Enquire Now</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
