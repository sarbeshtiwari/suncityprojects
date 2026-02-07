'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
// import { submitGrievanceForm } from '../../lib/formHandlers';
import OTPVerificationModal from '@/components/OTPVerificationModal';

interface ValidationErrors {
	con_name?: string;
	con_email?: string;
	con_isd?: string;
	rebuyers?: string;
	flatNumber?: string;
	con_message?: string;
}

function GrievanceAssistanceCenterPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
	const [errors, setErrors] = useState<ValidationErrors>({});
	const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());
	// OTP states
	const [showOTPModal, setShowOTPModal] = useState(false);
	const [otpMobile, setOtpMobile] = useState('');
	const [formData, setFormData] = useState({
		con_name: '',
		con_email: '',
		rebuyers: '',
		flatNumber: '',
		con_message: '',
		image: '',
	});

	// Mobile input ref (uncontrolled to avoid conflicts with intlTelInput)
	const mobileInputRef = useRef<HTMLInputElement | null>(null);

	// Project-specific officer data
	const projectOfficers = {
		'Jewel Of India Phase-2': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		},
		'Jewel Tower': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		},
		'Suncity Ultima': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		},
		'The Empire': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		},
		'Jewel Farms': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		},
		'The Empire Centre': {
			name: 'Suncity Grievance Team',
			mobile: '8447737045',
			email: 'branding@suncityprojects.com'
		}
	};

	// Verify OTP
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

	// On OTP verified submit the form
	// const handleOTPVerified = async () => {
	// 	setShowOTPModal(false);
	// 	setIsSubmitting(true);
	// 	const formEl = document.getElementById('cp_form') as HTMLFormElement | null;
	// 	const formDataObj = formEl ? new FormData(formEl) : new FormData();
	// 	// Ensure con_isd is present on submission
	// 	if (!formDataObj.get('con_isd')) {
	// 		let finalMobile = '';
	// 		if (typeof window !== 'undefined') {
	// 			const input = mobileInputRef.current;
	// 			if (input && (window as any).intlTelInput) {
	// 				const iti = (window as any).intlTelInput.getInstance(input);
	// 				if (iti) finalMobile = iti.getNumber() || input.value || '';
	// 			} else if (input) {
	// 				finalMobile = input.value || '';
	// 			}
	// 		}
	// 		if (finalMobile) formDataObj.set('con_isd', finalMobile);
	// 	}

	// 	const result = await submitGrievanceForm(formDataObj);
	// 	setStatusType(result.success ? 'success' : 'error');
	// 	if (result.success && formEl) {
	// 		formEl.reset();
	// 		setFormData({ con_name: '', con_email: '', rebuyers: '', flatNumber: '', con_message: '', image: '' });
	// 		setOfficerData({ name: '', mobile: '', email: '' });
	// 		setErrors({});
	// 		// Redirect to thank you
	// 		if (typeof window !== 'undefined') {
	// 			setTimeout(() => {
	// 				window.location.href = '/thank-you';
	// 			}, 500);
	// 		}
	// 	}
	// 	setIsSubmitting(false);
	// 	setOtpMobile('');
	// };

	const [officerData, setOfficerData] = useState({
		name: '',
		mobile: '',
		email: ''
	});

	// Validation functions
	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePhone = (phone: string): boolean => {
		const phoneRegex = /^[6-9]\d{9}$/;
		return phoneRegex.test(phone.replace(/\D/g, ''));
	};

	const validateRequired = (value: string): boolean => {
		return value.trim().length > 0;
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

		// Read current mobile from intlTelInput/ref
		let currentMobile = '';
		if (typeof window !== 'undefined') {
			const input = mobileInputRef.current;
			if (input && (window as any).intlTelInput) {
				const iti = (window as any).intlTelInput.getInstance(input);
				if (iti) {
					currentMobile = iti.getNumber() || input.value || '';
				} else {
					currentMobile = input?.value || '';
				}
			}
		}

		if (!validateRequired(currentMobile)) {
			newErrors.con_isd = 'Mobile number is required';
		} else if (!validatePhone(currentMobile)) {
			newErrors.con_isd = 'Please enter a valid 10-digit mobile number';
		}

		if (!validateRequired(formData.rebuyers)) {
			newErrors.rebuyers = 'Project name is required';
		}

		if (!validateRequired(formData.flatNumber)) {
			newErrors.flatNumber = 'Unit number is required';
		}

		if (!validateRequired(formData.con_message)) {
			newErrors.con_message = 'Complaint message is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		if (name === 'con_isd') {
			// Mobile input is uncontrolled; don't sync into state to avoid resets
		} else {
			setFormData(prev => ({ ...prev, [name]: value }));
		}
		
		// Auto-fill officer data when project is selected
		if (name === 'rebuyers' && value) {
			const selectedOfficer = projectOfficers[value as keyof typeof projectOfficers];
			if (selectedOfficer) {
				setOfficerData({
					name: selectedOfficer.name,
					mobile: selectedOfficer.mobile,
					email: selectedOfficer.email
				});
			}
		}
		
		// Clear error when user starts typing
		if (errors[name as keyof ValidationErrors]) {
			setErrors(prev => ({ ...prev, [name]: undefined }));
		}
	};

	const handleFileUpload = async (file: File, fieldName: string) => {
    const fileId = `${fieldName}-${Date.now()}`;
    setUploadingFiles(prev => new Set(prev).add(fileId));

    try {
      const formData = new FormData();
      formData.append('file', file);
	  formData.append('folder', 'grievance');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload file');
      return null;
    } finally {
      setUploadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileId);
        return newSet;
      });
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await handleFileUpload(file, fieldName);
    if (url) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: url
      }));
    }
  };

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// Validate form before submission
		if (!validateForm()) {
			setStatusType('error');
			return;
		}


		setIsSubmitting(true);

		// Use intlTelInput full number if available
		let mobile = '';
		if (typeof window !== 'undefined') {
			const mobileInput = mobileInputRef.current;
			if (mobileInput && (window as any).intlTelInput) {
				const iti = (window as any).intlTelInput.getInstance(mobileInput);
				if (iti) {
					const fullNumber = iti.getNumber();
					if (fullNumber) mobile = fullNumber;
				}
				if (!mobile) mobile = mobileInput.value || '';
			}
		}

		// Generate OTP
		try {
			const resp = await fetch('/api/otp/generate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ mobile })
			});
			const data = await resp.json();
			if (!resp.ok) {
				setStatusType('error');
				setIsSubmitting(false);
				return;
			}
			// Ensure the form input reflects the full number for subsequent submission
			if (mobileInputRef.current) {
				mobileInputRef.current.value = mobile;
			}
			setOtpMobile(mobile);
			setShowOTPModal(true);
		} catch (err) {
			setStatusType('error');
			setIsSubmitting(false);
		}
	};

	return (
		<div className="wrapper">
			<div className="emptyBox"></div>

			<div className="breadcrumbWrapper">
				<div className="container-lg" data-aos="fade-in">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link href="/">Home</Link></li>
						<li className="breadcrumb-item active">Grievance Assistance Center</li>
					</ol>
				</div>
			</div>

			<div className="w-100 padding overflow-hidden position-relative section-portfolio bg-white">
				<div className="container-lg">
					<div className="heading text-center mx-auto" data-aos="fade-in">
						<h1 className="title-xxl text-primary">Grievance Assistance Center</h1>
						<p className="mb-0">Home Buyer / Allottee Grievance Redressal Cell</p>
					</div>
					<div className="grievanceForm">
						<form id="cp_form" method="post" onSubmit={handleSubmit}>
							<div className="row gy-5">
								<div className="col-lg-8">
									<div className="row g-4 justify-content-center">
										<div className="col-md-6 col-sm-6">
											<div className="form-group d-flex">
												<i className="fa fa-user"></i>
												<input 
													type="text" 
													id="con_name" 
													name="con_name" 
													value={formData.con_name}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-1 border-primary ${errors.con_name ? 'is-invalid' : ''}`} 
													placeholder="Name*" 
												/>
											</div>
											{errors.con_name && <div className="text-danger small mt-1">{errors.con_name}</div>}
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="form-group d-flex">
												<i className="fa fa-envelope"></i>
												<input 
													type="email" 
													id="con_email" 
													name="con_email" 
													value={formData.con_email}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-1 border-primary ${errors.con_email ? 'is-invalid' : ''}`} 
													placeholder="Email*" 
												/>
											</div>
											{errors.con_email && <div className="text-danger small mt-1">{errors.con_email}</div>}
										</div>
										<div className="col-md-12 col-sm-6">
											<div className="form-group d-flex">
												<i className="fa fa-phone"></i>
												<input 
													type="tel" 
													id="ISDCode" 
													name="con_isd" 
													ref={mobileInputRef}
													defaultValue=""
													onChange={handleInputChange}
													className={`form-control lg bg-white border-1 border-primary ISDCode ${errors.con_isd ? 'is-invalid' : ''}`} 
													placeholder="Mobile*" 
												/>
											</div>
											{errors.con_isd && <div className="text-danger small mt-1">{errors.con_isd}</div>}
										</div>
										<div className="col-sm-6">
											<div className="form-group d-flex">
												<i className="fa fa-building"></i>
												<select 
													className={`form-control lg bg-white border-1 border-primary form-select ${errors.rebuyers ? 'is-invalid' : ''}`} 
													name="rebuyers" 
													id="rebuyers"
													value={formData.rebuyers}
													onChange={handleInputChange}
												>
													<option value="">Project Name</option>
													<option value="Jewel Of India Phase-2">Jewel Of India Phase-2</option>
													<option value="Jewel Tower">Jewel Tower</option>
													<option value="Suncity Ultima">Suncity Ultima</option>
													<option value="The Empire">The Empire</option>
													<option value="Jewel Farms">Jewel Farms</option>
													<option value="The Empire Centre">The Empire Centre</option>
												</select>
											</div>
											{errors.rebuyers && <div className="text-danger small mt-1">{errors.rebuyers}</div>}
										</div>
										<div className="col-sm-6">
											<div className="form-group d-flex">
												<i className="fa fa-building"></i>
												<input 
													type="text" 
													id="flatNumber" 
													name="flatNumber" 
													value={formData.flatNumber}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-1 border-primary ${errors.flatNumber ? 'is-invalid' : ''}`} 
													placeholder="Unit Number*" 
												/>
											</div>
											{errors.flatNumber && <div className="text-danger small mt-1">{errors.flatNumber}</div>}
										</div>
										<div className="col-sm-12">
											<div className="form-group">
												<textarea 
													id="con_message" 
													name="con_message" 
													value={formData.con_message}
													onChange={handleInputChange}
													className={`form-control lg bg-white border-1 border-primary ${errors.con_message ? 'is-invalid' : ''}`} 
													cols={8} 
													rows={!formData.rebuyers ? 13 : 10} 
													placeholder="Complaint Message*"
												></textarea>
											</div>
											{errors.con_message && <div className="text-danger small mt-1">{errors.con_message}</div>}
										</div>
										<div className='col-sm-12'>
											<label className="form-label small fw-medium text-muted">Upload Image</label>
											<input
												type="file"
												accept="image/*"
												onChange={(e) => handleFileChange(e, 'image')}
												required={!formData.image}
												className="form-control"
											/>											
											{formData.image && (
												<div className="mt-2">
													<img src={formData.image} alt="Grievance Image Preview" className="rounded" style={{height: '10rem', width: '15rem', objectFit: 'cover'}} />
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="inner h-100 p-4 bg-secondary-light">
										<h5 className="fw-light mb-4">Grievance Redressal Officer</h5>
										{!formData.rebuyers && (
											<div className="alert alert-warning small mb-3" role="alert">
												<i className="fa fa-info-circle me-2"></i>
												Select a project to view assigned officer details
											</div>
										)}
										<div className="form-group d-flex mb-3">
											<i className="fa fa-user border-0 bg-white"></i>
											<input 
												type="text" 
												id="officer_name" 
												readOnly 
												className="form-control lg bg-white" 
												placeholder="Officer Name*" 
												value={officerData.name}
											/>
										</div>
										<div className="form-group d-flex mb-3">
											<i className="fa fa-phone border-0 bg-white"></i>
											<input 
												type="tel" 
												id="officer_mobile" 
												readOnly 
												className="form-control lg bg-white" 
												placeholder="Officer Mobile*" 
												value={officerData.mobile}
											/>
										</div>
										<div className="form-group d-flex mb-4">
											<i className="fa fa-envelope border-0 bg-white"></i>
											<input 
												type="email" 
												id="officer_email" 
												readOnly 
												className="form-control lg bg-white" 
												placeholder="Officer Email*" 
												value={officerData.email}
											/>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item d-flex gap-5 align-items-center justify-content-between"><small>Total number of Complaints/Grievances received</small> <span className="badge bg-primary">00</span></li>
											<li className="list-group-item d-flex gap-5 align-items-center justify-content-between"><small>Total number of Complaints/Grievances Settled</small> <span className="badge bg-primary">00</span></li>
										</ul>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="readmore mt-2">
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
			{/* {showOTPModal && (
				<OTPVerificationModal
					isOpen={showOTPModal}
					onClose={handleOTPVerified}
					onVerify={verifyOTP}
					mobile={otpMobile}
				/>
			)} */}
		</div>
	);
}

export default GrievanceAssistanceCenterPage;
