import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  otherMetaTags: string;
  schemaScript: string;
  projectName: string;
  slug: string;
  category: string;
  reraNumber: string;
  longDescription: string;
  shortDescription: string;
  projectLocation: string | mongoose.Types.ObjectId;
  status: string;
  area: string;
  type: string;
  heading: string;
  projectLogo: string;
  projectThumbnail: string;
  locationImage: string;
  locationAltText: string;
  locationType: string;
  locationIframe: string;
  isActive: boolean;
  bannerVideo: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  bannerVideoPoster: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  sitePlanImage: {
    original: string;
    mobile: string;
    desktop: string;
    altText: string;
  };
  galleryImages: Array<{
    original: string;
    mobile: string;
    desktop: string;
    altText: string;
  }>;
  nearbyLocations: Array<{
    name: string;
    distance: string;
    unit: string;
    image: string;
    altText: string;
  }>;
  floorPlans: Array<{
    image: string;
    altText: string;
    planType: string;
    area: string;
    unit: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  amenities: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema({
  metaTitle: { type: String, trim: true },
  metaKeywords: { type: String, trim: true },
  metaDescription: { type: String, trim: true },
  otherMetaTags: { type: String, trim: true },
  schemaScript: { type: String, trim: true },
  projectName: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['residential', 'commercial', 'retail', 'education', 'delivered']
  },
  reraNumber: {
    type: String,
    required: [true, 'RERA number is required'],
    trim: true
  },
  longDescription: {
    type: String,
    required: [true, 'Long description is required'],
    trim: true
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true
  },
  projectLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: [true, 'Project location is required']
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['ongoing', 'completed', 'delivered']
  },
  area: {
    type: String,
    required: [true, 'Area is required'],
    trim: true
  },
 
  type: {
    type: String,
    required: [true, 'Type is required'],
    trim: true
  },
  heading: {
    type: String,
    required: [true, 'Heading is required'],
    trim: true
  },
  projectLogo: {
    type: String,
    required: [true, 'Project logo is required'],
    trim: true
  },
  projectThumbnail: {
    type: String,
    required: [true, 'Project Thumbnail is required'],
    trim: true
  },
 
  locationImage: {
    type: String,
    required: [true, 'Location image is required'],
    trim: true
  },
  locationAltText: {
    type: String,
    required: [true, 'Location alt text is required'],
    trim: true
  },
  locationType: {
    type: String,
    enum: ['image', 'iframe'],
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
    mobile: { type: String, trim: true },
    desktop: { type: String, trim: true },
    tablet: { type: String, trim: true }
  },
  bannerVideoPoster: {
    mobile: { type: String, trim: true },
    desktop: { type: String, trim: true },
    tablet: { type: String, trim: true }
  },
  sitePlanImage: {
    original: { type: String, trim: true },
    mobile: { type: String, trim: true },
    desktop: { type: String, trim: true },
    altText: { type: String, trim: true }
  },
  galleryImages: [{
    original: { type: String, trim: true },
    mobile: { type: String, trim: true },
    desktop: { type: String, trim: true },
    altText: { type: String, trim: true }
  }],
  nearbyLocations: [{
    name: { type: String, trim: true },
    distance: { type: String, trim: true },
    unit: { type: String, trim: true },
    image: { type: String, trim: true },
    altText: { type: String, trim: true }
  }],
  floorPlans: [{
    image: { type: String, trim: true },
    altText: { type: String, trim: true },
    planType: { type: String, trim: true },
    area: { type: String, trim: true },
    unit: { type: String, trim: true }
  }],
  faqs: [{
    question: { type: String, trim: true },
    answer: { type: String, trim: true }
  }],
  amenities: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Amenity' 
  }]
}, {
  timestamps: true
});

// Clear any existing model to force recreation
if (mongoose.models.Project) {
  delete mongoose.models.Project;
}

export default mongoose.model<IProject>('Project', ProjectSchema);
