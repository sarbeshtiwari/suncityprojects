'use client'

import { useEffect, useState } from "react";
import { Plus, Trash, Pencil } from "lucide-react";

interface Job {
  _id?: string;
  position_name: string;
  experience_required: string;
  CTC: string;
  job_responsibilities: string;
  qualifications: string;
  createdAt?: string;
}

export default function JobPostings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState<Job>({
    position_name: "",
    experience_required: "",
    CTC: "",
    job_responsibilities: "",
    qualifications: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/admin/jobs");
      const data = await res.json();
      setJobs(data.forms);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/admin/jobs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setJobs(jobs.filter((j) => j._id !== id));
        alert("Job deleted successfully");
      } else alert("Failed to delete job");
    } catch (err) {
      console.error(err);
      alert("Error deleting job");
    }
  };

  const openModal = (job?: Job) => {
    if (job) {
      setEditJob(job);
      setFormData(job);
    } else {
      setEditJob(null);
      setFormData({
        position_name: "",
        experience_required: "",
        CTC: "",
        job_responsibilities: "",
        qualifications: '',
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editJob ? "PUT" : "POST";
    const url = editJob ? `/api/admin/jobs/${editJob._id}` : "/api/admin/jobs";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchJobs();
        setShowModal(false);
        alert(editJob ? "Job updated successfully" : "Job added successfully");
      } else {
        alert("Failed to save job");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving job");
    }
  };

  if (isLoading) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Job Postings</h1>
        <button
          className="btn btn-primary d-flex align-items-center gap-1"
          onClick={() => openModal()}
        >
          <Plus size={18} /> Add Job Posting
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Position</th>
                <th>Experience</th>
                <th>CTC</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length ? (
                jobs.map((job) => (
                  <tr key={job._id}>
                    <td>{job.position_name}</td>
                    <td>{job.experience_required}</td>
                    <td>{job.CTC}</td>
                    {/* <td>
                      {job.job_responsibilities
                        ?.split(";")
                        .map((r, i) => (
                          <div key={i}>• {r.trim()}</div>
                        ))}
                    </td> */}
                    <td>{job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => openModal(job)}
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(job._id!)}
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    No job postings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editJob ? "Edit Job" : "Add Job Posting"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Position Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.position_name}
                      onChange={(e) =>
                        setFormData({ ...formData, position_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Experience Required</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.experience_required}
                      onChange={(e) =>
                        setFormData({ ...formData, experience_required: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CTC</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.CTC}
                      onChange={(e) =>
                        setFormData({ ...formData, CTC: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Responsibilities (separated by ;)</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={formData.job_responsibilities}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          job_responsibilities: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Qualifications (separated by ;)</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={formData.qualifications}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualifications: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editJob ? "Update" : "Add Job"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
