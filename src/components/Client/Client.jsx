import React from 'react';
import { Grid, Box } from '@mui/material';

import img1 from '../../photo/indian-oil.jpg';
import img2 from '../../photo/LandT.jpeg';
import img3 from '../../photo/dmrc.jpg';
import img4 from '../../photo/petron.png';
import img5 from '../../photo/nbcc.jpg';

const images = [img1, img2, img3, img4, img5];

function ThreeImagesRowFixed() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: '#f5f6fa', p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {images.map((src, idx) => (
          <Grid item key={idx} sx={{ width: { xs: 280, sm: 280, md: 280 }, flexBasis: '280px', flexGrow: 0, flexShrink: 0 }}>
            <Box
              sx={{
                width: 300,
                height: 350,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                // Clean glass border only
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: 'inherit',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                },
                // Tiny light reflection
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  width: 25,
                  height: 25,
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  borderRadius: '50%',
                  zIndex: 2,
                  pointerEvents: 'none',
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.01)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.3)',
                  '&:before': {
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 100%)',
                  },
                },
              }}
            >
              <img
                src={src}
                alt={`img-${idx}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ThreeImagesRowFixed;
