import React from 'react';
import { Box, Typography } from '@mui/material';
import img1 from '../../photo/Certificate TC-17451.jpeg';

function SingleImageFullPage() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#f5f6fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      {/* 🔥 CERTIFICATION TITLE */}
      <Typography
        variant="h4"
        sx={{
          color: '#1e293b',
          fontWeight: 900,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
          letterSpacing: '2px',
          mb: { xs: 2, sm: 3 },
          textAlign: 'center',
          textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          zIndex: 10,
        }}
      >
        CERTIFICATION
      </Typography>

      <Box
        sx={{
          width: { xs: '95vw', sm: '90vw', md: '85vw', lg: '75vw' },
          height: { xs: '75vh', sm: '80vh', md: '85vh', lg: '80vh' },
          maxWidth: 1400,
          maxHeight: 850,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(2px)',
            zIndex: 1,
          }
        }}
      >
        <img
          src={img1}
          alt="ISO/IEC 17025:2017 Accreditation Certificate"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
}

export default SingleImageFullPage;
