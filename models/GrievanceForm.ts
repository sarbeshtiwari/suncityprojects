import mongoose, { Schema } from 'mongoose';
import { GrievanceForm } from '../lib/types';

const GrievanceFormSchema = new Schema<GrievanceForm>({
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
  projectName: {
    type: String,
    required: true,
    enum: ['Jewel Of India Phase-2', 'Jewel Tower', 'Suncity Ultima', 'The Empire', 'Jewel Farms', 'The Empire Centre']
  },
  flatNumber: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.GrievanceForm || mongoose.model<GrievanceForm>('GrievanceForm', GrievanceFormSchema);
