import React from 'react';
import { Box } from '@mui/material';

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
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: '95vw', sm: '90vw', md: '85vw', lg: '75vw' },
          height: { xs: '80vh', sm: '85vh', md: '90vh', lg: '85vh' },
          maxWidth: 1400,
          maxHeight: 900,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}
      >
        <img
          src={img1}
          alt="Accreditation Certificate"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',  // Changed from 'cover' to 'contain'
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
}

export default SingleImageFullPage;
