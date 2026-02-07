'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { submitChannelPartnerForm } from '../../lib/formHandlers';

interface ValidationErrors {
	con_name?: string;
	con_email?: string;
	con_isd?: string;
	companyName?: string;
	companyAddress?: string;
	teamSize?: string;
	reraRegNumber?: string;
	rebuyers?: string;
	otherLocation?: string;
	reraCertificate?: string;
}

export default function ChannelPartner() {
	const router = useRouter();
	const [fileName, setFileName] = useState('📂 No file selected');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
	const [errors, setErrors] = useState<ValidationErrors>({});
	const [formData, setFormData] = useState({
		con_name: '',
		con_email: '',
		con_isd: '',
		companyName: '',
		companyAddress: '',
		teamSize: '',
		reraRegNumber: '',
		rebuyers: '',
		otherLocation: '',

		con_message: ''
	});
	const [selectedCountry, setSelectedCountry] = useState('in');
	const [countryCode, setCountryCode] = useState('+91');

	// Country codes data
	const countryCodes = [
		{ code: 'in', name: 'India', dialCode: '+91', flag: '🇮🇳' },
		{ code: 'us', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
		{ code: 'gb', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
		{ code: 'au', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
		{ code: 'ca', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
		{ code: 'de', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
		{ code: 'fr', name: 'France', dialCode: '+33', flag: '🇫🇷' },
		{ code: 'jp', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
		{ code: 'cn', name: 'China', dialCode: '+86', flag: '🇨🇳' },
		{ code: 'sg', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
		{ code: 'ae', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
		{ code: 'sa', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' }
	];

	// Get user's country on component mount
	useEffect(() => {
		fetch("https://ipinfo.io")
			.then(response => response.json())
			.then(data => {
				const userCountry = data && data.country ? data.country.toLowerCase() : 'in';
				const country = countryCodes.find(c => c.code === userCountry) || countryCodes[0];
				setSelectedCountry(country.code);
				setCountryCode(country.dialCode);
			})
			.catch(() => {
				// Fallback to India
				setSelectedCountry('in');
				setCountryCode('+91');
			});
	}, []);

	// Validation functions
	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePhone = (phone: string): boolean => {
		// Remove all non-digit characters and check if it's a valid mobile number
		const cleanPhone = phone.replace(/\D/g, '');
		// For Indian numbers, check if it starts with 6-9 and has 10 digits
		// For other countries, just check if it has reasonable length (7-15 digits)
		if (countryCode === '+91') {
			return /^[6-9]\d{9}$/.test(cleanPhone);
		} else {
			return cleanPhone.length >= 7 && cleanPhone.length <= 15;
		}
	};

	const validateRequired = (value: string): boolean => {
		return value.trim().length > 0;
	};

	const validateFile = (file: File | null): boolean => {
		if (!file) return false;
		const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
		const maxSize = 5 * 1024 * 1024; // 5MB
		return allowedTypes.includes(file.type) && file.size <= maxSize;
	};

	const validateForm = (): boolean => {
		const newErrors: ValidationErrors = {};

		// Required field validations
		if (!validateRequired(formData.con_name)) {
			newErrors.con_name = 'Name is required';
		}

		if (!validateRequired(formData.con_email)) {
			newErrors.con_email = 'Email is required';
		} else if (!validateEmail(formData.con_email)) {
			newErrors.con_email = 'Please enter a valid email address';
		}

		if (!validateRequired(formData.con_isd)) {
			newErrors.con_isd = 'Mobile number is required';
		} else if (!validatePhone(formData.con_isd)) {
			newErrors.con_isd = 'Please enter a valid 10-digit mobile number';
		}

		if (!validateRequired(formData.companyName)) {
			newErrors.companyName = 'Company name is required';
		}

		if (!validateRequired(formData.companyAddress)) {
			newErrors.companyAddress = 'Company address is required';
		}

		if (!validateRequired(formData.teamSize)) {
			newErrors.teamSize = 'Team size is required';
		}

		if (!validateRequired(formData.reraRegNumber)) {
			newErrors.reraRegNumber = 'RERA registration number is required';
		}

		if (!validateRequired(formData.rebuyers)) {
			newErrors.rebuyers = 'Location of interest is required';
		} else if (formData.rebuyers === 'Other' && !validateRequired(formData.otherLocation)) {
			newErrors.otherLocation = 'Please specify the location';
		}

		// File validation
		const fileInput = document.getElementById('reraCertificate') as HTMLInputElement;
		const file = fileInput?.files?.[0];
		if (!file) {
			newErrors.reraCertificate = 'RERA certificate file is required';
		} else if (!validateFile(file)) {
			newErrors.reraCertificate = 'Please upload a valid PDF, JPG, or PNG file (max 5MB)';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		
		// Clear error when user starts typing
		if (errors[name as keyof ValidationErrors]) {
			setErrors(prev => ({ ...prev, [name]: undefined }));
		}
	};

	const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const countryCode = e.target.value;
		const country = countryCodes.find(c => c.code === countryCode);
		if (country) {
			setSelectedCountry(country.code);
			setCountryCode(country.dialCode);
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setFileName(file.name);
			// Clear file error when user selects a file
			if (errors.reraCertificate) {
				setErrors(prev => ({ ...prev, reraCertificate: undefined }));
			}
		} else {
			setFileName('📂 No file selected');
		}
	};

	// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
		
	// 	// Validate form before submission
	// 	if (!validateForm()) {
	// 		setStatusType('error');
	// 		return;
	// 	}

	// 	setIsSubmitting(true);

	// 	const formDataObj = new FormData(e.currentTarget);
	// 	// Add country code to the mobile number
	// 	const fullMobileNumber = countryCode + formData.con_isd;
	// 	formDataObj.set('con_isd', fullMobileNumber);
		
	// 	const result = await submitChannelPartnerForm(formDataObj);

	// 	setStatusType(result.success ? 'success' : 'error');

	// 	if (result.success) {
	// 		// Navigate to thank you page
	// 		router.push('/thank-you');
	// 	}

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
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<li className="breadcrumb-item active">Channel Partner Registration</li>
						</ol>         
					</div>
				</div>

				{/* Header Section */}
				<div className="w-100 padding position-relative cp-section bg-white">
					<div className="container-lg">
						<div className="row justify-content-between">
							<div className="col-xl-6 col-lg-6 position-relative">
								<div className="position-sticky">
									<div className="heading mb-lg-0 mx-auto ms-lg-0" data-aos="fade-in">
										<h1 className="title-xxl mb-0 text-primary">Channel Partner Registration</h1>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 text-justify">
								<div className="about-text ps-lg-5" data-aos="fade-in">
									<p className="mb-0">At <b className="text-primary">Suncity Projects</b>, we take pride in our <span className="text-primary">30-year legacy of trust, excellence, and timely delivery</span> in the real estate sector. Renowned for creating <span className="text-primary">luxury landmarks that surpass expectations</span>, we have consistently honored every commitment, setting new benchmarks in the industry. As we step into 2025, a year that opens doors to <b className="text-primary">₹1000 crore investment opportunities</b> and a pipeline of <span className="text-primary">high-class, world-class projects</span>, we extend an invitation to channel partners who share our vision of integrity and growth. Together, let's shape a future where prestige, prosperity, and promise go hand in hand.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Background Image Section */}
				<div className="w-100 padding position-relative overflow-hidden cp-img bg-image" style={{backgroundImage: 'url(/images/channel-partner.webp)', minHeight: '30rem'}}></div>

				{/* Registration Form Section */}
				<div className="w-100 position-relative bg-secondary cp-form-container">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Registration</p>
					</div>
					<div className="container-lg" data-aos="fade-in">
						<div className="contactFormBox cpFormBox bg-secondary">
							<div className="heading mx-auto text-center">
								<h3 className="fw-light text-primary mb-0">Keep Rising With The Suncity</h3>
							</div>
							
							<form id="cp_form" 
							// onSubmit={handleSubmit}
							>
								<div className="row g-4 justify-content-center">
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-user"></i>
											<input 
												type="text" 
												id="con_name" 
												name="con_name" 
												value={formData.con_name}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_name ? 'is-invalid' : ''}`} 
												placeholder="Name*" 
											/>
										</div>
										{errors.con_name && <div className="text-danger small mt-1">{errors.con_name}</div>}
									</div>
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-envelope"></i>
											<input 
												type="email" 
												id="con_email" 
												name="con_email" 
												value={formData.con_email}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_email ? 'is-invalid' : ''}`} 
												placeholder="Email*" 
											/>
										</div>
										{errors.con_email && <div className="text-danger small mt-1">{errors.con_email}</div>}
									</div>
									<div className="col-md-6 col-sm-12">
										<div className="form-group d-flex">
											<i className="fa fa-phone"></i>
											<div className="d-flex w-100">
												<select 
													value={selectedCountry}
													onChange={handleCountryChange}
													className="form-control lg bg-white border-top-0 border-bottom-0 me-2"
													style={{ width: '120px', flexShrink: 0 }}
												>
													{countryCodes.map(country => (
														<option key={country.code} value={country.code}>
															{country.flag} {country.dialCode}
														</option>
													))}
												</select>
												<input 
													type="tel" 
													id="con_isd" 
													name="con_isd" 
													value={formData.con_isd}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_isd ? 'is-invalid' : ''}`} 
													placeholder="Mobile Number*" 
												/>
											</div>
										</div>
										{errors.con_isd && <div className="text-danger small mt-1">{errors.con_isd}</div>}
									</div>
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-face-smile-beam"></i>
											<input 
												type="text" 
												name="companyName" 
												value={formData.companyName}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.companyName ? 'is-invalid' : ''}`} 
												placeholder="Company Name*" 
											/>
										</div>
										{errors.companyName && <div className="text-danger small mt-1">{errors.companyName}</div>}
									</div>
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-map-marker-alt"></i>
											<input 
												type="text" 
												name="companyAddress" 
												value={formData.companyAddress}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.companyAddress ? 'is-invalid' : ''}`} 
												placeholder="Company Address*" 
											/>
										</div>
										{errors.companyAddress && <div className="text-danger small mt-1">{errors.companyAddress}</div>}
									</div>
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-users"></i>
											<input 
												type="text" 
												name="teamSize" 
												value={formData.teamSize}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.teamSize ? 'is-invalid' : ''}`} 
												placeholder="Team Size*" 
											/>
										</div>
										{errors.teamSize && <div className="text-danger small mt-1">{errors.teamSize}</div>}
									</div>
									<div className="col-sm-6">
										<div className="form-group d-flex">
											<i className="fa fa-shield"></i>
											<input 
												type="text" 
												name="reraRegNumber" 
												value={formData.reraRegNumber}
												onChange={handleInputChange}
												className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.reraRegNumber ? 'is-invalid' : ''}`} 
												placeholder="RERA Reg. Number*" 
											/>
										</div>
										{errors.reraRegNumber && <div className="text-danger small mt-1">{errors.reraRegNumber}</div>}
									</div>
									<div className="col-md-6 col-sm-12">
										<div className="form-group d-flex">
											<i className="fa fa-file"></i>
											<select 
												className={`form-control lg bg-white border-top-0 border-bottom-0 form-select ${errors.rebuyers ? 'is-invalid' : ''}`} 
												name="rebuyers" 
												id="rebuyers"
												value={formData.rebuyers}
												onChange={handleInputChange}
											>
												<option value="">Location Of Interest</option>
												<option value="Baddi">Baddi</option>
												<option value="Delhi">Delhi</option>
												<option value="Gurugram">Gurugram</option>
												<option value="Indore">Indore</option>
												<option value="Jaipur">Jaipur</option>
												<option value="Kaithal">Kaithal</option>
												<option value="New Chandigarh">New Chandigarh</option>
												<option value="Panchkula">Panchkula</option>
												<option value="Rewari">Rewari</option>
												<option value="Rohtak">Rohtak</option>
												<option value="Vrindavan">Vrindavan</option>
												<option value="Yamuna Nagar">Yamuna Nagar</option>
												<option value="Zirakpur">Zirakpur</option>
												<option value="Other">Other</option>

											</select>
										</div>
										{errors.rebuyers && <div className="text-danger small mt-1">{errors.rebuyers}</div>}
									</div>
									{formData.rebuyers === 'Other' && (
										<div className="col-md-6 offset-md-6 col-sm-12">
											<div className="form-group d-flex">
												<i className="fa fa-map-marker-alt"></i>
												<input 
													type="text" 
													name="otherLocation" 
													value={formData.otherLocation}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-top-0 border-bottom-0 ${errors.otherLocation ? 'is-invalid' : ''}`} 
													placeholder="Please specify the location*" 
												/>
											</div>
											{errors.otherLocation && <div className="text-danger small mt-1">{errors.otherLocation}</div>}
										</div>
									)}
									<div className="col-md-12 col-sm-12">
										<div className="form-group h-100 d-flex">
											<i className="fa fa-file-arrow-up"></i>
											<div className="position-relative w-100">
												<input 
													type="file" 
													id="reraCertificate" 
													name="reraCertificate"
													className={`form-control lg ${errors.reraCertificate ? 'is-invalid' : ''}`} 
													placeholder="RERA Reg. Number*"
													onChange={handleFileChange}
													accept=".pdf,.jpg,.jpeg,.png"
												/>
												<label 
													className="input-group-text text-start lg border-top-0 border-bottom-0 bg-white position-absolute w-100 h-100 top-0 form-control text-truncate d-block" 
													htmlFor="reraCertificate"
												>
													{fileName !== '📂 No file selected' ? fileName : 'Please upload the RERA Registration Certificate'}
												</label>
											</div>
										</div>
										{errors.reraCertificate && <div className="text-danger small mt-1">{errors.reraCertificate}</div>}
									</div>
									<div className="col-sm-12">
										<div className="form-group">
											<textarea 
												id="con_message" 
												name="con_message" 
												value={formData.con_message}
												onChange={handleInputChange}
												className="form-control lg bg-white border-top-0 border-bottom-0" 
												cols={7} 
												rows={10} 
												placeholder="Message"
											></textarea>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="readmore mt-3">
											<input type="hidden" name="operation" value="contact_enq" />
											<button 
												type="submit" 
												id="con_btn" 
												className="button mx-auto bg-dark text-white mw-100 w-100"
												disabled={isSubmitting}
											>
												{isSubmitting ? 'Submitting...' : 'Submit'}
											</button>
										</div>
									</div>
								</div>
							</form>        
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
