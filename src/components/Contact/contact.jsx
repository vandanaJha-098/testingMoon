import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';

const OFFICE_ADDRESS = "MOONTECH INDIA TESTING AND RESEARCH LAB PVT LTD";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/25%C2%B035'27.6%22N+85%C2%B002'32.0%22E/@25.5909914,85.0396501,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.5909914!4d85.042225?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";
const PHONE_NUMBER = "+918809601830";
const EMAIL_ADDRESS1 = "himanshu@mtrl.in";
const EMAIL_ADDRESS2 = "team@mtrl.in";
const WHATSAPP_NUMBER = "8809601830";

function adjustColor(color, amount) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * amount);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function ContactPage() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor - Hidden on Mobile */}
      <Box
        sx={{
          position: 'fixed',
          width: { xs: 0, sm: 20 },
          height: { xs: 0, sm: 20 },
          border: { xs: 'none', sm: '2px solid rgba(224,242,254,0.8)' },
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: `calc(${cursor.x}px - 10px)`,
          top: `calc(${cursor.y}px - 10px)`,
          transition: 'all 0.1s ease',
          backdropFilter: 'blur(10px)',
          background: 'rgba(224,242,254,0.1)',
          boxShadow: '0 0 20px rgba(16,185,129,0.4)',
          display: { xs: 'none', sm: 'block' },
        }}
      />

      {/* 🔥 MAIN CONTAINER - MOBILE CENTERED */}
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          p: 0,
          m: 0,
          overflowX: 'hidden',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',  // ✅ VERTICAL CENTER
          py: { xs: 1, sm: 4 },      // 🔥 REDUCED MOBILE PADDING
          px: { xs: 1, sm: 0 },
          gap: { xs: 2, sm: 4 },     // 🔥 PERFECT SPACING
        }}
      >
        {/* Hero Title */}
        <Typography
          variant="h3"
          sx={{
            color: '#e0f2fe',
            fontWeight: 900,
            letterSpacing: { xs: 1, sm: 2 },
            mb: { xs: 1, sm: 4 },
            zIndex: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
            textShadow: '0 0 40px rgba(16,185,129,0.5)',
            background: 'rgba(16,185,129,0.15)',
            backdropFilter: 'blur(20px)',
            padding: { xs: '0.6rem 1.2rem', sm: '0.8rem 1.5rem', md: '1rem 2rem' },
            borderRadius: '20px',
            border: '1px solid rgba(16,185,129,0.4)',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Get in Touch
        </Typography>

        {/* 🔥 CARDS STACK - MOBILE PERFECTLY CENTERED */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1.5, sm: 3 }}
          sx={{
            width: { xs: '95%', sm: '100%' },      // 🔥 95% MOBILE
            maxWidth: { xs: '400px', sm: 1200 },   // 🔥 MOBILE MAX WIDTH
            px: { xs: 1, sm: 3 },                  // 🔥 MOBILE PADDING
            mx: 'auto',                            // 🔥 HORIZONTAL CENTER
            zIndex: 2,
          }}
        >
          <EmeraldGlassCard 
            color="#10b981" 
            icon={<RoomIcon />} 
            title={OFFICE_ADDRESS}
            buttonText="Directions"
            href={GOOGLE_MAPS_URL}
            target="_blank"
          />
          <EmeraldGlassCard 
            color="#f59e0b" 
            icon={<PhoneIcon />} 
            title={PHONE_NUMBER}
            href={`tel:${PHONE_NUMBER}`}
            buttonText="Call"
          />
          <EmeraldGlassCard 
            color="#fbbc04" 
            icon={<EmailIcon />} 
            title={EMAIL_ADDRESS1}
            href={`mailto:${EMAIL_ADDRESS1}?subject=Inquiry%20from%20Moontech&body=Hello%20Email,%0A%0APlease%20help%20with:%0A`}
            buttonText="Email"
          />
          <EmeraldGlassCard 
            color="#ef4444" 
            icon={<EmailIcon />} 
            title={EMAIL_ADDRESS2}
            href={`mailto:${EMAIL_ADDRESS2}?subject=Inquiry%20from%20Moontech&body=Hello%20Team,%0A%0APlease%20provide%20information%20about:%0A`}
            buttonText="Team"
          />
          <EmeraldGlassCard 
            color="#10b981" 
            icon={<WhatsAppIcon />} 
            title="WhatsApp"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            buttonText="Chat"
          />
        </Stack>
      </Box>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}

// 🔥 COMPACT MOBILE GLASS CARDS
function EmeraldGlassCard({ color, icon, title, href, buttonText, target }) {
  return (
    <Box
      sx={{
        flex: { xs: '1 1 100%', sm: '1 1 45%' },
        minHeight: { xs: 120, sm: 160 },
        maxWidth: { xs: '300px', sm: 'none' },
        p: { xs: 1.5, sm: 2.5 },
        borderRadius: { xs: '16px', sm: '20px' },
        background: 'rgba(16,185,129,0.30)',
        backdropFilter: 'blur(20px)',
        border: `1px solid rgba(16,185,129,0.7)`,
        boxShadow: `0 20px 40px rgba(16,185,129,0.3)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        color: '#e0f2fe',
        mx: { xs: 'auto', sm: 0 },
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 30px 50px rgba(16,185,129,0.4)`,
          background: 'rgba(16,185,129,0.40)',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: 40, sm: 60 },
          height: { xs: 40, sm: 60 },
          borderRadius: '50%',
          background: `linear-gradient(145deg, rgba(224,242,254,0.5), rgba(224,242,254,0.2))`,
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 1, sm: 2 },
          border: `2px solid ${color}`,
        }}
      >
        {React.cloneElement(icon, { sx: { color, fontSize: { xs: 20, sm: 28 } } })}
      </Box>
      
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
          fontWeight: 700,
          mb: { xs: 1, sm: 2 },
          lineHeight: { xs: 1.3, sm: 1.3 },
          maxWidth: { xs: 140, sm: 180 },
          letterSpacing: '0.3px',
          wordBreak: 'break-word',
          px: 0.5,
        }}
      >
        {title}
      </Typography>
      
      <Button
        href={href}
        target={target}
        component="a"
        rel={target ? "noopener noreferrer" : undefined}
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 0.8, sm: 1 },
          borderRadius: { xs: '16px', sm: '20px' },
          fontWeight: 600,
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
          background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 20)} 100%)`,
          color: '#ffffff',
          boxShadow: `0 6px 20px ${color}40`,
          textTransform: 'none',
          minWidth: { xs: '90px', sm: '120px' },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 12px 30px ${color}50`,
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default ContactPage;
