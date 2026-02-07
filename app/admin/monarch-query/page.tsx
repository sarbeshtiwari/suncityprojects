'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EyeIcon, TrashIcon } from 'lucide-react';

interface ProjectEnquiryForm {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  visitDate?: string;
  source: string;
  pageName?: string;
  keepUpdated: boolean;
  createdAt: string;
}

export default function ProjectEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<ProjectEnquiryForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<ProjectEnquiryForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEnquiries();
  }, [currentPage]);

  const fetchEnquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/project-enquiry?page=${currentPage}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setEnquiries(
          data.forms.filter((item: { pageName: string | string[]; }) => item.pageName.includes('monarch'))
        );
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (enquiry: ProjectEnquiryForm) => {
    setSelectedEnquiry(enquiry);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project enquiry?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/forms/project-enquiry/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
        } else {
          alert('Failed to delete project enquiry');
        }
      } catch (error) {
        console.error('Error deleting project enquiry:', error);
        alert('Error deleting project enquiry');
      }
    }
  };

  const filteredEnquiries = enquiries.filter(enquiry =>
    enquiry?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enquiry?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enquiry?.source?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project enquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
  {/* Header */}
  <div className="d-flex align-items-center justify-content-between mb-4">
    <div>
      <h1 className="h2 fw-bold text-dark mb-1">Project Enquiries</h1>
      <p className="text-muted mb-0">Manage project enquiry submissions</p>
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
            placeholder="Search enquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex gap-2">
            <select className="form-select flex-fill">
              <option>All Sources</option>
              <option>Book a Site Visit</option>
              <option>Download Brochure</option>
              <option>Common Enquiry</option>
            </select>
            <select className="form-select flex-fill">
              <option>All Types</option>
              <option>Corporate Office</option>
              <option>Sales</option>
              <option>Customer Support</option>
            </select>
            <button className="btn btn-primary">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Enquiries Table */}
  <div className="card shadow-sm">
    <div className="table-responsive">
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Customer
            </th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Source
            </th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Visit Date
            </th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Keep Updated
            </th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Date
            </th>
            <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEnquiries.map((enquiry) => (
            <tr key={enquiry._id}>
              <td className="px-3 py-4">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                    style={{ width: '2.5rem', height: '2.5rem' }}
                  >
                    <span className="small fw-medium text-muted">
                      {enquiry.name?.charAt(0) || 'N'}
                    </span>
                  </div>
                  <div>
                    <div className="small fw-medium text-dark mb-0">{enquiry.name}</div>
                    <div className="small text-muted mb-0">{enquiry.email}</div>
                    <div className="small text-muted mb-0">{enquiry.mobile}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-4">
                <span className="badge bg-info text-dark">
                  {enquiry.source}
                </span>
              </td>
              <td className="px-3 py-4">
                {enquiry.visitDate ? (
                  <div className="small text-dark mb-0">
                    {new Date(enquiry.visitDate).toLocaleDateString()}
                  </div>
                ) : (
                  <span className="small text-muted">N/A</span>
                )}
              </td>
              <td className="px-3 py-4">
                {enquiry.keepUpdated ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-secondary">No</span>
                )}
              </td>
              <td className="px-3 py-4">
                <div className="small text-dark mb-0">
                  {new Date(enquiry.createdAt).toLocaleDateString()}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="d-flex gap-2">
                  <button
                    onClick={() => handleView(enquiry)}
                    className="btn btn-sm btn-outline-primary p-1"
                    style={{ width: '2rem', height: '2rem' }}
                  >
                    <EyeIcon style={{ width: '1rem', height: '1rem' }} />
                  </button>
                  <button
                    onClick={() => handleDelete(enquiry._id)}
                    className="btn btn-sm btn-outline-danger p-1"
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
  {showModal && selectedEnquiry && (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title mb-3">Project Enquiry Details</h5>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Name</label>
                <p className="small text-dark mb-0">{selectedEnquiry.name || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Email</label>
                <p className="small text-dark mb-0">{selectedEnquiry.email || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Mobile</label>
                <p className="small text-dark mb-0">{selectedEnquiry.mobile || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Source</label>
                <p className="small text-dark mb-0">{selectedEnquiry.source || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Visit Date</label>
                <p className="small text-dark mb-0">
                  {selectedEnquiry.visitDate
                    ? new Date(selectedEnquiry.visitDate).toLocaleDateString()
                    : 'N/A'}
                </p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Page Name</label>
                <p className="small text-dark mb-0">{selectedEnquiry.pageName || 'N/A'}</p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Keep Updated</label>
                <p className="small text-dark mb-0">
                  {selectedEnquiry.keepUpdated ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-medium text-muted">Date</label>
                <p className="small text-dark mb-0">
                  {selectedEnquiry.createdAt
                    ? new Date(selectedEnquiry.createdAt).toLocaleDateString()
                    : 'N/A'}
                </p>
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
