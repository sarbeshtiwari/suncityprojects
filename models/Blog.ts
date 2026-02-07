import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  altText: string;
  author: string;
  publishedDate: Date;
  isPublished: boolean;
  isActive: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  tags: string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  altText: {
    type: String,
    required: [true, 'Alt text is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
    default: 'Suncity Projects'
  },
  publishedDate: {
    type: Date,
    required: [true, 'Published date is required'],
    default: Date.now
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
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
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['real-estate', 'investment', 'lifestyle', 'legal', 'tips', 'news'],
    default: 'real-estate'
  }
}, {
  timestamps: true
});

// Clear any existing model to force recreation
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

export default mongoose.model<IBlog>('Blog', BlogSchema);
