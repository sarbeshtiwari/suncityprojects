'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EyeIcon, TrashIcon } from 'lucide-react';

interface ChannelPartnerForm {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  companyName: string;
  companyAddress: string;
  teamSize: string;
  reraRegNumber: string;
  reraCertificate: string;
  locationOfInterest: string;
  otherLocation?: string;
  message?: string;
  createdAt: string;
}

export default function ChannelPartnersPage() {
  const [partners, setPartners] = useState<ChannelPartnerForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<ChannelPartnerForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPartners();
  }, [currentPage]);

  const fetchPartners = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/channel-partner?page=${currentPage}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPartners(data.forms);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPartners = partners.filter(partner =>
    partner?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner?.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (partner: ChannelPartnerForm) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  const handleDelete = async (partnerId: string) => {
    if (!confirm('Are you sure you want to delete this channel partner?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/channel-partner/${partnerId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setPartners(partners.filter(partner => partner._id !== partnerId));
        alert('Channel partner deleted successfully');
      } else {
        alert('Failed to delete channel partner');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting channel partner');
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: '16rem'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '3rem', height: '3rem'}}></div>
          <p className="text-muted">Loading channel partners...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Channel Partners</h1>
          <p className="text-muted mb-0">Manage channel partner registrations</p>
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
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex gap-2">
                <select className="form-select flex-fill">
                  <option>All Team Sizes</option>
                  <option>1-5</option>
                  <option>6-10</option>
                  <option>11-20</option>
                  <option>20+</option>
                </select>
                <button className="btn btn-primary">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Table */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Partner
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Company
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Team Size
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  RERA Number
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Location
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Documents
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
              {filteredPartners.map((partner) => (
                <tr key={partner._id}>
                  <td className="px-3 py-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '2.5rem', height: '2.5rem'}}>
                        <span className="small fw-medium text-muted">
                          {partner.name?.charAt(0) || 'N'}
                        </span>
                      </div>
                      <div>
                        <div className="small fw-medium text-dark mb-0">{partner.name}</div>
                        <div className="small text-muted mb-0">{partner.email}</div>
                        <div className="small text-muted mb-0">{partner.mobile}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">{partner.companyName}</div>
                    <div className="small text-muted mb-0">{partner.companyAddress}</div>
                  </td>
                  <td className="px-3 py-4">
                    <span className="badge bg-warning text-dark">
                      {partner.teamSize} members
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">{partner.reraRegNumber || 'N/A'}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">
                      {partner.locationOfInterest === 'Other' && partner.otherLocation 
                        ? partner.otherLocation 
                        : partner.locationOfInterest || 'N/A'
                      }
                    </div>
                    {partner.locationOfInterest === 'Other' && partner.otherLocation && (
                      <div className="small text-muted">(Other)</div>
                    )}
                  </td>
                  <td className="px-3 py-4">
                    {partner.reraCertificate && (
                      <a
                        href={`/uploads/${partner.reraCertificate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge bg-info text-white text-decoration-none"
                      >
                        RERA Certificate
                      </a>
                    )}
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">
                      {new Date(partner.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => handleView(partner)}
                        className="btn btn-sm btn-outline-primary p-1"
                        style={{width: '2rem', height: '2rem'}}
                      >
                        <EyeIcon style={{width: '1rem', height: '1rem'}} />
                      </button>
                      <button 
                        onClick={() => handleDelete(partner._id)}
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
      {showModal && selectedPartner && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">Channel Partner Details</h5>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Name</label>
                    <p className="small text-dark mb-0">{selectedPartner.name || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Email</label>
                    <p className="small text-dark mb-0">{selectedPartner.email || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Mobile</label>
                    <p className="small text-dark mb-0">{selectedPartner.mobile || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Company Name</label>
                    <p className="small text-dark mb-0">{selectedPartner.companyName || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Team Size</label>
                    <p className="small text-dark mb-0">{selectedPartner.teamSize || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">RERA Registration Number</label>
                    <p className="small text-dark mb-0">{selectedPartner.reraRegNumber || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Location of Interest</label>
                    <p className="small text-dark mb-0">
                      {selectedPartner.locationOfInterest === 'Other' && selectedPartner.otherLocation 
                        ? `${selectedPartner.otherLocation} (Other)`
                        : selectedPartner.locationOfInterest || 'N/A'
                      }
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Date</label>
                    <p className="small text-dark mb-0">
                      {selectedPartner.createdAt ? new Date(selectedPartner.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Company Address</label>
                  <p className="small text-dark mb-0" style={{whiteSpace: 'pre-wrap'}}>{selectedPartner.companyAddress || 'N/A'}</p>
                </div>
                {selectedPartner.message && (
                  <div className="mb-3">
                    <label className="form-label small fw-medium text-muted">Message</label>
                    <p className="small text-dark mb-0" style={{whiteSpace: 'pre-wrap'}}>{selectedPartner.message}</p>
                  </div>
                )}
                <div>
                  <label className="form-label small fw-medium text-muted">RERA Certificate</label>
                  {selectedPartner.reraCertificate ? (
                    <a
                      href={`/uploads/${selectedPartner.reraCertificate}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm d-inline-flex align-items-center"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <p className="small text-muted mb-0">No certificate uploaded</p>
                  )}
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
