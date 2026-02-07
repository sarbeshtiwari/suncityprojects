'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Delete, EyeIcon, Trash } from 'lucide-react';

interface CareerForm {
  _id: string;
  firstName: string;
  email: string;
  mobile: string;
  jobPosition: string;
  experience: string;
  resume: string;
  coverLetter: string;
  createdAt: string;
}

export default function CareersPage() {
  const [careers, setCareers] = useState<CareerForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<CareerForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, [currentPage]);

  const fetchCareers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/career?page=${currentPage}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCareers(data.forms);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredCareers = careers.filter(career => {
    if (!career || !searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      career.firstName?.toLowerCase().includes(searchLower) ||
      career.email?.toLowerCase().includes(searchLower) ||
      career.jobPosition?.toLowerCase().includes(searchLower)
    );
  });

  const handleView = (career: CareerForm) => {
    setSelectedCareer(career);
    setShowModal(true);
  };

  const handleDelete = async (careerId: string) => {
    if (!confirm('Are you sure you want to delete this career application?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/career/${careerId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setCareers(careers.filter(career => career._id !== careerId));
        alert('Career application deleted successfully');
      } else {
        alert('Failed to delete career application');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting career application');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading career applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
  {/* Header */}
  <div className="d-flex align-items-center justify-content-between mb-4">
    <div>
      <h1 className="h2 fw-bold text-dark mb-1">Career Applications</h1>
      <p className="text-muted mb-0">Manage job application submissions</p>
    </div>
    <Link
      href="/admin"
      className="btn btn-outline-secondary d-inline-flex align-items-center px-3 py-2"
    >
      ← Back to Dashboard
    </Link>
  </div>

  {/* Search and Filters */}
  <div className="card shadow-sm mb-4">
    <div className="card-body p-4">
      <div className="row g-3">
        <div className="col-12 col-md-8">
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex gap-2">
            <select className="form-select flex-fill">
              <option>All Positions</option>
              <option>Software Developer</option>
              <option>Marketing Manager</option>
              <option>Sales Executive</option>
            </select>
            <button className="btn btn-primary">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Applications Table */}
  <div className="card shadow-sm">
    <div className="table-responsive">
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Candidate</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Position</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Experience</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Documents</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Date</th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCareers.map((career) => (
            <tr key={career._id}>
              <td className="px-3 py-4">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                    style={{width: '2.5rem', height: '2.5rem'}}
                  >
                    <span className="small fw-medium text-muted">
                      {career.firstName?.charAt(0) || 'N'}
                    </span>
                  </div>
                  <div>
                    <div className="small fw-medium text-dark mb-0">{career.firstName || 'N/A'}</div>
                    <div className="small text-muted mb-0">{career.email || 'N/A'}</div>
                    <div className="small text-muted mb-0">{career.mobile || 'N/A'}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-4">
                <span className="badge bg-purple text-dark">
                  {career.jobPosition || 'N/A'}
                </span>
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark">{career.experience || 'N/A'}</div>
              </td>
              <td className="px-3 py-4">
                <div className="d-flex gap-2">
                  {career.resume && (
                    <a
                      href={`${career.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge bg-info text-decoration-none"
                    >
                      Resume
                    </a>
                  )}
                  {career.coverLetter && (
                    <a
                      href={`${career.coverLetter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge bg-success text-decoration-none"
                    >
                      Cover Letter
                    </a>
                  )}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark">
                  {career.createdAt ? new Date(career.createdAt).toLocaleDateString() : 'N/A'}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => handleView(career)}
                    className="btn btn-sm btn-outline-primary p-1"
                    style={{width: '2rem', height: '2rem'}}
                  >
                    <EyeIcon style={{width: '1rem', height: '1rem'}} />
                  </button>
                  <button 
                    onClick={() => handleDelete(career._id)}
                    className="btn btn-sm btn-outline-danger p-1"
                    style={{width: '2rem', height: '2rem'}}
                  >
                    <Trash style={{width: '1rem', height: '1rem'}} />
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
  {showModal && selectedCareer && (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title">Career Application Details</h5>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Name</label>
                <p className="small text-dark mb-0">{selectedCareer.firstName || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Email</label>
                <p className="small text-dark mb-0">{selectedCareer.email || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Mobile</label>
                <p className="small text-dark mb-0">{selectedCareer.mobile || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Position</label>
                <p className="small text-dark mb-0">{selectedCareer.jobPosition || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Experience</label>
                <p className="small text-dark mb-0">{selectedCareer.experience || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Applied Date</label>
                <p className="small text-dark mb-0">
                  {selectedCareer.createdAt ? new Date(selectedCareer.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>

            <div>
              <label className="form-label small fw-medium text-muted">Documents</label>
              <div className="d-flex gap-2 mt-2">
                {selectedCareer.resume && (
                  <a
                    href={`${selectedCareer.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    View Resume
                  </a>
                )}
                {selectedCareer.coverLetter && (
                  <a
                    href={`${selectedCareer.coverLetter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success"
                  >
                    View Cover Letter
                  </a>
                )}
              </div>
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
