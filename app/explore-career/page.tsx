'use client';

import { useEffect, useRef, useState } from 'react';
import CareerNavigation from '@/components/CareerNavigation';
// import { submitCareerForm } from '../../lib/formHandlers';
import OTPVerificationModal from '@/components/OTPVerificationModal';
import Link from 'next/link';

interface Job {
  _id?: string;
  position_name: string;
  experience_required: string;
  CTC: string;
  job_responsibilities: string;
  qualifications: string;
  createdAt?: string;
}

export default function ExploreCareer() {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [mountKey, setMountKey] = useState(Date.now());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState('');
	const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
	const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
	// OTP states
	const [showOTPModal, setShowOTPModal] = useState(false);
	const [otpMobile, setOtpMobile] = useState('');
	const pendingFormDataRef = useRef<FormData | null>(null);
	const [formData, setFormData] = useState({
		crfirstname: '',
		crlastname: '',
		crmobile: '',
		cremail: '',
		jobPosition: '',
		experience: '',
		shortdescription: ''
	});
	useEffect(() => {
		const initCareerPage = () => {
			const applyWrapper = document.querySelector('#applyWrapper') as HTMLElement;
			if (applyWrapper) {
				applyWrapper.style.display = 'none';
			}

			(window as any).applyNow = (funArea: string, jobrole: string) => {
				const applyWrapper = document.querySelector('#applyWrapper') as HTMLElement;
				if (applyWrapper) {
					setTimeout(function() {
						applyWrapper.style.display = 'block';
						applyWrapper.scrollIntoView({
							behavior: 'smooth'
						});
						
						setFormData(prev => ({
							...prev,
							experience: funArea,
							jobPosition: jobrole
						}));
						
					}, 400);
				}
			};

			if (typeof window !== 'undefined' && (window as any).AOS) {
				(window as any).AOS.init();
			}

			const initBootstrapModals = () => {
				if (typeof window !== 'undefined' && (window as any).bootstrap) {
					try {
						const modals = document.querySelectorAll('.modal');
						modals.forEach((modal, index) => {
							try {
								const modalInstance = new (window as any).bootstrap.Modal(modal);
								
								modal.addEventListener('hidden.bs.modal', function () {
									const backdrop = document.querySelector('.modal-backdrop');
									if (backdrop) {
										backdrop.remove();
									}
									document.body.classList.remove('modal-open');
								});
								
							} catch (error) {
								console.error(`Error initializing modal ${index + 1}:`, error);
							}
						});
					} catch (error) {
						console.error('Error during modal initialization:', error);
					}
				} else {
					console.log('Bootstrap not available, retrying in 500ms...');
					setTimeout(initBootstrapModals, 500);
				}
			};

			initBootstrapModals();

			(window as any).openModal = (modalId: string) => {
				const modal = document.querySelector(modalId) as HTMLElement;
				if (modal) {
					try {
						if (typeof window !== 'undefined' && (window as any).bootstrap) {
							const bsModal = new (window as any).bootstrap.Modal(modal);
							bsModal.show();
						} else {
							modal.style.display = 'block';
							modal.classList.add('show');
							document.body.classList.add('modal-open');
						}
					} catch (error) {
						console.error('Error opening modal:', error);
						modal.style.display = 'block';
						modal.classList.add('show');
						document.body.classList.add('modal-open');
					}
				} else {
					console.error('Modal element not found:', modalId);
				}
			};

			window.dispatchEvent(new Event('resize'));

		};

		const timer = setTimeout(initCareerPage, 1000);
		return () => clearTimeout(timer);
	}, [mountKey]);

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		try {
			const res = await fetch("/api/admin/jobs");
			const data = await res.json();
			setJobs(data.forms);
		} catch (err) {
			console.error("Error fetching jobs:", err);
		}
	};

	useEffect(() => {
		setMountKey(Date.now());
		window.dispatchEvent(new Event('resize'));
	}, []);

	const clearFieldError = (fieldName: string) => {
		if (fieldErrors[fieldName]) {
			setFieldErrors(prev => {
				const newErrors = { ...prev };
				delete newErrors[fieldName];
				return newErrors;
			});
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		clearFieldError(name);
	};

	const validateForm = (formData: FormData) => {
		const errors: {[key: string]: string} = {};
		const firstName = formData.get('crfirstname') as string;
		const lastName = formData.get('crlastname') as string;
		const mobile = formData.get('crmobile') as string;
		const email = formData.get('cremail') as string;
		const jobPosition = formData.get('jobPosition') as string;
		const experience = formData.get('experience') as string;

		if (!firstName || firstName.trim().length < 2) {
			errors.crfirstname = 'First name must be at least 2 characters long';
		}
		if (!lastName || lastName.trim().length < 2) {
			errors.crlastname = 'Last name must be at least 2 characters long';
		}
		if (!mobile || mobile.trim().length < 10) {
			errors.crmobile = 'Mobile number must be at least 10 digits';
		}
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.cremail = 'Please enter a valid email address';
		}
		if (!jobPosition || jobPosition.trim() === '') {
			errors.jobPosition = 'Job position is required';
		}
		if (!experience || experience.trim() === '') {
			errors.experience = 'Experience is required';
		}

		return errors;
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('File selected:', event.target.files?.[0]);
	};

	const handleCareerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage('');
		setFieldErrors({});

		const formData = new FormData(e.currentTarget);
		
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setFieldErrors(validationErrors);
			setStatusMessage('Please correct the errors below');
			setStatusType('error');
			setIsSubmitting(false);
			return;
		}

		try {
			const mobile = (formData.get('crmobile') as string) || '';
			const resp = await fetch('/api/otp/generate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ mobile })
			});
			const data = await resp.json();
			if (!resp.ok) {
				setStatusMessage(data.error || 'Failed to send OTP. Please try again.');
				setStatusType('error');
				setIsSubmitting(false);
				return;
			}
			pendingFormDataRef.current = formData;
			setOtpMobile(mobile);
			setShowOTPModal(true);
		} catch (err) {
			setStatusMessage('Failed to send OTP. Please try again.');
			setStatusType('error');
			setIsSubmitting(false);
		}
	};

	const verifyOTP = async (otp: string) => {
		try {
			const response = await fetch('/api/otp/verify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ mobile: otpMobile, otp })
			});
			const result = await response.json();
			return response.ok && result.verified;
		} catch (e) {
			return false;
		}
	};

	const handleOTPVerified = async () => {
		// setShowOTPModal(false);
		// setIsSubmitting(true);
		// const formData = pendingFormDataRef.current || new FormData();
		// const result = await submitCareerForm(formData);
		// setStatusMessage(result.message);
		// setStatusType(result.success ? 'success' : 'error');
		// if (result.success) {
		// 	setFormData({
		// 		crfirstname: '',
		// 		crlastname: '',
		// 		crmobile: '',
		// 		cremail: '',
		// 		jobPosition: '',
		// 		experience: '',
		// 		shortdescription: ''
		// 	});
		// 	setFieldErrors({});
		// }
		// pendingFormDataRef.current = null;
		// setOtpMobile('');
		// setIsSubmitting(false);
	};

	const handleShowJobDescription = (job: Job) => {
		setSelectedJob(job);
		(window as any).openModal('#jobDescModal');
	};


	return (
		<>
			<main key={mountKey}>
				<div className="emptyBox"></div>

				<div className="breadcrumbWrapper">
					<div className="container-lg" data-aos="fade-in">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item">Careers</li>
							<li className="breadcrumb-item active">Explore Career</li>
						</ol>         
					</div>
				</div>

				<div className="bg-white">
					<CareerNavigation activePage="explore-career" />
				</div>

				<div className="w-100 padding position-relative bg-white awards-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Openings</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h2 className="title-xxl text-primary">Current Openings</h2>
							<p className="mb-0">We have an ambitious road ahead of us. Join our team and <br />help us shape the future..</p>
						</div>
						<div className="row g-4">
							{jobs.length && (
								jobs.map((job) => (
									<div className="col-lg-4 col-md-6 career-card" key={job._id}>
										<div className="card inside">
											<div className="card-header">
												<h5 className="job-role">{job.position_name}</h5>
											</div>
											<ul className="list-group list-group-flush">
												<li className="list-group-item"><strong>Posted On</strong><span className="job-positions">{job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"}</span></li>
												<li className="list-group-item"><strong>Job Position</strong><span className="job-positions">{job.position_name}</span></li>
												<li className="list-group-item"><strong>Experience</strong><span className="job-experience">{job.experience_required}</span></li>
											</ul>
											<div className="mt-4 d-flex gap-3 align-items-center justify-content-between flex-wrap">
												<div className="readmore mt-0 w-auto">
													<button type="submit" className="button button-sm" onClick={() => (window as any).applyNow(`${job.experience_required}`, `${job.position_name}`)}>Apply Now</button>
												</div>
												<div className="viewmore mt-0 w-auto">
													<button
														data-bs-target="#jobDescModal"
														data-bs-toggle="modal"
														onClick={() => handleShowJobDescription(job)}
														className="button"
													>
														Job Description
													</button>
												</div>
											</div>
										</div>
									</div>
								))
							)}
						</div>
						<p className="mb-0 mt-5">Fill out the form and we'll be in touch soon! The aspirants may send their resumes to <a href="mailto:hrd@suncityprojects.com">hrd@suncityprojects.com</a>.</p>
					</div>
				</div>

				{/* Apply Online Section */}
				<div className="w-100 padding bg-primary bg-sec" id="applyWrapper">
					<div className="container-lg">
						<div className="heading mx-auto text-center">
							<h2 className="title-xxl mb-0">Apply Online</h2>
						</div>
						<div className="contactFormBox">
							<form className="career-form" id="careerForm" method="post" onSubmit={handleCareerSubmit}>
								{statusMessage && (
									<div className={`alert small py-2 rounded-0 ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
										{statusMessage}
									</div>
								)}
								<div className="row justify-content-center gy-4">
									<div className="col-lg-8">
										<div className="row g-3">
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-user"></i>
													<input type="text" name="crfirstname" id="crfirstname" value={formData.crfirstname} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="First Name*" onChange={handleInputChange} />
												</div>
												{fieldErrors.crfirstname && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.crfirstname}
													</div>
												)}
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-user"></i>
													<input type="text" name="crlastname" id="crlastname" value={formData.crlastname} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Last Name*" onChange={handleInputChange} />
												</div>
												{fieldErrors.crlastname && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.crlastname}
													</div>
												)}
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-phone"></i>
													<input type="tel" name="crmobile" id="crmobile" value={formData.crmobile} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Tel/Mobile*" onChange={handleInputChange} />
												</div>
												{fieldErrors.crmobile && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.crmobile}
													</div>
												)}
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-envelope"></i>
													<input type="email" name="cremail" id="cremail" value={formData.cremail} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Email*" onChange={handleInputChange} />
												</div>
												{fieldErrors.cremail && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.cremail}
													</div>
												)}
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-user-tie"></i>
													<input type="text" readOnly name="jobPosition" id="jobPosition" value={formData.jobPosition} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Job Position*" />
												</div>
												{fieldErrors.jobPosition && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.jobPosition}
													</div>
												)}
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group d-flex">
													<i className="fa fa-calendar-check"></i>
													<input type="text" readOnly name="experience" id="experience" value={formData.experience} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Experience*" />
												</div>
												{fieldErrors.experience && (
													<div className="text-danger small mt-1">
														<i className="fa fa-exclamation-circle me-1"></i>
														{fieldErrors.experience}
													</div>
												)}
											</div>
											<div className="col-md-12 col-sm-12">
												<div className="form-group d-flex">
													<i className="fa fa-file-pdf"></i>
													<input 
														type="file" 
														name="resume" 
														id="resume" 
														onChange={handleFileChange}
														accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
														size={34} 
														maxLength={255} 
														className="form-control lg bg-white border-top-0 border-bottom-0" 
													/>
												</div>
												<input type="hidden" name="resumefile" id="resumefile" />
											</div>
										</div>
									</div>
									<div className="col-lg-4">
										<textarea className="form-control h-100 bg-light" name="shortdescription" id="shortdescription" value={formData.shortdescription} placeholder="Short Description" rows={7} onChange={handleInputChange}></textarea>
									</div>
									<div className="col-lg-4">
										<div className="readmore">
											<input type="hidden" name="car_action" value="active" />
											<button 
												type="submit" 
												className="button light mw-100 w-100 justify-content-center mx-auto" 
												id="contsubmti"
												disabled={isSubmitting}
											>
												{isSubmitting ? 'Submitting...' : 'Submit'} <i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* OTP Verification Modal - client side only */}
				{typeof window !== 'undefined' && (
					<OTPVerificationModal
						isOpen={showOTPModal}
						mobile={otpMobile}
						onVerify={verifyOTP}
						onClose={handleOTPVerified}
						onCancel={() => { setShowOTPModal(false); setIsSubmitting(false); }}
					/>
				)}

				<div className="modal fade" id="jobDescModal" tabIndex={-1} aria-hidden="true">
					<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
						<div className="modal-content">
							<button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" className="ion-ios-close">×</span>
							</button>
							<div className="modal-header">
								<h4 className="fw-light text-primary mb-0">Job Description</h4>
							</div>
							<div className="modal-body p-4">
								<h6 className="mb-3 fw-light text-primary">Job Responsibilities</h6>
								<div className="listContainer">
									<ul className="list-unstyled mb-3">
										{selectedJob?.job_responsibilities
											?.split(";").filter((r) => r.trim() !== "") 
											.map((r, i) => (
											<li key={i}>{r.trim()}</li>
										))}
									</ul>
								</div>
								<h6 className="mb-3 fw-light text-primary">Qualifications</h6>
								<div className="listContainer">
									<ul className="list-unstyled mb-3">
										{selectedJob?.qualifications
											?.split(";").filter((r) => r.trim() !== "") 
											.map((r, i) => (
											<li key={i}>{r.trim()}</li>
										))}
									</ul>
								</div>
								
								<div className="border-top my-4"></div>
								<p className="mb-0"><b>CTC:</b> {selectedJob?.CTC}</p>
								<div className="readmore">
									<button onClick={() => (window as any).applyNow(`${selectedJob?.experience_required}`, `${selectedJob?.position_name}`)} data-bs-dismiss="modal" aria-label="Close" className="button">Apply Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</main>
		</>
	);
}