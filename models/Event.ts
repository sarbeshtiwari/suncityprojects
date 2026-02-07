import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  galleryImages: Array<{
    original: string;
    thumbnail: string;
    altText: string;
  }>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  otherMetaTags: string;
  schemaScript: string;
  isActive: boolean;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true
  },
  galleryImages: [{
    original: {
      type: String,
      required: [true, 'Original image is required'],
      trim: true
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail image is required'],
      trim: true
    },
    altText: {
      type: String,
      required: [true, 'Alt text is required'],
      trim: true
    }
  }],
  metaTitle: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    trim: true
  },
  metaKeywords: {
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
  isActive: {
    type: Boolean,
    default: true
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Clear any existing model to force recreation
if (mongoose.models.Event) {
  delete mongoose.models.Event;
}

export default mongoose.model<IEvent>('Event', EventSchema);
