'use client';

interface AdminHeaderProps {
  onLogout: () => void;
  onMenuToggle: () => void;
}

export default function AdminHeader({ onLogout, onMenuToggle }: AdminHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-bottom fixed-top w-100" style={{zIndex: 50, borderColor: '#e5e7eb'}}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className="d-flex justify-content-between align-items-center" style={{height: '4rem'}}>
          {/* Left side */}
          <div className="d-flex align-items-center">
            <button
              onClick={onMenuToggle}
              className="btn btn-link p-2 text-muted"
              style={{border: 'none', background: 'none'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="d-flex align-items-center ms-3 ms-lg-0">
              <div className="flex-shrink-0">
                <img style={{height: '2rem'}} src="/images/logo.svg" alt="Suncity Projects" />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center gap-3">
            {/* Logout button */}
            <button
              onClick={onLogout}
              className="btn btn-danger btn-sm"
              style={{transition: 'all 0.2s ease'}}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
