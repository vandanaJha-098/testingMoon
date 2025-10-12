import React from 'react';
import { Box, Typography, Button, Stack, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';

const OFFICE_ADDRESS = "MOONTECH INDIA RESEARCH AND TESTING LAB PVT LTD";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/25%C2%B035'27.6%22N+85%C2%B002'32.0%22E/@25.5909914,85.0396501,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.5909914!4d85.042225?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";
const PHONE_NUMBER = "+918809601830";
const EMAIL_ADDRESS = "mtrlindiainfo@gmail.com";
const WHATSAPP_NUMBER = "8809601830"; // No '+' for wa.me links

function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        p: 0,
        m: 0,
        overflowX: 'hidden',
        // Light, energetic gradient background (contrasts with dark footer)
        background: `linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(circle at 20% 30%, rgba(138,0,55,0.09) 0%, transparent 60%), 
                       radial-gradient(circle at 80% 70%, rgba(99,3,3,0.08) 0%, transparent 60%)`,
          pointerEvents: 'none',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#8a0037',
          fontWeight: 900,
          letterSpacing: 2,
          mb: 6,
          mt: { xs: 5, md: 10 },
          zIndex: 1,
          textShadow: '0 6px 24px rgba(0,0,0,0.10)',
        }}
      >
        Get in Touch
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="stretch"
        justifyContent="center"
        sx={{
          width: '100%',
          maxWidth: 1200,
          zIndex: 1,
        }}
      >
        {/* Office Direction */}
        <GlassCard borderColor="#1976d2">
          <NeumorphicIcon icon={<RoomIcon fontSize="large" sx={{ color: "#1976d2" }} />} />
          <Typography variant="h6" sx={{ mt: 1, mb: 2, color: '#222' }}>
            {OFFICE_ADDRESS}
          </Typography>
          <GradientButton
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            color1="#1976d2"
            color2="#21cbf3"
          >
            Get Directions
          </GradientButton>
        </GlassCard>

        {/* Phone */}
        <GlassCard borderColor="#43a047">
          <NeumorphicIcon icon={<PhoneIcon fontSize="large" sx={{ color: "#43a047" }} />} />
          <Typography variant="h6" sx={{ mt: 1, mb: 2, color: '#222' }}>
            <a
              href={`tel:${PHONE_NUMBER}`}
              style={{
                textDecoration: 'none',
                color: '#43a047',
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: 1,
              }}
            >
              {PHONE_NUMBER}
            </a>
          </Typography>
          <GradientButton
            href={`tel:${PHONE_NUMBER}`}
            color1="#43a047"
            color2="#b2ff59"
          >
            Call Now
          </GradientButton>
        </GlassCard>

        {/* Email */}
        <GlassCard borderColor="#d32f2f">
          <NeumorphicIcon icon={<EmailIcon fontSize="large" sx={{ color: "#d32f2f" }} />} />
          <Typography variant="h6" sx={{ mt: 1, mb: 2, color: '#222' }}>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              style={{
                textDecoration: 'none',
                color: '#d32f2f',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: 1,
              }}
            >
              {EMAIL_ADDRESS}
            </a>
          </Typography>
          <GradientButton
            href={`mailto:${EMAIL_ADDRESS}`}
            color1="#d32f2f"
            color2="#ff7961"
          >
            Send Email
          </GradientButton>
        </GlassCard>

        {/* WhatsApp */}
        <GlassCard borderColor="#25D366">
          <NeumorphicIcon icon={<WhatsAppIcon fontSize="large" sx={{ color: "#25D366" }} />} />
          <Typography variant="h6" sx={{ mt: 1, mb: 2, color: '#222' }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#25D366',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: 1,
              }}
            >
              WhatsApp Chat
            </a>
          </Typography>
          <GradientButton
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            color1="#25D366"
            color2="#a8ffeb"
          >
            Message
          </GradientButton>
        </GlassCard>
      </Stack>

      {/* Mobile Quick Action Buttons */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          gap: 2,
          mt: 5,
          zIndex: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <GradientButton
          startIcon={<PhoneIcon fontSize="large" />}
          href={`tel:${PHONE_NUMBER}`}
          color1="#43a047"
          color2="#b2ff59"
        >
          Call
        </GradientButton>
        <GradientButton
          startIcon={<WhatsAppIcon fontSize="large" />}
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          color1="#25D366"
          color2="#a8ffeb"
        >
          WhatsApp
        </GradientButton>
        <GradientButton
          startIcon={<EmailIcon fontSize="large" />}
          href={`mailto:${EMAIL_ADDRESS}`}
          color1="#d32f2f"
          color2="#ff7961"
        >
          Email
        </GradientButton>
        <GradientButton
          startIcon={<RoomIcon fontSize="large" />}
          href={GOOGLE_MAPS_URL}
          target="_blank"
          color1="#1976d2"
          color2="#21cbf3"
        >
          Map
        </GradientButton>
      </Box>

     
    </Box>
  );
}

// Glassmorphism Card Component
function GlassCard({ children, borderColor }) {
  return (
    <Box
      sx={{
        flex: '1 1 240px',
        minWidth: 220,
        maxWidth: 300,
        border: `2.5px solid ${borderColor}`,
        borderRadius: 4,
        p: 3,
        textAlign: 'center',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.19)',
        background: 'rgba(255,255,255,0.25)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.06) translateY(-4px)',
          boxShadow: `0 12px 36px 0 ${borderColor}40`,
          background: 'rgba(255,255,255,0.38)',
        },
      }}
    >
      {children}
    </Box>
  );
}

// Neumorphic Icon Wrapper
function NeumorphicIcon({ icon }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'linear-gradient(145deg, #f5f6fa 60%, #e2e2e2 100%)',
        boxShadow: '6px 6px 18px #d1d1d1, -6px -6px 18px #ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1,
      }}
    >
      {icon}
    </Box>
  );
}

// Gradient Button
function GradientButton({ color1, color2, children, ...props }) {
  return (
    <Button
      {...props}
      sx={{
        mt: 1,
        px: 3,
        py: 1,
        borderRadius: 3,
        fontWeight: 700,
        fontSize: '1.05rem',
        background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
        color: '#fff',
        boxShadow: `0 2px 12px 0 ${color1}40`,
        textTransform: 'none',
        transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          background: `linear-gradient(90deg, ${color2} 0%, ${color1} 100%)`,
          transform: 'scale(1.07) translateY(-2px)',
          boxShadow: `0 6px 24px 0 ${color1}80`,
        },
      }}
      disableElevation
    >
      {children}
    </Button>
  );
}

export default ContactPage;
