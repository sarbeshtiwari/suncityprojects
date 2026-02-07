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
"[project]/app/about-us/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyChooseUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyChooseUs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "emptyBox"
                }, void 0, false, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 12,
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 39
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "breadcrumb-item active",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 15,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/about-us/page.tsx",
                        lineNumber: 14,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 13,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-100 padding position-relative about-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "Overview"
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 23,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 23,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "timeline",
                                    className: "timeline",
                                    "data-aos": "fade-in",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        preload: "auto",
                                        playsInline: true,
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        poster: "/images/timeline-thumb.webp",
                                        className: "h-100 object-cover",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: "/videos/suncity-projects-timeline.mp4",
                                            type: "video/mp4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "overview",
                                    className: "heading mx-auto pt-5 text-center",
                                    "data-aos": "fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "title-xxl mb-3 text-primary",
                                            children: "Welcome to Suncity Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "h2 fw-lighter text-primary mb-0",
                                            children: "Curating spaces for perfect wellbeing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row justify-content-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-text text-center text-lg-justify",
                                                "data-aos": "fade-in",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "Suncity Projects Pvt Ltd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 12
                                                        }, this),
                                                        ", is a pioneer in creating exceptional real estate developments, ranging from townships and luxury apartments to shopping malls and office complexes. With a focus on innovative design, world-class construction standards, and strong community values, we take pride in fulfilling dreams while also creating lasting memories."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 8
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 35,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-text text-center text-lg-justify",
                                                "data-aos": "fade-in",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Driven by professionalism, quality, and creativity, we have successfully redefined benchmarks in the real estate industry. Every project by Suncity stands as a showpiece, reflecting meticulous planning, aesthetic brilliance, and excellence at par with the finest in the business."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 8
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-text text-center text-lg-justify",
                                                "data-aos": "fade-in",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "At Suncity, we believe in building relationships based on trust and transparency. Our commitment to quality extends across every aspect — whether in construction, customer service, or corporate practices — supported by modern technology and disciplined work culture. This ethos continues to shape a better, more inspired world for our patrons and partners alike."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 8
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12 statsContainer",
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
                                                                                children: "20"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 55,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            "+ Million Sq. Ft."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 55,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: "Of Timely Delivery"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 56,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 53,
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
                                                                                children: "14"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 61,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            " Cities"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 61,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: "Across India Imprints"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 62,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 59,
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
                                                                                children: "30"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 67,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            "+ Years"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 67,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: "Of Legacy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 65,
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
                                                                                children: "40"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 73,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            "+"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: "Landmark Projects"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 8
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 24,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 22,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "mission-vision",
                    className: "w-100 padding position-relative bg-white philosophy-section",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-4 col-lg-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "position-sticky",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "heading mb-lg-0 mx-auto ms-lg-0 text-center text-lg-start",
                                                "data-aos": "fade-in",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "title-xxl mb-0 text-primary",
                                                    children: "Our Mission"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-3 col-lg-3 d-none d-xl-flex align-items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: "w-100 bg-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-5 col-lg-7 text-center text-lg-justify",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-area ps-lg-5",
                                            "data-aos": "fade-in",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0",
                                                    children: "At Suncity Projects Pvt. Ltd., our mission is to enrich lives by creating world-class residential and commercial landmarks that redefine lifestyle standards while delivering exceptional value and enduring returns to our patrons."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 86,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-5",
                                style: {
                                    borderTop: '1px dashed var(--secondary-color)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 103,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-4 col-lg-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "position-sticky",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "heading mb-lg-0 mx-auto ms-lg-0 text-center text-lg-start",
                                                "data-aos": "fade-in",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "title-xxl mb-0 text-primary",
                                                    children: "Our Vision"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-3 col-lg-3 d-none d-xl-flex align-items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: "w-100 bg-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-5 col-lg-7 text-center text-lg-justify",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-area ps-lg-5",
                                            "data-aos": "fade-in",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0",
                                                    children: "To craft pioneering real estate concepts across diverse business verticals, setting new benchmarks in professionalism, ethics, quality, and customer service within the industry. Each creation stands as a testament to elegance and innovation, transforming the very way we experience living."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 104,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about-us/page.tsx",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 84,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "board-of-directors",
                    className: "w-100 padding pb-4 position-relative bod-section bg-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "Directors"
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 125,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 125,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "heading mx-auto text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-0 title-xxl",
                                        children: "Management Team"
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xxl-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row justify-content-center gy-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6 col-xl-4 col-md-5 teamBox",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/laxmi-narayan-goel",
                                                        className: "inner d-block h-100 overflow-hidden position-relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "img-fluid",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/leadership/mr-ln-goel-chairman.webp",
                                                                    className: "h-100 object-cover",
                                                                    alt: "Mr. L.N. Goel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 38
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "team-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "name",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "fw-lighter",
                                                                                children: "Mr. L.N. Goel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                className: "fw-lighter text-uppercase",
                                                                                children: "Chairman"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 139,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/icons/plus-icon.svg",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-sm-6 col-xl-4 col-md-5 teamBox",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/subhash-chander-aggarwal",
                                                        className: "inner d-block h-100 overflow-hidden position-relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "img-fluid",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/leadership/mr-subhash-chander-aggarwal-director.webp",
                                                                    className: "h-100 object-cover",
                                                                    alt: "Mr. Subhash Chander Aggarwal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 38
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "team-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "name",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "fw-lighter",
                                                                            children: "Mr. Subhash Chander Aggarwal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/icons/plus-icon.svg",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 153,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 126,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 124,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "team",
                    className: "w-100 padding pt-0 position-relative bg-light team-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "right",
                                children: "Management"
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 164,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 164,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xxl-9",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "swiper team-slider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "swiper-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "swiper-slide teamBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/varun-aggarwal",
                                                            className: "inner d-block h-100 overflow-hidden position-relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "img-fluid",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/leadership/mr-varun-aggarwal-director.webp",
                                                                        className: "h-100 object-cover",
                                                                        alt: "Mr. Varun Aggarwal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "team-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "fw-lighter",
                                                                                children: "Mr. Varun Aggarwal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: "/images/icons/plus-icon.svg",
                                                                                alt: ""
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 181,
                                                                                columnNumber: 16
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 181,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "swiper-slide teamBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/arpit-goel",
                                                            className: "inner d-block h-100 overflow-hidden position-relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "img-fluid",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/leadership/mr-arpit-goel-director.webp",
                                                                        className: "h-100 object-cover",
                                                                        alt: "Mr. Arpit Goel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "team-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "fw-lighter",
                                                                                children: "Mr. Arpit Goel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: "/images/icons/plus-icon.svg",
                                                                                alt: ""
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 16
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "swiper-slide teamBox",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/ankit-goel",
                                                            className: "inner d-block h-100 overflow-hidden position-relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "img-fluid",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/images/leadership/mr-ankit-goel-director.webp",
                                                                        className: "h-100 object-cover",
                                                                        alt: "Mr. Ankit Goel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "team-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "fw-lighter",
                                                                                children: "Mr. Ankit Goel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: "/images/icons/plus-icon.svg",
                                                                                alt: ""
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                                lineNumber: 205,
                                                                                columnNumber: 16
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "swiper-button-prev bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "swiper-button-next bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/about-us/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 169,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 165,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 163,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "leader",
                    className: "w-100 padding position-relative bg-white team-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "Leadership"
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 219,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 219,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "heading mx-auto text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-0 title-xxl text-primary",
                                        children: "Leadership Team"
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xxl-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper team-slider",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "swiper-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/sushil-kumar-gupta.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Sushil Kumar Gupta"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Sushil Kumar Gupta"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 233,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Head"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 234,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Legal)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 235,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/rk-agarwal.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "RK Agarwal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. RK Agarwal"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 245,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Vice President"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 246,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(HR, Admin, IT & Maintenance)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/ashish-mittal.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Ashish Mittal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Ashish Mittal"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 257,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Vice President"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 258,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Marketing)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/navneet-kumar.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Navneet Kumar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Navneet Kumar"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 281,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Assistant Vice President"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 282,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Business Development)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 283,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/ps-mathew.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "PS Mathew"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. PS Mathew"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 293,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Assistant Vice President"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 294,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Projects - E & S)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 295,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/prabhat-kumar-sah.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Prabhat Kumar Sah"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Prabhat Kumar Sah"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Assistant Vice President - Services (MEP)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Projects - E & S)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 307,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 304,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/anil-sharma.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Anil Sharma"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Anil Sharma"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 318,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Purchase & Procurement)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 319,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/anil-gupta.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Anil Gupta"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 326,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Anil Gupta"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 329,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Head"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 330,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Billing & Contracts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 331,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 328,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/mihir-kumar-puraiyar.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Mr. Mihir Kumar Puraiyar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 338,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Mihir Kumar Puraiyar"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 341,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 342,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Secretarial)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 343,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 340,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/rajeev-singh.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Rajeev Singh"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 350,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Rajeev Singh"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Deputy General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 354,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Brand Management)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 355,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 351,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/arihant-jain.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Arihant Jain"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Arihant Jain"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 365,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Deputy General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 366,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Commercial Marketing & Leasing)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 367,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/ajit-singh.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Ajit Singh"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 374,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Ajit Singh"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 377,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Assistant General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 378,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Club Operations)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 379,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 376,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/brij-kumar-srivastava.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "Brij Kumar Srivastava"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 386,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. Brij Kumar Srivastava"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 389,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase d-block",
                                                                                    children: "Assistant General Manager"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 390,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "(Projects - Architect)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 391,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 388,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "swiper-slide teamBox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inner d-block h-100 overflow-hidden position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "img-fluid",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/leadership/yp-singh.webp",
                                                                            className: "h-100 object-cover",
                                                                            alt: "YP Singh"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "team-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "name",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    className: "fw-lighter",
                                                                                    children: "Mr. YP Singh"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 401,
                                                                                    columnNumber: 14
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    className: "fw-lighter text-uppercase",
                                                                                    children: "IT - Consultant"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/about-us/page.tsx",
                                                                                    lineNumber: 402,
                                                                                    columnNumber: 14
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "swiper-button-prev bg-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "swiper-button-next bg-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about-us/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 220,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 218,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyChooseUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 416,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "csr",
                    className: "w-100 padding position-relative bg-light csr-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-absolute top-0 end-0 w-100 h-100 overflow-hidden",
                            style: {
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hidden-title",
                                "data-position": "left",
                                children: "CSR"
                            }, void 0, false, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 419,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 419,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row flex-row-reverse gy-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-5 side-imgWrapper",
                                        "data-aos": "fade-in",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/csr-image.jpg",
                                            className: "h-100 object-cover",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-7 about-text text-center text-xl-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inner pe-xl-5",
                                            "data-aos": "fade-in",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "heading mx-auto text-center ms-xl-0 text-xl-start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "title-xxl mb-0 text-primary",
                                                        children: "Corporate Social Responsibility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/about-us/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "At ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "Suncity Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 15
                                                        }, this),
                                                        ", we believe that true progress extends beyond creating landmark developments—it lies in nurturing the communities we serve and safeguarding the environment we share. Our CSR philosophy is rooted in responsibility, compassion, and sustainability, ensuring that every step we take contributes positively to society."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "From adopting eco-conscious building practices and promoting green infrastructure to actively engaging in community welfare initiatives, we strive to build a future that is inclusive and resilient. Over the years, Suncity has invested in educational empowerment, healthcare support, and environmental preservation, creating meaningful impacts that go hand-in-hand with our vision of holistic growth."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "For us, CSR is not an obligation, but a commitment to shaping lives, fostering unity, and building a legacy of care and trust—a reflection of the values that define Suncity Projects."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "project-icons justify-content-center justify-content-xl-start mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "icon-item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "in align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/icons/education.svg",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 34
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Educational Empowerment"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 437,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "icon-item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "in align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/icons/healthcare.svg",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 34
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Healthcare Support"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 446,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "icon-item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "in align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/images/icons/environment.svg",
                                                                            alt: ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 452,
                                                                            columnNumber: 34
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 452,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Environmental Preservation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/about-us/page.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/about-us/page.tsx",
                                                                        lineNumber: 453,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/about-us/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/about-us/page.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/about-us/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/about-us/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/about-us/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about-us/page.tsx",
                                lineNumber: 421,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/about-us/page.tsx",
                            lineNumber: 420,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about-us/page.tsx",
                    lineNumber: 418,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about-us/page.tsx",
            lineNumber: 10,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5dadc5b4._.js.map