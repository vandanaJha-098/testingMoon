import React, { useState } from 'react';

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/career', label: 'CAREER' },
    { href: '/client', label: 'CLIENTS' },
    { href: '/accrediation', label: 'ACCREDIATION' },
    { href: '/contact', label: 'CONTACT' }
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* ✅ HAMBURGER ON LEFT */}
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>

          {/* ✅ DESKTOP NAVBAR - CENTERED */}
          <div className="desktop-nav">
            <div className="nav-bar">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    borderRight: index < links.length - 1 ? '1px solid rgba(16,185,129,0.4)' : 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .navbar-container {
          background: rgba(15,27,20,0.98);
          backdrop-filter: blur(24px);
          border-bottom: 8px solid #f8fafc;
          box-shadow: 0 15px 30px rgba(16,185,129,0.4);
          padding: 0.5rem 0;
          min-height: 60px;
          margin-bottom: 20px;
        }

        .navbar-inner {
          max-width: 1400px;
          padding: 0 1rem;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ✅ HAMBURGER - LEFT POSITIONED */
        .hamburger {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          gap: 4px;
        }

        .ham-line {
          width: 25px;
          height: 3px;
          background: #e0f2fe;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* ✅ DESKTOP NAV */
        .desktop-nav {
          width: 90%;
          max-width: 1000px;
          display: flex;
          justify-content: center;
        }

        .nav-bar {
          display: flex;
          background: rgba(16,185,129,0.2);
          backdrop-filter: blur(24px);
          border: 2px solid rgba(16,185,129,0.6);
          border-radius: 30px;
          box-shadow: 0 10px 30px rgba(16,185,129,0.4);
          overflow: hidden;
          width: 100%;
        }

        .nav-link {
          color: #e0f2fe !important;
          font-weight: 700 !important;
          font-size: 0.85rem !important;
          letter-spacing: 0.5px !important;
          padding: 0.8rem 1.4rem !important;
          flex: 1 !important;
          text-align: center !important;
          text-decoration: none !important;
          text-shadow: 0 0 8px rgba(16,185,129,0.4) !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .nav-link:hover {
          background: rgba(16,185,129,0.4) !important;
          color: #10b981 !important;
        }

        /* ✅ MOBILE: HAMBURGER LEFT + HIDE DESKTOP */
        @media (max-width: 768px) {
          .hamburger {
            display: flex !important;
            position: absolute;
            left: 1rem; /* ✅ LEFT SIDE */
            top: 50%;
            transform: translateY(-50%); /* ✅ VERTICAL CENTER ONLY */
          }

          .desktop-nav {
            display: none !important;
          }

          .hamburger.active .ham-line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .hamburger.active .ham-line:nth-child(2) {
            opacity: 0;
          }

          .hamburger.active .ham-line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }
        }

        /* ✅ MOBILE DROPDOWN */
        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-menu {
            display: block !important;
            background: rgba(15,27,20,0.98);
            backdrop-filter: blur(24px);
            border: 2px solid rgba(16,185,129,0.6);
            border-top: none;
            border-radius: 0 0 30px 30px;
            margin-top: -2px;
            overflow: hidden;
          }

          .mobile-menu-inner {
            max-width: 1400px;
            padding: 0 1rem;
            margin: 0 auto;
          }

          .mobile-link {
            display: block !important;
            color: #e0f2fe !important;
            font-weight: 600 !important;
            font-size: 1rem !important;
            letter-spacing: 1px !important;
            padding: 1rem 1.5rem !important;
            text-align: center !important;
            text-decoration: none !important;
            text-shadow: 0 0 8px rgba(16,185,129,0.4) !important;
            border-bottom: 1px solid rgba(16,185,129,0.3) !important;
            transition: all 0.3s ease !important;
          }

          .mobile-link:hover {
            background: rgba(16,185,129,0.4) !important;
            color: #10b981 !important;
          }

          .mobile-link:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default MyNavbar;
