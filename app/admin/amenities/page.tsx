'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FilePenLine, TrashIcon } from 'lucide-react';

interface Amenity {
  _id: string;
  image: string;
  caption: string;
  createdAt: string;
}

export default function AmenitiesPage() {
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [filteredAmenities, setFilteredAmenities] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAmenities();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredAmenities(amenities);
    } else {
      const filtered = amenities.filter(amenity =>
        amenity.caption.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAmenities(filtered);
    }
  }, [amenities, searchTerm]);

  const fetchAmenities = async () => {
    try {
      const response = await fetch('/api/amenities');
      const data = await response.json();
      
      if (data.success) {
        setAmenities(data.data);
        setFilteredAmenities(data.data);
      } else {
        setError('Failed to fetch amenities');
      }
    } catch (err) {
      setError('Error fetching amenities');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this amenity?')) return;
    
    try {
      const response = await fetch(`/api/amenities/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAmenities(amenities.filter(amenity => amenity._id !== id));
      } else {
        alert('Failed to delete amenity: ' + data.error);
      }
    } catch (err) {
      alert('Error deleting amenity');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Amenities</h1>
          <p className="text-muted mb-0">Manage project amenities</p>
        </div>
        <Link
          href="/admin/amenities/add"
          className="btn btn-primary"
        >
          Add New Amenity
        </Link>
      </div>

      {/* Search Bar */}
      <div className="card shadow-sm mb-4">
        <div className="card-body p-3">
          <div className="row g-2">
            <div className="col-md-12">
              <div className="input-group">
                <span className="input-group-text">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search amenities by caption..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setSearchTerm('')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <span className="text-muted small">
                {filteredAmenities.length} of {amenities.length} amenities
                {searchTerm && ` matching "${searchTerm}"`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col" className="text-uppercase small text-muted">Image</th>
                <th scope="col" className="text-uppercase small text-muted">Caption</th>
                <th scope="col" className="text-uppercase small text-muted">Created</th>
                <th scope="col" className="text-uppercase small text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAmenities.map((amenity) => (
                <tr key={amenity._id}>
                  <td>
                    {amenity.image && (
                      <img 
                        src={amenity.image} 
                        alt={amenity.caption}
                        className="rounded"
                        style={{height: '2.5rem', width: '2.5rem', objectFit: 'cover'}}
                      />
                    )}
                  </td>
                  <td className="text-dark">
                    <div className="small text-muted" style={{maxWidth: '200px'}}>
                      {amenity.caption}
                    </div>
                  </td>
                  <td className="text-dark">
                    {new Date(amenity.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        href={`/admin/amenities/edit/${amenity._id}`}
                        className="btn btn-sm btn-primary p-1"
                        style={{ width: '2rem', height: '2rem' }}
                      >
                        <FilePenLine style={{ width: '1rem', height: '1rem' }} />
                      </Link>
                      <button
                        onClick={() => handleDelete(amenity._id)}
                        className="btn btn-sm btn-danger p-1"
                        style={{ width: '2rem', height: '2rem' }}
                      >
                        <TrashIcon style={{ width: '1rem', height: '1rem' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAmenities.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted fs-5">
              {searchTerm ? 'No amenities found matching your search' : 'No amenities found'}
            </div>
            <p className="text-secondary mt-2">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first amenity'}
            </p>
            {searchTerm && (
              <button
                className="btn btn-outline-primary mt-2"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
