'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AddBlogPage from '../../add/page';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  altText: string;
  author: string;
  publishedDate: string;
  isPublished: boolean;
  isActive: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  tags: string[];
  category: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      fetchBlog(params.slug as string);
    }
  }, [params.slug]);

  const fetchBlog = async (slug: string) => {
    try {
      const response = await fetch(`/api/blogs/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setBlog(data.data);
      } else {
        setError('Failed to fetch blog');
      }
    } catch (err) {
      setError('Error fetching blog');
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

  if (!blog) {
    return (
      <div className="alert alert-warning" role="alert">
        Blog not found
      </div>
    );
  }

  return (
    <AddBlogPage 
      initialData={blog}
      isEditMode={true}
      blogSlug={params.slug as string}
    />
  );
}
