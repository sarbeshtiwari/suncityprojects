'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddBlogPageProps {
  initialData?: any;
  isEditMode?: boolean;
  blogSlug?: string;
}

export default function AddBlogPage({ initialData, isEditMode = false, blogSlug }: AddBlogPageProps = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());
  
  const formatDateForInput = (date: any): string => {
    if (!date) return new Date().toISOString().split('T')[0];
    
    if (typeof date === 'string') {
      // If it's already in YYYY-MM-DD format, return as is
      if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return date;
      }
      // If it's an ISO string, extract the date part
      return date.split('T')[0];
    }
    
    // If it's a Date object, convert to ISO string and extract date part
    return new Date(date).toISOString().split('T')[0];
  };
  
  const [formData, setFormData] = useState({
    metaTitle: initialData?.metaTitle || '',
    metaKeywords: initialData?.metaKeywords || '',
    metaDescription: initialData?.metaDescription || '',
    otherMetaTags: initialData?.otherMetaTags || '',
    schemaScript: initialData?.schemaScript || '',
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    image: initialData?.image || '',
    altText: initialData?.altText || '',
    author: initialData?.author || 'Suncity Projects',
    publishedDate: formatDateForInput(initialData?.publishedDate),
    isPublished: initialData?.isPublished !== undefined ? initialData.isPublished : true,
    isActive: initialData?.isActive !== undefined ? initialData.isActive : true,
    tags: initialData?.tags || [] as string[],
    category: initialData?.category || 'real-estate'
  });

  const [tagInput, setTagInput] = useState('');

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

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    } else if (e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !formData.tags.includes(trimmedTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, trimmedTag]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((tag: string) => tag !== tagToRemove)
    }));
  };

  const handleFileUpload = async (file: File, fieldName: string) => {
    const fileId = `${fieldName}-${Date.now()}`;
    setUploadingFiles(prev => new Set(prev).add(fileId));

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'blogs');

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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await handleFileUpload(file, fieldName);
    if (url) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: url
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const requiredFields = ['title', 'slug', 'content', 'excerpt', 'altText'];
      
      // Add image field only if not in edit mode or if image doesn't exist
      if (!isEditMode || !formData.image) {
        requiredFields.push('image');
      }
      
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }

      const url = isEditMode ? `/api/blogs/${blogSlug}` : '/api/blogs';
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
        alert(isEditMode ? 'Blog updated successfully!' : 'Blog created successfully!');
        router.push('/admin/blogs');
      } else {
        const errorMessage = data.details ? 
          `${data.error}: ${Array.isArray(data.details) ? data.details.join(', ') : data.details}` : 
          data.error;
        alert(`Failed to ${isEditMode ? 'update' : 'create'} blog: ` + errorMessage);
      }
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} blog:`, error);
      alert(`Error ${isEditMode ? 'updating' : 'creating'} blog: ` + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">{isEditMode ? 'Edit Blog' : 'Add New Blog'}</h1>
          <p className="text-muted mb-0">{isEditMode ? 'Update the blog post' : 'Create a new blog post'}</p>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
        >
          ← Back to Blogs
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

        {/* Blog Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Blog Information</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-8">
                <label className="form-label small fw-medium text-muted">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label small fw-medium text-muted">Slug (URL-friendly name)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="Will be auto-generated from title"
                  className="form-control"
                />
                <p className="form-text small text-muted">Leave empty to auto-generate from title</p>
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="form-control form-select"
                >
                  <option value="real-estate">Real Estate</option>
                  <option value="investment">Investment</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="legal">Legal</option>
                  <option value="tips">Tips</option>
                  <option value="news">News</option>
                </select>
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Published Date</label>
                <input
                  type="date"
                  name="publishedDate"
                  value={formData.publishedDate}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleInputChange}
                    className="form-check-input"
                    id="isPublished"
                  />
                  <label className="form-check-label small text-muted" htmlFor="isPublished">Published</label>
                </div>
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

        {/* Content */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Content</h2>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label small fw-medium text-muted">Excerpt (Short Description)</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="form-control"
                  placeholder="Brief description of the blog post..."
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-medium text-muted">Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={10}
                  className="form-control"
                  placeholder="Write your blog content here..."
                />
                <p className="form-text small text-muted">You can use HTML tags for formatting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Featured Image</h2>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Blog Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image')}
                  required={!isEditMode || !formData.image}
                  className="form-control"
                />
                {isEditMode && formData.image && (
                  <p className="form-text small text-muted mt-1">Current image is uploaded. Leave empty to keep existing image.</p>
                )}
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Blog Image Preview" className="rounded" style={{height: '10rem', width: '15rem', objectFit: 'cover'}} />
                  </div>
                )}
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label small fw-medium text-muted">Alt Text</label>
                <input
                  type="text"
                  name="altText"
                  value={formData.altText}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Tags</h2>
            <div className="row g-3">
              <div className="col-12">                
                {/* Tag Badges */}
                {formData.tags.length > 0 && (
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {formData.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="badge bg-primary d-inline-flex align-items-center gap-1"
                          style={{ fontSize: '0.875rem' }}
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="btn btn-sm p-0 ms-1"
                            style={{ 
                              fontSize: '0.6rem', 
                              background: 'none', 
                              border: 'none',
                              color: 'white',
                              lineHeight: '1'
                            }}
                            aria-label={`Remove ${tag} tag`}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tag Input */}
                <div className="input-group">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagKeyDown}
                    className="form-control"
                    placeholder="Type a tag and press Enter or comma to add"
                  />
                </div>
                <p className="form-text small text-muted">
                  Type a tag and press Enter or comma to add it. Click the × on a tag to remove it.
                </p>
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
            {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Blog' : 'Create Blog')}
          </button>
        </div>
      </form>
    </div>
  );
}
