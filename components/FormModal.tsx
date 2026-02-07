// 'use client';

// import { useEffect, useState } from 'react';
// import { submitProjectEnquiryForm } from '../../lib/formHandlers';
// import { useRouter } from 'next/navigation';
// import OTPVerificationModal from './OTPVerificationModal';

// export default function FormModal() {
// 	const router = useRouter();
// 	const [modalHeading, setModalHeading] = useState('Register Your Interest');
// 	const [pageName, setPageName] = useState('');
// 	const [showVisitDate, setShowVisitDate] = useState(false);
// 	const [showEnquiryType, setShowEnquiryType] = useState(false);
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	const [statusMessage, setStatusMessage] = useState('');
// 	const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
// 	const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
	
// 	// OTP verification states
// 	const [showOTPModal, setShowOTPModal] = useState(false);
// 	const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);
// 	const [otpMobile, setOtpMobile] = useState('');

// 	useEffect(() => {
// 		setPageName(window.location.href.toString());
// 	}, []);

// 	// Function to clear field errors when user starts typing
// 	const clearFieldError = (fieldName: string) => {
// 		if (fieldErrors[fieldName]) {
// 			setFieldErrors(prev => {
// 				const newErrors = { ...prev };
// 				delete newErrors[fieldName];
// 				return newErrors;
// 			});
// 		}
// 	};

// 	// Function to generate OTP
// 	const generateOTP = async (mobile: string) => {
// 		try {
// 			const response = await fetch('/api/otp/generate', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify({ mobile }),
// 			});

// 			const result = await response.json();
// 			return response.ok ? { success: true, data: result } : { success: false, error: result.error };
// 		} catch (error) {
// 			console.error('OTP generation error:', error);
// 			return { success: false, error: 'Failed to generate OTP' };
// 		}
// 	};

// 	// Function to verify OTP
// 	const verifyOTP = async (otp: string) => {
// 		try {
// 			const response = await fetch('/api/otp/verify', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify({ mobile: otpMobile, otp }),
// 			});

// 			const result = await response.json();
// 			return response.ok && result.verified;
// 		} catch (error) {
// 			console.error('OTP verification error:', error);
// 			return false;
// 		}
// 	};

// 	// Function to handle OTP verification success
// 	const handleOTPVerified = async () => {
// 		if (!pendingFormData) return;

// 		setShowOTPModal(false);
// 		setIsSubmitting(true);
// 		setStatusMessage('');

// 		// Ensure source field is always set
// 		if (!pendingFormData.get('msource')) {
// 			pendingFormData.set('msource', modalHeading || 'Register Your Interest');
// 		}

// 		const result = await submitProjectEnquiryForm(pendingFormData);

// 		setStatusMessage(result.message);
// 		setStatusType(result.success ? 'success' : 'error');

// 		if (result.success) {
// 			// Reset form safely
// 			const form = document.getElementById('modal_form') as HTMLFormElement;
// 			if (form) {
// 				form.reset();
// 			}
// 			// Reset submitting state immediately for success
// 			setIsSubmitting(false);
			
// 			// Navigate to thank you page after 2 seconds
// 			setTimeout(() => {
// 				// Navigate to thank you page
// 				window.location.href = '/thank-you';
// 			}, 2000);
// 		} else {
// 			// Only reset submitting state if not successful
// 			setIsSubmitting(false);
// 		}

// 		// Clear pending data
// 		setPendingFormData(null);
// 		setOtpMobile('');
// 	};

// 	// Function to handle OTP modal close (user cancellation)
// 	const handleOTPModalClose = () => {
// 		setShowOTPModal(false);
// 		setPendingFormData(null);
// 		setOtpMobile('');
// 		setIsSubmitting(false);
// 		// Optionally reopen the form modal
// 		if (typeof window !== 'undefined') {
// 			setTimeout(() => {
// 				const formModal = document.getElementById('formModal');
// 				if (formModal) {
// 					const bootstrap = (window as any).bootstrap;
// 					if (bootstrap) {
// 						const modalInstance = new bootstrap.Modal(formModal);
// 						modalInstance.show();
// 					}
// 				}
// 			}, 300);
// 		}
// 	};

