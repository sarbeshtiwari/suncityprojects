'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import indianStatesCities from 'indian-states-cities';

export default function AddLocationPage() {
  const router = useRouter();
  const params = useParams();
  const isEdit = params.id && params.id !== 'add';
  const locationId = params.id as string;
  
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: 'India'
  });

  useEffect(() => {
    // Load states on component mount
    const statesList = indianStatesCities.allStates();
    setStates(statesList);
  }, []);

  // Fetch location data for edit mode
  useEffect(() => {
    if (isEdit && locationId) {
      const fetchLocation = async () => {
        try {
          const response = await fetch(`/api/locations/${locationId}`);
          const data = await response.json();
          
          if (data.success) {
            setFormData({
              name: data.data.name,
              city: data.data.city,
              state: data.data.state,
              country: data.data.country
            });
            
            // Load cities for the current state
            if (data.data.state) {
              const citiesList = indianStatesCities.citiesForState(data.data.state);
              setCities(citiesList);
            }
          } else {
            alert('Failed to fetch location data');
            router.push('/admin/locations');
          }
        } catch (error) {
          console.error('Error fetching location:', error);
          alert('Error fetching location data');
          router.push('/admin/locations');
        } finally {
          setInitialLoading(false);
        }
      };
      
      fetchLocation();
    }
  }, [isEdit, locationId, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    setFormData(prev => ({
      ...prev,
      state: selectedState,
      city: '' // Reset city when state changes
    }));
    
    // Load cities for selected state
    if (selectedState) {
      const citiesList = indianStatesCities.citiesForState(selectedState);
      setCities(citiesList);
    } else {
      setCities([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const url = isEdit ? `/api/locations/${locationId}` : '/api/locations';
      const method = isEdit ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/locations');
      } else {
        alert(`Failed to ${isEdit ? 'update' : 'create'} location: ` + data.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert(`Error ${isEdit ? 'updating' : 'creating'} location: ` + (error instanceof Error ? error.message : 'Unknown error'));
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
          <h1 className="h2 fw-bold text-dark mb-1">
            {isEdit ? 'Edit Location' : 'Add New Location'}
          </h1>
          <p className="text-muted mb-0">
            {isEdit ? 'Update location information' : 'Create a new location for your projects'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
        >
          ← Back to Locations
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-100">
        {/* Location Information */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold text-dark mb-4 border-bottom pb-2">Location Information</h2>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Location Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                  required
                  className="form-control form-select"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.state}
                  className="form-control form-select"
                >
                  <option value="">
                    {!formData.state ? 'Select State first' : 'Select City'}
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {!formData.state && (
                  <small className="text-muted">Please select a state first</small>
                )}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
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
            disabled={loading}
            className="btn btn-primary px-4 py-2"
          >
            {loading ? (isEdit ? 'Updating...' : 'Creating...') : (isEdit ? 'Update Location' : 'Create Location')}
          </button>
        </div>
      </form>
    </div>
  );
}
