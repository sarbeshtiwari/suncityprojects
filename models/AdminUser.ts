import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { AdminUser } from '../lib/types';

const AdminUserSchema = new Schema<AdminUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'super_admin'],
      default: 'admin'
    }
  },
  {
    timestamps: true
  }
);

// ✅ Hash password before saving
AdminUserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// ✅ Compare password method
AdminUserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.AdminUser ||
  mongoose.model<AdminUser>('AdminUser', AdminUserSchema);
