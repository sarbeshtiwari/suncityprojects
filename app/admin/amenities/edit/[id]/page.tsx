'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditAmenityPage() {
  const router = useRouter();
  const params = useParams();
  const amenityId = params.id as string;
  
  const [loading, setLoading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    image: '',
    caption: ''
  });

  // Fetch amenity data for edit mode
  useEffect(() => {
    const fetchAmenity = async () => {
      try {
        const response = await fetch(`/api/amenities/${amenityId}`);
        const data = await response.json();
        
        if (data.success) {
          setFormData({
            image: data.data.image,
            caption: data.data.caption
          });
        } else {
          alert('Failed to fetch amenity data');
          router.push('/admin/amenities');
        }
      } catch (error) {
        console.error('Error fetching amenity:', error);
        alert('Error fetching amenity data');
        router.push('/admin/amenities');
      } finally {
        setInitialLoading(false);
      }
    };
    
    fetchAmenity();
  }, [amenityId, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = async (file: File) => {
    setUploadingFile(true);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'amenities');

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
      alert('Failed to upload file: ' + (error instanceof Error ? error.message : 'Unknown error'));
      return null;
    } finally {
      setUploadingFile(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/svg+xml', 'image/webp', 'image/avif'];
    const allowedExtensions = ['.svg', '.webp', '.avif'];
    
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);
    
    if (!isValidType) {
      alert('Please select a valid image file (SVG, WebP, or AVIF format only)');
      e.target.value = ''; // Clear the file input
      return;
    }

    setFormData(prev => ({
      ...prev,
      image: 'uploading...'
    }));
    
    const url = await handleFileUpload(file);
    
    if (url) {
      setFormData(prev => ({
        ...prev,
        image: url
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        image: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.image) {
      alert('Please upload an image before submitting');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch(`/api/amenities/${amenityId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/amenities');
      } else {
        const errorMessage = data.details ? `${data.error}: ${data.details}` : data.error;
        alert('Failed to update amenity: ' + errorMessage);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Error updating amenity: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Edit Amenity</h1>
          <p className="text-muted mb-0">Update amenity information</p>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
        >
          ← Back to Amenities
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-100">
        {/* Amenity Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Amenity Information</h2>
            <div className="row g-3">
              <div className="col-lg-6">
                <label className="form-label small fw-medium text-muted">Amenity Image</label>
                <input
                  type="file"
                  accept=".svg,.webp,.avif,image/svg+xml,image/webp,image/avif"
                  onChange={handleFileChange}
                  disabled={uploadingFile}
                  className="form-control"
                />
                {uploadingFile && (
                  <div className="mt-2 text-sm text-muted">Uploading...</div>
                )}
                {formData.image && formData.image !== 'uploading...' && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Amenity Preview" className="rounded" style={{height: '5rem', width: '5rem', objectFit: 'cover'}} />
                  </div>
                )}
                <small className="mt-2 text-xs text-muted">
                  Accepted formats: SVG, WebP, AVIF
                </small>
                {formData.image === 'uploading...' && (
                  <div className="mt-2 text-sm text-primary">Uploading file...</div>
                )}
              </div>
              <div className="col-lg-6">
                <label className="form-label small fw-medium text-muted">Caption</label>
                <input
                  type="text"
                  name="caption"
                  value={formData.caption}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
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
            disabled={loading || uploadingFile}
            className="btn btn-primary px-4 py-2"
          >
            {loading ? 'Updating...' : 'Update Amenity'}
          </button>
        </div>
      </form>
    </div>
  );
}
