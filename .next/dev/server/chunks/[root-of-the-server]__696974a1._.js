module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/suncity-forms';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/models/Project.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const ProjectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    metaTitle: {
        type: String,
        trim: true
    },
    metaKeywords: {
        type: String,
        trim: true
    },
    metaDescription: {
        type: String,
        trim: true
    },
    otherMetaTags: {
        type: String,
        trim: true
    },
    schemaScript: {
        type: String,
        trim: true
    },
    projectName: {
        type: String,
        required: [
            true,
            'Project name is required'
        ],
        trim: true
    },
    slug: {
        type: String,
        required: [
            true,
            'Slug is required'
        ],
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: [
            true,
            'Category is required'
        ],
        enum: [
            'residential',
            'commercial',
            'retail',
            'education',
            'delivered'
        ]
    },
    reraNumber: {
        type: String,
        required: [
            true,
            'RERA number is required'
        ],
        trim: true
    },
    longDescription: {
        type: String,
        required: [
            true,
            'Long description is required'
        ],
        trim: true
    },
    shortDescription: {
        type: String,
        required: [
            true,
            'Short description is required'
        ],
        trim: true
    },
    projectLocation: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.ObjectId,
        ref: 'Location',
        required: [
            true,
            'Project location is required'
        ]
    },
    status: {
        type: String,
        required: [
            true,
            'Status is required'
        ],
        enum: [
            'ongoing',
            'completed',
            'delivered'
        ]
    },
    area: {
        type: String,
        required: [
            true,
            'Area is required'
        ],
        trim: true
    },
    type: {
        type: String,
        required: [
            true,
            'Type is required'
        ],
        trim: true
    },
    heading: {
        type: String,
        required: [
            true,
            'Heading is required'
        ],
        trim: true
    },
    projectLogo: {
        type: String,
        required: [
            true,
            'Project logo is required'
        ],
        trim: true
    },
    projectThumbnail: {
        type: String,
        required: [
            true,
            'Project Thumbnail is required'
        ],
        trim: true
    },
    locationImage: {
        type: String,
        required: [
            true,
            'Location image is required'
        ],
        trim: true
    },
    locationAltText: {
        type: String,
        required: [
            true,
            'Location alt text is required'
        ],
        trim: true
    },
    locationType: {
        type: String,
        enum: [
            'image',
            'iframe'
        ],
        default: 'image'
    },
    locationIframe: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    bannerVideo: {
        mobile: {
            type: String,
            trim: true
        },
        desktop: {
            type: String,
            trim: true
        },
        tablet: {
            type: String,
            trim: true
        }
    },
    bannerVideoPoster: {
        mobile: {
            type: String,
            trim: true
        },
        desktop: {
            type: String,
            trim: true
        },
        tablet: {
            type: String,
            trim: true
        }
    },
    sitePlanImage: {
        original: {
            type: String,
            trim: true
        },
        mobile: {
            type: String,
            trim: true
        },
        desktop: {
            type: String,
            trim: true
        },
        altText: {
            type: String,
            trim: true
        }
    },
    galleryImages: [
        {
            original: {
                type: String,
                trim: true
            },
            mobile: {
                type: String,
                trim: true
            },
            desktop: {
                type: String,
                trim: true
            },
            altText: {
                type: String,
                trim: true
            }
        }
    ],
    nearbyLocations: [
        {
            name: {
                type: String,
                trim: true
            },
            distance: {
                type: String,
                trim: true
            },
            unit: {
                type: String,
                trim: true
            },
            image: {
                type: String,
                trim: true
            },
            altText: {
                type: String,
                trim: true
            }
        }
    ],
    floorPlans: [
        {
            image: {
                type: String,
                trim: true
            },
            altText: {
                type: String,
                trim: true
            },
            planType: {
                type: String,
                trim: true
            },
            area: {
                type: String,
                trim: true
            },
            unit: {
                type: String,
                trim: true
            }
        }
    ],
    faqs: [
        {
            question: {
                type: String,
                trim: true
            },
            answer: {
                type: String,
                trim: true
            }
        }
    ],
    amenities: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.ObjectId,
            ref: 'Amenity'
        }
    ]
}, {
    timestamps: true
});
// Clear any existing model to force recreation
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Project', ProjectSchema);
}),
"[project]/models/Location.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const LocationSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: [
            true,
            'Location name is required'
        ],
        trim: true
    },
    city: {
        type: String,
        required: [
            true,
            'City is required'
        ],
        trim: true
    },
    state: {
        type: String,
        required: [
            true,
            'State is required'
        ],
        trim: true
    },
    country: {
        type: String,
        required: [
            true,
            'Country is required'
        ],
        trim: true,
        default: 'India'
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Location || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Location', LocationSchema);
}),
"[project]/models/Amenity.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const AmenitySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    image: {
        type: String,
        required: [
            true,
            'Image is required'
        ],
        trim: true
    },
    caption: {
        type: String,
        required: [
            true,
            'Caption is required'
        ],
        trim: true
    }
}, {
    timestamps: true
});
// Clear any existing model to ensure fresh schema
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Amenity) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Amenity;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Amenity', AmenitySchema);
}),
"[project]/app/api/projects/[slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Project.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Location$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Location.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Amenity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Amenity.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request, { params }) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { slug } = await params;
        // First try to get project without populate
        let project = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug: slug,
            isActive: true
        });
        if (!project) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Project not found'
            }, {
                status: 404
            });
        }
        // Try to populate the project
        try {
            project = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                slug: slug,
                isActive: true
            }).populate({
                path: 'projectLocation',
                select: 'name city state country',
                model: __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Location$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
                options: {
                    strictPopulate: false
                }
            }).populate({
                path: 'amenities',
                select: 'heading subHeading image caption',
                model: __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Amenity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
                options: {
                    strictPopulate: false
                }
            });
        } catch (populateError) {
            console.warn('Populate failed, returning basic project data:', populateError);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: project
        });
    } catch (error) {
        console.error('Error fetching project:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch project'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__696974a1._.js.map