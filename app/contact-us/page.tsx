'use client';

import { useRef, useState } from 'react';
// import { submitContactForm } from '../../lib/formHandlers';
// import OTPVerificationModal from '../components/OTPVerificationModal';

export default function ContactUs() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState('');
	const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
	const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
	const [showOTPModal, setShowOTPModal] = useState(false);
	const [otpMobile, setOtpMobile] = useState('');
	const pendingFormDataRef = useRef<FormData | null>(null);

	const normalizeMobile = (mobile: string) => {
		const trimmed = (mobile || '').replace(/\s+/g, '');
		if (trimmed.startsWith('+')) return trimmed;
		if (/^\d{10}$/.test(trimmed)) return `+91${trimmed}`;
		return trimmed;
	};
	const [formData, setFormData] = useState({
		con_enquiry_type: '',
		con_name: '',
		con_email: '',
		con_project: '',
		con_message: ''
	});
	// Make mobile input uncontrolled to avoid intlTelInput conflicts
	const mobileInputRef = useRef<HTMLInputElement | null>(null);

	// Function to clear field errors
	const clearFieldError = (fieldName: string) => {
		if (fieldErrors[fieldName]) {
			setFieldErrors(prev => {
				const newErrors = { ...prev };
				delete newErrors[fieldName];
				return newErrors;
			});
		}
	};

	// Function to handle form field changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		if (name === 'con_isd') {
			// Mobile uses intlTelInput; don't store in state as controlled value
		} else {
			setFormData(prev => ({
				...prev,
				[name]: value
			}));
		}
		clearFieldError(name);
	};

	// Validation function
	const validateForm = (formData: FormData) => {
		const errors: {[key: string]: string} = {};
		const name = formData.get('con_name') as string;
		const email = formData.get('con_email') as string;
		const mobile = formData.get('con_isd') as string;
		const enquiryType = formData.get('con_enquiry_type') as string;

		if (!name || name.trim().length < 2) {
			errors.name = 'Name must be at least 2 characters long';
		}
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address';
		}
		if (!mobile || mobile.trim().length < 10) {
			errors.mobile = 'Mobile number must be at least 10 digits';
		}
		if (!enquiryType || enquiryType.trim() === '') {
			errors.enquiryType = 'Please select an enquiry type';
		}

		return errors;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage('');
		setFieldErrors({});

		const formData = new FormData(e.currentTarget);
		
		// Read full mobile from intlTelInput/ref and put into FormData before validation
		let fullMobile = (formData.get('con_isd') as string) || '';
		if (typeof window !== 'undefined') {
			const input = mobileInputRef.current;
			if (input && (window as any).intlTelInput) {
				const iti = (window as any).intlTelInput.getInstance(input);
				if (iti) fullMobile = iti.getNumber() || input.value || '';
			} else if (input) {
				fullMobile = input.value || '';
			}
		}
		if (fullMobile) formData.set('con_isd', fullMobile);
		
		// Client-side validation
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setFieldErrors(validationErrors);
			setStatusMessage('Please correct the errors below');
			setStatusType('error');
			setIsSubmitting(false);
			return;
		}

		// Derive full international number if intlTelInput is present
		let mobile = formData.get('con_isd') as string;
		if (typeof window !== 'undefined') {
			const mobileInput = mobileInputRef.current;
			if (mobileInput && (window as any).intlTelInput) {
				const iti = (window as any).intlTelInput.getInstance(mobileInput);
				if (iti) {
					const fullNumber = iti.getNumber();
					if (fullNumber) mobile = fullNumber;
				}
			}
		}
		mobile = normalizeMobile(mobile as string);
		
		// Generate OTP
		try {
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
			// Ensure form value reflects full number
			if (mobileInputRef.current) mobileInputRef.current.value = mobile;
			setOtpMobile(mobile);
			setShowOTPModal(true);
		} catch (err) {
			setStatusMessage('Failed to send OTP. Please try again.');
			setStatusType('error');
			setIsSubmitting(false);
		}
	};

	// Verify OTP
	const verifyOTP = async (otp: string) => {
		try {
			// Ensure we always send a mobile: prefer state, then pending form, then input/intlTelInput
			let mobile = otpMobile || '';
			if (!mobile && pendingFormDataRef.current) {
				mobile = (pendingFormDataRef.current.get('con_isd') as string) || '';
			}
			if (!mobile && typeof window !== 'undefined') {
				const input = document.getElementById('ISDCode') as HTMLInputElement | null;
				if (input && (window as any).intlTelInput) {
					const iti = (window as any).intlTelInput.getInstance(input);
					if (iti) mobile = iti.getNumber() || input.value || '';
				} else if (input) {
					mobile = input.value || '';
				}
			}
			mobile = normalizeMobile(mobile);
			const response = await fetch('/api/otp/verify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ mobile, otp })
			});
			const result = await response.json();
			return response.ok && result.verified;
		} catch (e) {
			return false;
		}
	};
	// const handleOTPVerified = async () => {
	// 	setShowOTPModal(false);
	// 	setIsSubmitting(true);
	// 	const formData = pendingFormDataRef.current || new FormData();
	// 	// Ensure con_isd is full number
	// 	if (!formData.get('con_isd')) {
	// 		formData.set('con_isd', otpMobile);
	// 	}
	// 	const result = await submitContactForm(formData);
	// 	setStatusMessage(result.message);
	// 	setStatusType(result.success ? 'success' : 'error');
	// 	if (result.success) {
	// 		setFormData({
	// 			con_enquiry_type: '',
	// 			con_name: '',
	// 			con_email: '',
	// 			con_project: '',
	// 			con_message: ''
	// 		});
	// 		setFieldErrors({});
	// 	}
	// 	pendingFormDataRef.current = null;
	// 	setOtpMobile('');
	// 	setIsSubmitting(false);
	// };

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
							<li className="breadcrumb-item active">Contact Us</li>
						</ol>         
					</div>
				</div>

				{/* Hero Section */}
				<div className="w-100 padding position-relative assist-section bg-white">
					<div className="container-lg">
						<div className="row justify-content-between">
							<div className="col-xl-6 col-lg-6 position-relative">
								<div className="position-sticky">
									<div className="heading mb-lg-0 mx-auto ms-lg-0" data-aos="fade-in">
										<h1 className="title-xxl mb-0 text-primary">Hello, How Can We Help You Today?</h1>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 text-center text-sm-justify">
								<div className="about-text ps-lg-5" data-aos="fade-in">
									<p className="mb-0">At <span className="text-primary"> Suncity Projects Pvt. Ltd.</span>, our customers are at the heart of everything we do. Our dedicated help desk is here to ensure that all your queries, concerns, and requirements are addressed with care and efficiency. Whether you need project details, assistance with documentation, or support with after-sales services, our team is just a call or click away. We are committed to providing you with timely solutions and a seamless experience at every step of your journey with us.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Form and Details Section */}
				<div className="w-100 position-relative contact-container">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Contact Us</p>
					</div>
					<div className="row g-0" data-aos="fade-in">
						{/* Contact Form */}
						<div className="col-lg-6 contactFormBox">
							<div className="inner padding position-sticky mx-auto me-lg-0">
								<div className="heading">
									<h4 className="fw-lighter text-primary">Get in Touch</h4>
									<h2 className="fw-lighter mb-0">Send Us a Message</h2>
								</div>
								{statusMessage && (
									<div className={`alert small py-2 rounded-0 ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
										{statusMessage}
									</div>
								)}
								<form id="contact_form" method="post" onSubmit={handleSubmit}>
									<div className="mb-3 mb-lg-5">
										<div className="form-group d-flex mb-2">
											<i className="fa fa-clipboard-question"></i>
											<select id="con_enquiry_type" name="con_enquiry_type" value={formData.con_enquiry_type} className="form-control lg bg-white border-top-0 border-bottom-0 form-select" onChange={handleInputChange}>
												<option value="">Select</option>
												<option value="Corporate Office">Corporate Office</option>
												<option value="Sales">Sales</option>
												<option value="Customer Support">Customer Support</option>
											</select>
										</div>
										{fieldErrors.enquiryType && (
											<div className="text-danger small mb-3">
												<i className="fa fa-exclamation-circle me-1"></i>
												{fieldErrors.enquiryType}
											</div>
										)}
									</div>
									<div className="mb-3">
										<div className="form-group mb-2 d-flex">
											<i className="fa fa-user"></i>
											<input type="text" id="con_name" name="con_name" value={formData.con_name} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Name*" onChange={handleInputChange} />
										</div>
										{fieldErrors.name && (
											<div className="text-danger small mb-3">
												<i className="fa fa-exclamation-circle me-1"></i>
												{fieldErrors.name}
											</div>
										)}
									</div>
									<div className="mb-3">
										<div className="form-group mb-2 d-flex">
											<i className="fa fa-envelope"></i>
											<input type="email" id="con_email" name="con_email" value={formData.con_email} className="form-control lg bg-white border-top-0 border-bottom-0" placeholder="Email*" onChange={handleInputChange} />
										</div>
										{fieldErrors.email && (
											<div className="text-danger small mb-3">
												<i className="fa fa-exclamation-circle me-1"></i>
												{fieldErrors.email}
											</div>
										)}
									</div>
									<div className="mb-3">
										<div className="form-group mb-2 d-flex">
											<i className="fa fa-phone"></i>
						<input type="tel" id="ISDCode" name="con_isd" ref={mobileInputRef} defaultValue="" className="form-control lg bg-white border-top-0 border-bottom-0 ISDCode" placeholder="Mobile*" onChange={handleInputChange} />
										</div>
										{fieldErrors.mobile && (
											<div className="text-danger small mb-3">
												<i className="fa fa-exclamation-circle me-1"></i>
												{fieldErrors.mobile}
											</div>
										)}
									</div>
									<div className="form-group mb-3 d-flex my-lg-5">
										<i className="fa fa-building"></i>
										<select name="con_project" id="con_project" value={formData.con_project} className="form-control lg bg-white border-top-0 border-bottom-0 form-select" onChange={handleInputChange}>
											<option value="">Select Projects</option>
											<option value="Suncity Avenue 76 Gurgaon">Suncity Avenue 76 Gurgaon</option>
											<option value="Suncity Township Gurgaon">Suncity Township Gurgaon</option>
											<option value="La Lagune,Gurgaon">La Lagune,Gurgaon</option>
											<option value="Essel Tower,Gurgaon">Essel Tower,Gurgaon</option>
											<option value="Suncity Avenue 102,Gurgaon">Suncity Avenue 102,Gurgaon</option>
											<option value="Platinum Tower,Gurgaon">Platinum Tower,Gurgaon</option>
											<option value="Business Tower,Gurgaon">Business Tower,Gurgaon</option>
											<option value="Time Tower,Gurgaon">Time Tower,Gurgaon</option>
											<option value="Suncity School,Gurgaon">Suncity School,Gurgaon</option>
											<option value="Trade Tower,Gurgaon">Trade Tower,Gurgaon</option>
											<option value="Success Tower,Gurgaon">Success Tower,Gurgaon</option>
											<option value="Cradle to Crayons,Gurgaon">Cradle to Crayons,Gurgaon</option>
											<option value="Business Square,Gurgaon">Business Square,Gurgaon</option>
											<option value="Vasant Square,Delhi">Vasant Square,Delhi</option>
											<option value="Cross River Mall,Delhi">Cross River Mall,Delhi</option>
											<option value="North Square Mall,Delhi">North Square Mall,Delhi</option>
											<option value="Suncity Township Jaipur">Suncity Township Jaipur</option>
											<option value="Jewel of India,Jaipur">Jewel of India,Jaipur</option>
											<option value="Triton Mall,Jaipur">Triton Mall,Jaipur</option>
											<option value="Suncity Township Rohtak-I">Suncity Township Rohtak-I</option>
											<option value="Suncity Township Kaithal">Suncity Township Kaithal</option>
											<option value="Vistara,Indore">Vistara,Indore</option>
											<option value="Parikrama,Panchkula">Parikrama,Panchkula</option>
											<option value="Suncity Township Rewari">Suncity Township Rewari</option>
										</select>
									</div>
									<div className="form-group mb-3">
										<textarea id="con_message" name="con_message" value={formData.con_message} className="form-control lg bg-white border-top-0 border-bottom-0" cols={7} rows={10} placeholder="Message" onChange={handleInputChange}></textarea>
									</div>
									<div className="readmore mt-2">
										<input type="hidden" name="operation" value="contact_enq" />
										<button 
											type="submit" 
											id="con_btn" 
											className="button mx-auto bg-dark text-white mw-100 w-100"
											disabled={isSubmitting}
										>
							{isSubmitting ? 'Sending OTP...' : 'Submit'}
										</button>
									</div>
								</form>
							</div>
						</div>

						{/* Contact Details */}
						<div className="col-lg-6 contactDetailsBox padding bg-light pb-0">
							<div className="contactBox">
								<div className="inner text-center text-lg-start">
									<div className="heading mx-auto ms-lg-0">
										<h2 className="fw-lighter text-primary">Call Us (24/7) On</h2>
										<h2 className="title-xxl fw-lighter text-primary mb-0">
											<a href="tel:+918447737045" className="d-table mx-auto ms-lg-0">+91 84477 37045</a>
										</h2>
									</div>
									<p className="mb-0" style={{lineHeight: 2}}>
										If calling from outside the India, please contact us on <br />
										<span><a href="tel:+918447737045" className="fw-bold">+91 84477 37045</a></span><br />
										(International call rates apply).
									</p>
								</div>
							</div>

							<div className="contactBox">
								<div className="inner">
									<div className="row g-4">
										<div className="col-sm-4">
											<h4 className="mb-0 fw-lighter text-primary">Sales</h4>
										</div>
										<div className="col-sm-8">
											<div className="px-sm-4">
												<ul className="address list-inline">
													<li>
														<i className="fa fa-envelope icon-circular"></i>
														<span><a href="mailto:sales@suncityprojects.com">sales@suncityprojects.com</a></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

		{/* {typeof window !== 'undefined' && (
			<OTPVerificationModal
				isOpen={showOTPModal}
				mobile={otpMobile}
				onVerify={verifyOTP}
				onClose={handleOTPVerified}
				onCancel={() => { setShowOTPModal(false); setIsSubmitting(false); }}
			/>
		)} */}
							</div>

							<div className="contactBox">
								<div className="inner">
									<div className="row g-4">
										<div className="col-sm-4">
											<h4 className="mb-0 fw-lighter text-primary">Corporate <br className="d-none d-sm-block" />Office</h4>
										</div>
										<div className="col-sm-8">
											<div className="px-sm-4">
												<p>
													<span className="text-primary">Suncity Business Tower</span> <br />
													Second Floor, Golf Course Road, <br />
													Sector-54, Gurgaon - 122002, <br />
													Haryana
												</p>
												<div className="viewmore">
													<a href="https://maps.app.goo.gl/6FumZzKMm6oHQw3F7" target='_blank' className="button">Get Location <i className="fa fa-arrow-right"></i></a>
												</div>
												<ul className="address mt-4 list-unstyled">
													<li>
														<i className="fa fa-phone icon-circular"></i>
														<span><a href="tel:0124-4691000">0124 4691000</a></span>
													</li>
													<li>
														<i className="fa fa-print icon-circular"></i>
														<span><a href="tel:0124-4691010">0124 4691010</a></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="contactBox">
								<div className="inner">
									<div className="row g-4">
										<div className="col-sm-4">
											<h4 className="mb-0 fw-lighter text-primary">Registered <br className="d-none d-sm-block" />Office</h4>
										</div>
										<div className="col-sm-8">
											<div className="px-sm-4">
												<p>
													<span className="text-primary">Suncity Projects Pvt Ltd</span> <br />
													LGF - 10, Vasant Square, Plot - A, Sector - B, <br />
													Pocket - V, Community Centre, Vasant Kunj, <br />
													New Delhi - 110070 (India)
												</p>
												<div className="viewmore">
													<a href="https://maps.app.goo.gl/MSnTuPJWSrWyyPBZ9" target='_blank' className="button">Get Location <i className="fa fa-arrow-right"></i></a>
												</div>
												<ul className="address mt-4 list-unstyled">
													<li>
														<i className="fa fa-envelope icon-circular"></i>
														<span><a href="mailto:info@suncityprojects.com">info@suncityprojects.com</a></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>          
					</div>
				</div>

				{/* Branch Addresses Section */}
				<div className="w-100 padding position-relative site-section bg-white">
					<div className="container-lg">
						<div className="heading mx-auto text-center" data-aos="fade-in">
							<h1 className="title-xxl mb-0 text-primary">Branch Address</h1>
						</div>
						<div className="row g-4" data-aos="fade-in">
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Project</h5>
									<p className="mb-0">Golf Course Road, Sector 54 Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">La Lagune</h5>
									<p className="mb-0">Sector 54, Golf Course Road Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Essel Tower</h5>
									<p className="mb-0">Main Mehrauli Gurgaon Road Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">SUNCITY BUSINESS TOWER</h5>
									<p className="mb-0">Sector 54, Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">TIME TOWER</h5>
									<p className="mb-0">Main Mehrauli Gurgaon Road Adjacent to Essel Towers, Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Trade Tower</h5>
									<p className="mb-0">Sector 21, Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Success Tower</h5>
									<p className="mb-0">Sector 65, along Golf Course Extension Road, Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity School</h5>
									<p className="mb-0">Sector 54 Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Cradle To Crayons</h5>
									<p className="mb-0">Park View Spa Sector 47, Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Avenue 102</h5>
									<p className="mb-0">SECTOR 102 Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Business Square</h5>
									<p className="mb-0">Sector 65 along Golf Course Extension Road Gurgaon, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Vasant Square</h5>
									<p className="mb-0">Plot No.A, Pkt 5 Vasant Kunj Mehrauli-Mahipalpur Road New Delhi-110070</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Cross River mall</h5>
									<p className="mb-0">9B & 9C, Central Business Shahadra, Delhi</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">North Square Mall</h5>
									<p className="mb-0">F-1,2,3 Netaji Subhash Place Near T.V. Tower, Delhi</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Jaipur</h5>
									<p className="mb-0">Main Jaipur - Sikar Road (NH-11) Jaipur</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Triton Mall</h5>
									<p className="mb-0">Kalwar Road, Near Maharav Shekha Circle Jaipur (Rajasthan)</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Jewel Of India</h5>
									<p className="mb-0">Jaipur Stock Exchange, JLN Marg Malviya Nagar, Jaipur</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Rohtak</h5>
									<p className="mb-0">Suncity Township, Sec-34 / 35 / 36 / 36A Rohtak-Sonipat Road, Rohtak, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Rohtak II</h5>
									<p className="mb-0">Sec – 27 & 28 Delhi Rohtak Road, Rohtak, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Kaithal</h5>
									<p className="mb-0">Sec-33, Dhand-Kurushetra Road Kaithal, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Vistara</h5>
									<p className="mb-0">Vistara Township, Village-Mayakhedi near Gems Public School AB Bypass road Indore, MP-452016</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Vistara Emerald</h5>
									<p className="mb-0">Arandiya Phase, NH-3 A.B Bypass Road, Near MR 11 Road</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Parikrama</h5>
									<p className="mb-0">Adjecent To Jr St. Xavier's School, Sec 20 Panchkula, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Rewari</h5>
									<p className="mb-0">Sector 6 & 7 New Rohtak-Jhajjar Bypass Road Near Rao Abhay Singh Chowk, Rewari, Haryana</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 site-addressBox">
								<div className="inner h-100 bg-secondary-light p-4">
									<h5 className="fw-light text-primary mb-4 pb-3 border-bottom border-secondary">Suncity Platinum Towers</h5>
									<p className="mb-0">Platinum Towers, Opposite Westin Hotel, IFFCO Chowk, Sector–28, Gurugram-122001, Haryana</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}