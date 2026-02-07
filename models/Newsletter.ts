import mongoose, { Schema } from 'mongoose';
import { Newsletter } from '../lib/types';

const NewsletterSchema = new Schema<Newsletter>({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  source: {
    type: String,
    default: 'footer'
  }
}, {
  timestamps: true
});

export default mongoose.models.Newsletter || mongoose.model<Newsletter>('Newsletter', NewsletterSchema);
