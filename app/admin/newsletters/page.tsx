'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EyeIcon, TrashIcon } from 'lucide-react';

interface Newsletter {
  _id: string;
  email: string;
  isActive: boolean;
  source: string;
  createdAt: string;
}

export default function NewslettersPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNewsletters();
  }, [currentPage]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm !== '') {
        fetchNewsletters();
      } else {
        fetchNewsletters();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const fetchNewsletters = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/newsletters?page=${currentPage}&limit=10&search=${searchTerm}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setNewsletters(data.newsletters);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (newsletter: Newsletter) => {
    setSelectedNewsletter(newsletter);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this newsletter subscription?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/newsletters/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setNewsletters(newsletters.filter(newsletter => newsletter._id !== id));
        } else {
          alert('Failed to delete newsletter subscription');
        }
      } catch (error) {
        console.error('Error deleting newsletter:', error);
        alert('Error deleting newsletter subscription');
      }
    }
  };

  const filteredNewsletters = newsletters.filter(newsletter =>
    newsletter?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: '16rem'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '3rem', height: '3rem'}}></div>
          <p className="text-muted">Loading newsletter subscriptions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Newsletter Subscriptions</h1>
          <p className="text-muted mb-0">Manage newsletter subscriptions</p>
        </div>
        <Link
          href="/admin"
          className="btn btn-outline-secondary d-inline-flex align-items-center "
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
                placeholder="Search newsletter subscriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex gap-2">
                <select className="form-select flex-fill">
                  <option>All Sources</option>
                  <option>Footer</option>
                  <option>Other</option>
                </select>
                <button className="btn btn-primary" onClick={fetchNewsletters}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscriptions Table */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Email
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Status
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Source
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
              {filteredNewsletters.map((newsletter) => (
                <tr key={newsletter._id}>
                  <td className="px-3 py-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '2.5rem', height: '2.5rem'}}>
                        <span className="small fw-medium text-muted">
                          {newsletter.email?.charAt(0)?.toUpperCase() || 'N'}
                        </span>
                      </div>
                      <div>
                        <div className="small fw-medium text-dark mb-0">{newsletter.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`badge ${newsletter.isActive ? 'bg-success' : 'bg-danger'}`}>
                      {newsletter.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span className="badge bg-info text-dark">
                      {newsletter.source}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">
                      {new Date(newsletter.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => handleView(newsletter)}
                        className="btn btn-sm btn-outline-primary p-1"
                        style={{width: '2rem', height: '2rem'}}
                      >
                        <EyeIcon style={{width: '1rem', height: '1rem'}} />
                      </button>
                      <button 
                        onClick={() => handleDelete(newsletter._id)}
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
      {showModal && selectedNewsletter && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">Newsletter Subscription Details</h5>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Email</label>
                    <p className="small text-dark mb-0">{selectedNewsletter.email || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Status</label>
                    <p className="small text-dark mb-0">
                      <span className={`badge ${selectedNewsletter.isActive ? 'bg-success' : 'bg-danger'}`}>
                        {selectedNewsletter.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Source</label>
                    <p className="small text-dark mb-0">{selectedNewsletter.source || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Subscription Date</label>
                    <p className="small text-dark mb-0">
                      {selectedNewsletter.createdAt ? new Date(selectedNewsletter.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-sm btn-secondary"
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
