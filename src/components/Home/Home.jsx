import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LAB_NAME = "MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD";

function Home({ photos, photosPerPage = 6 }) {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const handlePrev = () => setIndex(i => Math.max(i - 1, 0));
  const handleNext = () => setIndex(i => Math.min(i + 1, total - 1));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      {/* Running Lab Name Marquee */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          
          mb: 3,
          // background: 'linear-gradient(90deg, #8a0037 0%, #630303 100%)',
          py: 1,
          borderRadius: 2,
          // boxShadow: '0 2px 12px 0 #8a003730',
          position: 'relative',
    
        }}
      >
        <span
          style={{
            display: 'inline-block',
            // color: '#fff',
            color: 'black',
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '2px',
            paddingLeft: '100%',
            animation: 'marquee 15s linear infinite',
          }}
        >
          {LAB_NAME} &nbsp; • &nbsp; {LAB_NAME} &nbsp; • &nbsp; {LAB_NAME} 
        </span>
        {/* Inline keyframes for the marquee effect */}
        <style>
          {`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', sm: '100%', md: '100%' },
          height: { xs: 220, sm: 340, md: 550 },
          position: 'relative',
          borderRadius: 6,
          overflow: 'hidden',
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-25px',
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={index === 0}
          sx={{ position: 'absolute', left: 8, zIndex: 1, bgcolor: 'rgba(205, 205, 205, 0.6)' }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <img
          src={photos[index].url}
          alt={photos[index].title}
          loading="lazy"
          style={{
            width: '70%',
            height: '70%',
            display: 'block',
            objectFit: 'cover',
            borderRadius: 6,
          
          }}
        />
        <IconButton
          onClick={handleNext}
          disabled={index === total - 1}
          sx={{ position: 'absolute', right: 8, zIndex: 2, bgcolor: 'rgba(220, 220, 220, 0.6)' }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Home;
