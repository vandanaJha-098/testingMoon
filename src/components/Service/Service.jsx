import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import TerrainIcon from '@mui/icons-material/Terrain';
import ScienceIcon from '@mui/icons-material/Science';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import RoadIcon from '@mui/icons-material/AltRoute';

const services = [
  {
    icon: <ConstructionIcon sx={{ fontSize: 36, color: '#8a0037' }} />,
    title: 'Building Material Testing',
    desc: 'Our state-of-the-art Building Material Testing laboratory in Patna, Bihar, is equipped with advanced and sophisticated testing equipment to ensure reliable results.',
  },
  {
    icon: <TerrainIcon sx={{ fontSize: 36, color: '#1976d2' }} />,
    title: 'Soil Testing Service',
    desc: 'We are recognized for delivering comprehensive Soil Testing Services in Patna, Bihar, offering accurate analysis at competitive rates.',
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 36, color: '#43a047' }} />,
    title: 'Non-Destructive Testing (NDT)',
    desc: 'With a complete in-house facility, we efficiently handle a wide range of non-destructive testing (NDT) jobs in Patna, Bihar.',
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 36, color: '#2196f3' }} />,
    title: 'Water Testing Service',
    desc: 'We provide top-quality Construction Water and Drinking Water Testing Services in Patna, Bihar, ensuring safety and compliance.',
  },
  {
    icon: <RoadIcon sx={{ fontSize: 36, color: '#ff9800' }} />,
    title: 'Road Material Testing Service',
    desc: 'Our offerings include an extensive range of Road Material Testing Services in Patna, Bihar, such as Bitumen and Paver Block testing.',
  },
];

function ServicesPage() {
  const [selected, setSelected] = React.useState(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          letterSpacing: 2,
          color: '#8a0037',
          mb: 6,
          textShadow: '0 2px 12px rgba(138,0,55,0.07)',
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: 1100, width: '100%' }}>
        {/* Sidelist */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 2px 16px 0 rgba(138,0,55,0.09)',
              p: 2,
              mb: { xs: 2, md: 0 },
            }}
          >
            <List component="nav">
              {services.map((service, idx) => (
                <ListItemButton
                  key={service.title}
                  selected={selected === idx}
                  onClick={() => setSelected(idx)}
                  sx={{
                    borderRadius: 3,
                    mb: 1,
                    bgcolor: selected === idx ? 'rgba(138,0,55,0.10)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {service.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={service.title}
                    primaryTypographyProps={{
                      fontWeight: selected === idx ? 700 : 500,
                      color: selected === idx ? '#8a0037' : '#222',
                      fontSize: '1.04rem',
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Service Details */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 5,
              background: 'rgba(255,255,255,0.96)',
              boxShadow: '0 4px 24px 0 rgba(138,0,55,0.11)',
              p: { xs: 3, sm: 5 },
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box>{services[selected].icon}</Box>
            <Typography
              variant="h5"
              sx={{
                mt: 2,
                mb: 1,
                fontWeight: 800,
                color: '#8a0037',
                letterSpacing: 1,
              }}
            >
              {services[selected].title}
            </Typography>
            <Divider sx={{ width: 60, mx: 'auto', mb: 2, bgcolor: '#8a0037' }} />
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: '1.13rem',
                maxWidth: 520,
              }}
            >
              {services[selected].desc}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServicesPage;
