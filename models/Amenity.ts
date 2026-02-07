import mongoose, { Schema, Document } from 'mongoose';

export interface IAmenity extends Document {
  image: string;
  caption: string;
  createdAt: Date;
  updatedAt: Date;
}

const AmenitySchema: Schema = new Schema({
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  caption: {
    type: String,
    required: [true, 'Caption is required'],
    trim: true
  }
}, {
  timestamps: true
});

// Clear any existing model to ensure fresh schema
if (mongoose.models.Amenity) {
  delete mongoose.models.Amenity;
}

export default mongoose.model<IAmenity>('Amenity', AmenitySchema);
