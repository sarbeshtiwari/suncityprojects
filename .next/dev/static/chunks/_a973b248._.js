(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WhyChooseUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WhyChooseUs() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhyChooseUs.useEffect": ()=>{
            const items = Array.from(document.querySelectorAll('.whyChoose-list-item'));
            const videos = Array.from(document.querySelectorAll('.whyChoose-video'));
            const handleEnter = {
                "WhyChooseUs.useEffect.handleEnter": (el)=>{
                    if (!el) return;
                    document.querySelector('.whyChoose-list-item.active')?.classList.remove('active');
                    el.classList.add('active');
                    const target = el.getAttribute('data-target');
                    videos.forEach({
                        "WhyChooseUs.useEffect.handleEnter": (v)=>v.style.display = 'none'
                    }["WhyChooseUs.useEffect.handleEnter"]);
                    const video = document.getElementById(`whyChoose-video-${target}`);
                    if (video) video.style.display = 'block';
                    try {
                        window.AOS && window.AOS.refresh && window.AOS.refresh();
                    } catch  {}
                }
            }["WhyChooseUs.useEffect.handleEnter"];
            const listeners = [];
            items.forEach({
                "WhyChooseUs.useEffect": (item)=>{
                    const onEnter = {
                        "WhyChooseUs.useEffect.onEnter": ()=>handleEnter(item)
                    }["WhyChooseUs.useEffect.onEnter"];
                    item.addEventListener('mouseenter', onEnter);
                    listeners.push({
                        el: item,
                        fn: onEnter
                    });
                }
            }["WhyChooseUs.useEffect"]);
            // Initial state
            const initial = document.querySelector('.whyChoose-list-item[data-target="sustainability"]');
            handleEnter(initial || items[0] || null);
            return ({
                "WhyChooseUs.useEffect": ()=>{
                    listeners.forEach({
                        "WhyChooseUs.useEffect": ({ el, fn })=>{
                            el.removeEventListener('mouseenter', fn);
                        }
                    }["WhyChooseUs.useEffect"]);
                }
            })["WhyChooseUs.useEffect"];
        }
    }["WhyChooseUs.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-100 overflow-hidden position-relative section-whyChooseUs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bgs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: "/videos/sustainability2.mp4",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        poster: "/images/sustainablity-video-th.webp",
                        id: "whyChoose-video-sustainability",
                        className: "whyChoose-video h-100 object-cover active"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyChooseUs.tsx",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: "/videos/technology.mp4",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        poster: "/images/technology-video-th.webp",
                        id: "whyChoose-video-technology",
                        className: "whyChoose-video h-100 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyChooseUs.tsx",
                        lineNumber: 44,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: "/videos/community.mp4",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        poster: "/images/community-video-th.webp",
                        id: "whyChoose-video-community",
                        className: "whyChoose-video h-100 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyChooseUs.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyChooseUs.tsx",
                lineNumber: 42,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-lg h-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-unstyled whyChoose-list d-flex flex-wrap h-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "whyChoose-list-item active position-relative bg-image",
                            "data-target": "sustainability",
                            style: {
                                backgroundImage: 'url(/images/sustainability.jpg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inner h-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 mb-md-4 fw-lighter text-white",
                                            children: "Sustainability"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 52,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0 small",
                                                    children: "Suncity Projects is committed to building a greener future by incorporating sustainable practices in every development. By applying for a gold rating through IGBC, our projects ensure eco-friendly designs, energy efficiency, and healthier living environments for generations to come."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "viewmore",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/sustainability",
                                                        className: "button text-white fw-light",
                                                        children: "Read More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WhyChooseUs.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 53,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                    lineNumber: 51,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyChooseUs.tsx",
                                lineNumber: 50,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyChooseUs.tsx",
                            lineNumber: 49,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "whyChoose-list-item position-relative bg-image",
                            "data-target": "technology",
                            style: {
                                backgroundImage: 'url(/images/technology.jpg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inner h-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 mb-md-4 fw-lighter text-white",
                                            children: "Technology"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 63,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0 small",
                                                    children: "At Suncity Projects, we embrace advanced construction methods like MIVAN Technology, ensuring precision, durability, and faster delivery. This cutting-edge technique guarantees superior quality structures, stronger foundations, and enhanced safety, while maintaining efficiency and excellence in every project we create."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "viewmore",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/technology",
                                                        className: "button text-white fw-light",
                                                        children: "Read More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WhyChooseUs.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 64,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                    lineNumber: 62,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyChooseUs.tsx",
                                lineNumber: 61,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyChooseUs.tsx",
                            lineNumber: 60,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "whyChoose-list-item position-relative bg-image",
                            "data-target": "community",
                            style: {
                                backgroundImage: 'url(/images/community.jpg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inner h-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 mb-md-4 fw-lighter text-white",
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 74,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hide scroller",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0 small",
                                                    children: "Suncity Projects takes pride in building not just homes, but thriving communities. Over the years, we've connected countless families, offering togetherness and warmth, especially for those away from loved ones. Here, every festival, every moment, becomes a shared celebration of belonging."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "viewmore",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/community",
                                                        className: "button text-white fw-light",
                                                        children: "Read More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WhyChooseUs.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyChooseUs.tsx",
                                            lineNumber: 75,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyChooseUs.tsx",
                                    lineNumber: 73,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyChooseUs.tsx",
                                lineNumber: 72,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyChooseUs.tsx",
                            lineNumber: 71,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyChooseUs.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WhyChooseUs.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhyChooseUs.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
}
_s(WhyChooseUs, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WhyChooseUs;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SwiperInit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SwiperInit = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwiperInit.useEffect": ()=>{
            const initSwipers = {
                "SwiperInit.useEffect.initSwipers": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.Swiper) {
                        const Swiper = window.Swiper;
                        const projectSliders = document.querySelectorAll('.project-slider');
                        projectSliders.forEach({
                            "SwiperInit.useEffect.initSwipers": function(slider, index) {
                                new Swiper(slider, {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    speed: 2000,
                                    navigation: {
                                        nextEl: slider.querySelector('.swiper-button-next'),
                                        prevEl: slider.querySelector('.swiper-button-prev')
                                    }
                                });
                            }
                        }["SwiperInit.useEffect.initSwipers"]);
                        const blogSliders = document.querySelectorAll('.blogs-slider');
                        blogSliders.forEach({
                            "SwiperInit.useEffect.initSwipers": function(slider, index) {
                                new Swiper(slider, {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    centeredSlides: true,
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
                                    breakpoints: {
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 15
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 15
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 30
                                        },
                                        1800: {
                                            slidesPerView: 5,
                                            spaceBetween: 30
                                        }
                                    }
                                });
                            }
                        }["SwiperInit.useEffect.initSwipers"]);
                    }
                }
            }["SwiperInit.useEffect.initSwipers"];
            initSwipers();
            const timer = setTimeout(initSwipers, 1000);
            return ({
                "SwiperInit.useEffect": ()=>clearTimeout(timer)
            })["SwiperInit.useEffect"];
        }
    }["SwiperInit.useEffect"], []);
    return null;
};
_s(SwiperInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SwiperInit;
const __TURBOPACK__default__export__ = SwiperInit;
var _c;
__turbopack_context__.k.register(_c, "SwiperInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PropertySearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropertySearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PropertySearch({ placeholder = "Project Name/ Location", showTrendingProperties = true }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [propertyType, setPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingLocations, setLoadingLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filteredLocations, setFilteredLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availablePropertyTypes, setAvailablePropertyTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingFilteredData, setLoadingFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFormReset, setIsFormReset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset form state function - only reset when explicitly called
    const resetFormState = ()=>{
        // Only reset if not currently in the middle of a form interaction
        if (!isFormReset) {
            setIsFormReset(true);
            setSearchQuery('');
            setPropertyType('');
            setLocation('');
            setFilteredLocations(locations);
            setAvailablePropertyTypes([]);
            setLoadingFilteredData(false);
            // Reset the flag after a short delay
            setTimeout(()=>{
                setIsFormReset(false);
            }, 100);
        }
    };
    const handleSearch = (e)=>{
        e.preventDefault();
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (searchQuery.trim()) {
            const normalizeSearchTerm = (term)=>{
                return term// Map tokens starting with "gur..." to Gurgaon (e.g., gur, gurg, gurugram)
                .replace(/\bgur[a-z]*\b/gi, 'Gurgaon').replace(/\bugram\b/gi, 'Gurgaon').replace(/\bugra\b/gi, 'Gurgaon').replace(/\bgra\b/gi, 'Gurgaon').replace(/\bram\b/gi, 'Gurgaon').replace(/\bgram\b/gi, 'Gurgaon');
            };
            const normalizedSearch = normalizeSearchTerm(searchQuery.trim());
            queryParams.set('search', normalizedSearch);
        }
        if (propertyType) {
            queryParams.set('propertyType', propertyType);
        }
        if (location) {
            queryParams.set('city', location);
        }
        // Navigate to projects listing page with all filters
        const queryString = queryParams.toString();
        router.push(`/projects${queryString ? `?${queryString}` : ''}`);
        // Close the search form after navigation
        closeSearchForm();
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };
    // Reset form state on component mount only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertySearch.useEffect": ()=>{
            // Only reset on initial mount, not on every render
            const hasInitialized = sessionStorage.getItem('propertySearchInitialized');
            if (!hasInitialized) {
                // Only reset the form fields, don't trigger the full reset logic
                setSearchQuery('');
                setPropertyType('');
                setLocation('');
                setAvailablePropertyTypes([]);
                setLoadingFilteredData(false);
                sessionStorage.setItem('propertySearchInitialized', 'true');
            }
        }
    }["PropertySearch.useEffect"], []);
    // Add a delay to prevent immediate reset when search form opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertySearch.useEffect": ()=>{
            const handleSearchFormOpen = {
                "PropertySearch.useEffect.handleSearchFormOpen": ()=>{
                    // Small delay to prevent interference with search form opening
                    setTimeout({
                        "PropertySearch.useEffect.handleSearchFormOpen": ()=>{
                            // Only reset if we have search parameters in URL (indicating we came from search results)
                            const urlParams = new URLSearchParams(window.location.search);
                            if (urlParams.has('search') || urlParams.has('propertyType') || urlParams.has('city')) {
                                // Clear URL parameters and reset form
                                window.history.replaceState({}, '', window.location.pathname);
                                setSearchQuery('');
                                setPropertyType('');
                                setLocation('');
                                setAvailablePropertyTypes([]);
                                setLoadingFilteredData(false);
                            }
                        }
                    }["PropertySearch.useEffect.handleSearchFormOpen"], 200);
                }
            }["PropertySearch.useEffect.handleSearchFormOpen"];
            // Listen for search form open events
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('searchFormOpen', handleSearchFormOpen);
            }
            return ({
                "PropertySearch.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('searchFormOpen', handleSearchFormOpen);
                    }
                }
            })["PropertySearch.useEffect"];
        }
    }["PropertySearch.useEffect"], []);
    // Fetch locations on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertySearch.useEffect": ()=>{
            const fetchLocations = {
                "PropertySearch.useEffect.fetchLocations": async ()=>{
                    try {
                        setLoadingLocations(true);
                        const response = await fetch('/api/locations');
                        const data = await response.json();
                        if (data.success) {
                            setLocations(data.data);
                            setFilteredLocations(data.data);
                        }
                    } catch (error) {
                        console.error('Error fetching locations:', error);
                    } finally{
                        setLoadingLocations(false);
                    }
                }
            }["PropertySearch.useEffect.fetchLocations"];
            fetchLocations();
        }
    }["PropertySearch.useEffect"], []);
    // Cleanup effect - only reset session storage on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertySearch.useEffect": ()=>{
            return ({
                "PropertySearch.useEffect": ()=>{
                    // Clear the initialization flag when component unmounts
                    sessionStorage.removeItem('propertySearchInitialized');
                }
            })["PropertySearch.useEffect"];
        }
    }["PropertySearch.useEffect"], []);
    // Only reset form state when user explicitly navigates back from search results
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertySearch.useEffect": ()=>{
            const handlePopState = {
                "PropertySearch.useEffect.handlePopState": ()=>{
                    // Only reset if we're coming back from a search results page
                    if (window.location.pathname === '/' && window.location.search === '') {
                        // Only reset form fields, don't trigger full reset logic
                        setSearchQuery('');
                        setPropertyType('');
                        setLocation('');
                        setAvailablePropertyTypes([]);
                        setLoadingFilteredData(false);
                    }
                }
            }["PropertySearch.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "PropertySearch.useEffect": ()=>{
                    window.removeEventListener('popstate', handlePopState);
                }
            })["PropertySearch.useEffect"];
        }
    }["PropertySearch.useEffect"], []);
    // Fetch filtered locations based on property type
    const fetchFilteredLocations = async (selectedPropertyType)=>{
        if (!selectedPropertyType) {
            setFilteredLocations(locations);
            return;
        }
        try {
            setLoadingFilteredData(true);
            const response = await fetch(`/api/projects/locations?propertyType=${encodeURIComponent(selectedPropertyType)}`);
            const data = await response.json();
            if (data.success) {
                setFilteredLocations(data.data);
                // If no locations available, reset location selection
                if (data.data.length === 0) {
                    setLocation('');
                }
            }
        } catch (error) {
            console.error('Error fetching filtered locations:', error);
            setFilteredLocations(locations);
            setLocation('');
        } finally{
            setLoadingFilteredData(false);
        }
    };
    // Fetch available property types based on city
    const fetchAvailablePropertyTypes = async (selectedCity)=>{
        if (!selectedCity) {
            setAvailablePropertyTypes([]);
            return;
        }
        try {
            setLoadingFilteredData(true);
            const response = await fetch(`/api/projects/property-types?city=${encodeURIComponent(selectedCity)}`);
            const data = await response.json();
            if (data.success) {
                setAvailablePropertyTypes(data.data);
                // If no property types available, reset property type selection
                if (data.data.length === 0) {
                    setPropertyType('');
                }
            }
        } catch (error) {
            console.error('Error fetching available property types:', error);
            setAvailablePropertyTypes([]);
            setPropertyType('');
        } finally{
            setLoadingFilteredData(false);
        }
    };
    // Handle property type change
    const handlePropertyTypeChange = (e)=>{
        const selectedType = e.target.value;
        setPropertyType(selectedType);
        // Reset location when property type changes
        // setLocation('');
        // Fetch filtered locations for this property type
        fetchFilteredLocations(selectedType);
    };
    // Handle location change
    const handleLocationChange = (e)=>{
        const selectedCity = e.target.value;
        setLocation(selectedCity);
        // Reset property type when location changes
        // setPropertyType('');
        // Fetch available property types for this city
        fetchAvailablePropertyTypes(selectedCity);
    };
    // Handle form reset
    const handleFormReset = ()=>{
        resetFormState();
    };
    // Helper function to close search form
    const closeSearchForm = ()=>{
        setTimeout(()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.closeSearch) {
                window.closeSearch();
            }
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row g-0 justify-content-center position-relative mb-5",
        style: {
            zIndex: 2
        },
        "data-aos": "fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-xxl-6 col-lg-8 col-md-11 search-bar position-relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-3 bg-white shadow rounded-0 w-100 border-0 d-flex align-items-center justify-content-between",
                    onClick: ()=>window.openSearch && window.openSearch(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        x: "0px",
                                        y: "0px",
                                        viewBox: "0 0 24 24",
                                        style: {
                                            fill: "none",
                                            stroke: "var(--primary-color)",
                                            width: "1.25rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5   c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PropertySearch.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "10.3",
                                                cy: "10.3",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PropertySearch.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PropertySearch.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "small text-uppercase",
                                    children: [
                                        "Find Your Dream ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "Property"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PropertySearch.tsx",
                                            lineNumber: 304,
                                            columnNumber: 68
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PropertySearch.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PropertySearch.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "icon-button spin mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "round-button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "circle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa fa-chevron-right"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 308,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PropertySearch.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PropertySearch.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PropertySearch.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "searchFormWrapper",
                    className: "search-form-wrapper bg-white shadow position-absolute top-0 start-0 w-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-form p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row justify-content-center gx-2 gy-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex align-items-center gap-3 border-bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            x: "0px",
                                                            y: "0px",
                                                            viewBox: "0 0 24 24",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "var(--primary-color)",
                                                                width: "1.5rem"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M18.3,17.3c-0.3,0.3-0.6,0.7-1,1l5.5,5.5C23,24,23.2,24,23.3,24c0.1,0,0.3,0,0.5-0.2c0.2-0.2,0.2-0.4,0.2-0.5   c0-0.1,0-0.3-0.2-0.5L18.3,17.3L18.3,17.3z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "10.3",
                                                                    cy: "10.3",
                                                                    r: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PropertySearch.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-floating col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                id: "searchProperty",
                                                                placeholder: "",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                onKeyPress: handleKeyPress
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "small text-uppercase text-golden",
                                                                htmlFor: "searchProperty",
                                                                children: placeholder
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "p-0 btn icon-button mt-0",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            window.closeSearch && window.closeSearch();
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "round-button me-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "circle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa fa-chevron-up"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 55
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PropertySearch.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PropertySearch.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this),
                                            showTrendingProperties && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "trending-capsule p-3 bg-light",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Trending Properties"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex flex-wrap gap-2 mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/jewel-of-india",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                children: [
                                                                    "Jewel of India ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Phase-II"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/jewel-tower",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                children: "Jewel Tower"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/suncity-ultima",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                children: "Suncity Ultima"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/the-empire",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                onClick: ()=>{
                                                                    router.push(`/projects?search=${encodeURIComponent('The Empire')}`);
                                                                    // Close the search form after navigation
                                                                    closeSearchForm();
                                                                },
                                                                children: "The Empire"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/jewel-farms",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                children: "Jewel Farms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/projects/the-empire-centre",
                                                                className: "btn btn-sm btn-outline-primary rounded-pill",
                                                                children: "The Empire Centre"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PropertySearch.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PropertySearch.tsx",
                                                lineNumber: 348,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-sm-6 search-field",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-floating",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "form-select rounded-0",
                                                    id: "propertyType",
                                                    "aria-label": "Floating label select example",
                                                    value: propertyType,
                                                    onChange: handlePropertyTypeChange,
                                                    disabled: loadingFilteredData || !!location && availablePropertyTypes.length === 0,
                                                    onFocus: (e)=>{
                                                        e.stopPropagation();
                                                        // Prevent reset when user is interacting with dropdown
                                                        setIsFormReset(false);
                                                    },
                                                    onBlur: (e)=>{
                                                        e.stopPropagation();
                                                    },
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        // Prevent reset when user is clicking on dropdown
                                                        setIsFormReset(false);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: location && availablePropertyTypes.length === 0 ? 'No projects in this location' : 'Select Property Type'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PropertySearch.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this),
                                                        availablePropertyTypes.length > 0 ? availablePropertyTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: type,
                                                                children: type.charAt(0).toUpperCase() + type.slice(1)
                                                            }, type, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 27
                                                            }, this)) : !location ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "residential",
                                                                    children: "Residential"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "commercial",
                                                                    children: "Commercial"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "retail",
                                                                    children: "Retail"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "education",
                                                                    children: "Education"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "small text-uppercase",
                                                    htmlFor: "propertyType",
                                                    children: loadingFilteredData ? 'Loading...' : 'Property Type'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PropertySearch.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-sm-6 search-field",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-floating",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "form-select rounded-0",
                                                    id: "location",
                                                    "aria-label": "Floating label select example",
                                                    value: location,
                                                    onChange: handleLocationChange,
                                                    disabled: loadingLocations || loadingFilteredData || !!propertyType && filteredLocations.length === 0,
                                                    onFocus: (e)=>{
                                                        e.stopPropagation();
                                                        // Prevent reset when user is interacting with dropdown
                                                        setIsFormReset(false);
                                                    },
                                                    onBlur: (e)=>{
                                                        e.stopPropagation();
                                                    },
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        // Prevent reset when user is clicking on dropdown
                                                        setIsFormReset(false);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: propertyType && filteredLocations.length === 0 ? 'No locations for this property type' : 'Choose Location'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PropertySearch.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        filteredLocations.length > 0 ? [
                                                            ...new Set(filteredLocations.map((loc)=>loc.city))
                                                        ].sort().map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: city,
                                                                children: city
                                                            }, city, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 29
                                                            }, this)) : !propertyType ? [
                                                            ...new Set(locations.map((loc)=>loc.city))
                                                        ].sort().map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: city,
                                                                children: city
                                                            }, city, false, {
                                                                fileName: "[project]/components/PropertySearch.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 29
                                                            }, this)) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "small text-uppercase",
                                                    htmlFor: "location",
                                                    children: loadingLocations || loadingFilteredData ? 'Loading Locations...' : 'Location'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PropertySearch.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-sm-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "readmore mt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "button w-100 mw-100 mx-auto",
                                                    children: "Apply"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-outline-secondary btn-sm w-100 mt-2",
                                                    onClick: handleFormReset,
                                                    children: "Reset"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PropertySearch.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PropertySearch.tsx",
                                            lineNumber: 499,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PropertySearch.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PropertySearch.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PropertySearch.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PropertySearch.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PropertySearch.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PropertySearch.tsx",
            lineNumber: 291,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PropertySearch.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s(PropertySearch, "aEGGygXlowuOxMicn3rQK6eaHKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PropertySearch;
var _c;
__turbopack_context__.k.register(_c, "PropertySearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home-blogs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomeBlogs() {
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeBlogs.useEffect": ()=>{
            fetchBlogs();
        }
    }["HomeBlogs.useEffect"], []);
    const fetchBlogs = async ()=>{
        try {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            if (data.success) {
                setBlogs(data.data);
            } else {
                console.error('API returned error:', data.error);
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
        } finally{
            setLoading(false);
        }
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', {
            month: 'long'
        });
        const year = date.getFullYear();
        const getOrdinalSuffix = (day)=>{
            if (day >= 11 && day <= 13) {
                return 'th';
            }
            switch(day % 10){
                case 1:
                    return 'st';
                case 2:
                    return 'nd';
                case 3:
                    return 'rd';
                default:
                    return 'th';
            }
        };
        return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-100 position-relative padding overflow-hidden bg-white section-blogs",
            style: {
                minHeight: '500px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "heading mx-auto text-center",
                        "data-aos": "fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2 fw-light text-primary mb-0",
                            children: "Latest Blogs"
                        }, void 0, false, {
                            fileName: "[project]/components/home-blogs.tsx",
                            lineNumber: 74,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home-blogs.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home-blogs.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-border text-primary",
                            role: "status",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/components/home-blogs.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home-blogs.tsx",
                            lineNumber: 79,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3",
                            children: "Loading blogs..."
                        }, void 0, false, {
                            fileName: "[project]/components/home-blogs.tsx",
                            lineNumber: 82,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home-blogs.tsx",
                    lineNumber: 78,
                    columnNumber: 13
                }, this) : blogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "alert alert-info",
                        role: "alert",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "alert-heading",
                                children: "No Blogs Found"
                            }, void 0, false, {
                                fileName: "[project]/components/home-blogs.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "There are no blog posts available at the moment."
                            }, void 0, false, {
                                fileName: "[project]/components/home-blogs.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "small text-muted",
                                children: "Check the console for API response details."
                            }, void 0, false, {
                                fileName: "[project]/components/home-blogs.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-blogs.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home-blogs.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    spaceBetween: 30,
                    slidesPerView: 4,
                    navigation: true,
                    autoplay: true,
                    loop: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    },
                    children: blogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card blog-card h-100 rounded-0 border-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/blogs/${blog.slug}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "blog-image position-relative overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: blog.image,
                                                alt: blog.altText,
                                                className: "card-img rounded-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home-blogs.tsx",
                                                lineNumber: 120,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home-blogs.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex justify-content-between align-items-center mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex align-items-center text-golden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http:www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "lucide lucide-calendar-check-icon lucide-calendar-check me-1",
                                                                style: {
                                                                    width: '1rem',
                                                                    height: '1rem'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M8 2v4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home-blogs.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M16 2v4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home-blogs.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        width: "18",
                                                                        height: "18",
                                                                        x: "3",
                                                                        y: "4",
                                                                        rx: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home-blogs.tsx",
                                                                        lineNumber: 128,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 10h18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home-blogs.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "m9 16 2 2 4-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home-blogs.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home-blogs.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "small",
                                                                children: formatDate(blog.publishedDate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home-blogs.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home-blogs.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home-blogs.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "card-title fw-light text-primary mb-3 truncate",
                                                    children: blog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home-blogs.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "truncate",
                                                    style: {
                                                        '--line-clamp': '3'
                                                    },
                                                    children: blog.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home-blogs.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "viewmore",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "button sm",
                                                        children: "Read More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home-blogs.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 59
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home-blogs.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home-blogs.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home-blogs.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home-blogs.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this)
                        }, blog._id, false, {
                            fileName: "[project]/components/home-blogs.tsx",
                            lineNumber: 116,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home-blogs.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home-blogs.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(HomeBlogs, "Gd2s35UckiJawPUws+OecZAY0aA=");
_c = HomeBlogs;
var _c;
__turbopack_context__.k.register(_c, "HomeBlogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TestimonialVideoModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const TestimonialVideoModal = ()=>{
    _s();
    const [modalHeading, setModalHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('the client.');
    const [videoSrc, setVideoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('null');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialVideoModal.useEffect": ()=>{
            // Handle video button clicks
            const handleVideoBtnClick = {
                "TestimonialVideoModal.useEffect.handleVideoBtnClick": (e)=>{
                    const target = e.target;
                    const button = target.closest('.videoSourceBtn');
                    if (button) {
                        const videoSource = button.getAttribute('data-src');
                        const heading = button.getAttribute('data-bs-source');
                        if (videoSource) {
                            setVideoSrc(videoSource);
                        }
                        if (heading) {
                            setModalHeading(heading);
                        }
                    }
                }
            }["TestimonialVideoModal.useEffect.handleVideoBtnClick"];
            // Add event listeners for video buttons
            document.addEventListener('click', handleVideoBtnClick);
            // Handle video modal events
            const videoModal = document.getElementById('video-Modal');
            if (videoModal) {
                // Stop video when modal is hidden
                videoModal.addEventListener('hidden.bs.modal', {
                    "TestimonialVideoModal.useEffect": ()=>{
                        const video = document.getElementById('video-Modal-video');
                        if (video) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    }
                }["TestimonialVideoModal.useEffect"]);
            }
            return ({
                "TestimonialVideoModal.useEffect": ()=>{
                    document.removeEventListener('click', handleVideoBtnClick);
                }
            })["TestimonialVideoModal.useEffect"];
        }
    }["TestimonialVideoModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal fade",
        id: "video-Modal",
        tabIndex: -1,
        "aria-labelledby": "formModalLabel",
        "aria-modal": "true",
        role: "dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-dialog modal-dialog-centered modal-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialVideoModal.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/TestimonialVideoModal.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-title mb-3",
                            children: [
                                "Some words from ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "modal-heading",
                                    children: modalHeading
                                }, void 0, false, {
                                    fileName: "[project]/components/TestimonialVideoModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 69
                                }, ("TURBOPACK compile-time value", void 0)),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestimonialVideoModal.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: videoSrc,
                                controls: true,
                                id: "video-Modal-video"
                            }, void 0, false, {
                                fileName: "[project]/components/TestimonialVideoModal.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/TestimonialVideoModal.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TestimonialVideoModal.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/TestimonialVideoModal.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/TestimonialVideoModal.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/TestimonialVideoModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TestimonialVideoModal, "A4gYxPpXNCOk4z/fmYs52MlVpsQ=");
_c = TestimonialVideoModal;
const __TURBOPACK__default__export__ = TestimonialVideoModal;
var _c;
__turbopack_context__.k.register(_c, "TestimonialVideoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScriptReinitializer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScriptReinitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScriptReinitializer() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScriptReinitializer.useEffect": ()=>{
            const reinitializeScripts = {
                "ScriptReinitializer.useEffect.reinitializeScripts": ()=>{
                    const win = window;
                    if (win && win.AOS) {
                        try {
                            win.AOS.refresh();
                        } catch (error) {
                            console.log('AOS refresh failed:', error);
                        }
                    }
                    if (win && win.$ && win.$.fn && win.$.fn.counterUp) {
                        try {
                            win.$('.counter').counterUp({
                                delay: 5,
                                time: 500
                            });
                        } catch (error) {
                            console.log('Counter re-initialization failed:', error);
                        }
                    }
                    if (win && win.Swiper) {
                        try {
                            const swiperElements = document.querySelectorAll('.swiper');
                            swiperElements.forEach({
                                "ScriptReinitializer.useEffect.reinitializeScripts": (element)=>{
                                    if (!element.swiper) {
                                        new win.Swiper(element, {
                                            loop: true,
                                            autoplay: {
                                                delay: 3000
                                            },
                                            navigation: {
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev'
                                            }
                                        });
                                    }
                                }
                            }["ScriptReinitializer.useEffect.reinitializeScripts"]);
                        } catch (error) {
                            console.log('Swiper re-initialization failed:', error);
                        }
                    }
                    if (win && win.$) {
                        try {
                            win.$('[data-toggle="tooltip"]').tooltip();
                            win.$('[data-bs-toggle="tooltip"]').tooltip();
                            win.$('.magnify').magnify();
                        } catch (error) {
                            console.log('jQuery plugin re-initialization failed:', error);
                        }
                    }
                }
            }["ScriptReinitializer.useEffect.reinitializeScripts"];
            reinitializeScripts();
            const timer = setTimeout(reinitializeScripts, 500);
            return ({
                "ScriptReinitializer.useEffect": ()=>clearTimeout(timer)
            })["ScriptReinitializer.useEffect"];
        }
    }["ScriptReinitializer.useEffect"], []);
    return null;
}
_s(ScriptReinitializer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScriptReinitializer;
var _c;
__turbopack_context__.k.register(_c, "ScriptReinitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyChooseUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyChooseUs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SwiperInit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SwiperInit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropertySearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PropertySearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$blogs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home-blogs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TestimonialVideoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TestimonialVideoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScriptReinitializer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScriptReinitializer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function HomeClient() {
    _s();
    const [counters, setCounters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sqft: 0,
        cities: 0,
        years: 0,
        projects: 0
    });
    const [isCountersVisible, setIsCountersVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch projects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            fetchProjects();
        }
    }["HomeClient.useEffect"], []);
    const fetchProjects = async ()=>{
        try {
            setLoading(true);
            const response = await fetch('/api/projects/home');
            const data = await response.json();
            if (data.success) {
                setProjects(data.data);
            }
        } catch (err) {
            console.error('Error fetching projects:', err);
        } finally{
            setLoading(false);
        }
    };
    const getCategoryBadgeClass = (category)=>{
        switch(category.toLowerCase()){
            case 'residential':
                return 'bg-white text-dark';
            case 'commercial':
                return 'bg-white text-dark';
            case 'retail':
                return 'bg-white text-dark';
            case 'education':
                return 'bg-white text-dark';
            case 'delivered':
                return 'bg-white text-dark';
            default:
                return 'bg-white text-dark';
        }
    };
    const getStatusBadgeClass = (status)=>{
        switch(status.toLowerCase()){
            case 'ongoing':
                return 'text-primary';
            case 'completed':
                return 'text-primary';
            case 'delivered':
                return 'text-secondary';
            default:
                return 'text-muted';
        }
    };
    // Counter animation effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "HomeClient.useEffect": (entries)=>{
                    entries.forEach({
                        "HomeClient.useEffect": (entry)=>{
                            if (entry.isIntersecting && !isCountersVisible) {
                                setIsCountersVisible(true);
                                animateCounters();
                            }
                        }
                    }["HomeClient.useEffect"]);
                }
            }["HomeClient.useEffect"], {
                threshold: 0.5
            });
            if (statsRef.current) {
                observer.observe(statsRef.current);
            }
            return ({
                "HomeClient.useEffect": ()=>observer.disconnect()
            })["HomeClient.useEffect"];
        }
    }["HomeClient.useEffect"], [
        isCountersVisible
    ]);
    const animateCounters = ()=>{
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        const finalValues = {
            sqft: 20,
            cities: 14,
            years: 30,
            projects: 40
        };
        let step = 0;
        const timer = setInterval(()=>{
            step++;
            const progress = step / steps;
            setCounters({
                sqft: Math.floor(finalValues.sqft * progress),
                cities: Math.floor(finalValues.cities * progress),
                years: Math.floor(finalValues.years * progress),
                projects: Math.floor(finalValues.projects * progress)
            });
            if (step >= steps) {
                clearInterval(timer);
                setCounters(finalValues);
            }
        }, stepDuration);
    };
    const handleScrollDown = ()=>{
        const element = document.querySelector('.scrollto');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner w-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        preload: "auto",
                        playsInline: true,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        poster: "/images/video-thumbs/homeBanner.png",
                        className: "hero-video h-100 object-cover",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://suncity-projects.s3.eu-north-1.amazonaws.com/home/mobile.mp4",
                                type: "video/mp4",
                                media: "(max-width: 767px)"
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 155,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://suncity-projects.s3.eu-north-1.amazonaws.com/home/tab.mp4",
                                type: "video/mp4",
                                media: "(min-width: 768px) and (max-width: 1024px)"
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 156,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://suncity-projects.s3.eu-north-1.amazonaws.com/home/banner.mp4",
                                type: "video/mp4",
                                media: "(min-width: 1025px)"
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 157,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/client.tsx",
                        lineNumber: 154,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scrollDown",
                        onClick: handleScrollDown,
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/scroll-down-mouse.gif",
                            alt: "Scroll Down Mouse",
                            title: "Scroll Down"
                        }, void 0, false, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 161,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/client.tsx",
                        lineNumber: 160,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 153,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-100 scrollto padding overflow-hidden position-relative hm-overview-container animate-section1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "heading mx-auto",
                                        "data-aos": "fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "title-xxl mb-3 text-primary",
                                                children: "Welcome to Suncity Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 170,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "h2 fw-lighter text-primary mb-0",
                                                children: "Curating spaces for perfect wellbeing"
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 171,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 169,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hm-overview-text pe-lg-5",
                                        "data-aos": "fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Suncity Projects is one of the most eminent real estate companies in North India. The Group has built an unshakable reputation for quality, efficiency, trust and meticulous planning. Suncity Projects in North India are famous for offering top-quality amenities, superlative designs, timely completion, guaranteed possessions and handing over of projects ranging from Townships to Group Housing to Luxury Apartments. In Corporate and Retail space Suncity Projects offers shopping malls to Office Complexes."
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 174,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "viewmore",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/about-us",
                                                    className: "button mx-auto",
                                                    children: "Read More"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 35
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 175,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 173,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 168,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-12 statsContainer",
                                ref: statsRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inner",
                                    "data-aos": "fade-in",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row g-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-md-3 col-6 statsBox",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inner",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "counter",
                                                                    children: counters.sqft
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 16
                                                                }, this),
                                                                "+ Million Sq. Ft."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-0",
                                                            children: "Of Timely Delivery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 181,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-md-3 col-6 statsBox",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inner",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "counter",
                                                                    children: counters.cities
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 16
                                                                }, this),
                                                                " Cities"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-0",
                                                            children: "Across India Imprints"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 187,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-md-3 col-6 statsBox",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inner",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "counter",
                                                                    children: counters.years
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 16
                                                                }, this),
                                                                "+ Years"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-0",
                                                            children: "Of Legacy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 193,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-md-3 col-6 statsBox",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inner",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "counter",
                                                                    children: counters.projects
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 16
                                                                }, this),
                                                                "+"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-0",
                                                            children: "Landmark Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 199,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 180,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/client.tsx",
                                    lineNumber: 179,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 178,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/client.tsx",
                        lineNumber: 167,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/client.tsx",
                    lineNumber: 166,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 165,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-100 padding overflow-hidden position-relative section-portfolio bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropertySearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            placeholder: "Project Name/ Location",
                            showTrendingProperties: true
                        }, void 0, false, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 214,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "heading text-center mx-auto",
                            "data-aos": "fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 fw-light text-primary mb-0",
                                children: "Featured Projects"
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 217,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 216,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "projectContainer",
                            "data-aos": "fade-in",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spinner-border text-primary",
                                        role: "status",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 224,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 223,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        children: "Loading projects..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 226,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 222,
                                columnNumber: 8
                            }, this) : projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert alert-info",
                                    role: "alert",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "alert-heading",
                                            children: "No Projects Found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 231,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "There are no projects available at the moment."
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 232,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/client.tsx",
                                    lineNumber: 230,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 229,
                                columnNumber: 8
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                                ],
                                spaceBetween: 10,
                                slidesPerView: 1,
                                speed: 2000,
                                navigation: {
                                    nextEl: '.projects-next',
                                    prevEl: '.projects-prev'
                                },
                                className: "project-slider",
                                children: [
                                    projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                            className: "hm-featured-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/projects/${project.slug}`,
                                                className: "inner",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "row h-100 g-0 justify-content-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hm-featured-slide-img col-xxl-7 col-md-6 col-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "img-fluid h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `badge ${getCategoryBadgeClass(project.category)} rounded-pill position-absolute start-0 top-0 m-3 fw-normal`,
                                                                        children: project.category.toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 16
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: project.projectThumbnail || "/images/project-thumbs/default.webp",
                                                                        alt: project.locationAltText || project.projectName,
                                                                        className: "h-100 object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 16
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 14
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hm-featured-slide-text-container col-xxl-5 col-md-6 col-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "hm-featured-slide-text",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "project-text",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "featured-box-heading mb-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                    className: "h2 fw-light text-primary mb-0",
                                                                                    children: project.projectName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 267,
                                                                                    columnNumber: 18
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-primary d-flex align-items-center flex-wrap gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "fa fa-shield-halved"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 270,
                                                                                        columnNumber: 18
                                                                                    }, this),
                                                                                    " ",
                                                                                    project.reraNumber
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "d-block",
                                                                                children: project.shortDescription
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 272,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-button",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "round-button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "circle"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 275,
                                                                                                columnNumber: 19
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "fa fa-chevron-right"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 275,
                                                                                                columnNumber: 49
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 274,
                                                                                        columnNumber: 18
                                                                                    }, this),
                                                                                    " LEARN MORE"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 273,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 16
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "project-icons",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-item",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "in",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: "/images/icons/location.svg",
                                                                                                alt: ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 282,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 282,
                                                                                            columnNumber: 19
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                                    className: "d-block",
                                                                                                    children: "Location"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 284,
                                                                                                    columnNumber: 20
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: typeof project.projectLocation === 'string' ? project.projectLocation : `${project.projectLocation?.name || 'Location'}, ${project.projectLocation?.city || ''}`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 285,
                                                                                                    columnNumber: 20
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 283,
                                                                                            columnNumber: 19
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 281,
                                                                                    columnNumber: 18
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 280,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-item",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "in",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: "/images/icons/project-status.svg",
                                                                                                alt: ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 296,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 296,
                                                                                            columnNumber: 19
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                                    className: "d-block",
                                                                                                    children: "Status"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 298,
                                                                                                    columnNumber: 20
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: getStatusBadgeClass(project.status),
                                                                                                    children: project.status
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 299,
                                                                                                    columnNumber: 20
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 297,
                                                                                            columnNumber: 19
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 295,
                                                                                    columnNumber: 18
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 294,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-item",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "in",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: "/images/icons/area.svg",
                                                                                                alt: ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 305,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 305,
                                                                                            columnNumber: 19
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                                    className: "d-block",
                                                                                                    children: "Area"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 307,
                                                                                                    columnNumber: 20
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: project.area
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/client.tsx",
                                                                                                    lineNumber: 308,
                                                                                                    columnNumber: 20
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/client.tsx",
                                                                                            lineNumber: 306,
                                                                                            columnNumber: 19
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 18
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 303,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 16
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 14
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 249,
                                                columnNumber: 11
                                            }, this)
                                        }, project._id, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 248,
                                            columnNumber: 10
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bottomControls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "swiper-button-prev projects-prev"
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 320,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "viewmore mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/projects",
                                                    className: "button",
                                                    children: "View All Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/client.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 42
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 321,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "swiper-button-next projects-next"
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 322,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/client.tsx",
                                        lineNumber: 319,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 236,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 219,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/client.tsx",
                    lineNumber: 213,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 212,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyChooseUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 330,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SwiperInit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 331,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-100 position-relative padding overflow-hidden bg-light section-testimonials",
                style: {
                    minHeight: '600px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "heading mx-auto text-center d-lg-none",
                            "data-aos": "fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 fw-light text-primary mb-0",
                                children: "Stories of Happiness"
                            }, void 0, false, {
                                fileName: "[project]/app/client.tsx",
                                lineNumber: 337,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 336,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper project-slider",
                            "data-aos": "fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide testimonial-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "testimGrid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox1 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/alpesh.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 48
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "The location of the tower is wonderful, the proximity to the airport, the proximity to all the commercial landscapes is phenomenal here. It is one of the best-looking towers in the entire city. I am very-very impressed with the quality of construction."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Alpesh Rawat"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Office - Horizon Tower, Jaipur"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 44
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 348,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox2 testimBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "border-0 text-start p-0 h-100 videoSourceBtn",
                                                            "data-bs-target": "#video-Modal",
                                                            "data-bs-toggle": "modal",
                                                            "data-src": "./videos/testimonial/ashima.mp4",
                                                            "data-bs-source": "Mrs. Ashima",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testim-image h-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/testimonials/ashima.png",
                                                                            className: "h-100 object-cover",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "videoBtn",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-play"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 361,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 361,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testimonial-box h-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inner scroller",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-button spin mt-0 mb-3 text-uppercase",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "round-button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "circle"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 367,
                                                                                                columnNumber: 16
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "fa fa-play"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 368,
                                                                                                columnNumber: 16
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 366,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    "Click to Listen"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 365,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: "The impeccable standard of living, the world-class infrastructure, mesmerizing lounge, everything is so well-maintained in Suncity, that we ultimately decided to buy a flat here that turned out to be our home. Fortunately, the staff here is excellent & courteous."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 372,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "testimonial-info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Mrs. Ashima"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 374,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: "Resident - Parikrama, Panchkula"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 374,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 373,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox3 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/khwhish.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "It is a dream come true to live in Suncity. It is a perfect place to live your whole dream. Suncity has each & every facility you just name it. Be it restaurants, be it green belt, small food joints, it has everything within."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Ms. Khwahish Chawla"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Parikrama, Panchkula"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 46
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox4 testimBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "border-0 text-start p-0 h-100 videoSourceBtn",
                                                            "data-bs-target": "#video-Modal",
                                                            "data-bs-toggle": "modal",
                                                            "data-src": "./videos/testimonial/rishabh-jain.mp4",
                                                            "data-bs-source": "Mr. Rishabh Jain",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testim-image h-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/testimonials/rishabh.png",
                                                                            className: "h-100 object-cover",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 394,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "videoBtn",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-play"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 395,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testimonial-box h-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inner scroller",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-button spin mt-0 mb-3 text-uppercase",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "round-button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "circle"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 401,
                                                                                                columnNumber: 16
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "fa fa-play"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 402,
                                                                                                columnNumber: 16
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 400,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    "Click to Listen"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 399,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: "I have been consistently impressed with the professionalism and the dedication demonstrated by the management team. The commitment to maintain the highest standard of services has truly set Horizon Tower apart from any other commercial property in Jaipur."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 406,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "testimonial-info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Mr. Rishabh Jain"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 408,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: "Office - Horizon Tower, Jaipur"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 408,
                                                                                        columnNumber: 44
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 407,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox5 testimBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "border-0 text-start p-0 h-100 w-100 videoSourceBtn",
                                                            "data-bs-target": "#video-Modal",
                                                            "data-bs-toggle": "modal",
                                                            "data-src": "./videos/testimonial/sejal-dokania-&-mrs-manisha-dokania.mp4",
                                                            "data-bs-source": "Mrs. Sejal Dokania and Mrs. Manisha Dokania",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testim-image h-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/testimonials/sejal-manisha.jpg",
                                                                            className: "h-100 object-cover",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 417,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "videoBtn",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-play"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 418,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testimonial-box h-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inner scroller",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-button spin mt-0 mb-3 text-uppercase",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "round-button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "circle"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 424,
                                                                                                columnNumber: 16
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "fa fa-play"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 425,
                                                                                                columnNumber: 16
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 423,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    "Click to Listen"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: "We love the feature of massage room, it's good. We have used every feature be it library, cafe, pool and sauna everything and we enjoy each and every part of it. It's very beautiful and tidy. There is a word called elite, I call it elite."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 429,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "testimonial-info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Mrs. Sejal Dokania and Mrs. Manisha Dokania"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 431,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: "Resident - Jewel Of India, Jaipur"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 431,
                                                                                        columnNumber: 71
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox6 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/sushil-soni.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "Horizon Tower is a commercial paradise, right from planning to execution and the maintenance provided then after. We got what we were committed to. Everything here is very good and fabulous."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Sushil Soni"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 443,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Office - Horizon Tower, Jaipur"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 443,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 442,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox7 testimBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "border-0 text-start p-0 h-100 w-100 videoSourceBtn",
                                                            "data-bs-target": "#video-Modal",
                                                            "data-bs-toggle": "modal",
                                                            "data-src": "./videos/testimonial/savitri-wadhwani.mp4",
                                                            "data-bs-source": "Mrs. Savitri Wadhwani",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testim-image h-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/testimonials/savitri.jpg",
                                                                            className: "h-100 object-cover",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 451,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "videoBtn",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa fa-play"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 452,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 450,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "testimonial-box h-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inner scroller",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "icon-button spin mt-0 mb-3 text-uppercase",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "round-button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "circle"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 458,
                                                                                                columnNumber: 16
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "fa fa-play"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/client.tsx",
                                                                                                lineNumber: 459,
                                                                                                columnNumber: 16
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 457,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    "Click to Listen"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 456,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mb-0",
                                                                                children: "Jewel of India is one of the best project in Jaipur. After moved to JOI, I am having a peaceful life because of the surroundings, safety, greenery and the environment. I feel very good at JOI and the kind of Experience I am having now, I will definitely recommend in our friends and relatives."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 463,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "testimonial-info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Mrs. Savitri Wadhwani"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 465,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: "Resident - Jewel Of India, Jaipur"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/client.tsx",
                                                                                        lineNumber: 465,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/client.tsx",
                                                                                lineNumber: 464,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 455,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 454,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox8 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/nihal-singh.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "Yahan pe Bihari ji ka mandir, Prem mandir bohat pass mein hi hain. 2 minute main koi bhi gaadi se pohach jata hai. Security aur maintenance sab bohat acha hai yahan pe."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Nihal Singh"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 477,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Suncity Anantam"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 477,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox9 testimBox d-flex align-items-center justify-content-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "heading mb-0 mx-auto text-center",
                                                            "data-aos": "fade-in",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "h2 fw-lighter text-primary mb-0",
                                                                children: "Stories of Happiness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 342,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 341,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide testimonial-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "testimGrid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox1 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/madhubala-chaudhary.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "Mujhe koi bhi security ka issue nahi yahan pe sabse Vrindavan mein best society main aata hai Suncity Anantam. Sab kuch aas pass hai yahan se pure Vrindavan mein."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 495,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mrs. Madhubala Chaudhary"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Suncity Anantam"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 51
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 496,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox2 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/a-k-aggarwal.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "We are into manufacturing business and we shifted here 25 years back. As per the Horizon Tower is concerned, it is situated at the best locations of Jaipur. There is no other better place than this. Excellent location and I am satisfied!"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. A K Aggarwal"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 508,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Office - Horizon Tower"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 508,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox3 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/alok-bhandari.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "The team of Suncity is very good beside from it, the architecture is very well planned, it is fully ventilated and not at all congested. There are tower executive in each tower lobby, who are always ready to help. The security is very good, for once even if your door remains open, upon feel safe and secured."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Alok Bhandari"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 519,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Parikrama, Panchkula"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 519,
                                                                                    columnNumber: 44
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 518,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox4 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/ajit-saxena.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "I have moved in this flat on 24th of November and we are enjoying our stay in our newly built up home, our sweet home. - The ambience here is perfect. - And the morning walk which I was thinking I would miss here, is continuing because there were lot of, it has got lot of space in a beautiful lush green garden between the towers."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Ajit Saxena"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Parikrama, Panchkula"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 42
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 529,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox5 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/prem-singh-verma.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "Construction quality, overall, the designs, the area, the locality, you can say, overall, we find here. It is kids friendly. Raat ko 10 baje bhi bache hamare campus ke andar khelte hain to no issues aaj tak koi aisa incident nahi hai. Because security wise I found it most safe because lift ke andar camera laga hai."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Prem Singh Verma"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 541,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Parikrama, Panchkula"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 541,
                                                                                    columnNumber: 47
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox6 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/aashray-arora.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "There are a lot of amenities like badminton and table tennis and play area for my children, for my daughters and there's also a small park where they can play and enjoy. So there's certainly the feel of safety when you're residing here. So I would definitely recommend 100 on 100 for Platinum Towers."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 550,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Aashray Arora"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 552,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Platinum Towers"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 552,
                                                                                    columnNumber: 44
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 551,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 548,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox7 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/ak-puri.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "Bar and the restaurant coming in, I think it will be an ideal place to live and stay. I will always recommend and strongly recommend to all my friends and relatives if they can and if they want to shift to Gurgaon and in the heart of the city, this is an ideal place."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 561,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. AK PURI"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 563,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Platinum Towers"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 563,
                                                                                    columnNumber: 38
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 562,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox8 testimBox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testim-image h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/testimonials/anuj-goel.png",
                                                                    className: "h-100 object-cover",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-box h-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inner scroller",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-0",
                                                                            children: "When we me my wife and so this society and we're like, all right, this is it. This is what we wanted and I'll say right blend of luxury, amenities and I'll say all security because I travel a lot and security is one of the big concern for me because my family is alone when I'm out. So I think kind of security Platinum Towers provides, it's immense security at the outgate level, then at lobby level and at the floor level, lifts. So I think that was my primary criteria."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 572,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "testimonial-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Mr. Anuj goel"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 574,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: "Resident - Jewel Of India, Jaipur"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/client.tsx",
                                                                                    lineNumber: 574,
                                                                                    columnNumber: 40
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/client.tsx",
                                                                            lineNumber: 573,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/client.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimBox9 testimBox d-flex align-items-center justify-content-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "heading mb-0 mx-auto text-center",
                                                            "data-aos": "fade-in",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "h2 fw-lighter text-primary mb-0",
                                                                children: "Stories of Happiness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 490,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 489,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/sejal-manisha.jpg",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/sejal-dokania-&-mrs-manisha-dokania.mp4",
                                                        "data-bs-source": "Mrs. Sejal Dokania and Mrs. Manisha Dokania",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 593,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 594,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "We love the feature of massage room, it's good. We have used every feature be it library, cafe, pool and sauna everything and we enjoy each and every part of it. It's very beautiful and tidy. There is a word called elite, I call it elite."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mrs. Sejal Dokania and Mrs. Manisha Dokania"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Resident - Jewel Of India, Jaipur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 67
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 589,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 588,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/savitri.jpg",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/savitri-wadhwani.mp4",
                                                        "data-bs-source": "Mrs. Savitri Wadhwani",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Jewel of India is one of the best project in Jaipur. After moved to JOI, I am having a peaceful life because of the surroundings, safety, greenery and the environment. I feel very good at JOI and the kind of Experience I am having now, I will definitely recommend in our friends and relatives."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mrs. Savitri Wadhwani"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Resident - Jewel Of India, Jaipur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 607,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 606,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/khwahish.webp",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/khwahish-chawla.mp4",
                                                        "data-bs-source": "Ms. Khwahish Chawla",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 629,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 630,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "It is a dream come true to live in Suncity. It is a perfect place to live your whole dream. Suncity has each & every facility you just name it. Be it restaurants, be it green belt, small food joints, it has everything within."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Ms. Khwahish Chawla"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Resident - Parikrama, Panchkula"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 625,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 624,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/ashima.webp",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/ashima.mp4",
                                                        "data-bs-source": "Mrs. Ashima",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 648,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 646,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "The impeccable standard of living, the world-class infrastructure, mesmerizing lounge, everything is so well-maintained in Suncity, that we ultimately decided to buy a flat here that turned out to be our home. Fortunately, the staff here is excellent & courteous."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mrs. Ashima"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Resident - Parikrama, Panchkula"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 643,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 642,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/alpesh.webp",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/alpesh-rawat.mp4",
                                                        "data-bs-source": "Mr. Alpesh Rawat",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 666,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "The location of the tower is wonderful, the proximity to the airport, the proximity to all the commercial landscapes is phenomenal here. It is one of the best-looking towers in the entire city. I am very-very impressed with the quality of construction."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mr. Alpesh Rawat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Office - Horizon Tower, Jaipur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 661,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 660,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-slide client-speak-slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/testimonials/rishabh.webp",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 38
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button spin border-0 p-0 mt-0 mb-3 bg-transparent text-uppercase videoSourceBtn",
                                                        "data-bs-target": "#video-Modal",
                                                        "data-bs-toggle": "modal",
                                                        "data-src": "./videos/testimonial/rishabh-jain.mp4",
                                                        "data-bs-source": "Mr. Rishabh Jain",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "round-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa fa-play"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/client.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Click to Listen"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "I have been consistently impressed with the professionalism and the dedication demonstrated by the management team. The commitment to maintain the highest standard of services has truly set Horizon Tower apart from any other commercial property in Jaipur."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/client.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "client-speak-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mr. Rishabh Jain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "Office - Horizon Tower, Jaipur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/client.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/client.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 679,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 678,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/client.tsx",
                                    lineNumber: 340,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bottomControls",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-button-prev"
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 698,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "viewmore mt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/testimonials",
                                                className: "button",
                                                children: "Explore All"
                                            }, void 0, false, {
                                                fileName: "[project]/app/client.tsx",
                                                lineNumber: 699,
                                                columnNumber: 39
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 699,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-button-next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/client.tsx",
                                            lineNumber: 700,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/client.tsx",
                                    lineNumber: 697,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/client.tsx",
                            lineNumber: 339,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/client.tsx",
                    lineNumber: 335,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 334,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$blogs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 707,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TestimonialVideoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 708,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScriptReinitializer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/client.tsx",
                lineNumber: 728,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_s(HomeClient, "WW2IRGsIjmrQ6Qcrj4zvszdwLTY=");
_c = HomeClient;
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a973b248._.js.map