'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AddEventPage from '../../add/page';

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
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  otherMetaTags: string;
  schemaScript: string;
  isActive: boolean;
  isPublished: boolean;
}

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      fetchEvent(params.slug as string);
    }
  }, [params.slug]);

  const fetchEvent = async (slug: string) => {
    try {
      const response = await fetch(`/api/events/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setEvent(data.data);
      } else {
        setError('Failed to fetch event');
      }
    } catch (err) {
      setError('Error fetching event');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!event) {
    return (
      <div className="alert alert-warning" role="alert">
        Event not found
      </div>
    );
  }

  return (
    <AddEventPage 
      initialData={event}
      isEditMode={true}
      eventSlug={params.slug as string}
    />
  );
}
