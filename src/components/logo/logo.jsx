import React from 'react';
import { SocialIcon } from 'react-social-icons';
import LOGO_URL from '../../photo/L.png';

const COMPANY_NAME = "MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD";

const SOCIAL_LINKS = [
  "https://facebook.com/",
  "https://twitter.com/",
  "https://linkedin.com/company/",
  "https://instagram.com/",
  "https://youtube.com/"
];

function CompanyPage() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#fafafa',
      padding: '18px 32px',
      boxSizing: 'border-box',
      boxShadow: '0 2px 10px #0001',
      marginTop :'-10px',
      marginBottom : ' 10px'
    }}>
      {/* Logo and Company Name together on the left */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={LOGO_URL}
          alt="Company Logo"
          style={{ height: 80, width: 80, borderRadius: 12, objectFit: 'contain' }}
        />
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: 1,
          color: '#8a0037',
          marginLeft: 20,
          whiteSpace: 'nowrap'
        }}>
          {COMPANY_NAME}
        </span>
      </div>

      {/* Social Media Icons on the right */}
      <div style={{ display: 'flex', gap: 16 }}>
        {SOCIAL_LINKS.map(url => (
          <SocialIcon key={url} url={url} style={{ height: 32, width: 32 }} target="_blank" rel="noopener noreferrer" />
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
