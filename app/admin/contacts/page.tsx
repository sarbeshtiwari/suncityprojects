'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EyeIcon, TrashIcon } from 'lucide-react';

interface ContactForm {
  _id: string;
  enquiryType: string;
  name: string;
  email: string;
  mobile: string;
  project: string;
  message: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<ContactForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/forms/contact?page=${currentPage}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.forms);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (contact: ContactForm) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact form?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/forms/contact/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setContacts(contacts.filter(contact => contact._id !== id));
        } else {
          alert('Failed to delete contact form');
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Error deleting contact form');
      }
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact?.enquiryType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{height: '16rem'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '3rem', height: '3rem'}}></div>
          <p className="text-muted">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Contact Forms</h1>
          <p className="text-muted mb-0">Manage contact form submissions</p>
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
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex gap-2">
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

      {/* Contacts Table */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Name
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Email
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Mobile
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Enquiry Type
                </th>
                <th className="px-3 py-3 text-start small fw-medium text-muted text-uppercase">
                  Project
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
              {filteredContacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="px-3 py-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '2.5rem', height: '2.5rem'}}>
                        <span className="small fw-medium text-muted">
                          {contact.name?.charAt(0) || 'N'}
                        </span>
                      </div>
                      <div>
                        <div className="small fw-medium text-dark mb-0">{contact.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">{contact.email}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">{contact.mobile}</div>
                  </td>
                  <td className="px-3 py-4">
                    <span className="badge bg-warning text-dark">
                      {contact.enquiryType}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">{contact.project || 'N/A'}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="small text-dark mb-0">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => handleView(contact)}
                        className="btn btn-sm btn-outline-primary p-1"
                        style={{width: '2rem', height: '2rem'}}
                      >
                        <EyeIcon style={{width: '1rem', height: '1rem'}} />
                      </button>
                      <button 
                        onClick={() => handleDelete(contact._id)}
                        className="btn btn-sm btn-outline-primary p-1"
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
      {showModal && selectedContact && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">Contact Form Details</h5>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Name</label>
                    <p className="small text-dark mb-0">{selectedContact.name || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Email</label>
                    <p className="small text-dark mb-0">{selectedContact.email || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Mobile</label>
                    <p className="small text-dark mb-0">{selectedContact.mobile || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Enquiry Type</label>
                    <p className="small text-dark mb-0">{selectedContact.enquiryType || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Project</label>
                    <p className="small text-dark mb-0">{selectedContact.project || 'N/A'}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium text-muted">Date</label>
                    <p className="small text-dark mb-0">
                      {selectedContact.createdAt ? new Date(selectedContact.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                  <div className="col-12 col-md-12">
                    <label className="form-label small fw-medium text-muted">Message</label>
                    <p className="small text-dark mb-0 whitespace-pre-wrap">{selectedContact.message || 'N/A'}</p>
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
