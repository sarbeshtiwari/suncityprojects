"use client";

import { useState } from "react";
import Link from "next/link";

interface DashboardStats {
  totalSubmissions: number;
  contactCount: number;
  careerCount: number;
  channelPartnerCount: number;
  grievanceCount: number;
  projectEnquiryCount: number;
}

interface RecentSubmission {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  [key: string]: any;
}

interface DashboardData {
  stats: DashboardStats;
  recentSubmissions: {
    contacts: RecentSubmission[];
    careers: RecentSubmission[];
    channelPartners: RecentSubmission[];
    grievances: RecentSubmission[];
    projectEnquiries: RecentSubmission[];
  };
}

interface DashboardPageProps {
  data: DashboardData | null;
  onLogout: () => void;
}

const statCards = [
  {
    title: "Total Submissions",
    href: "/admin",
    value: "totalSubmissions",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Contact Forms",
    href: "/admin/contacts",
    value: "contactCount",
    icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    title: "Career Applications",
    href: "/admin/careers",
    value: "careerCount",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Channel Partners",
    href: "/admin/channel-partners",
    value: "channelPartnerCount",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    title: "Grievances",
    href: "/admin/grievances",
    value: "grievanceCount",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z",
    color: "bg-red-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    title: "Project Enquiries",
    href: "/admin/project-enquiries",
    value: "projectEnquiryCount",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
];

export default function DashboardPage({ data, onLogout }: DashboardPageProps) {
  if (!data) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "16rem" }}
      >
        <div className="text-center">
          <div
            className="spinner mx-auto mb-4"
            style={{ width: "3rem", height: "3rem" }}
          ></div>
          <p className="text-muted">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  const allRecentSubmissions = [
    ...data.recentSubmissions.contacts.map((item) => ({
      ...item,
      type: "Contact",
      typeColor: "bg-success text-white",
    })),
    ...data.recentSubmissions.careers.map((item) => ({
      ...item,
      type: "Career",
      typeColor: "bg-info text-white",
    })),
    ...data.recentSubmissions.channelPartners.map((item) => ({
      ...item,
      type: "Channel Partner",
      typeColor: "bg-warning text-dark",
    })),
    ...data.recentSubmissions.grievances.map((item) => ({
      ...item,
      type: "Grievance",
      typeColor: "bg-danger text-white",
    })),
    ...data.recentSubmissions.projectEnquiries.map((item) => ({
      ...item,
      type: "Project Enquiry",
      typeColor: "bg-primary text-white",
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 10);

  return (
    <>
      {/* Welcome Section */}
      <div
        className="bg-primary text-white rounded-3 p-4 mb-4"
        style={{ background: "linear-gradient(to right, #2563eb, #1d4ed8)" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h1 className="h3 fw-bold mb-2">Welcome back, Admin!</h1>
            <p className="mb-0" style={{ color: "#93c5fd" }}>
              Here's what's happening with your forms today.
            </p>
          </div>
          <div className="d-none d-md-block">
            <div className="text-end">
              <p className="display-4 fw-bold mb-0">
                {data.stats.totalSubmissions}
              </p>
              <p className="mb-0" style={{ color: "#93c5fd" }}>
                Total Submissions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="row g-4 mb-4">
        {statCards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-sm border-0"
              style={{ transition: "box-shadow 0.2s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
              }
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="small fw-medium text-muted mb-1">
                      {card.title}
                    </p>
                    <p className="h4 fw-bold text-dark mb-0">
                      {data.stats[card.value as keyof DashboardStats]}
                    </p>
                  </div>
                  <div
                    className={`${card.bgColor} p-3 rounded`}
                    style={{
                      backgroundColor: card.bgColor.includes("blue")
                        ? "#dbeafe"
                        : card.bgColor.includes("green")
                        ? "#dcfce7"
                        : card.bgColor.includes("purple")
                        ? "#f3e8ff"
                        : card.bgColor.includes("yellow")
                        ? "#fef3c7"
                        : card.bgColor.includes("red")
                        ? "#fee2e2"
                        : "#e0e7ff",
                    }}
                  >
                    <svg
                      style={{ width: "1.5rem", height: "1.5rem" }}
                      className={card.textColor}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={card.icon}
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <Link
                    href={`${card.href
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace("total-submissions", "")}`}
                    className={`small fw-medium text-decoration-none ${card.textColor}`}
                    style={{
                      color: card.textColor.includes("blue")
                        ? "#1e40af"
                        : card.textColor.includes("green")
                        ? "#166534"
                        : card.textColor.includes("purple")
                        ? "#7c3aed"
                        : card.textColor.includes("yellow")
                        ? "#92400e"
                        : card.textColor.includes("red")
                        ? "#991b1b"
                        : "#1e40af",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Submissions */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-header bg-white border-bottom">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="h5 fw-semibold text-dark mb-0">
              Recent Submissions
            </h3>
            <Link
              href="/admin/recent"
              className="small fw-medium text-decoration-none"
              style={{ color: "#2563eb" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2563eb")}
            >
              View all
            </Link>
          </div>
        </div>
        <div className="card-body p-0">
          {allRecentSubmissions.length > 0 ? (
            allRecentSubmissions.map((item, index) => (
              <div
                key={index}
                className="p-4 border-bottom"
                style={{ transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <span className="small fw-medium text-muted">
                        {item.name?.charAt(0) || "N"}
                      </span>
                    </div>
                    <div>
                      <p className="small fw-medium text-dark mb-0">
                        {item.name}
                      </p>
                      <p className="small text-muted mb-0">{item.email}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className={`badge ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <span className="small text-muted">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 text-center">
              <svg
                style={{ width: "3rem", height: "3rem" }}
                className="mx-auto text-muted mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="small fw-medium text-dark">No submissions yet</h3>
              <p className="small text-muted">
                Form submissions will appear here once users start submitting.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row g-3">
        <div className="col-md-6 col-lg-3">
          <Link
            href="/admin/contacts"
            className="card text-decoration-none h-100"
            style={{ transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
            }
          >
            <div className="card-body text-center p-4">
              <div className="text-success mb-2">
                <svg
                  style={{ width: "2rem", height: "2rem" }}
                  className="mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="small fw-medium text-dark mb-0">Contact Forms</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link
            href="/admin/careers"
            className="card text-decoration-none h-100"
            style={{ transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
            }
          >
            <div className="card-body text-center p-4">
              <div className="text-info mb-2">
                <svg
                  style={{ width: "2rem", height: "2rem" }}
                  className="mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <p className="small fw-medium text-dark mb-0">
                Career Applications
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link
            href="/admin/channel-partners"
            className="card text-decoration-none h-100"
            style={{ transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
            }
          >
            <div className="card-body text-center p-4">
              <div className="text-warning mb-2">
                <svg
                  style={{ width: "2rem", height: "2rem" }}
                  className="mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="small fw-medium text-dark mb-0">Channel Partners</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link
            href="/admin/grievances"
            className="card text-decoration-none h-100"
            style={{ transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
            }
          >
            <div className="card-body text-center p-4">
              <div className="text-danger mb-2">
                <svg
                  style={{ width: "2rem", height: "2rem" }}
                  className="mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <p className="small fw-medium text-dark mb-0">Grievances</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
