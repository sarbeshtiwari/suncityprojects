'use client';

import { Key, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddEventPageProps {
  initialData?: any;
  isEditMode?: boolean;
  eventSlug?: string;
}

export default function AddEventPage({ initialData, isEditMode = false, eventSlug }: AddEventPageProps = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    galleryImages: initialData?.galleryImages || [] as any[],
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    metaKeywords: initialData?.metaKeywords || '',
    otherMetaTags: initialData?.otherMetaTags || '',
    schemaScript: initialData?.schemaScript || '',
    isActive: initialData?.isActive !== undefined ? initialData.isActive : true,
    isPublished: initialData?.isPublished !== undefined ? initialData.isPublished : true
  });

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      };
      
      if (name === 'title' && value) {
        newData.slug = generateSlug(value);
      }
      
      return newData;
    });
  };

  const handleFileUpload = async (file: File, fieldName: string) => {
    const fileId = `${fieldName}-${Date.now()}`;
    setUploadingFiles(prev => new Set(prev).add(fileId));

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload file');
      return null;
    } finally {
      setUploadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileId);
        return newSet;
      });
    }
  };

  const handleArrayFileChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await handleFileUpload(file, `gallery-${index}-${field}`);
    if (url) {
      setFormData(prev => ({
        ...prev,
        galleryImages: prev.galleryImages.map((item: any, i: number) => 
          i === index ? { ...item, [field]: url } : item
        )
      }));
    }
  };

  const addGalleryImage = () => {
    setFormData(prev => ({
      ...prev,
      galleryImages: [...prev.galleryImages, { original: '', thumbnail: '', altText: '' }]
    }));
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_: any, i: number) => i !== index)
    }));
  };

  const handleArrayChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      const requiredFields = ['title', 'slug', 'description'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }

      // Check if at least one gallery image has both thumbnail and original
      const hasValidImages = formData.galleryImages.some((image: any) => 
        image.thumbnail && image.original
      );
      
      if (!hasValidImages) {
        alert('Please add at least one gallery image with both thumbnail and original');
        setLoading(false);
        return;
      }

      const url = isEditMode ? `/api/events/${eventSlug}` : '/api/events';
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
        alert(isEditMode ? 'Event updated successfully!' : 'Event created successfully!');
        router.push('/admin/events');
      } else {
        const errorMessage = data.details ? 
          `${data.error}: ${Array.isArray(data.details) ? data.details.join(', ') : data.details}` : 
          data.error;
        alert(`Failed to ${isEditMode ? 'update' : 'create'} event: ` + errorMessage);
      }
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} event:`, error);
      alert(`Error ${isEditMode ? 'updating' : 'creating'} event: ` + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">{isEditMode ? 'Edit Event' : 'Add New Event'}</h1>
          <p className="text-muted mb-0">{isEditMode ? 'Update the event details' : 'Create a new event with gallery images'}</p>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
        >
          ← Back to Events
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
              <div className="col-12">
                <label className="form-label small fw-medium text-muted">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Event Information</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
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
                  placeholder="Will be auto-generated from title"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-medium text-muted">Event Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Gallery Images</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h6 fw-medium text-dark mb-0">Event Gallery</h3>
              <button
                type="button"
                onClick={addGalleryImage}
                className="btn btn-primary btn-sm"
              >
                Add Image
              </button>
            </div>
            {formData.galleryImages.map((image: { thumbnail: string | Blob | undefined; original: string | Blob | undefined; altText: string | number | readonly string[] | undefined; }, index: number) => (
              <div key={index} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-medium text-dark mb-0">Image {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Remove
                  </button>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-lg-6">
                    <label className="form-label small fw-medium text-muted">Thumbnail Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleArrayFileChange(e, index, 'thumbnail')}
                      required={!isEditMode || !image.thumbnail}
                      className="form-control"
                    />
                    {isEditMode && image.thumbnail && (
                      <p className="form-text small text-muted mt-1">Current thumbnail is uploaded. Leave empty to keep existing thumbnail.</p>
                    )}
                    {image.thumbnail && (
                      <div className="mt-2">
                        <img src={image.thumbnail} alt="Thumbnail Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-6">
                    <label className="form-label small fw-medium text-muted">Original Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleArrayFileChange(e, index, 'original')}
                      required={!isEditMode || !image.original}
                      className="form-control"
                    />
                    {isEditMode && image.original && (
                      <p className="form-text small text-muted mt-1">Current original image is uploaded. Leave empty to keep existing original image.</p>
                    )}
                    {image.original && (
                      <div className="mt-2">
                        <img src={image.original} alt="Original Preview" className="rounded" style={{height: '5rem', width: '8rem', objectFit: 'cover'}} />
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-medium text-muted">Alt Text</label>
                    <input
                      type="text"
                      value={image.altText}
                      onChange={(e) => handleArrayChange(index, 'altText', e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Status</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="form-check-input"
                    id="isActive"
                  />
                  <label className="form-check-label" htmlFor="isActive">
                    Active
                  </label>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleInputChange}
                    className="form-check-input"
                    id="isPublished"
                  />
                  <label className="form-check-label" htmlFor="isPublished">
                    Published
                  </label>
                </div>
              </div>
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
            {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Event' : 'Create Event')}
          </button>
        </div>
      </form>
    </div>
  );
}