import mongoose, { Document, Schema } from 'mongoose';

export interface IOTPVerification extends Document {
  mobile: string;
  otp: string;
  expiresAt: Date;
  verified: boolean;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OTPVerificationSchema = new Schema<IOTPVerification>({
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  otp: {
    type: String,
    required: true,
    trim: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expireAfterSeconds: 0 } // Auto-delete expired documents
  },
  verified: {
    type: Boolean,
    default: false
  },
  verifiedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for efficient queries
OTPVerificationSchema.index({ mobile: 1, verified: 1 });
OTPVerificationSchema.index({ expiresAt: 1 });

const OTPVerification = mongoose.models.OTPVerification || mongoose.model<IOTPVerification>('OTPVerification', OTPVerificationSchema);

export default OTPVerification;
