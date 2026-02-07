'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './LoginPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenExpired, setTokenExpired] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    
    // Listen for custom login and logout events
    const handleLogin = () => {
      checkAuth();
    };
    
    const handleLogout = () => {
      setIsAuthenticated(false);
      setTokenExpired(false);
    };
    
    // Set up periodic token check (every 5 minutes)
    const tokenCheckInterval = setInterval(() => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        try {
          const tokenParts = token.split('.');
          if (tokenParts.length !== 3) {
            // Invalid token format
            localStorage.removeItem('adminToken');
            setIsAuthenticated(false);
            return;
          }
          
          const tokenPayload = JSON.parse(atob(tokenParts[1]));
          const currentTime = Math.floor(Date.now() / 1000);
          
          if (tokenPayload.exp && tokenPayload.exp < currentTime) {
            // Token is expired, logout user
            localStorage.removeItem('adminToken');
            setIsAuthenticated(false);
            setTokenExpired(true);
          }
        } catch (error) {
          // Invalid token, logout user
          localStorage.removeItem('adminToken');
          setIsAuthenticated(false);
        }
      }
    }, 5 * 60 * 1000); // Check every 5 minutes
    
    window.addEventListener('adminLogin', handleLogin);
    window.addEventListener('adminLogout', handleLogout);
    
    return () => {
      window.removeEventListener('adminLogin', handleLogin);
      window.removeEventListener('adminLogout', handleLogout);
      clearInterval(tokenCheckInterval);
    };
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('adminToken');
    
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    try {
      // First check if token is expired by decoding it
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        // Invalid token format
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      const tokenPayload = JSON.parse(atob(tokenParts[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (tokenPayload.exp && tokenPayload.exp < currentTime) {
        // Token is expired
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setTokenExpired(true);
        setIsLoading(false);
        return;
      }

      // Verify token by making a request to a protected endpoint
      const response = await fetch('/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setTokenExpired(false);
      } else if (response.status === 401) {
        // Token is invalid or expired
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setTokenExpired(true);
      } else {
        // Other error
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('adminToken');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        setTokenExpired(false);
        
        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('adminLogin'));
        
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  if (isLoading) {
    return (
      <div className="admin-panel d-flex align-items-center justify-content-center" style={{minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)'}}>
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{width: '4rem', height: '4rem'}}></div>
          <p className="fs-5 text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <LoginPage 
        onLogin={handleLogin} 
        errorMessage={tokenExpired ? 'Your session has expired. Please log in again.' : undefined}
      />
    );
  }

  return <>{children}</>;
}
