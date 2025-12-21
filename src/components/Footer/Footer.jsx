import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const [hovered, setHovered] = useState(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { href: '/services', label: 'Testing Services' },
    { href: '/', label: 'Research Lab' },
    { href: '/', label: 'Certifications' },
    { href: '/', label: 'Consulting' },
  ];

  const addressDetails = [
    { label: 'Company', value: 'Moontech India Testing and Research Lab', icon: '🏢' },
    { label: 'Address', value: 'ChanakyaPuri Garikhana Khagaul (Back of Batala), Danapur, Bihar 801105', icon: '📍' },
    { label: 'Contact', value: '8809601830, 9718830384, 8986470795', icon: '📞' },
    { label: 'Email', value: 'mtrlindiainfo@gmail.com', icon: '✉️' },
  ];

  return (
    <div
      className="py-4"
      style={{
        minHeight: '35vh',
        background: 'linear-gradient(135deg, #0f1b14 0%, #1a2a1e 40%, #2d5039 100%)',
        width: '100%',
        borderTop: '12px solid #f8fafc',
      }}
    >
      <Container fluid>
        <Row className="g-4 align-items-stretch">
          {/* LEFT: Contact Info */}
          <Col xs={12} md={4}>
            <div className="h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <h5 style={{ 
                  color: '#10b981', 
                  fontWeight: 800, 
                  fontSize: '1.6rem', 
                  marginBottom: '1.5rem', 
                  letterSpacing: '1px', 
                  textShadow: '0 0 20px rgba(16,185,129,0.5)' 
                }}>
                  Contact Info
                </h5>
                {addressDetails.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(16,185,129,0.15)',
                      borderRadius: '16px',
                      padding: '1rem 1.2rem',
                      marginBottom: '0.8rem',
                      color: '#e0f2fe',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(16,185,129,0.4)',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem', filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.4))' }}>{item.icon}</span>
                    <span style={{ fontWeight: 700, color: '#10b981', minWidth: '70px' }}>{item.label}:</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* MIDDLE: Services */}
          <Col xs={12} md={4}>
            <div className="h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <h5 style={{ 
                  color: '#f59e0b', 
                  fontWeight: 800, 
                  fontSize: '1.6rem', 
                  marginBottom: '1.5rem', 
                  letterSpacing: '1px', 
                  textShadow: '0 0 20px rgba(245,158,11,0.5)' 
                }}>
                  Our Services
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {services.map((service, idx) => (
                    <a
                      key={service.href}
                      href={service.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '12px',
                        background: hovered === `service-${idx}` ? 'rgba(245,158,11,0.25)' : 'rgba(16,185,129,0.1)',
                        color: hovered === `service-${idx}` ? '#f59e0b' : '#e0f2fe',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(16px)',
                        border: hovered === `service-${idx}` ? '1px solid rgba(245,158,11,0.5)' : '1px solid rgba(16,185,129,0.2)',
                      }}
                      onMouseEnter={() => setHovered(`service-${idx}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT: Quick Links - SAME AS SERVICES (NO BORDER) */}
          <Col xs={12} md={4}>
            <div className="h-100 d-flex flex-column justify-content-between p-3">
              <div>
                <h5 style={{ 
                  color: '#fbbc04', 
                  fontWeight: 800, 
                  fontSize: '1.6rem', 
                  marginBottom: '1.5rem', 
                  letterSpacing: '1px', 
                  textShadow: '0 0 20px rgba(251,191,36,0.5)' 
                }}>
                  Quick Links
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {links.map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '12px',
                        background: hovered === `link-${idx}` ? 'rgba(251,191,36,0.25)' : 'rgba(16,185,129,0.1)',
                        color: hovered === `link-${idx}` ? '#fbbc04' : '#e0f2fe',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(16px)',
                        border: hovered === `link-${idx}` ? '1px solid rgba(251,191,36,0.5)' : '1px solid rgba(16,185,129,0.2)',
                      }}
                      onMouseEnter={() => setHovered(`link-${idx}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Clean Bottom */}
        <Row className="mt-4">
          <Col>
            <div style={{ 
              textAlign: 'center', 
              color: 'rgba(34,197,94,0.95)', 
              fontWeight: 600, 
              fontSize: '0.95rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid rgba(16,185,129,0.4)' 
            }}>
              © 2025 Moontech India Testing and Research Lab. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
