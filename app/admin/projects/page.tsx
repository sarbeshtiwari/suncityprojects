'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FilePenLine, TrashIcon } from 'lucide-react';

interface Project {
  _id: string;
  projectThumbnail: string;
  projectName: string;
  category: string;
  status: string;
  area: string;
  projectLocation: {
    name: string;
    city: string;
  };
  isActive: boolean;
  createdAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects/updateStatus', { cache: "no-store" });
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.data);
      } else {
        setError('Failed to fetch projects');
      }
    } catch (err) {
      setError('Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const response = await fetch(`/api/projects/manage/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        setProjects(projects.filter(project => project._id !== id));
      } else {
        alert('Failed to delete project');
      }
    } catch (err) {
      alert('Error deleting project');
    }
  };

  const handleStatusUpdate = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/projects/updateStatus`, {
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
        setProjects(prevProjects =>
          prevProjects.map(proj =>
            proj._id === id ? { ...proj, isActive: !currentStatus } : proj
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

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      ongoing: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      delivered: 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getCategoryBadge = (category: string) => {
    const categoryClasses = {
      residential: 'bg-green-100 text-green-800',
      commercial: 'bg-blue-100 text-blue-800',
      retail: 'bg-yellow-100 text-yellow-800',
      education: 'bg-purple-100 text-purple-800',
      delivered: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryClasses[category as keyof typeof categoryClasses] || 'bg-gray-100 text-gray-800'}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="mb-5">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h1 className="h2 fw-bold text-dark mb-1">Projects</h1>
      <p className="text-muted mb-0">Manage your real estate projects</p>
    </div>
    <Link
      href="/admin/projects/add"
      className="btn btn-primary"
    >
      Add New Project
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
            <th scope="col" className="text-uppercase small text-muted">Project</th>
            <th scope="col" className="text-uppercase small text-muted">Category</th>
            <th scope="col" className="text-uppercase small text-muted">Status</th>
            <th scope="col" className="text-uppercase small text-muted">Location</th>
            <th scope="col" className="text-uppercase small text-muted">Area</th>
            <th scope="col" className="text-uppercase small text-muted">Active</th>
            <th scope="col" className="text-uppercase small text-muted">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>
                <div className='d-flex align-items-center gap-2'>
                  <img src={project.projectThumbnail || "/images/project-thumbs/default.webp"} alt={project.projectName} className='rounded-circle' style={{ width: '30px', height: '30px' }} />
                  <div className="fw-semibold text-dark">
                    {project.projectName}
                  </div>
                </div>
              </td>
              <td>{getCategoryBadge(project.category)}</td>
              <td>{getStatusBadge(project.status)}</td>
              <td className="text-dark">
                {project.projectLocation?.name}, {project.projectLocation?.city}
              </td>
              <td className="text-dark">{project.area}</td>
              <td>
                <button
                  className={`badge rounded-pill border-0 px-3 py-2 ${
                    project.isActive ? "bg-success" : "bg-danger"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleStatusUpdate(project._id, project.isActive)}
                >
                  <span
                    className={`badge rounded-pill ${
                      project.isActive
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {project.isActive ? "Active" : "Inactive"}
                  </span>
                </button>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <Link
                    href={`/admin/projects/edit/${project._id}`}
                    className="btn btn-sm btn-warning p-1"
                    style={{ width: '2rem', height: '2rem' }}
                  >
                    <FilePenLine style={{ width: '1rem', height: '1rem' }} />
                  </Link>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="btn btn-sm btn-danger p-1"
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

    {projects.length === 0 && (
      <div className="text-center py-5">
        <div className="text-muted fs-5">No projects found</div>
        <p className="text-secondary mt-2">
          Get started by adding your first project
        </p>
      </div>
    )}
  </div>
</div>

  );
}
