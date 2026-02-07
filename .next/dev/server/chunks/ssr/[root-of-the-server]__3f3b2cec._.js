module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/blogs/[slug]/client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/blogs/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/blogs/[slug]/page.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f5b$slug$5d2f$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blogs/[slug]/client.tsx [app-rsc] (ecmascript)");
;
;
;
async function getBlog(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data.success ? data.data : null;
}
async function getRecentBlogs(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
        cache: 'no-store'
    });
    const data = await res.json();
    if (!data.success) return [];
    return data.data.filter((b)=>b.slug !== slug).slice(0, 5);
}
async function BlogPage({ params }) {
    const blog = await getBlog(params.slug);
    if (!blog) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const recentBlogs = await getRecentBlogs(params.slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f5b$slug$5d2f$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        blog: blog,
        recentBlogs: recentBlogs
    }, void 0, false, {
        fileName: "[project]/app/blogs/[slug]/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blogs/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blogs/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3f3b2cec._.js.map