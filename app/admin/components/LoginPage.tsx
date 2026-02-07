'use client';

import { useState } from 'react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  errorMessage?: string;
}

export default function LoginPage({ onLogin, errorMessage }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(errorMessage || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await onLogin(email, password);
    
    if (!result.success) {
      setError(result.message || 'Login failed');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="admin-panel d-flex align-items-center justify-content-center py-5" style={{minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, white, #e0e7ff)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            {/* Logo and Header */}
            <div className="text-center mb-4">
              <div className="mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{width: '4rem', height: '4rem'}}>
                <img style={{width: '3.5rem', height: '3.5rem'}} src="/images/logo-icon.svg" alt="Suncity Projects" />
              </div>
              <h2 className="mt-4 mb-2 display-6 fw-bold text-dark">
                Welcome Back
              </h2>
              <p className="small text-muted">
                Sign in to your admin dashboard
              </p>
            </div>

            {/* Login Form */}
            <div className="bg-white p-4 shadow-lg rounded-3">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger small">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label small fw-medium text-dark">
                    Email Address
                  </label>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                      <svg style={{width: '1.25rem', height: '1.25rem'}} className="text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control ps-5 py-3"
                      style={{borderRadius: '0.5rem', transition: 'all 0.2s ease'}}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label small fw-medium text-dark">
                    Password
                  </label>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                      <svg style={{width: '1.25rem', height: '1.25rem'}} className="text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control ps-5 py-3"
                      style={{borderRadius: '0.5rem', transition: 'all 0.2s ease'}}
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="remember-me" className="form-check-label small text-muted">
                      Remember me
                    </label>
                  </div>

                  <div className="small">
                    <a href="#" className="text-decoration-none fw-medium" style={{color: '#2563eb'}}>
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-100 py-3 fw-medium"
                    style={{borderRadius: '0.5rem', transition: 'all 0.2s ease'}}
                  >
                    {isLoading ? (
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center">
                        <svg style={{width: '1.25rem', height: '1.25rem'}} className="me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign in
                      </div>
                    )}
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="text-center">
                <p className="small text-muted mb-0">
                  © 2025 Suncity Projects. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
