import mongoose, { Schema } from 'mongoose';
import { CareerForm } from '../lib/types';

const CareerFormSchema = new Schema<CareerForm>({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
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
  experience: {
    type: String,
    required: true,
    trim: true
  },
  jobPosition: {
    type: String,
    required: true,
    trim: true
  },
  resume: {
    type: String,
    required: false
  },
  coverLetter: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

export default mongoose.models.CareerForm || mongoose.model<CareerForm>('CareerForm', CareerFormSchema);
