import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const detailBox = {
  background: '#FFD6DC', // Button background color
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
  padding: '0.9rem 1.2rem',
  marginBottom: '0.8rem',
  color: '#8a0037',
  fontWeight: 600,
  fontSize: '1.07rem',
  letterSpacing: '1px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  border: '1px solid #ffd6dc40',
};

const stylishHeading = {
  color: '#FFD6DC',
  fontWeight: 900,
  letterSpacing: '2px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textShadow: '1px 2px 8px rgba(0,0,0,0.25)',
  fontSize: '2.1rem',
  marginBottom: '1.2rem',
};

const linkStyle = {
  display: 'inline-block',
  padding: '10px 22px',
  marginBottom: '12px',
  borderRadius: '25px',
  background: 'rgba(255,214,220,0.85)',
  color: '#8a0037',
  textDecoration: 'none',
  fontWeight: 600,
  letterSpacing: '1px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.09)',
  transition: 'background 0.2s, color 0.2s, transform 0.2s',
};

const linkHoverStyle = {
  background: '#8a0037',
  color: '#FFD6DC',
  textDecoration: 'none',
  transform: 'translateY(-2px) scale(1.04)',
};

function Footer() {
  const [hovered, setHovered] = React.useState(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const addressDetails = [
    { label: 'Company', value: 'Moontech India Testing and Research Lab', icon: 'bi-building' },
    { label: 'Address', value: 'ChanakyaPuri Garikhana Khagaul (Back of Batala), Danapur, Bihar 801105', icon: 'bi-geo-alt' },
    { label: 'Contact', value: '8809601830, 9718830384, 8986470795', icon: 'bi-telephone' },
    { label: 'Email', value: 'mtrlindiainfo@gmail.com', icon: 'bi-envelope' },
  ];

  return (
    <div
      className="py-5"
      style={{
        minHeight: '30vh',
        background: 'linear-gradient(90deg, #8a0037 0%, #630303 100%)',
        width: '100%',
        borderTopLeftRadius: '36px',
        borderTopRightRadius: '36px',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
      }}
    >
      <Container fluid>
        <Row className="justify-content-center align-items-stretch">
          {/* Address Details */}
          <Col
            xs={12}
            md={5}
            className="d-flex flex-column justify-content-center mb-4 mb-md-0 me-md-5"
          >
            <h4 style={stylishHeading}>Contact & Address</h4>
            {addressDetails.map((item, idx) => (
              <div key={idx} style={detailBox}>
                {item.icon && (
                  <i className={`bi ${item.icon}`} style={{ fontSize: '1.3rem', color: '#8a0037', opacity: 0.8 }}></i>
                )}
                <span style={{ fontWeight: 700 }}>{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </Col>

          {/* Important Links */}
          <Col
            xs={12}
            md={5}
            className="d-flex flex-column justify-content-center mb-4 mb-md-0"
          >
            <div style={{
              background: 'rgba(255,255,255,0.60)',
              borderRadius: '26px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              padding: '2.1rem 1.5rem',
              minHeight: 220,
              backdropFilter: 'blur(2px)',
              border: '1px solid #ffd6dc40',
            }}>
              <h4 style={{
                ...stylishHeading,
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#8a0037',
                textShadow: 'none'
              }}>Important Links</h4>
              <ListGroup variant="flush">
                {links.map((link, idx) => (
                  <ListGroup.Item
                    key={link.href}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                    }}
                  >
                    <a
                      href={link.href}
                      style={
                        hovered === idx
                          ? { ...linkStyle, ...linkHoverStyle }
                          : linkStyle
                      }
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {link.label}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-5">
          <Col>
            <div
              style={{
                width: '100%',
                padding: '1.7rem 0 0.7rem 0',
                color: '#FFD6DC',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.13rem',
                letterSpacing: 1,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                opacity: 0.97,
                borderTop: '1px solid #ffd6dc40',
              }}
            >
              © 2025 <span style={{ color: '#fff', fontWeight: 700 }}>Moontech India Testing and Research Lab</span>. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
      {/* Bootstrap Icons CDN (if not already included in your project) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
    </div>
  );
}

export default Footer;
