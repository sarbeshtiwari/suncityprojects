import { Document } from 'mongoose';

export interface ContactForm extends Document {
  enquiryType: string;
  name: string;
  email: string;
  mobile: string;
  project: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobForm extends Document {
  position_name: string;
  experience_required: string;
  CTC: string;
  job_responsibilities: string;
  qualifications: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CareerForm extends Document {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  experience: string;
  jobPosition: string;
  resume?: string;
  coverLetter?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChannelPartnerForm extends Document {
  name: string;
  email: string;
  mobile: string;
  companyName: string;
  companyAddress: string;
  teamSize: string;
  reraRegNumber: string;
  reraCertificate?: string;
  locationOfInterest: string;
  otherLocation?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GrievanceForm extends Document {
  name: string;
  email: string;
  mobile: string;
  projectName: string;
  flatNumber: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
}

export interface ProjectEnquiryForm extends Document {
  name: string;
  email: string;
  mobile: string;
  enquiryType?: string;
  visitDate?: string;
  source: string;
  pageName?: string;
  keepUpdated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Newsletter extends Document {
  email: string;
  isActive: boolean;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'super_admin';
  createdAt: Date;
  updatedAt: Date;
}
