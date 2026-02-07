'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  isPublished: boolean;
  isActive: boolean;
  category: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setBlogs(data.data);
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (err) {
      setError('Error fetching blogs');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog.slug !== slug));
      } else {
        alert('Failed to delete blog');
      }
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Error deleting blog');
    }
  };

  const handleStatusUpdate = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/blogs/updateStatus`, {
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
        setBlogs(prevProjects =>
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight: '50vh'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '3rem', height: '3rem'}}></div>
          <p className="text-muted">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Blogs</h1>
          <p className="text-muted mb-0">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/blogs/add"
          className="btn btn-primary"
        >
          Add New Blog
        </Link>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col" className="text-uppercase small text-muted">Title</th>
                <th scope="col" className="text-uppercase small text-muted">Author</th>
                <th scope="col" className="text-uppercase small text-muted">Category</th>
                <th scope="col" className="text-uppercase small text-muted">Published</th>
                <th scope="col" className="text-uppercase small text-muted">Status</th>
                <th scope="col" className="text-uppercase small text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <div className="d-flex flex-column">
                      <span className="fw-medium text-dark">{blog.title}</span>
                      <small className="text-muted">{blog.excerpt.substring(0, 60)}...</small>
                    </div>
                  </td>
                  <td>
                    <span className="text-muted">{blog.author}</span>
                  </td>
                  <td>
                    <span className={`badge bg-secondary text-capitalize`}>
                      {blog.category.replace('-', ' ')}
                    </span>
                  </td>
                  <td>
                    <span className="text-muted">{formatDate(blog.publishedDate)}</span>
                  </td>
                  <td>
                    <button
                      className={`badge rounded-pill border-0 px-3 py-2 ${
                        blog.isPublished ? "bg-success" : "bg-danger"
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleStatusUpdate(blog._id, blog.isPublished)}
                    >
                      <span
                        className={`badge rounded-pill ${
                          blog.isPublished
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {blog.isPublished ? "Published" : "Draft"}
                      </span>
                    </button>
                  </td>                 
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        href={`/admin/blogs/edit/${blog.slug}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => {
    e.stopPropagation(); // stop parent clicks
    handleDelete(blog.slug);
  }}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-5">
          <div className="text-muted mb-3">
            <i className="fas fa-newspaper" style={{fontSize: '3rem'}}></i>
          </div>
          <h4 className="text-muted">No blogs found</h4>
          <p className="text-muted">Get started by creating your first blog post.</p>
          <Link href="/admin/blogs/add" className="btn btn-primary">
            Add New Blog
          </Link>
        </div>
      )}
    </div>
  );
}
