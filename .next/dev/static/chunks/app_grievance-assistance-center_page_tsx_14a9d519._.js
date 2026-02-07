(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/grievance-assistance-center/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GrievanceAssistanceCenterPage() {
    _s();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusType, setStatusType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [uploadingFiles, setUploadingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // OTP states
    const [showOTPModal, setShowOTPModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpMobile, setOtpMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        con_name: '',
        con_email: '',
        rebuyers: '',
        flatNumber: '',
        con_message: '',
        image: ''
    });
    // Mobile input ref (uncontrolled to avoid conflicts with intlTelInput)
    const mobileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const verifyOTP = async (otp)=>{
        try {
            const response = await fetch('/api/otp/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mobile: otpMobile,
                    otp
                })
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
    const [officerData, setOfficerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        mobile: '',
        email: ''
    });
    // Validation functions
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePhone = (phone)=>{
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(phone.replace(/\D/g, ''));
    };
    const validateRequired = (value)=>{
        return value.trim().length > 0;
    };
    const validateForm = ()=>{
        const newErrors = {};
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
        if ("TURBOPACK compile-time truthy", 1) {
            const input = mobileInputRef.current;
            if (input && window.intlTelInput) {
                const iti = window.intlTelInput.getInstance(input);
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
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'con_isd') {
        // Mobile input is uncontrolled; don't sync into state to avoid resets
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
        // Auto-fill officer data when project is selected
        if (name === 'rebuyers' && value) {
            const selectedOfficer = projectOfficers[value];
            if (selectedOfficer) {
                setOfficerData({
                    name: selectedOfficer.name,
                    mobile: selectedOfficer.mobile,
                    email: selectedOfficer.email
                });
            }
        }
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: undefined
                }));
        }
    };
    const handleFileUpload = async (file, fieldName)=>{
        const fileId = `${fieldName}-${Date.now()}`;
        setUploadingFiles((prev)=>new Set(prev).add(fileId));
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', 'grievance');
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
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
        } finally{
            setUploadingFiles((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(fileId);
                return newSet;
            });
        }
    };
    const handleFileChange = async (e, fieldName)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const url = await handleFileUpload(file, fieldName);
        if (url) {
            setFormData((prev)=>({
                    ...prev,
                    [fieldName]: url
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Validate form before submission
        if (!validateForm()) {
            setStatusType('error');
            return;
        }
        setIsSubmitting(true);
        // Use intlTelInput full number if available
        let mobile = '';
        if ("TURBOPACK compile-time truthy", 1) {
            const mobileInput = mobileInputRef.current;
            if (mobileInput && window.intlTelInput) {
                const iti = window.intlTelInput.getInstance(mobileInput);
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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mobile
                })
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "emptyBox"
            }, void 0, false, {
                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                lineNumber: 321,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "breadcrumbWrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    "data-aos": "fade-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "breadcrumb",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "breadcrumb-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 39
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                lineNumber: 326,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "breadcrumb-item active",
                                children: "Grievance Assistance Center"
                            }, void 0, false, {
                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                lineNumber: 327,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                        lineNumber: 325,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                    lineNumber: 324,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                lineNumber: 323,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-100 padding overflow-hidden position-relative section-portfolio bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "heading text-center mx-auto",
                            "data-aos": "fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "title-xxl text-primary",
                                    children: "Grievance Assistance Center"
                                }, void 0, false, {
                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-0",
                                    children: "Home Buyer / Allottee Grievance Redressal Cell"
                                }, void 0, false, {
                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/grievance-assistance-center/page.tsx",
                            lineNumber: 334,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grievanceForm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "cp_form",
                                method: "post",
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row gy-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row g-4 justify-content-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6 col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-user"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "con_name",
                                                                        name: "con_name",
                                                                        value: formData.con_name,
                                                                        onChange: handleInputChange,
                                                                        className: `form-control lg bg-white border-1 border-primary ${errors.con_name ? 'is-invalid' : ''}`,
                                                                        placeholder: "Name*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.con_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.con_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6 col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-envelope"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        id: "con_email",
                                                                        name: "con_email",
                                                                        value: formData.con_email,
                                                                        onChange: handleInputChange,
                                                                        className: `form-control lg bg-white border-1 border-primary ${errors.con_email ? 'is-invalid' : ''}`,
                                                                        placeholder: "Email*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.con_email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.con_email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-12 col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-phone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        id: "ISDCode",
                                                                        name: "con_isd",
                                                                        ref: mobileInputRef,
                                                                        defaultValue: "",
                                                                        onChange: handleInputChange,
                                                                        className: `form-control lg bg-white border-1 border-primary ISDCode ${errors.con_isd ? 'is-invalid' : ''}`,
                                                                        placeholder: "Mobile*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.con_isd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.con_isd
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-building"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: `form-control lg bg-white border-1 border-primary form-select ${errors.rebuyers ? 'is-invalid' : ''}`,
                                                                        name: "rebuyers",
                                                                        id: "rebuyers",
                                                                        value: formData.rebuyers,
                                                                        onChange: handleInputChange,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Project Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 399,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Jewel Of India Phase-2",
                                                                                children: "Jewel Of India Phase-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 400,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Jewel Tower",
                                                                                children: "Jewel Tower"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Suncity Ultima",
                                                                                children: "Suncity Ultima"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "The Empire",
                                                                                children: "The Empire"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 403,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Jewel Farms",
                                                                                children: "Jewel Farms"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 404,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "The Empire Centre",
                                                                                children: "The Empire Centre"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.rebuyers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.rebuyers
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-building"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "flatNumber",
                                                                        name: "flatNumber",
                                                                        value: formData.flatNumber,
                                                                        onChange: handleInputChange,
                                                                        className: `form-control lg bg-white border-1 border-primary ${errors.flatNumber ? 'is-invalid' : ''}`,
                                                                        placeholder: "Unit Number*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.flatNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.flatNumber
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-sm-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    id: "con_message",
                                                                    name: "con_message",
                                                                    value: formData.con_message,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-1 border-primary ${errors.con_message ? 'is-invalid' : ''}`,
                                                                    cols: 8,
                                                                    rows: !formData.rebuyers ? 13 : 10,
                                                                    placeholder: "Complaint Message*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 12
                                                            }, this),
                                                            errors.con_message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-1",
                                                                children: errors.con_message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-sm-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label small fw-medium text-muted",
                                                                children: "Upload Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: (e)=>handleFileChange(e, 'image'),
                                                                required: !formData.image,
                                                                className: "form-control"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 12
                                                            }, this),
                                                            formData.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: formData.image,
                                                                    alt: "Grievance Image Preview",
                                                                    className: "rounded",
                                                                    style: {
                                                                        height: '10rem',
                                                                        width: '15rem',
                                                                        objectFit: 'cover'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 14
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner h-100 p-4 bg-secondary-light",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-light mb-4",
                                                        children: "Grievance Redressal Officer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 11
                                                    }, this),
                                                    !formData.rebuyers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "alert alert-warning small mb-3",
                                                        role: "alert",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fa fa-info-circle me-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 13
                                                            }, this),
                                                            "Select a project to view assigned officer details"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group d-flex mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fa fa-user border-0 bg-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "officer_name",
                                                                readOnly: true,
                                                                className: "form-control lg bg-white",
                                                                placeholder: "Officer Name*",
                                                                value: officerData.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group d-flex mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fa fa-phone border-0 bg-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                id: "officer_mobile",
                                                                readOnly: true,
                                                                className: "form-control lg bg-white",
                                                                placeholder: "Officer Mobile*",
                                                                value: officerData.mobile
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group d-flex mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fa fa-envelope border-0 bg-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "officer_email",
                                                                readOnly: true,
                                                                className: "form-control lg bg-white",
                                                                placeholder: "Officer Email*",
                                                                value: officerData.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-group list-group-flush",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "list-group-item d-flex gap-5 align-items-center justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Total number of Complaints/Grievances received"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 100
                                                                    }, this),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge bg-primary",
                                                                        children: "00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 162
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "list-group-item d-flex gap-5 align-items-center justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Total number of Complaints/Grievances Settled"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 100
                                                                    }, this),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge bg-primary",
                                                                        children: "00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 161
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-sm-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "readmore mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "operation",
                                                        value: "contact_enq"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        id: "con_btn",
                                                        className: "button mx-auto bg-dark text-white mw-100 w-100",
                                                        disabled: isSubmitting,
                                                        children: isSubmitting ? 'Submitting...' : 'Submit'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                                lineNumber: 339,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/grievance-assistance-center/page.tsx",
                            lineNumber: 338,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/grievance-assistance-center/page.tsx",
                    lineNumber: 333,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/grievance-assistance-center/page.tsx",
                lineNumber: 332,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/grievance-assistance-center/page.tsx",
        lineNumber: 320,
        columnNumber: 3
    }, this);
}
_s(GrievanceAssistanceCenterPage, "ex8H+Fn7PwO8NLUKRf07Prz9SZs=");
_c = GrievanceAssistanceCenterPage;
const __TURBOPACK__default__export__ = GrievanceAssistanceCenterPage;
var _c;
__turbopack_context__.k.register(_c, "GrievanceAssistanceCenterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_grievance-assistance-center_page_tsx_14a9d519._.js.map