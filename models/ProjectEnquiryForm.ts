import mongoose, { Schema } from 'mongoose';
import { ProjectEnquiryForm } from '../lib/types';

const ProjectEnquiryFormSchema = new Schema<ProjectEnquiryForm>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  enquiryType: {
    type: String,
    required: false,
    enum: ['Corporate Office', 'Sales', 'Customer Support']
  },
  visitDate: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: true,
    trim: true
  },
  pageName: {
    type: String,
    required: false,
    trim: true
  },
  keepUpdated: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.models.ProjectEnquiryForm || mongoose.model<ProjectEnquiryForm>('ProjectEnquiryForm', ProjectEnquiryFormSchema);
