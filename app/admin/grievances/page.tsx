'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EyeIcon, TrashIcon } from 'lucide-react';

interface GrievanceForm {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  flatNumber: string;
  projectName: string;
  image: string;
  message: string;
  createdAt: string;
}

export default function GrievancesPage() {
  const [grievances, setGrievances] = useState<GrievanceForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrievance, setSelectedGrievance] = useState<GrievanceForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchGrievances();
  }, [currentPage]);

  const fetchGrievances = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/grievance?page=${currentPage}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setGrievances(data.forms);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching grievances:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (grievance: GrievanceForm) => {
    setSelectedGrievance(grievance);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this grievance?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/forms/grievance/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setGrievances(grievances.filter(grievance => grievance._id !== id));
        } else {
          alert('Failed to delete grievance');
        }
      } catch (error) {
        console.error('Error deleting grievance:', error);
        alert('Error deleting grievance');
      }
    }
  };

  const filteredGrievances = grievances.filter(grievance =>
    grievance?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grievance?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grievance?.projectName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading grievances...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
  {/* Header */}
  <div className="d-flex align-items-center justify-content-between mb-4">
    <div>
      <h1 className="h2 fw-bold text-dark mb-1">Grievances</h1>
      <p className="text-muted mb-0">Manage customer grievance submissions</p>
    </div>
    <Link
      href="/admin"
      className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
    >
      ←
    </Link>
  </div>

  {/* Search and Filters */}
  <div className="card shadow-sm mb-4 border">
    <div className="card-body p-4">
      <div className="row g-3">
        <div className="col-12 col-md-8">
          <input
            type="text"
            placeholder="Search grievances..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex gap-2">
            <select className="form-select flex-fill">
              <option>All Status</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
            <button className="btn btn-primary">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Grievances Table */}
  <div className="card shadow-sm border">
    <div className="table-responsive">
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Customer</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Flat Number</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Project</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Complaint</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Date</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Image</th>

            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrievances.map((grievance) => (
            <tr key={grievance._id}>
              <td className="px-3 py-4">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                    style={{width: '2.5rem', height: '2.5rem'}}
                  >
                    <span className="small fw-medium text-muted">
                      {grievance.name?.charAt(0) || 'N'}
                    </span>
                  </div>
                  <div>
                    <div className="small fw-medium text-dark mb-0">{grievance.name}</div>
                    <div className="small text-muted mb-0">{grievance.email}</div>
                    <div className="small text-muted mb-0">{grievance.mobile}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-4">
                <span className="badge bg-danger bg-opacity-25 text-white">
                  {grievance.flatNumber}
                </span>
              </td>
              <td className="px-3 py-4">
                <div className="small fw-medium text-dark mb-0">{grievance.projectName}</div>
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark text-truncate" style={{maxWidth: '200px'}}>
                  {grievance.message}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark mb-0">
                  {new Date(grievance.createdAt).toLocaleDateString()}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark mb-0">
                    <img src={grievance.image} alt="Grievance Image Preview" className="rounded" style={{height: '10rem', width: '15rem', objectFit: 'cover'}} />

                </div>
              </td>
              <td className="px-3 py-4">
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => handleView(grievance)}
                    className="btn btn-sm btn-outline-primary p-1"
                    style={{width: '2rem', height: '2rem'}}
                  >
                    <EyeIcon style={{width: '1rem', height: '1rem'}} />
                  </button>
                  <button 
                    onClick={() => handleDelete(grievance._id)}
                    className="btn btn-sm btn-outline-danger p-1"
                    style={{width: '2rem', height: '2rem'}}
                  >
                    <TrashIcon style={{width: '1rem', height: '1rem'}} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="card-footer d-flex align-items-center justify-content-between px-4 py-3">
      <div className="d-flex justify-content-between d-md-none w-100">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="btn btn-outline-secondary btn-sm"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="btn btn-outline-secondary btn-sm"
        >
          Next
        </button>
      </div>
      <div className="d-none d-md-flex w-100 align-items-center justify-content-between">
        <div>
          <p className="small text-muted mb-0">
            Showing page <span className="fw-medium">{currentPage}</span> of{' '}
            <span className="fw-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="btn-group" role="group">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="btn btn-outline-secondary btn-sm"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="btn btn-outline-secondary btn-sm"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>

  {/* View Modal */}
  {showModal && selectedGrievance && (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title">Grievance Details</h5>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Name</label>
                <p className="small text-dark mb-0">{selectedGrievance.name || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Email</label>
                <p className="small text-dark mb-0">{selectedGrievance.email || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Mobile</label>
                <p className="small text-dark mb-0">{selectedGrievance.mobile || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Flat Number</label>
                <p className="small text-dark mb-0">{selectedGrievance.flatNumber || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Project Name</label>
                <p className="small text-dark mb-0">{selectedGrievance.projectName || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Date</label>
                <p className="small text-dark mb-0">
                  {selectedGrievance.createdAt ? new Date(selectedGrievance.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label small fw-medium text-muted">Message</label>
              <p className="small text-dark mb-0" style={{whiteSpace: 'pre-wrap'}}>
                {selectedGrievance.message || 'N/A'}
              </p>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  );
}
