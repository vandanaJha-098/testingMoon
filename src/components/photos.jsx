import React from 'react';
import { Grid, Box } from '@mui/material';


import img2 from '../../photo/photo2.jpeg';
import img3 from '../../photo/photo3.jpeg';
import img4 from '../../photo/photo4.jpeg';
import img5 from '../../photo/photo5.jpeg';
import img6 from '../../photo/photo6.jpeg';
import img7 from '../../photo/photo7.jpeg';
import img8 from '../../photo/photo8.jpeg';
import img9 from '../../photo/photo9.jpeg';
import img10 from '../../photo/photo10.jpeg';
import img11 from '../../photo/photo11.jpeg';
import img12 from '../../photo/photo12.jpeg';
import img13 from '../../photo/photo13.jpeg';
import img14 from '../../photo/photo14.jpeg';

const images = [ img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

function ThreeImagesRowFixed1() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: '#f5f6fa', p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {images.map((src, idx) => (
          <Grid item key={idx} sx={{ width: { xs: 260, sm: 260, md: 260 }, flexBasis: '280px', flexGrow: 0, flexShrink: 0 }}>
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

export default ThreeImagesRowFixed1;