// 	useEffect(() => {
// 		// Only run on client side to prevent SSR issues
// 		if (typeof window === 'undefined') return;

// 		// Handle modal opening from buttons
// 		const handleModalOpen = (e: Event) => {
// 			const target = e.target as HTMLElement;
// 			const source = target.getAttribute('data-bs-source');
			
// 			if (source) {
// 				setModalHeading(source);
// 				setShowVisitDate(source.includes('site visit'));
// 				setShowEnquiryType(source.includes('enquire'));
// 			}
// 		};

// 		// Add event listeners for modal triggers
// 		document.addEventListener('click', (e) => {
// 			const target = e.target as HTMLElement;
// 			if (target.matches('[data-bs-toggle="modal"]') && target.getAttribute('href') === '#formModal') {
// 				handleModalOpen(e);
// 			}
// 		});

// 		// Update modal heading when modal is shown
// 		const modal = document.getElementById('formModal');
// 		if (modal) {
// 			modal.addEventListener('show.bs.modal', (e) => {
// 				const trigger = (e as any).relatedTarget as HTMLElement;
// 				if (trigger) {
// 					const source = trigger.getAttribute('data-bs-source');
// 					if (source) {
// 						setModalHeading(source);
// 						setShowVisitDate(source.includes('site visit'));
// 						setShowEnquiryType(source.includes('enquire'));
// 					}
// 				}
// 			});
// 		}

// 		return () => {
// 			// Cleanup event listeners if needed
// 		};
// 	}, []);

// 	const validateForm = (formData: FormData) => {
// 		const errors: {[key: string]: string} = {};
		
// 		// Required field validation
// 		const name = formData.get('mname') as string;
// 		const email = formData.get('memail') as string;
// 		const mobile = formData.get('mmobile') as string;
		
// 		if (!name || name.trim().length < 2) {
// 			errors.name = 'Name must be at least 2 characters long';
// 		}
		
// 		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// 			errors.email = 'Please enter a valid email address';
// 		}
		
// 		if (!mobile || mobile.trim().length < 10) {
// 			errors.mobile = 'Mobile number must be at least 10 digits';
// 		}
		
// 		// Conditional validation for enquiry type
// 		if (showEnquiryType) {
// 			const enquiryType = formData.get('con_enquiry_type') as string;
// 			if (!enquiryType || enquiryType.trim() === '') {
// 				errors.enquiryType = 'Please select an enquiry type';
// 			}
// 		}
		
// 		// Conditional validation for visit date
// 		if (showVisitDate) {
// 			const visitDate = formData.get('mdate') as string;
// 			if (!visitDate || visitDate.trim() === '') {
// 				errors.visitDate = 'Please select a visit date';
// 			} else {
// 				const selectedDate = new Date(visitDate);
// 				const today = new Date();
// 				today.setHours(0, 0, 0, 0);
// 				if (selectedDate < today) {
// 					errors.visitDate = 'Visit date cannot be in the past';
// 				}
// 			}
// 		}
		
// 		return errors;
// 	};

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		setIsSubmitting(true);
// 		setStatusMessage('');

// 		const formData = new FormData(e.currentTarget);
		
// 		// Validate form
// 		const validationErrors = validateForm(formData);
// 		if (Object.keys(validationErrors).length > 0) {
// 			setFieldErrors(validationErrors);
// 			setStatusMessage('Please correct the errors below');
// 			setStatusType('error');
// 			setIsSubmitting(false);
// 			return;
// 		}
		
// 		// Clear field errors if validation passes
// 		setFieldErrors({});
		
// 		// Get mobile number for OTP - handle ISD code properly
// 		let mobile = formData.get('mmobile') as string;
// 		if (!mobile) {
// 			setStatusMessage('Mobile number is required');
// 			setStatusType('error');
// 			setIsSubmitting(false);
// 			return;
// 		}

