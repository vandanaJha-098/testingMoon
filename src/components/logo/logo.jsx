import React from 'react';
import { SocialIcon } from 'react-social-icons';
import LLogo from './L.png';

const COMPANY_NAME = "MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD";
const COMPANY_SHORT = "MTRL";

const SOCIAL_LINKS = [
  "https://facebook.com/",
  "https://twitter.com/",
  "https://linkedin.com/company/",
  "https://instagram.com/",
  "https://youtube.com/"
];

function CompanyPage() {
  // ✅ Detect mobile with useState + useEffect
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#ffffff',
      borderBottom: '3px solid #ffffff',
      padding: '16px 24px',
      boxSizing: 'border-box',
      height: '80px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    }}>
      {/* LOGO CONTAINER */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <img 
          src={LLogo}
          alt="Moontech Logo"
          style={{
            height: 40,
            width: 40,
            borderRadius: '8px',
            objectFit: 'cover',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        />
        
        {/* ✅ REACT CONDITIONAL - MTRL on mobile */}
        <span style={{
          fontSize: isMobile ? '0.9rem' : '1rem',
          fontWeight: '700',
          color: '#1f2937',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif'
        }}>
          {isMobile ? COMPANY_SHORT : COMPANY_NAME}
        </span>
      </div>

      {/* SOCIAL ICONS - Hide on mobile */}
      <div style={{
        display: isMobile ? 'none' : 'flex',
        gap: 8,
        background: '#ffffff',
        borderRadius: '12px',
        padding: '8px 12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        {SOCIAL_LINKS.map((url, index) => (
          <SocialIcon
            key={url}
            url={url}
            style={{
              height: 28,
              width: 28,
              borderRadius: '50%',
              border: '2px solid #1f2937',
              transition: 'all 0.3s ease'
            }}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
