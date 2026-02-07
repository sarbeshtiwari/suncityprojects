'use client';

import { useState, useEffect } from 'react';
import DashboardPage from './components/DashboardPage';

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

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminToken');
      // Dispatch custom event to notify ProtectedRoute
      window.dispatchEvent(new CustomEvent('adminLogout'));
      window.location.href = '/admin';
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight: '50vh'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '3rem', height: '3rem'}}></div>
          <p className="text-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return <DashboardPage data={dashboardData} onLogout={handleLogout} />;
}