(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/explore-career/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExploreCareer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/CareerNavigation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../lib/formHandlers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/OTPVerificationModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ExploreCareer() {
    _s();
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedJob, setSelectedJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mountKey, setMountKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusType, setStatusType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // OTP states
    const [showOTPModal, setShowOTPModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpMobile, setOtpMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const pendingFormDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        crfirstname: '',
        crlastname: '',
        crmobile: '',
        cremail: '',
        jobPosition: '',
        experience: '',
        shortdescription: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreCareer.useEffect": ()=>{
            const initCareerPage = {
                "ExploreCareer.useEffect.initCareerPage": ()=>{
                    const applyWrapper = document.querySelector('#applyWrapper');
                    if (applyWrapper) {
                        applyWrapper.style.display = 'none';
                    }
                    window.applyNow = ({
                        "ExploreCareer.useEffect.initCareerPage": (funArea, jobrole)=>{
                            const applyWrapper = document.querySelector('#applyWrapper');
                            if (applyWrapper) {
                                setTimeout({
                                    "ExploreCareer.useEffect.initCareerPage": function() {
                                        applyWrapper.style.display = 'block';
                                        applyWrapper.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                        setFormData({
                                            "ExploreCareer.useEffect.initCareerPage": (prev)=>({
                                                    ...prev,
                                                    experience: funArea,
                                                    jobPosition: jobrole
                                                })
                                        }["ExploreCareer.useEffect.initCareerPage"]);
                                    }
                                }["ExploreCareer.useEffect.initCareerPage"], 400);
                            }
                        }
                    })["ExploreCareer.useEffect.initCareerPage"];
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.AOS) {
                        window.AOS.init();
                    }
                    const initBootstrapModals = {
                        "ExploreCareer.useEffect.initCareerPage.initBootstrapModals": ()=>{
                            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.bootstrap) {
                                try {
                                    const modals = document.querySelectorAll('.modal');
                                    modals.forEach({
                                        "ExploreCareer.useEffect.initCareerPage.initBootstrapModals": (modal, index)=>{
                                            try {
                                                const modalInstance = new window.bootstrap.Modal(modal);
                                                modal.addEventListener('hidden.bs.modal', {
                                                    "ExploreCareer.useEffect.initCareerPage.initBootstrapModals": function() {
                                                        const backdrop = document.querySelector('.modal-backdrop');
                                                        if (backdrop) {
                                                            backdrop.remove();
                                                        }
                                                        document.body.classList.remove('modal-open');
                                                    }
                                                }["ExploreCareer.useEffect.initCareerPage.initBootstrapModals"]);
                                            } catch (error) {
                                                console.error(`Error initializing modal ${index + 1}:`, error);
                                            }
                                        }
                                    }["ExploreCareer.useEffect.initCareerPage.initBootstrapModals"]);
                                } catch (error) {
                                    console.error('Error during modal initialization:', error);
                                }
                            } else {
                                console.log('Bootstrap not available, retrying in 500ms...');
                                setTimeout(initBootstrapModals, 500);
                            }
                        }
                    }["ExploreCareer.useEffect.initCareerPage.initBootstrapModals"];
                    initBootstrapModals();
                    window.openModal = ({
                        "ExploreCareer.useEffect.initCareerPage": (modalId)=>{
                            const modal = document.querySelector(modalId);
                            if (modal) {
                                try {
                                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.bootstrap) {
                                        const bsModal = new window.bootstrap.Modal(modal);
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
                        }
                    })["ExploreCareer.useEffect.initCareerPage"];
                    window.dispatchEvent(new Event('resize'));
                }
            }["ExploreCareer.useEffect.initCareerPage"];
            const timer = setTimeout(initCareerPage, 1000);
            return ({
                "ExploreCareer.useEffect": ()=>clearTimeout(timer)
            })["ExploreCareer.useEffect"];
        }
    }["ExploreCareer.useEffect"], [
        mountKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreCareer.useEffect": ()=>{
            fetchJobs();
        }
    }["ExploreCareer.useEffect"], []);
    const fetchJobs = async ()=>{
        try {
            const res = await fetch("/api/admin/jobs");
            const data = await res.json();
            setJobs(data.forms);
        } catch (err) {
            console.error("Error fetching jobs:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreCareer.useEffect": ()=>{
            setMountKey(Date.now());
            window.dispatchEvent(new Event('resize'));
        }
    }["ExploreCareer.useEffect"], []);
    const clearFieldError = (fieldName)=>{
        if (fieldErrors[fieldName]) {
            setFieldErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[fieldName];
                return newErrors;
            });
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        clearFieldError(name);
    };
    const validateForm = (formData)=>{
        const errors = {};
        const firstName = formData.get('crfirstname');
        const lastName = formData.get('crlastname');
        const mobile = formData.get('crmobile');
        const email = formData.get('cremail');
        const jobPosition = formData.get('jobPosition');
        const experience = formData.get('experience');
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
    const handleFileChange = (event)=>{
        console.log('File selected:', event.target.files?.[0]);
    };
    const handleCareerSubmit = async (e)=>{
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
            const mobile = formData.get('crmobile') || '';
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
    const handleOTPVerified = async ()=>{
        setShowOTPModal(false);
        setIsSubmitting(true);
        const formData = pendingFormDataRef.current || new FormData();
        const result = await submitCareerForm(formData);
        setStatusMessage(result.message);
        setStatusType(result.success ? 'success' : 'error');
        if (result.success) {
            setFormData({
                crfirstname: '',
                crlastname: '',
                crmobile: '',
                cremail: '',
                jobPosition: '',
                experience: '',
                shortdescription: ''
            });
            setFieldErrors({});
        }
        pendingFormDataRef.current = null;
        setOtpMobile('');
        setIsSubmitting(false);
    };
    const handleShowJobDescription = (job)=>{
        setSelectedJob(job);
        window.openModal('#jobDescModal');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "emptyBox"
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 292,
                    columnNumber: 5
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore-career/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "breadcrumb-item",
                                    children: "Careers"
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "breadcrumb-item active",
                                    children: "Explore Career"
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore-career/page.tsx",
                            lineNumber: 296,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/explore-career/page.tsx",
                        lineNumber: 295,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 294,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CareerNavigation, {
                        activePage: "explore-career"
                    }, void 0, false, {
                        fileName: "[project]/app/explore-career/page.tsx",
                        lineNumber: 305,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 304,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 padding position-relative bg-white awards-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "Openings"
                            }, void 0, false, {
                                fileName: "[project]/app/explore-career/page.tsx",
                                lineNumber: 310,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/explore-career/page.tsx",
                            lineNumber: 309,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "heading mx-auto text-center",
                                    "data-aos": "fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "title-xxl text-primary",
                                            children: "Current Openings"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-0",
                                            children: [
                                                "We have an ambitious road ahead of us. Join our team and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 85
                                                }, this),
                                                "help us shape the future.."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row g-4",
                                    children: jobs.length && jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-4 col-md-6 career-card",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card inside",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-header",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "job-role",
                                                            children: job.position_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/explore-career/page.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-group list-group-flush",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "list-group-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Posted On"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "job-positions",
                                                                        children: job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 71
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "list-group-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Job Position"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "job-positions",
                                                                        children: job.position_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 74
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "list-group-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Experience"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "job-experience",
                                                                        children: job.experience_required
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 72
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 d-flex gap-3 align-items-center justify-content-between flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "readmore mt-0 w-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "button button-sm",
                                                                    onClick: ()=>window.applyNow(`${job.experience_required}`, `${job.position_name}`),
                                                                    children: "Apply Now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 14
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "viewmore mt-0 w-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    "data-bs-target": "#jobDescModal",
                                                                    "data-bs-toggle": "modal",
                                                                    onClick: ()=>handleShowJobDescription(job),
                                                                    className: "button",
                                                                    children: "Job Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 14
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/explore-career/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 11
                                            }, this)
                                        }, job._id, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 10
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-0 mt-5",
                                    children: [
                                        "Fill out the form and we'll be in touch soon! The aspirants may send their resumes to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:hrd@suncityprojects.com",
                                            children: "hrd@suncityprojects.com"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 118
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore-career/page.tsx",
                            lineNumber: 312,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 308,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 padding bg-primary bg-sec",
                    id: "applyWrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading mx-auto text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "title-xxl mb-0",
                                    children: "Apply Online"
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/explore-career/page.tsx",
                                lineNumber: 357,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contactFormBox",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "career-form",
                                    id: "careerForm",
                                    method: "post",
                                    onSubmit: handleCareerSubmit,
                                    children: [
                                        statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `alert small py-2 rounded-0 ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`,
                                            role: "alert",
                                            children: statusMessage
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row justify-content-center gy-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-lg-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row g-3",
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
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 372,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                name: "crfirstname",
                                                                                id: "crfirstname",
                                                                                value: formData.crfirstname,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "First Name*",
                                                                                onChange: handleInputChange
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 373,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.crfirstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.crfirstname
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-6 col-sm-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-user"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 384,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                name: "crlastname",
                                                                                id: "crlastname",
                                                                                value: formData.crlastname,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "Last Name*",
                                                                                onChange: handleInputChange
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 385,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.crlastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.crlastname
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-6 col-sm-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-phone"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 396,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "tel",
                                                                                name: "crmobile",
                                                                                id: "crmobile",
                                                                                value: formData.crmobile,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "Tel/Mobile*",
                                                                                onChange: handleInputChange
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 397,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.crmobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.crmobile
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 12
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
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 408,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "email",
                                                                                name: "cremail",
                                                                                id: "cremail",
                                                                                value: formData.cremail,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "Email*",
                                                                                onChange: handleInputChange
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 409,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.cremail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 413,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.cremail
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-6 col-sm-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-user-tie"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 420,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                readOnly: true,
                                                                                name: "jobPosition",
                                                                                id: "jobPosition",
                                                                                value: formData.jobPosition,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "Job Position*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 419,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.jobPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 425,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.jobPosition
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-6 col-sm-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-calendar-check"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 432,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                readOnly: true,
                                                                                name: "experience",
                                                                                id: "experience",
                                                                                value: formData.experience,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                                                placeholder: "Experience*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    fieldErrors.experience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-danger small mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-exclamation-circle me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 437,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            fieldErrors.experience
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-12 col-sm-12",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-group d-flex",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-file-pdf"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 444,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                name: "resume",
                                                                                id: "resume",
                                                                                onChange: handleFileChange,
                                                                                accept: "application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                                                                size: 34,
                                                                                maxLength: 255,
                                                                                className: "form-control lg bg-white border-top-0 border-bottom-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                                lineNumber: 445,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "hidden",
                                                                        name: "resumefile",
                                                                        id: "resumefile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 456,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-lg-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "form-control h-100 bg-light",
                                                        name: "shortdescription",
                                                        id: "shortdescription",
                                                        value: formData.shortdescription,
                                                        placeholder: "Short Description",
                                                        rows: 7,
                                                        onChange: handleInputChange
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-lg-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readmore",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                name: "car_action",
                                                                value: "active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "button light mw-100 w-100 justify-content-center mx-auto",
                                                                id: "contsubmti",
                                                                disabled: isSubmitting,
                                                                children: [
                                                                    isSubmitting ? 'Submitting...' : 'Submit',
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa-solid fa-paper-plane"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/explore-career/page.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 361,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/explore-career/page.tsx",
                                lineNumber: 360,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore-career/page.tsx",
                        lineNumber: 356,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 355,
                    columnNumber: 5
                }, this),
                ("TURBOPACK compile-time value", "object") !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OTPVerificationModal, {
                    isOpen: showOTPModal,
                    mobile: otpMobile,
                    onVerify: verifyOTP,
                    onClose: handleOTPVerified,
                    onCancel: ()=>{
                        setShowOTPModal(false);
                        setIsSubmitting(false);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 484,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal fade",
                    id: "jobDescModal",
                    tabIndex: -1,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-dialog modal-lg modal-dialog-centered",
                        role: "document",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "close d-flex align-items-center justify-content-center",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "ion-ios-close",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore-career/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "fw-light text-primary mb-0",
                                        children: "Job Description"
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore-career/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 499,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-body p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "mb-3 fw-light text-primary",
                                            children: "Job Responsibilities"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "listContainer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-unstyled mb-3",
                                                children: selectedJob?.job_responsibilities?.split(";").filter((r)=>r.trim() !== "").map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: r.trim()
                                                    }, i, false, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 12
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore-career/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "mb-3 fw-light text-primary",
                                            children: "Qualifications"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "listContainer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-unstyled mb-3",
                                                children: selectedJob?.qualifications?.split(";").filter((r)=>r.trim() !== "").map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: r.trim()
                                                    }, i, false, {
                                                        fileName: "[project]/app/explore-career/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 12
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore-career/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-top my-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "CTC:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore-career/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 29
                                                }, this),
                                                " ",
                                                selectedJob?.CTC
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "readmore",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.applyNow(`${selectedJob?.experience_required}`, `${selectedJob?.position_name}`),
                                                "data-bs-dismiss": "modal",
                                                "aria-label": "Close",
                                                className: "button",
                                                children: "Apply Now"
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore-career/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore-career/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore-career/page.tsx",
                                    lineNumber: 502,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore-career/page.tsx",
                            lineNumber: 495,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/explore-career/page.tsx",
                        lineNumber: 494,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/explore-career/page.tsx",
                    lineNumber: 493,
                    columnNumber: 5
                }, this)
            ]
        }, mountKey, true, {
            fileName: "[project]/app/explore-career/page.tsx",
            lineNumber: 291,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
_s(ExploreCareer, "8iRC94ny1BASY1JbetrrfnBDjg8=");
_c = ExploreCareer;
var _c;
__turbopack_context__.k.register(_c, "ExploreCareer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_explore-career_page_tsx_23c06c4e._.js.map