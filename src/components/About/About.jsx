import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Divider } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function AboutUsPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
        position: 'relative',
        py: { xs: 5, md: 10 },
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(circle at 20% 30%, rgba(138,0,55,0.09) 0%, transparent 60%), 
                       radial-gradient(circle at 80% 70%, rgba(99,3,3,0.08) 0%, transparent 60%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: 5,
          p: { xs: 3, md: 6 },
          background: 'rgba(255,255,255,0.82)',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.19)',
          zIndex: 1,
          mb: 4,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <ScienceIcon sx={{ fontSize: 48, color: '#8a0037' }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: '#8a0037',
              textShadow: '0 2px 12px rgba(138,0,55,0.07)',
            }}
          >
            About Us
          </Typography>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#630303', mb: 2 }}>
          MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.14rem', mb: 2 }}>
          Established in early 2025, <b>MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD</b> is dedicated to delivering precise, accurate, and reliable testing services. Over the years, we have carved out a globally recognized position in the fields of <b>chemical</b> and <b>mechanical analytical testing</b>.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.14rem', mb: 2 }}>
          Our state-of-the-art facility spans 2,000 sq. feet, featuring buildings at <b>Chanakyapuri, Khagual Gharikhana (Back of Batala), 801105</b>. Our team of seasoned professionals is committed to upholding both national and international standards throughout every stage of testing and analysis.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.14rem', mb: 2 }}>
          We pride ourselves on understanding and meeting the needs of our esteemed clients, striving for maximum satisfaction. Every product is inspected in our advanced laboratory using cutting-edge technologies, ensuring the highest quality standards. Our ISO certifications further reinforce our commitment to excellence and client gratification.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.14rem', mb: 2 }}>
          We offer a comprehensive range of testing solutions for metals & alloys, polymers, inorganic fine chemicals, and more. All tests are conducted under the guidance of our skilled and experienced professionals, guaranteeing reliability and competitive pricing.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.14rem' }}>
          In a short span, we have earned immense appreciation from our clients and continue to grow and innovate in the material testing world. Our cooperative and skilled team is the backbone of our success, performing rigorous tests to ensure optimum quality for every client.
        </Typography>
      </Paper>

      {/* Highlights Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 900, zIndex: 1 }}
      >
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<VerifiedIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
            title="ISO Certified"
            desc="Certified for quality and reliability, adhering to national and international standards."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<EmojiEventsIcon sx={{ fontSize: 40, color: '#43a047' }} />}
            title="Global Recognition"
            desc="Pioneering role in chemical and mechanical analytical testing with a global clientele."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<GroupsIcon sx={{ fontSize: 40, color: '#d32f2f' }} />}
            title="Expert Team"
            desc="Managed by experienced professionals dedicated to client satisfaction and excellence."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<ScienceIcon sx={{ fontSize: 40, color: '#8a0037' }} />}
            title="Advanced Lab"
            desc="State-of-the-art laboratory with high-tech equipment and rigorous quality checks."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<LocationOnIcon sx={{ fontSize: 40, color: '#630303' }} />}
            title="Strategic Location"
            desc="Located at Chanakyapuri, Khagual Gharikhana (Back of Batala), 801105."
          />
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          width: '100vw',
          mt: 8,
          py: 4,
          px: 0,
          background: 'linear-gradient(90deg, #2c003e 0%, #630303 100%)',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '1.1rem',
          letterSpacing: 1,
          zIndex: 10,
          boxShadow: '0 -2px 24px 0 rgba(99,3,3,0.15)',
          position: 'relative',
        }}
      >
        © 2025 MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD. All rights reserved.
      </Box>
    </Box>
  );
}

// Highlight Card Component
function HighlightCard({ icon, title, desc }) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 4px 24px 0 rgba(138,0,55,0.09)',
        textAlign: 'center',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.04) translateY(-4px)',
          boxShadow: '0 8px 32px 0 rgba(138,0,55,0.17)',
        },
      }}
    >
      {icon}
      <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 700, color: '#8a0037' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#333' }}>
        {desc}
      </Typography>
    </Paper>
  );
}

export default AboutUsPage;
