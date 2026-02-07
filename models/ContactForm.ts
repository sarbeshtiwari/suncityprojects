import mongoose, { Schema } from 'mongoose';
import { ContactForm } from '../lib/types';

const ContactFormSchema = new Schema<ContactForm>({
  enquiryType: {
    type: String,
    required: true,
    enum: ['Corporate Office', 'Sales', 'Customer Support']
  },
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
  project: {
    type: String,
    required: false,
    trim: true
  },
  message: {
    type: String,
    required: false,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.ContactForm || mongoose.model<ContactForm>('ContactForm', ContactFormSchema);
