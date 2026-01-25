import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
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
        // ✅ MATCHING WHITE LAB BACKGROUND
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)',
        position: 'relative',
        py: { xs: 5, md: 10 },
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ✅ GLASSY MAIN CONTENT CARD */}
      <Box
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: '24px',
          p: { xs: 4, md: 6 },
          // ✅ WHITE GLASSY STYLE
          background: 'rgba(255,255,255,0.25)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          mb: 6,
          zIndex: 1,
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center" mb={3}>
          <ScienceIcon sx={{ fontSize: 56, color: '#10b981' }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: '#1e293b',
            }}
          >
            About Us
          </Typography>
        </Stack>
        
        {/* Company Name Card */}
        <Box
          sx={{
            background: 'rgba(16,185,129,0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: '16px',
            p: 3,
            mb: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#10b981', mb: 1 }}>
            MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED
          </Typography>
        </Box>

        {/* Content Paragraph Cards */}
        <Stack spacing={3}>
          <ContentCard>
            Established in early 2025, <b>MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED</b> is dedicated to delivering precise, accurate, and reliable testing services. 
            Over the years, we have carved out a globally recognized position in the fields of <b>chemical</b> and <b>mechanical analytical testing</b>.
          </ContentCard>
          
          <ContentCard>
            Our state-of-the-art facility spans 2,000 sq. feet, featuring buildings at <b>Chanakyapuri, Khagual Gharikhana (Back of Batala), 801105</b>. 
            Our team of seasoned professionals is committed to upholding both national and international standards throughout every stage of testing and analysis.
          </ContentCard>
          
          <ContentCard>
            **NABL Accredited & ISO/IEC 17025:2017 Certified** - We pride ourselves on understanding and meeting the needs of our esteemed clients, striving for maximum satisfaction. 
            Every product is inspected in our advanced laboratory using cutting-edge technologies, ensuring the highest quality standards.
          </ContentCard>
          
          <ContentCard>
            We offer a comprehensive range of testing solutions for metals & alloys, polymers, inorganic fine chemicals, and more. 
            All tests are conducted under the guidance of our skilled and experienced professionals, guaranteeing reliability and competitive pricing.
          </ContentCard>
          
          <ContentCard>
            In a short span, we have earned immense appreciation from our clients and continue to grow and innovate in the material testing world. 
            Our cooperative and skilled team is the backbone of our success, performing rigorous tests to ensure optimum quality for every client.
          </ContentCard>
        </Stack>
      </Box>

      {/* ✅ GLASSY HIGHLIGHTS CARDS - ADDED NABL & ISO */}
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 900, mb: 8, zIndex: 1 }}>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<VerifiedIcon sx={{ fontSize: 48, color: '#10b981' }} />}
            title="NABL Accredited"
            desc="National Accreditation Board for Testing & Calibration Laboratories"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<VerifiedIcon sx={{ fontSize: 48, color: '#1e40af' }} />}
            title="ISO/IEC 17025:2017"
            desc="International standard for testing & calibration competence"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<EmojiEventsIcon sx={{ fontSize: 48, color: '#10b981' }} />}
            title="Global Recognition"
            desc="Pioneering role in chemical and mechanical analytical testing."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<GroupsIcon sx={{ fontSize: 48, color: '#10b981' }} />}
            title="Expert Team"
            desc="Seasoned professionals dedicated to excellence and quality."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<ScienceIcon sx={{ fontSize: 48, color: '#10b981' }} />}
            title="Advanced Lab"
            desc="2,000 sq.ft state-of-the-art facility with cutting-edge equipment."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HighlightCard
            icon={<LocationOnIcon sx={{ fontSize: 48, color: '#10b981' }} />}
            title="Strategic Location"
            desc="Chanakyapuri, Khagual Gharikhana (Back of Batala), 801105."
          />
        </Grid>
      </Grid>

      {/* ✅ GLASSY FOOTER */}
      <Box
        sx={{
          width: '100vw',
          py: 4,
          px: 3,
          // ✅ EMERALD GLASS FOOTER
          background: 'rgba(16,185,129,0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(16,185,129,0.4)',
          borderRadius: '20px 20px 0 0',
          color: '#1e293b',
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '1rem',
          letterSpacing: 1,
          boxShadow: '0 -8px 25px rgba(16,185,129,0.2)',
          zIndex: 10,
        }}
      >
        © 2025-2026 MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED. All rights reserved. | NABL Accredited & ISO/IEC 17025:2017 Certified
      </Box>
    </Box>
  );
}

// ✅ GLASSY CONTENT CARD
function ContentCard({ children }) {
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '16px',
        p: 3,
        '& > p': {
          color: '#1e293b',
          fontSize: '1.1rem',
          lineHeight: 1.7,
        }
      }}
    >
      <Typography variant="body1" component="div">
        {children}
      </Typography>
    </Box>
  );
}

// ✅ GLASSY HIGHLIGHT CARD (MATCHING HOME PAGE STYLE)
function HighlightCard({ icon, title, desc }) {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: '20px',
        // ✅ WHITE GLASS STYLE MATCHING HOME PAGE
        background: 'rgba(255,255,255,0.25)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.4)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 30px 50px rgba(0,0,0,0.2)',
          background: 'rgba(255,255,255,0.35)',
        },
      }}
    >
      {icon}
      <Typography variant="h6" sx={{ mt: 2, mb: 1.5, fontWeight: 700, color: '#1e293b', fontSize: '1.2rem' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6 }}>
        {desc}
      </Typography>
    </Box>
  );
}

export default AboutUsPage;