// 		// Check if we have the intlTelInput instance and get the full international number
// 		if (typeof window !== 'undefined') {
// 			const mobileInput = document.getElementById('mmobile') as HTMLInputElement;
// 			if (mobileInput && (window as any).intlTelInput) {
// 				const iti = (window as any).intlTelInput.getInstance(mobileInput);
// 				if (iti) {
// 					const fullNumber = iti.getNumber();
// 					if (fullNumber) {
// 						mobile = fullNumber;
// 					}
// 				}
// 			}
// 		}

// 		// Generate and send OTP
// 		const otpResult = await generateOTP(mobile);
// 		if (!otpResult.success) {
// 			setStatusMessage(otpResult.error || 'Failed to send OTP. Please try again.');
// 			setStatusType('error');
// 			setIsSubmitting(false);
// 			return;
// 		}

// 		// Store form data and show OTP modal
// 		setPendingFormData(formData);
// 		setOtpMobile(mobile);
		
// 		// Close the form modal first
// 		if (typeof window !== 'undefined') {
// 			const formModal = document.getElementById('formModal');
// 			if (formModal) {
// 				const bootstrap = (window as any).bootstrap;
// 				if (bootstrap) {
// 					const modalInstance = bootstrap.Modal.getInstance(formModal);
// 					if (modalInstance) {
// 						modalInstance.hide();
// 					}
// 				}
// 			}
			
// 			// Clean up any existing modal backdrops
// 			const existingBackdrops = document.querySelectorAll('.modal-backdrop');
// 			existingBackdrops.forEach(backdrop => {
// 				if (backdrop.parentNode) {
// 					backdrop.parentNode.removeChild(backdrop);
// 				}
// 			});
// 		}
		
// 		// Show OTP modal after a short delay to allow form modal to close
// 		setTimeout(() => {
// 			setShowOTPModal(true);
// 		}, 500);
		
// 		setIsSubmitting(false);
// 	};

