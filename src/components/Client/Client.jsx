import React from 'react';
import { Grid, Box } from '@mui/material';

const images = [
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',
  'https://unitechtestinglaboratory.com/wp-content/uploads/2022/07/building-material-testing-service-in-patna-unitech-testing-laboratory-patna-1000x500.png',

];

function ThreeImagesRowFixed() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: '#f5f6fa', p: 4 }}>
      <Grid container spacing={10} justifyContent="center">
        {images.map((src, idx) => (
          <Grid
            item
            key={idx}
            // 3 columns per row, always
            sx={{
              width: { xs: 300, sm: 300, md: 300 },
              flexBasis: '300px',
              flexGrow: 0,
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                bgcolor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 8,
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