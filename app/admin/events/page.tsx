'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Event {
  _id: string;
  title: string;
  slug: string;
  description: string;
  galleryImages: Array<{
    original: string;
    thumbnail: string;
    altText: string;
  }>;
  isActive: boolean;
  isPublished: boolean;
  createdAt: string;
}

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/admin/events');
      const data = await response.json();
      
      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (eventSlug: string, eventTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${eventTitle}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/events/${eventSlug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      const data = await response.json();

      if (data.success) {
        alert('Event deleted successfully!');
        fetchEvents();
      } else {
        alert('Failed to delete event: ' + data.error);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleStatusUpdate = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/events/updateStatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          isActive: !currentStatus,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setEvents(prevProjects =>
          prevProjects.map(proj =>
            proj._id === id ? { ...proj, isActive: !currentStatus, isPublished: !currentStatus } : proj
          )
        );
      } else {
        alert(result.message || "Failed to update status");
      }
    } catch (err) {
      console.error("Error updating project status:", err);
      alert("Error updating project status");
    } 
  };

  return (
    <div className="w-100">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Events Management</h1>
          <p className="text-muted mb-0">Manage all events and activities</p>
        </div>
        <Link
          href="/admin/events/add"
          className="btn btn-primary d-inline-flex align-items-center px-3 py-2"
        >
          <i className="fas fa-plus me-2"></i>
          Add New Event
        </Link>
      </div>

      {/* Events Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-5">
              <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">No Events Found</h4>
                <p>There are no events available at the moment.</p>
                <Link href="/admin/events/add" className="btn btn-primary">
                  Add First Event
                </Link>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="border-0">Event</th>
                    <th className="border-0">Gallery Images</th>
                    <th className="border-0">Status</th>
                    <th className="border-0">Created</th>
                    <th className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event._id}>
                      <td>
                        <div>
                          <h6 className="mb-1 fw-semibold">{event.title}</h6>
                          {/* <p className="mb-0 text-muted small">{event.description}</p> */}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {event.galleryImages.length > 0 ? (
                            <img
                              src={event.galleryImages[0].thumbnail}
                              alt={event.title}
                              className="rounded me-2"
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="bg-light rounded me-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                              <i className="fa fa-image text-muted"></i>
                            </div>
                          )}
                          <span className="small text-muted">{event.galleryImages.length} images</span>
                        </div>
                      </td>
                      <td>
                        <button
                          className={`badge rounded-pill border-0 px-3 py-2 ${
                            event.isActive ? "bg-success" : "bg-danger"
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleStatusUpdate(event._id, event.isActive)}
                        >
                          <span
                            className={`badge rounded-pill ${
                              event.isActive
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {event.isActive ? "Active" : "Inactive"}
                          </span>
                        </button>
                      </td>     
                      <td>
                        <div className="text-muted small">{formatDate(event.createdAt)}</div>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link
                            href={`/admin/events/edit/${event.slug}`}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <i className="fas fa-edit"></i>
                          </Link>
                          <button
                            onClick={() => handleDelete(event.slug, event.title)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
