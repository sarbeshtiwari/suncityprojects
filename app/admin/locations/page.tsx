'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FilePenLine, TrashIcon } from 'lucide-react';

interface Location {
  _id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  createdAt: string;
  updatedAt: string;
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/locations');
      const data = await response.json();
      
      if (data.success) {
        setLocations(data.data);
      } else {
        setError('Failed to fetch locations');
      }
    } catch (err) {
      setError('Error fetching locations');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this location?')) return;
    
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setLocations(locations.filter(location => location._id !== id));
      } else {
        alert('Failed to delete location: ' + data.error);
      }
    } catch (err) {
      alert('Error deleting location');
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
          <h1 className="h2 fw-bold text-dark mb-1">Locations</h1>
          <p className="text-muted mb-0">Manage project locations</p>
        </div>
        <Link
          href="/admin/locations/add"
          className="btn btn-primary"
        >
          Add New Location
        </Link>
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
                <th scope="col" className="text-uppercase small text-muted">Name</th>
                <th scope="col" className="text-uppercase small text-muted">City</th>
                <th scope="col" className="text-uppercase small text-muted">State</th>
                <th scope="col" className="text-uppercase small text-muted">Country</th>
                <th scope="col" className="text-uppercase small text-muted">Created</th>
                <th scope="col" className="text-uppercase small text-muted">Modified</th>
                <th scope="col" className="text-uppercase small text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location) => (
                <tr key={location._id}>
                  <td>
                    <div className="fw-semibold text-dark">
                      {location.name}
                    </div>
                  </td>
                  <td className="text-dark">
                    {location.city}
                  </td>
                  <td className="text-dark">
                    {location.state}
                  </td>
                  <td className="text-dark">
                    {location.country}
                  </td>
                  <td className="text-dark">
                    {location.createdAt ? new Date(location.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="text-dark">
                    {location.updatedAt ? new Date(location.updatedAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        href={`/admin/locations/edit/${location._id}`}
                        className="btn btn-sm btn-primary p-1"
                        style={{ width: '2rem', height: '2rem' }}
                      >
                        <FilePenLine style={{ width: '1rem', height: '1rem' }} />
                      </Link>
                      <button
                        onClick={() => handleDelete(location._id)}
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
        
        {locations.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted fs-5">No locations found</div>
            <p className="text-secondary mt-2">
              Get started by adding your first location
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
