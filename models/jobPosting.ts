
import { JobForm } from '../lib/types';
import mongoose, { Schema } from 'mongoose';

const JobFormSchema = new Schema<JobForm>({
  position_name: {
    type: String,
    required: true,
    trim: true
  },
  experience_required: {
    type: String,
    required: true,
    trim: true
  },
  CTC: {
    type: String,
    required: true,
    trim: true
  },
  job_responsibilities: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  qualifications: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  status: {
    type: Boolean,
    required: false
  }
}, {
  timestamps: true
});

export default mongoose.models.JobForm || mongoose.model<JobForm>('JobForm', JobFormSchema);
