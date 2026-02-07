'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import ProtectedRoute from './components/ProtectedRoute';
import './admin.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated and open sidebar
    const token = localStorage.getItem('adminToken');
    if (token) {
      setSidebarOpen(true);
    }
    
    // Listen for login event to open sidebar
    const handleLogin = () => {
      setSidebarOpen(true);
    };
    
    // Listen for logout event to close sidebar
    const handleLogout = () => {
      setSidebarOpen(false);
    };
    
    window.addEventListener('adminLogin', handleLogin);
    window.addEventListener('adminLogout', handleLogout);
    
    return () => {
      window.removeEventListener('adminLogin', handleLogin);
      window.removeEventListener('adminLogout', handleLogout);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminToken');
      // Dispatch custom event to notify ProtectedRoute and close sidebar
      window.dispatchEvent(new CustomEvent('adminLogout'));
      router.push('/admin');
    }
  };

  return (
    <ProtectedRoute>
      <div className="admin-panel" style={{minHeight: '100vh', backgroundColor: '#f9fafb'}}>
        <AdminHeader onLogout={handleLogout} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="d-flex" style={{paddingTop: '4rem'}}>
          <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-fill" style={{transition: 'all 0.3s ease'}}>
            <div className="p-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}