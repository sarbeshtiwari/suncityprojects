(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/projectAmenities.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmenitiesSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function AmenitiesSlider({ amenities }) {
    if (!amenities || !amenities.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-100 padding overflow-hidden position-relative amenities-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hidden-title",
                "data-position": "left",
                children: "Amenities"
            }, void 0, false, {
                fileName: "[project]/components/projectAmenities.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "heading mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "fw-light text-primary",
                                children: "World-class amenities for unmatched comfort and lifestyle."
                            }, void 0, false, {
                                fileName: "[project]/components/projectAmenities.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title-xxl mb-0",
                                children: "Beyond Expectations"
                            }, void 0, false, {
                                fileName: "[project]/components/projectAmenities.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projectAmenities.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        spaceBetween: 20,
                        slidesPerView: 4,
                        navigation: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        },
                        loop: true,
                        className: "amenity-slider",
                        children: amenities.map((amenity, index)=>{
                            const isObject = typeof amenity === 'object' && amenity !== null && 'image' in amenity;
                            const amenityData = amenity;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "amenBox",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "img-fluid",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: isObject ? amenityData.image : '/images/icons/amenity-default.svg',
                                                alt: isObject ? amenityData.caption : amenity
                                            }, void 0, false, {
                                                fileName: "[project]/components/projectAmenities.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/projectAmenities.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            children: isObject ? amenityData.caption : amenity
                                        }, void 0, false, {
                                            fileName: "[project]/components/projectAmenities.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/projectAmenities.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/projectAmenities.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/projectAmenities.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projectAmenities.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projectAmenities.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = AmenitiesSlider;
var _c;
__turbopack_context__.k.register(_c, "AmenitiesSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectEnquiry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectEnquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ProjectEnquiry({ title = "Premium Spaces Infinite Possibilities", subtitle = "Lorem ipsum dolor sit amet consectetur" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-100 py-5 position-relative overflow-hidden bg-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row g-4 align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-9 col-sm-7 heading mb-0 text-center text-sm-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "fw-lighter mb-0",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectEnquiry.tsx",
                                lineNumber: 17,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "mb-0 fw-lighter",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectEnquiry.tsx",
                                lineNumber: 18,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectEnquiry.tsx",
                        lineNumber: 16,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-3 col-sm-5 enquiry-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#formModal",
                            "data-bs-toggle": "modal",
                            className: "inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/icons/mail.svg",
                                        alt: "Enquire Now",
                                        className: "img-fluid"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectEnquiry.tsx",
                                        lineNumber: 22,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectEnquiry.tsx",
                                    lineNumber: 22,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Enquire Now"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectEnquiry.tsx",
                                    lineNumber: 23,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectEnquiry.tsx",
                            lineNumber: 21,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectEnquiry.tsx",
                        lineNumber: 20,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectEnquiry.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectEnquiry.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProjectEnquiry.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
_c = ProjectEnquiry;
var _c;
__turbopack_context__.k.register(_c, "ProjectEnquiry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projectGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
'use client';
;
;
;
function ProjectGallery({ galleryImages, projectName, projectLogo }) {
    if (!galleryImages?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gallery-slider position-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true,
                className: "swiper",
                children: galleryImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        className: "gallery-slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galBox",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: image.original,
                                "data-magnify": "magnify",
                                "data-group": "gal",
                                "data-caption": image.altText || projectName,
                                className: "inner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.desktop || image.original,
                                    alt: image.altText || projectName
                                }, void 0, false, {
                                    fileName: "[project]/components/projectGallery.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/projectGallery.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/projectGallery.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/projectGallery.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/projectGallery.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-logo bg-white d-flex align-items-center justify-content-center col-md-4 position-absolute start-50 top-50 h-100 translate-middle pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-button-prev pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/projectGallery.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-button-next pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/projectGallery.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-pagination pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/projectGallery.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-logo mx-auto d-none d-md-block mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: projectLogo,
                            alt: projectName
                        }, void 0, false, {
                            fileName: "[project]/components/projectGallery.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/projectGallery.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projectGallery.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projectGallery.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ProjectGallery;
var _c;
__turbopack_context__.k.register(_c, "ProjectGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projectLocation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function ProjectLocation({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-100 padding overflow-hidden position-relative location-section bg-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hidden-title",
                "data-position": "right",
                children: "Location"
            }, void 0, false, {
                fileName: "[project]/components/projectLocation.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "heading mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "fw-light text-primary",
                                children: "Locations that promise value today and tomorrow."
                            }, void 0, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title-xxl mb-0",
                                children: "At the Heart of Growth"
                            }, void 0, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projectLocation.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mapBox position-relative mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mapIcon position-absolute",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.projectLogo,
                                    alt: project.projectName
                                }, void 0, false, {
                                    fileName: "[project]/components/projectLocation.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            project.locationType === 'iframe' && project.locationIframe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: project.locationIframe,
                                width: "100%",
                                height: "450",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: true,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade"
                            }, void 0, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this) : project.locationImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: project.locationImage,
                                alt: project.locationAltText || project.projectName,
                                className: "w-100",
                                style: {
                                    height: '450px',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projectLocation.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    project.nearbyLocations && project.nearbyLocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        spaceBetween: 20,
                        slidesPerView: 2,
                        navigation: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        },
                        loop: true,
                        className: "connectivity-slider",
                        children: project.nearbyLocations.map((location, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "location-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "in text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "img-fluid p-0 mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: location.image,
                                                alt: location.altText || location.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/projectLocation.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/projectLocation.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "location-text",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h4",
                                                            children: location.distance
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/projectLocation.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                location.unit,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/projectLocation.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 41
                                                                }, this),
                                                                "Drive From"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/projectLocation.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/projectLocation.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0",
                                                    children: location.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/projectLocation.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/projectLocation.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/projectLocation.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/projectLocation.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/projectLocation.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projectLocation.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projectLocation.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ProjectLocation;
var _c;
__turbopack_context__.k.register(_c, "ProjectLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectScripts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ProjectScripts() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectScripts.useEffect": ()=>{
            const initAccordion = {
                "ProjectScripts.useEffect.initAccordion": ()=>{
                    // Ensure FAQ accordion exists and isn't already initialized
                    const accordionList = document.querySelector('.accordion-list');
                    if (!accordionList) {
                        // Try again shortly if FAQs render after data load
                        setTimeout(initAccordion, 200);
                        return;
                    }
                    // Avoid double-binding
                    if (accordionList.getAttribute('data-accordion-initialized') === 'true') {
                        return;
                    }
                    accordionList.setAttribute('data-accordion-initialized', 'true');
                    // Hide all answers initially
                    document.querySelectorAll('.accordion-list > li .answer').forEach({
                        "ProjectScripts.useEffect.initAccordion": (ans)=>{
                            ans.style.display = 'none';
                        }
                    }["ProjectScripts.useEffect.initAccordion"]);
                    // Delegate clicks to list to avoid multiple listeners on items
                    accordionList.addEventListener('click', {
                        "ProjectScripts.useEffect.initAccordion": (e)=>{
                            const li = e.target.closest('li');
                            if (!li || !accordionList.contains(li)) return;
                            const isActive = li.classList.contains('active');
                            // Close any open
                            accordionList.querySelectorAll('li.active').forEach({
                                "ProjectScripts.useEffect.initAccordion": (activeItem)=>{
                                    activeItem.classList.remove('active');
                                    const activeAnswer = activeItem.querySelector('.answer');
                                    if (activeAnswer) activeAnswer.style.display = 'none';
                                }
                            }["ProjectScripts.useEffect.initAccordion"]);
                            // Open clicked if it was not active
                            if (!isActive) {
                                li.classList.add('active');
                                const answer = li.querySelector('.answer');
                                if (answer) answer.style.display = 'block';
                            }
                        }
                    }["ProjectScripts.useEffect.initAccordion"]);
                }
            }["ProjectScripts.useEffect.initAccordion"];
            const initProjectScripts = {
                "ProjectScripts.useEffect.initProjectScripts": ()=>{
                    // Always initialize accordion first (independent of Swiper)
                    initAccordion();
                    // Initialize sliders only when Swiper is available; retry until then
                    const Swiper = window.Swiper;
                    if (!Swiper) {
                        setTimeout(initProjectScripts, 100);
                        return;
                    }
                    // Gallery Slider
                    const gallerySliders = document.querySelectorAll('.gallery-slider');
                    gallerySliders.forEach({
                        "ProjectScripts.useEffect.initProjectScripts": function(slider, index) {
                            new Swiper(slider, {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                loop: true,
                                speed: 2000,
                                autoplay: {
                                    delay: 2500 + index * 500,
                                    disableOnInteraction: false
                                },
                                navigation: {
                                    nextEl: slider.querySelector('.swiper-button-next'),
                                    prevEl: slider.querySelector('.swiper-button-prev')
                                },
                                pagination: {
                                    el: slider.querySelector('.swiper-pagination'),
                                    dynamicBullets: true,
                                    clickable: true
                                },
                                breakpoints: {
                                    540: {
                                        slidesPerView: 2,
                                        spaceBetween: 15
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 15
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    }
                                }
                            });
                        }
                    }["ProjectScripts.useEffect.initProjectScripts"]);
                    // Amenity Slider
                    const amenitySlider = document.querySelector('.amenity-slider');
                    if (amenitySlider) {
                        new Swiper('.amenity-slider', {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            loop: true,
                            speed: 2000,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false
                            },
                            navigation: {
                                nextEl: '.amenity-slider .swiper-button-next',
                                prevEl: '.amenity-slider .swiper-button-prev'
                            },
                            breakpoints: {
                                375: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1800: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                }
                            }
                        });
                    }
                    // Connectivity Slider
                    const connectivitySlider = document.querySelector('.connectivity-slider');
                    if (connectivitySlider) {
                        new Swiper('.connectivity-slider', {
                            slidesPerView: 1,
                            loop: true,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false
                            },
                            navigation: {
                                nextEl: '.connectivity-slider .swiper-button-next',
                                prevEl: '.connectivity-slider .swiper-button-prev'
                            },
                            breakpoints: {
                                375: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                },
                                540: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                1800: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                }
                            }
                        });
                    }
                    // Floor Plan Slider
                    const fpSlider = document.querySelector('.fp-slider');
                    if (fpSlider) {
                        new Swiper('.fp-slider', {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            // loop: true,
                            navigation: {
                                nextEl: '.fp-slider .swiper-button-next',
                                prevEl: '.fp-slider .swiper-button-prev'
                            },
                            // autoplay: {
                            // 	delay: 2500,
                            // 	disableOnInteraction: false,
                            // },
                            breakpoints: {
                                280: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }
                        });
                    }
                // (Accordion already initialized above)
                }
            }["ProjectScripts.useEffect.initProjectScripts"];
            // Initialize after a short delay to ensure DOM is ready
            setTimeout(initProjectScripts, 1000);
        }
    }["ProjectScripts.useEffect"], []);
    return null; // This component doesn't render anything
}
_s(ProjectScripts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProjectScripts;
var _c;
__turbopack_context__.k.register(_c, "ProjectScripts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_119a7206._.js.map