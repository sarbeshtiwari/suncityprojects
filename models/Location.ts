import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  city: string;
  state: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

const LocationSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Location name is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true,
    default: 'India'
  }
}, {
  timestamps: true
});

export default mongoose.models.Location || mongoose.model<ILocation>('Location', LocationSchema);
