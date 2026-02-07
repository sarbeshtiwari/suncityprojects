'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

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
}

export default function EventDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`/api/events/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setEvent(data.data);
      } else {
        setError(data.error || 'Event not found');
      }
    } catch (err) {
      console.error('Error fetching event:', err);
      setError('Failed to load event');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="text-center">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Event Not Found</h4>
            <p>{error || 'The event you are looking for does not exist.'}</p>
            <Link href="/events" className="btn btn-primary">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main>
        {/* Empty Box for spacing */}
        <div className="emptyBox"></div>

        {/* Breadcrumb */}
        <div className="breadcrumbWrapper">
          <div className="container-lg">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Media</li>
              <li className="breadcrumb-item"><a href="/events">Events</a></li>
              <li className="breadcrumb-item active">{event.title}</li>
            </ol>
          </div>
        </div>

        {/* Events Section */}
        <div className="w-100 padding position-relative bg-white event-section">
          <div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
            <p className="hidden-title" data-position="left">Events</p>
          </div>
          <div className="container-lg">
            <div className="heading mx-auto text-center">
              <h2 className="title-xxl text-primary">{event.title}</h2>
              <p className="mb-0">{event.description}</p>
            </div>
            <div className="award-slider">
              <div className="row g-4">
                {event.galleryImages.map((image, index) => (
                  <div key={index} className="col-lg-4 col-sm-6">
                    <div className="card gallery-card h-100 rounded-0 border-0">
                      <a href={image.original} data-magnify="magnify" data-group="eve" data-caption={event.title}>
                        <div className="blog-image position-relative overflow-hidden">
                          <img src={image.thumbnail} alt={image.altText} className="card-img rounded-0" />
                          <i className="fa-solid fa-expand position-absolute start-50 top-50 translate-middle icon-circular bg-white"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="readmore"><a className="button button-sm" href="/events">Back</a></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}