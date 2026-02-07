import mongoose, { Schema } from 'mongoose';
import { ChannelPartnerForm } from '../lib/types';

const ChannelPartnerFormSchema = new Schema<ChannelPartnerForm>({
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
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  companyAddress: {
    type: String,
    required: true,
    trim: true
  },
  teamSize: {
    type: String,
    required: true,
    trim: true
  },
  reraRegNumber: {
    type: String,
    required: true,
    trim: true
  },
  reraCertificate: {
    type: String,
    required: false
  },
  locationOfInterest: {
    type: String,
    required: true,
    enum: ['Baddi', 'Delhi', 'Gurugram', 'Indore', 'Jaipur', 'Kaithal', 'New Chandigarh', 'Panchkula', 'Rewari', 'Rohtak', 'Vrindavan', 'Yamuna Nagar', 'Zirakpur', 'Other']
  },
  otherLocation: {
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

export default mongoose.models.ChannelPartnerForm || mongoose.model<ChannelPartnerForm>('ChannelPartnerForm', ChannelPartnerFormSchema);