// 	return (
// 		<>
// 		<div className="modal fade" id="formModal" tabIndex={-1} aria-labelledby="formModalLabel" aria-modal="true" role="dialog">
// 			<div className="modal-dialog modal-dialog-centered ">
// 				<div className="modal-content">
// 					<div className="modal-body p-0">
// 						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
// 							<span aria-hidden="true">×</span>
// 						</button>
// 						<div className="row gx-0">
// 							{/* <div className="col-md-5">
// 								<div className="image-container h-100">
// 									<img src="/images/project-thumbs/jewel-tower.webp" className="h-100 w-100 object-cover" alt="Project" />
// 								</div>
// 							</div> */}
// 							<div className="col-md-12">
// 								<form className="form-container p-4 p-md-5" id="modal_form" method="post" onSubmit={handleSubmit}>
// 									<div className="modal-logo"><img src="/images/logo.svg" alt="Suncity Projects" /></div>
// 									<p className="modal-title text-center mb-3">Fill the fields to <span id="modal-heading">{modalHeading}</span>.</p>
// 									{statusMessage && (
// 										<div className={`alert small py-2 rounded-0 ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
// 											{statusMessage}
// 										</div>
// 									)}
// 									<div className="row g-3">
// 										<div id="enquire-to-whom-field" className={`col-12 ${showEnquiryType ? '' : 'd-none'}`}>
// 											<div className="form-group d-flex">
// 												<i className="fa fa-clipboard-question"></i>
// 												<select id="con_enquiry_type" name="con_enquiry_type" className="form-control form-select border-primary">
// 													<option value="">Select</option>
// 													<option value="Corporate Office">Corporate Office</option>
// 													<option value="Sales">Sales</option>
// 													<option value="Customer Support">Customer Support</option>
// 												</select>
// 											</div>
// 											{fieldErrors.enquiryType && (
// 												<div className="text-danger small mt-1">
// 													<i className="fa fa-exclamation-circle me-1"></i>
// 													{fieldErrors.enquiryType}
// 												</div>
// 											)}
// 										</div>
// 										<div className="col-12">
// 											<div className="form-group d-flex">
// 												<i className="fa fa-user"></i><input type="text" name="mname" id="mname" className="form-control border-primary" placeholder="Name*" autoComplete="false" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Name*'} onChange={() => clearFieldError('name')} />
// 											</div>
// 											{fieldErrors.name && (
// 												<div className="text-danger small mt-1">
// 													<i className="fa fa-exclamation-circle me-1"></i>
// 													{fieldErrors.name}
// 												</div>
// 											)}
// 										</div>
// 										<div className="col-12">
// 											<div className="form-group d-flex">
// 												<i className="fa fa-envelope"></i><input type="email" name="memail" id="memail" className="form-control border-primary" placeholder="Email*" autoComplete="false" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Email*'} onChange={() => clearFieldError('email')} />
// 											</div>
// 											{fieldErrors.email && (
// 												<div className="text-danger small mt-1">
// 													<i className="fa fa-exclamation-circle me-1"></i>
// 													{fieldErrors.email}
// 												</div>
// 											)}
// 										</div>
// 										<div className="col-12">
// 											<div className="form-group d-flex w-100">
// 												<i className="fa fa-phone"></i><input type="tel" name="mmobile" id="mmobile" className="form-control border-primary ISDCode" placeholder="Mobile*" autoComplete="false" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Mobile*'} onChange={() => clearFieldError('mobile')} />
// 											</div>
// 											{fieldErrors.mobile && (
// 												<div className="text-danger small mt-1">
// 													<i className="fa fa-exclamation-circle me-1"></i>
// 													{fieldErrors.mobile}
// 												</div>
// 											)}
// 										</div>
// 										<div id="visit-date" className={`col-12 ${showVisitDate ? '' : 'd-none'}`}>
// 											<div className="form-group d-flex">
// 												<i className="fa fa-calendar-days"></i><input type="date" name="mdate" id="mdate" className="form-control border-primary" placeholder="Date*" autoComplete="false" min={new Date().toISOString().split('T')[0]} onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Date*'} />
// 											</div>
// 											{fieldErrors.visitDate && (
// 												<div className="text-danger small mt-1">
// 													<i className="fa fa-exclamation-circle me-1"></i>
// 													{fieldErrors.visitDate}
// 												</div>
// 											)}
// 										</div>
// 										<div className="col-12">
// 											<div className="form-check">
// 												<input className="form-check-input" type="checkbox" value="" id="update" />
// 												<label className="form-check-label small" htmlFor="update">Keep me updated on news and offer</label>
// 											</div>
// 										</div>
// 										<div className="col-12">
// 											<small style={{ fontSize: '0.75rem' }}>Please visit the <a href="/privacy-policy" target='_blank' className="text-decoration-underline">privacy policy</a> to understand how Suncity Projects handles your personal data.</small>
// 										</div>
// 										<div className="col-12">
// 											<div className="readmore mt-2">
// 												<input type="hidden" name="operation" value="modal" />
// 												<input type="hidden" name="mpagename" id="mpagename" value={pageName}/>
// 												<input type="hidden" name="msource" id="msource" value={modalHeading} />
// 												<button 
// 													type="submit" 
// 													id="mbtnpopup" 
// 													className="button bg-dark text-white mw-100 w-100"
// 													disabled={isSubmitting}
// 												>
// 													{isSubmitting ? 'Sending OTP...' : 'Register Your Interest'}
// 												</button>
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
		
// 		{/* OTP Verification Modal - Only render on client side */}
// 		{typeof window !== 'undefined' && (
// 			<OTPVerificationModal
// 				isOpen={showOTPModal}
// 				mobile={otpMobile}
// 				onVerify={verifyOTP}
// 				onClose={handleOTPVerified}
// 				onCancel={handleOTPModalClose}
// 			/>
// 		)}
// 		</>
// 	);
// }
