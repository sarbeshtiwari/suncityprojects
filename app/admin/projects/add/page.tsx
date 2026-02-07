'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Location {
  _id: string;
  name: string;
  city: string;
  state: string;
}

interface Amenity {
  _id: string;
  heading: string;
  subHeading: string;
  image: string;
  caption: string;
}

interface AddProjectPageProps {
  initialData?: any;
  isEditMode?: boolean;
  projectId?: string;
}

export default function AddProjectPage({ initialData, isEditMode = false, projectId }: AddProjectPageProps = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  
  const [formData, setFormData] = useState({
    metaTitle: initialData?.metaTitle || '',
    metaKeywords: initialData?.metaKeywords || '',
    metaDescription: initialData?.metaDescription || '',
    otherMetaTags: initialData?.otherMetaTags || '',
    schemaScript: initialData?.schemaScript || '',
    projectName: initialData?.projectName || '',
    projectLogo: initialData?.projectLogo || '',
    projectThumbnail: initialData?.projectThumbnail || '',
    slug: initialData?.slug || '',
    category: initialData?.category || 'residential',
    reraNumber: initialData?.reraNumber || '',
    longDescription: initialData?.longDescription || '',
    shortDescription: initialData?.shortDescription || '',
    projectLocation: typeof initialData?.projectLocation === 'object' ? initialData?.projectLocation?._id || '' : initialData?.projectLocation || '',
    status: initialData?.status || 'ongoing',
    area: initialData?.area || '',
    type: initialData?.type || '',
    heading: initialData?.heading || '',
    locationImage: initialData?.locationImage || '',
    locationAltText: initialData?.locationAltText || '',
    locationType: initialData?.locationType || 'iframe', // 'image' or 'iframe'
    locationIframe: initialData?.locationIframe || '',
    isActive: initialData?.isActive !== undefined ? initialData.isActive : true,
    bannerVideo: {
      mobile: initialData?.bannerVideo?.mobile || '',
      desktop: initialData?.bannerVideo?.desktop || '',
      tablet: initialData?.bannerVideo?.tablet || ''
    },
    bannerVideoPoster: {
      mobile: initialData?.bannerVideoPoster?.mobile || '',
      desktop: initialData?.bannerVideoPoster?.desktop || '',
      tablet: initialData?.bannerVideoPoster?.tablet || ''
    },
    sitePlanImage: {
      original: initialData?.sitePlanImage?.original || '',
      mobile: initialData?.sitePlanImage?.mobile || '',
      desktop: initialData?.sitePlanImage?.desktop || '',
      altText: initialData?.sitePlanImage?.altText || ''
    },
    galleryImages: initialData?.galleryImages || [] as any[],
    nearbyLocations: initialData?.nearbyLocations || [] as any[],
    floorPlans: initialData?.floorPlans || [] as any[],
    faqs: initialData?.faqs || [] as any[],
    amenities: initialData?.amenities?.map((amenity: any) => 
      typeof amenity === 'object' ? amenity._id : amenity
    ) || [] as string[]
  });

  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchLocations();
    fetchAmenities();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/locations');
      const data = await response.json();
      if (data.success) {
        setLocations(data.data);
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchAmenities = async () => {
    try {
      const response = await fetch('/api/amenities');
      const data = await response.json();
      if (data.success) {
        setAmenities(data.data);
      }
    } catch (error) {
      console.error('Error fetching amenities:', error);
    }
  };

  const generateSlug = (projectName: string): string => {
    return projectName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any || {}),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => {
        const newData = {
          ...prev,
          [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        };
        
        // Auto-generate slug when project name changes
        if (name === 'projectName' && value) {
          newData.slug = generateSlug(value);
        }
        
        return newData;
      });
    }
  };

  const handleArrayChange = (arrayName: string, index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName as keyof typeof prev] as any[] || []).map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addArrayItem = (arrayName: string, template: any) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...(prev[arrayName as keyof typeof prev] as any[] || []), template]
    }));
  };

  const removeArrayItem = (arrayName: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName as keyof typeof prev] as any[] || []).filter((_: any, i: number) => i !== index)
    }));
  };

  const handleFileUpload = async (file: File, fieldName: string) => {
    const fileId = `${fieldName}-${Date.now()}`;
    setUploadingFiles(prev => new Set(prev).add(fileId));

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fieldName', fieldName);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return null;
    } finally {
      setUploadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileId);
        return newSet;
      });
    }
  };

  const validateImageFile = (file: File, fieldName: string): boolean => {
    // Check file size (5MB limit)
    const maxSize = 60 * 1024 * 1024; // 60MB in bytes
    if (file.size > maxSize) {
      alert(`File size must be less than 60MB. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
      return false;
    }

    // Check MIME type for specific fields
    if (fieldName === 'projectThumbnail') {
      const allowedMimeTypes = [
        'image/webp',
        'image/avif', 
        'image/jpeg',
        'image/jpg',
        'image/png'
      ];
      
      if (!allowedMimeTypes.includes(file.type)) {
        alert(`Invalid file type. Allowed types: WebP, AVIF, JPG, PNG. Current type: ${file.type}`);
        return false;
      }
    }

    return true;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file before upload
    if (!validateImageFile(file, fieldName)) {
      // Reset the input
      e.target.value = '';
      return;
    }

    const url = await handleFileUpload(file, fieldName);
    if (url) {
      if (fieldName.includes('.')) {
        const [parent, child] = fieldName.split('.');
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...(prev[parent as keyof typeof prev] as any || {}),
            [child]: url
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [fieldName]: url
        }));
      }
    }
  };

  const handleArrayFileChange = async (e: React.ChangeEvent<HTMLInputElement>, arrayName: string, index: number, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await handleFileUpload(file, `${arrayName}-${index}-${field}`);
    if (url) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: (prev[arrayName as keyof typeof prev] as any[] || []).map((item: any, i: number) => 
          i === index ? { ...item, [field]: url } : item
        )
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields on frontend
      const requiredFields = [
        'projectName', 'slug', 'category', 'reraNumber', 'longDescription', 
        'shortDescription', 'projectLocation', 'status', 'area', 'type', 
        'heading', 'locationAltText'
      ];
      
      // Add file fields only if not in edit mode or if files don't exist
      if (!isEditMode || !formData.projectLogo) {
        requiredFields.push('projectLogo');
      }
      if (!isEditMode || !formData.projectThumbnail) {
        requiredFields.push('projectThumbnail');
      }
      if (!isEditMode || !formData.locationImage) {
        requiredFields.push('locationImage');
      }
      
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }

      const url = isEditMode ? `/api/projects/manage/${projectId}` : '/api/projects';
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert(isEditMode ? 'Project updated successfully!' : 'Project created successfully!');
        router.push('/admin/projects');
      } else {
        const errorMessage = data.details ? 
          `${data.error}: ${Array.isArray(data.details) ? data.details.join(', ') : data.details}` : 
          data.error;
        alert(`Failed to ${isEditMode ? 'update' : 'create'} project: ` + errorMessage);
      }
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} project:`, error);
      alert(`Error ${isEditMode ? 'updating' : 'creating'} project: ` + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">{isEditMode ? 'Edit Project' : 'Add New Project'}</h1>
          <p className="text-muted mb-0">{isEditMode ? 'Update the project details' : 'Create a new real estate project'}</p>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
        >
          ← Back to Projects
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-100">
        {/* SEO Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">SEO Details</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={4}
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Schema</label>
                <textarea
                  name="schemaScript"
                  value={formData.schemaScript}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={4}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-medium text-muted">Other Meta Tags</label>
                <textarea
                  name="otherMetaTags"
                  value={formData.otherMetaTags}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Project Information</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Slug (URL-friendly name)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="Will be auto-generated from project name"
                  className="form-control"
                />
                <p className="form-text small text-muted">Leave empty to auto-generate from project name</p>
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Location</label>
                <select
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Location</option>
                  {locations.map(location => (
                    <option key={location._id} value={location._id}>
                      {location.name}, {location.city}
                    </option>
                  ))}
                </select>
              </div>
             
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Area</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">RERA Number</label>
                <input
                  type="text"
                  name="reraNumber"
                  value={formData.reraNumber}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Project Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'projectLogo')}
                  required={!isEditMode || !formData.projectLogo}
                  className="form-control"
                />
                {isEditMode && formData.projectLogo && (
                  <p className="form-text small text-muted mt-1">Current logo is uploaded. Leave empty to keep existing logo.</p>
                )}
                {formData.projectLogo && (
                  <div className="mt-2">
                    <img src={formData.projectLogo} alt="Project Logo Preview" className="rounded" style={{height: '5rem', width: '5rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Project Thumbnail</label>
                <input
                  type="file"
                  accept=".webp,.avif,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'projectThumbnail')}
                  required={!isEditMode || !formData.projectThumbnail}
                  className="form-control"
                />
                <p className="form-text small text-muted">Allowed formats: WebP, AVIF, JPG, PNG (Max size: 5MB)</p>
                {isEditMode && formData.projectThumbnail && (
                  <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                )}
                {formData.projectThumbnail && (
                  <div className="mt-2">
                    <img src={formData.projectThumbnail} alt="Project Thumbnail Preview" className="rounded" style={{height: '5rem', width: '5rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="form-check-input"
                    id="isActive"
                  />
                  <label className="form-check-label small text-muted" htmlFor="isActive">Active</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Videos */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Banner Videos</h2>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-medium text-muted">Mobile Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideo.mobile')}
                  required={!isEditMode || !formData.bannerVideo.mobile}
                  className="form-control"
                />
                {isEditMode && formData.bannerVideo.mobile && (
                  <p className="form-text small text-muted mt-1">Current video is uploaded. Leave empty to keep existing video.</p>
                )}
                {formData.bannerVideo.mobile && (
                  <div className="mt-2">
                    <video src={formData.bannerVideo.mobile} className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} controls webkit-playsinline playsInline />
                  </div>
                )}
                <label className="form-label small fw-medium text-muted mt-3">Mobile Video Poster</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideoPoster.mobile')}
                  className="form-control"
                />
                {formData.bannerVideoPoster.mobile && (
                  <div className="mt-2">
                    <img src={formData.bannerVideoPoster.mobile} alt="Mobile Video Poster Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label small fw-medium text-muted">Tablet Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideo.tablet')}
                  required={!isEditMode || !formData.bannerVideo.tablet}
                  className="form-control"
                />
                {isEditMode && formData.bannerVideo.tablet && (
                  <p className="form-text small text-muted mt-1">Current video is uploaded. Leave empty to keep existing video.</p>
                )}
                {formData.bannerVideo.tablet && (
                  <div className="mt-2">
                    <video src={formData.bannerVideo.tablet} className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} controls webkit-playsinline playsInline />
                  </div>
                )}
                <label className="form-label small fw-medium text-muted mt-3">Tablet Video Poster</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideoPoster.tablet')}
                  className="form-control"
                />
                {formData.bannerVideoPoster.tablet && (
                  <div className="mt-2">
                    <img src={formData.bannerVideoPoster.tablet} alt="Tablet Video Poster Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label small fw-medium text-muted">Desktop Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideo.desktop')}
                  required={!isEditMode || !formData.bannerVideo.desktop}
                  className="form-control"
                />
                {isEditMode && formData.bannerVideo.desktop && (
                  <p className="form-text small text-muted mt-1">Current video is uploaded. Leave empty to keep existing video.</p>
                )}
                {formData.bannerVideo.desktop && (
                  <div className="mt-2">
                    <video src={formData.bannerVideo.desktop} className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} controls webkit-playsinline playsInline/>
                  </div>
                )}
                <label className="form-label small fw-medium text-muted mt-3">Desktop Video Poster</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'bannerVideoPoster.desktop')}
                  className="form-control"
                />
                {formData.bannerVideoPoster.desktop && (
                  <div className="mt-2">
                    <img src={formData.bannerVideoPoster.desktop} alt="Desktop Video Poster Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Content Information</h2>
            <div className="row g-3">
              <div className='col-12'>
                <label className="form-label small fw-medium text-muted">Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className='col-12'>
                <label className="form-label small fw-medium text-muted">Short Description</label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className='col-12'>
                <label className="form-label small fw-medium text-muted">Long Description</label>
                <textarea
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Gallery</h2>
            <div className="d-flex flex-column">
              <div>
                {formData.galleryImages.map((image: any, index: number) => (
                  <div key={index} className="border rounded p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="fw-medium text-dark mb-0">Image {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeArrayItem('galleryImages', index)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="row g-3">
                      <div className="col-12 col-lg-6">
                        <label className="form-label small fw-medium text-muted">Original Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleArrayFileChange(e, 'galleryImages', index, 'original')}
                          className="form-control"
                        />
                        {image.original && (
                          <div className="mt-2">
                            <img src={image.original} alt="Gallery Original Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-lg-6">
                        <label className="form-label small fw-medium text-muted">Mobile Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleArrayFileChange(e, 'galleryImages', index, 'mobile')}
                          className="form-control"
                        />
                        {image.mobile && (
                          <div className="mt-2">
                            <img src={image.mobile} alt="Gallery Mobile Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-lg-6">
                        <label className="form-label small fw-medium text-muted">Desktop Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleArrayFileChange(e, 'galleryImages', index, 'desktop')}
                          className="form-control"
                        />
                        {image.desktop && (
                          <div className="mt-2">
                            <img src={image.desktop} alt="Gallery Desktop Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-lg-6">
                        <label className="form-label small fw-medium text-muted">Alt Text</label>
                        <input
                          type="text"
                          value={image.altText}
                          onChange={(e) => handleArrayChange('galleryImages', index, 'altText', e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="h6 fw-medium text-dark mb-0">Gallery Images</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('galleryImages', { original: '', mobile: '', desktop: '', altText: '' })}
                    className="btn btn-primary btn-sm"
                  >
                    Add Image
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Amenities</h2>
            <div className="mb-3">
              <label className="form-label small fw-medium text-muted">Select Amenities</label>
              <div className="row g-3">
                {amenities.map((amenity: any) => (
                  <div key={amenity._id} className="col-12 col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value={amenity._id}
                        checked={formData.amenities.includes(amenity._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({
                              ...prev,
                              amenities: [...prev.amenities, amenity._id]
                            }));
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              amenities: prev.amenities.filter((id: string) => id !== amenity._id)
                            }));
                          }
                        }}
                        className="form-check-input"
                        id={`amenity-${amenity._id}`}
                      />
                      <label className="form-check-label d-flex flex-column text-center align-items-center p-3 border rounded" htmlFor={`amenity-${amenity._id}`}>
                        {amenity.image && (
                          <img 
                            src={amenity.image} 
                            alt={amenity.heading}
                            className="mb-2 rounded" 
                            style={{height: '24px', width: '24px', objectFit: 'cover'}} 
                          />
                        )}
                        <div className="small fw-medium text-dark">{amenity.caption}</div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Floor Plans</h2>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 fw-medium text-dark mb-0">Floor Plans</h3>
                <button
                  type="button"
                  onClick={() => addArrayItem('floorPlans', { image: '', altText: '', planType: '', area: '', unit: 'sqft' })}
                  className="btn btn-primary btn-sm"
                >
                  Add Floor Plan
                </button>
              </div>
              {formData.floorPlans.map((plan: any, index: number) => (
                <div key={index} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-medium text-dark mb-0">Floor Plan {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => removeArrayItem('floorPlans', index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Floor Plan Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleArrayFileChange(e, 'floorPlans', index, 'image')}
                        className="form-control"
                      />
                      {plan.image && (
                        <div className="mt-2">
                          <img src={plan.image} alt="Floor Plan Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Alt Text</label>
                      <input
                        type="text"
                        value={plan.altText}
                        onChange={(e) => handleArrayChange('floorPlans', index, 'altText', e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Plan Type</label>
                      <input
                        type="text"
                        value={plan.planType}
                        onChange={(e) => handleArrayChange('floorPlans', index, 'planType', e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Area</label>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          value={plan.area}
                          onChange={(e) => handleArrayChange('floorPlans', index, 'area', e.target.value)}
                          className="form-control"
                          placeholder="Enter area"
                        />
                        <select
                          value={plan.unit}
                          onChange={(e) => handleArrayChange('floorPlans', index, 'unit', e.target.value)}
                          className="form-select"
                          style={{width: 'auto', minWidth: '100px'}}
                        >
                          <option value="sqft">Sq Ft</option>
                          <option value="sqmt">Sq Mt</option>
                          <option value="acre">Acre</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Site Plan */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Site Plan</h2>
            <div className="d-flex flex-column gap-3">             
             
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <label className="form-label small fw-medium text-muted">Original Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'sitePlanImage.original')}
                    required={!isEditMode || !formData.sitePlanImage.original}
                    className="form-control"
                  />
                  {isEditMode && formData.sitePlanImage.original && (
                    <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                  )}
                  {formData.sitePlanImage.original && (
                    <div className="mt-2">
                      <img src={formData.sitePlanImage.original} alt="Site Plan Original Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                    </div>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label small fw-medium text-muted">Mobile Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'sitePlanImage.mobile')}
                    required={!isEditMode || !formData.sitePlanImage.mobile}
                    className="form-control"
                  />
                  {isEditMode && formData.sitePlanImage.mobile && (
                    <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                  )}
                  {formData.sitePlanImage.mobile && (
                    <div className="mt-2">
                      <img src={formData.sitePlanImage.mobile} alt="Site Plan Mobile Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                    </div>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label small fw-medium text-muted">Desktop Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'sitePlanImage.desktop')}
                    required={!isEditMode || !formData.sitePlanImage.desktop}
                    className="form-control"
                  />
                  {isEditMode && formData.sitePlanImage.desktop && (
                    <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                  )}
                  {formData.sitePlanImage.desktop && (
                    <div className="mt-2">
                      <img src={formData.sitePlanImage.desktop} alt="Site Plan Desktop Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="form-label small fw-medium text-muted">Site Plan Alt Text</label>
                <input
                  type="text"
                  name="sitePlanImage.altText"
                  value={formData.sitePlanImage.altText}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Locations */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Nearby Locations</h2>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 fw-medium text-dark mb-0">Nearby Locations</h3>
                <button
                  type="button"
                  onClick={() => addArrayItem('nearbyLocations', { name: '', distance: '', unit: 'minutes', image: '', altText: '' })}
                  className="btn btn-primary btn-sm"
                >
                  Add Location
                </button>
              </div>
              {formData.nearbyLocations.map((location: any, index: number) => (
                <div key={index} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-medium text-dark mb-0">Location {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => removeArrayItem('nearbyLocations', index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Name</label>
                      <input
                        type="text"
                        value={location.name}
                        onChange={(e) => handleArrayChange('nearbyLocations', index, 'name', e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Distance</label>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          value={location.distance}
                          onChange={(e) => handleArrayChange('nearbyLocations', index, 'distance', e.target.value)}
                          className="form-control"
                          placeholder="Enter distance"
                        />
                        <select
                          value={location.unit}
                          onChange={(e) => handleArrayChange('nearbyLocations', index, 'unit', e.target.value)}
                          className="form-select"
                          style={{width: 'auto', minWidth: '120px'}}
                        >
                          <option value="minutes">Minutes</option>
                          <option value="hrs">Hours</option>
                          <option value="km">KM</option>
                          <option value="meter">Meter</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Location Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleArrayFileChange(e, 'nearbyLocations', index, 'image')}
                        className="form-control"
                      />
                      {location.image && (
                        <div className="mt-2">
                          <img src={location.image} alt="Location Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label small fw-medium text-muted">Alt Text</label>
                      <input
                        type="text"
                        value={location.altText}
                        onChange={(e) => handleArrayChange('nearbyLocations', index, 'altText', e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Location Map</h2>
            <div className="d-flex flex-column gap-3">
              <div>
                <label className="form-label small fw-medium text-muted">Location Type</label>
                <div className="d-flex gap-3 mb-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="locationType"
                      value="image"
                      checked={formData.locationType === 'image'}
                      onChange={handleInputChange}
                      className="form-check-input"
                      id="locationTypeImage"
                    />
                    <label className="form-check-label" htmlFor="locationTypeImage">
                      Add Image
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="locationType"
                      value="iframe"
                      checked={formData.locationType === 'iframe'}
                      onChange={handleInputChange}
                      className="form-check-input"
                      id="locationTypeIframe"
                    />
                    <label className="form-check-label" htmlFor="locationTypeIframe">
                      Add Iframe
                    </label>
                  </div>
                </div>
              </div>
              
              {formData.locationType === 'image' ? (
                <>
                  <div>
                    <label className="form-label small fw-medium text-muted">Location Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'locationImage')}
                      required={!isEditMode || !formData.locationImage}
                      className="form-control"
                    />
                    {isEditMode && formData.locationImage && (
                      <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                    )}
                    {formData.locationImage && (
                      <div className="mt-2">
                        <img src={formData.locationImage} alt="Location Image Preview" className="rounded" style={{height: '5rem', width: '5rem', objectFit: 'cover'}} />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="form-label small fw-medium text-muted">Location Image Alt Text</label>
                    <input
                      type="text"
                      name="locationAltText"
                      value={formData.locationAltText}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="form-label small fw-medium text-muted">Iframe Code</label>
                  <textarea
                    name="locationIframe"
                    value={formData.locationIframe}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-control"
                    placeholder="Paste your iframe code here..."
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">FAQs</h2>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 fw-medium text-dark mb-0">Frequently Asked Questions</h3>
                <button
                  type="button"
                  onClick={() => addArrayItem('faqs', { question: '', answer: '' })}
                  className="btn btn-primary btn-sm"
                >
                  Add FAQ
                </button>
              </div>
              {formData.faqs.map((faq: any, index: number) => (
                <div key={index} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-medium text-dark mb-0">FAQ {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => removeArrayItem('faqs', index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <label className="form-label small fw-medium text-muted">Question</label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => handleArrayChange('faqs', index, 'question', e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label className="form-label small fw-medium text-muted">Answer</label>
                      <textarea
                        value={faq.answer}
                        onChange={(e) => handleArrayChange('faqs', index, 'answer', e.target.value)}
                        rows={3}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-outline-secondary px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary px-4 py-2"
          >
            {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Project' : 'Create Project')}
          </button>
        </div>
      </form>
    </div>
  );
}
