module.exports = [
"[project]/app/channel-partner-registration/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChannelPartner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ChannelPartner() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('📂 No file selected');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusType, setStatusType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('in');
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('+91');
    // Country codes data
    const countryCodes = [
        {
            code: 'in',
            name: 'India',
            dialCode: '+91',
            flag: '🇮🇳'
        },
        {
            code: 'us',
            name: 'United States',
            dialCode: '+1',
            flag: '🇺🇸'
        },
        {
            code: 'gb',
            name: 'United Kingdom',
            dialCode: '+44',
            flag: '🇬🇧'
        },
        {
            code: 'au',
            name: 'Australia',
            dialCode: '+61',
            flag: '🇦🇺'
        },
        {
            code: 'ca',
            name: 'Canada',
            dialCode: '+1',
            flag: '🇨🇦'
        },
        {
            code: 'de',
            name: 'Germany',
            dialCode: '+49',
            flag: '🇩🇪'
        },
        {
            code: 'fr',
            name: 'France',
            dialCode: '+33',
            flag: '🇫🇷'
        },
        {
            code: 'jp',
            name: 'Japan',
            dialCode: '+81',
            flag: '🇯🇵'
        },
        {
            code: 'cn',
            name: 'China',
            dialCode: '+86',
            flag: '🇨🇳'
        },
        {
            code: 'sg',
            name: 'Singapore',
            dialCode: '+65',
            flag: '🇸🇬'
        },
        {
            code: 'ae',
            name: 'UAE',
            dialCode: '+971',
            flag: '🇦🇪'
        },
        {
            code: 'sa',
            name: 'Saudi Arabia',
            dialCode: '+966',
            flag: '🇸🇦'
        }
    ];
    // Get user's country on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("https://ipinfo.io").then((response)=>response.json()).then((data)=>{
            const userCountry = data && data.country ? data.country.toLowerCase() : 'in';
            const country = countryCodes.find((c)=>c.code === userCountry) || countryCodes[0];
            setSelectedCountry(country.code);
            setCountryCode(country.dialCode);
        }).catch(()=>{
            // Fallback to India
            setSelectedCountry('in');
            setCountryCode('+91');
        });
    }, []);
    // Validation functions
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePhone = (phone)=>{
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
    const validateRequired = (value)=>{
        return value.trim().length > 0;
    };
    const validateFile = (file)=>{
        if (!file) return false;
        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];
        const maxSize = 5 * 1024 * 1024; // 5MB
        return allowedTypes.includes(file.type) && file.size <= maxSize;
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
        const fileInput = document.getElementById('reraCertificate');
        const file = fileInput?.files?.[0];
        if (!file) {
            newErrors.reraCertificate = 'RERA certificate file is required';
        } else if (!validateFile(file)) {
            newErrors.reraCertificate = 'Please upload a valid PDF, JPG, or PNG file (max 5MB)';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: undefined
                }));
        }
    };
    const handleCountryChange = (e)=>{
        const countryCode = e.target.value;
        const country = countryCodes.find((c)=>c.code === countryCode);
        if (country) {
            setSelectedCountry(country.code);
            setCountryCode(country.dialCode);
        }
    };
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            // Clear file error when user selects a file
            if (errors.reraCertificate) {
                setErrors((prev)=>({
                        ...prev,
                        reraCertificate: undefined
                    }));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "emptyBox"
                }, void 0, false, {
                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                    lineNumber: 224,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "breadcrumbWrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg",
                        "data-aos": "fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "breadcrumb",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "breadcrumb-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "breadcrumb-item active",
                                    children: "Channel Partner Registration"
                                }, void 0, false, {
                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                            lineNumber: 229,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                        lineNumber: 228,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                    lineNumber: 227,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 padding position-relative cp-section bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-6 col-lg-6 position-relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "position-sticky",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "heading mb-lg-0 mx-auto ms-lg-0",
                                            "data-aos": "fade-in",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "title-xxl mb-0 text-primary",
                                                children: "Channel Partner Registration"
                                            }, void 0, false, {
                                                fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-6 col-lg-6 text-justify",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-text ps-lg-5",
                                        "data-aos": "fade-in",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-0",
                                            children: [
                                                "At ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "text-primary",
                                                    children: "Suncity Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 33
                                                }, this),
                                                ", we take pride in our ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: "30-year legacy of trust, excellence, and timely delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 104
                                                }, this),
                                                " in the real estate sector. Renowned for creating ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: "luxury landmarks that surpass expectations"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 248
                                                }, this),
                                                ", we have consistently honored every commitment, setting new benchmarks in the industry. As we step into 2025, a year that opens doors to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "text-primary",
                                                    children: "₹1000 crore investment opportunities"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 466
                                                }, this),
                                                " and a pipeline of ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: "high-class, world-class projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 553
                                                }, this),
                                                ", we extend an invitation to channel partners who share our vision of integrity and growth. Together, let's shape a future where prestige, prosperity, and promise go hand in hand."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                            lineNumber: 239,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                        lineNumber: 238,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                    lineNumber: 237,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 padding position-relative overflow-hidden cp-img bg-image",
                    style: {
                        backgroundImage: 'url(/images/channel-partner.webp)',
                        minHeight: '30rem'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                    lineNumber: 257,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 position-relative bg-secondary cp-form-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "Registration"
                            }, void 0, false, {
                                fileName: "[project]/app/channel-partner-registration/page.tsx",
                                lineNumber: 262,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                            lineNumber: 261,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            "data-aos": "fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contactFormBox cpFormBox bg-secondary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "heading mx-auto text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "fw-light text-primary mb-0",
                                            children: "Keep Rising With The Suncity"
                                        }, void 0, false, {
                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        id: "cp_form",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row g-4 justify-content-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-user"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "con_name",
                                                                    name: "con_name",
                                                                    value: formData.con_name,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_name ? 'is-invalid' : ''}`,
                                                                    placeholder: "Name*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.con_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.con_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-envelope"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    id: "con_email",
                                                                    name: "con_email",
                                                                    value: formData.con_email,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_email ? 'is-invalid' : ''}`,
                                                                    placeholder: "Email*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.con_email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.con_email
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-md-6 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-flex w-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: selectedCountry,
                                                                            onChange: handleCountryChange,
                                                                            className: "form-control lg bg-white border-top-0 border-bottom-0 me-2",
                                                                            style: {
                                                                                width: '120px',
                                                                                flexShrink: 0
                                                                            },
                                                                            children: countryCodes.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: country.code,
                                                                                    children: [
                                                                                        country.flag,
                                                                                        " ",
                                                                                        country.dialCode
                                                                                    ]
                                                                                }, country.code, true, {
                                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                                    lineNumber: 315,
                                                                                    columnNumber: 15
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            id: "con_isd",
                                                                            name: "con_isd",
                                                                            value: formData.con_isd,
                                                                            onChange: handleInputChange,
                                                                            className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.con_isd ? 'is-invalid' : ''}`,
                                                                            placeholder: "Mobile Number*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.con_isd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.con_isd
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-face-smile-beam"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "companyName",
                                                                    value: formData.companyName,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.companyName ? 'is-invalid' : ''}`,
                                                                    placeholder: "Company Name*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.companyName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.companyName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-map-marker-alt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "companyAddress",
                                                                    value: formData.companyAddress,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.companyAddress ? 'is-invalid' : ''}`,
                                                                    placeholder: "Company Address*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.companyAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.companyAddress
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-users"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "teamSize",
                                                                    value: formData.teamSize,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.teamSize ? 'is-invalid' : ''}`,
                                                                    placeholder: "Team Size*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.teamSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.teamSize
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-shield"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "reraRegNumber",
                                                                    value: formData.reraRegNumber,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.reraRegNumber ? 'is-invalid' : ''}`,
                                                                    placeholder: "RERA Reg. Number*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.reraRegNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.reraRegNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-md-6 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-file"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 form-select ${errors.rebuyers ? 'is-invalid' : ''}`,
                                                                    name: "rebuyers",
                                                                    id: "rebuyers",
                                                                    value: formData.rebuyers,
                                                                    onChange: handleInputChange,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Location Of Interest"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 399,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Baddi",
                                                                            children: "Baddi"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Delhi",
                                                                            children: "Delhi"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Gurugram",
                                                                            children: "Gurugram"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Indore",
                                                                            children: "Indore"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 403,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Jaipur",
                                                                            children: "Jaipur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Kaithal",
                                                                            children: "Kaithal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "New Chandigarh",
                                                                            children: "New Chandigarh"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 406,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Panchkula",
                                                                            children: "Panchkula"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Rewari",
                                                                            children: "Rewari"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Rohtak",
                                                                            children: "Rohtak"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Vrindavan",
                                                                            children: "Vrindavan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Yamuna Nagar",
                                                                            children: "Yamuna Nagar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Zirakpur",
                                                                            children: "Zirakpur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Other",
                                                                            children: "Other"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.rebuyers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.rebuyers
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 10
                                                }, this),
                                                formData.rebuyers === 'Other' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-md-6 offset-md-6 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-map-marker-alt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 422,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "otherLocation",
                                                                    value: formData.otherLocation,
                                                                    onChange: handleInputChange,
                                                                    className: `form-control lg bg-white border-top-0 border-bottom-0 ${errors.otherLocation ? 'is-invalid' : ''}`,
                                                                    placeholder: "Please specify the location*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 12
                                                        }, this),
                                                        errors.otherLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.otherLocation
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-md-12 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group h-100 d-flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-file-arrow-up"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "position-relative w-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            id: "reraCertificate",
                                                                            name: "reraCertificate",
                                                                            className: `form-control lg ${errors.reraCertificate ? 'is-invalid' : ''}`,
                                                                            placeholder: "RERA Reg. Number*",
                                                                            onChange: handleFileChange,
                                                                            accept: ".pdf,.jpg,.jpeg,.png"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "input-group-text text-start lg border-top-0 border-bottom-0 bg-white position-absolute w-100 h-100 top-0 form-control text-truncate d-block",
                                                                            htmlFor: "reraCertificate",
                                                                            children: fileName !== '📂 No file selected' ? fileName : 'Please upload the RERA Registration Certificate'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                            lineNumber: 448,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 11
                                                        }, this),
                                                        errors.reraCertificate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-danger small mt-1",
                                                            children: errors.reraCertificate
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: "con_message",
                                                            name: "con_message",
                                                            value: formData.con_message,
                                                            onChange: handleInputChange,
                                                            className: "form-control lg bg-white border-top-0 border-bottom-0",
                                                            cols: 7,
                                                            rows: 10,
                                                            placeholder: "Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 12
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readmore mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                name: "operation",
                                                                value: "contact_enq"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                id: "con_btn",
                                                                className: "button mx-auto bg-dark text-white mw-100 w-100",
                                                                disabled: isSubmitting,
                                                                children: isSubmitting ? 'Submitting...' : 'Submit'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/channel-partner-registration/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/channel-partner-registration/page.tsx",
                                lineNumber: 265,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/channel-partner-registration/page.tsx",
                            lineNumber: 264,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/channel-partner-registration/page.tsx",
                    lineNumber: 260,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/channel-partner-registration/page.tsx",
            lineNumber: 222,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=app_channel-partner-registration_page_tsx_92e4c410._.js.map