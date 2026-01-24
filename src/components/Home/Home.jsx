

import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LLogo from '../logo/L.png';

const LAB_NAME = "MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED";

function Home({ photos, photosPerPage = 6 }) {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const handleNext = () => setIndex(i => (i + 1) % total);
  const handlePrev = () => setIndex(i => (i - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 1, sm: 2, md: 4 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Moving Logo + Name Header */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 50, sm: 60, md: 70 },
          background: 'rgba(255,255,255,0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
          zIndex: 10,
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            color: '#1e293b',
            fontWeight: 700,
            fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
            letterSpacing: { xs: '1px', sm: '1.5px', md: '2px' },
            whiteSpace: 'nowrap',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            animation: 'marquee 5s linear infinite',
            width: '300%',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
            <img 
              src={LLogo}
              alt="Moontech Logo"
              style={{
                height: 32,
                width: 32,
                borderRadius: '6px',
                flexShrink: 0
              }}
            />
            {LAB_NAME}
          </div>
          &nbsp; • &nbsp;
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img 
              src={LLogo}
              alt="Moontech Logo"
              style={{
                height: 32,
                width: 32,
                borderRadius: '6px',
                flexShrink: 0
              }}
            />
            {LAB_NAME}
          </div>
          &nbsp; • &nbsp;
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img 
              src={LLogo}
              alt="Moontech Logo"
              style={{
                height: 32,
                width: 32,
                borderRadius: '6px',
                flexShrink: 0
              }}
            />
            {LAB_NAME}
          </div>
        </span>
      </Box>

      {/* Main Content - Split Layout */}
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '90%', lg: '85%' },
          maxWidth: 1400,
          mt: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 4 },
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        {/* LEFT: Compact Info Box - 25% width */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '0 0 25%' },
            minHeight: { xs: 'auto', md: '500px' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Title with Background */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              color: 'white',
              p: { xs: 2, md: 2.5 },
              borderRadius: { xs: '12px 12px 0 0', md: '16px 16px 0 0' },
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(30,41,59,0.4)',
              flexShrink: 0,
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                letterSpacing: '1px',
              }}
            >
              CERTIFICATION
            </Typography>
          </Box>

          {/* Info Content */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 2.5, md: 3 },
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: { xs: '0 0 12px 12px', md: '0 0 16px 16px' },
              border: '1px solid rgba(255,255,255,0.6)',
              borderTop: 'none',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: 280, mx: 'auto' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1e293b', 
                  mb: 1.5,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                ISO/IEC 17025:2017
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#475569', 
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  lineHeight: 1.6,
                }}
              >
                "{LAB_NAME} has been assessed and accredited in accordance with the standard 
                <strong> ISO/IEC 17025:2017 </strong> 
                'General Requirements for the Competence of Testing & Calibration Laboratories'.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* RIGHT: Photo Slider - Takes remaining space */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '0 0 75%' },
            height: { xs: '300px', sm: '400px', md: '500px' },
            position: 'relative',
            borderRadius: { xs: 2, md: 3 },
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              animation: `slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.95) contrast(1.1)',
                transition: 'filter 0.5s ease',
              },
              '&:hover img': {
                filter: 'brightness(1.05) contrast(1.2)',
              },
            }}
          >
            <img
              src={photos[index].url}
              alt={photos[index].title}
              loading="lazy"
            />
          </Box>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{ 
              position: 'absolute', 
              left: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20, 
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#1e293b',
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              borderRadius: { xs: '12px', sm: '16px' },
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                background: 'rgba(255,255,255,0.5)',
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              }
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20, 
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#1e293b',
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              borderRadius: { xs: '12px', sm: '16px' },
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                background: 'rgba(255,255,255,0.5)',
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              }
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>

          {/* Dots Indicator */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 12, sm: 20 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: { xs: 0.5, sm: 1 },
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(16px)',
              borderRadius: { xs: '16px', sm: '20px' },
              p: { xs: 0.25, sm: 0.5 },
              border: '1px solid rgba(255,255,255,0.5)',
              width: { xs: '90%', sm: 'auto' },
              justifyContent: { xs: 'space-evenly', sm: 'center' },
            }}
          >
            {Array.from({ length: total }, (_, i) => (
              <Box
                key={i}
                sx={{
                  width: { xs: 10, sm: 12 },
                  height: { xs: 10, sm: 12 },
                  borderRadius: '50%',
                  background: i === index ? '#1e293b' : 'rgba(255,255,255,0.5)',
                  boxShadow: i === index ? '0 0 12px rgba(30,41,59,0.5)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flex: 1,
                  maxWidth: { xs: 20, sm: 'none' },
                  '&:hover': {
                    background: '#1e293b',
                    transform: 'scale(1.2)',
                  },
                }}
                onClick={() => setIndex(i)}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes slideFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default Home;
