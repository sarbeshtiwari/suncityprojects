'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MediaNavigation from '@/components/MediaNavigation';

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

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();      
      if (data.success) {
        setEvents(data.data);
      } else {
        console.error('API returned error:', data.error);
      }
    } catch (err) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };


	return (
		<>
			<main>
				<div className="emptyBox"></div>
				<div className="breadcrumbWrapper">
					<div className="container-lg">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="/">Home</a></li>
							<li className="breadcrumb-item">Media</li>
							<li className="breadcrumb-item active">Events</li>
						</ol>         
					</div>
				</div>
				<div className="bg-white">
					<MediaNavigation activePage="events" />
				</div>
				<div className="w-100 padding position-relative bg-white event-section">
					<div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden" style={{zIndex: -1}}>
						<p className="hidden-title" data-position="left">Events</p>
					</div>
					<div className="container-lg">
						<div className="heading mx-auto text-center">
							<h2 className="title-xxl text-primary">Events</h2>
							<p className="mb-0">Celebrating moments, connecting communities across Suncity Projects.</p>
						</div>

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
                </div>
              </div>
            ) : (
              <div className="award-slider">
                <div className="row g-4">
                  {events.map((event) => (
                    <div key={event._id} className="col-lg-4 col-sm-6">
                      <div className="card blog-card h-100 rounded-0 border-0">
                        <Link href={`/events/${event.slug}`}>
                          <div className="blog-image position-relative overflow-hidden">
                            <img src={event.galleryImages[0]?.thumbnail || '/images/placeholder.jpg'} alt={event.title} className="card-img rounded-0" />                           
                          </div>
                          <div className="card-body">                           
                            <h6 className="card-title fw-light text-primary mb-3">{event.title}</h6>                            
                            <div className="viewmore mt-3">
                              <span className="button sm">
                                Read More <i className="fa fa-plus"></i>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
					</div>
				</div>
			</main>
		</>
	);
}