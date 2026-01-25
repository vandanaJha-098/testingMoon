// import React, { useState, useEffect } from 'react';
// import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import LLogo from '../logo/L.png';

// const LAB_NAME = "MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED";

// function Home({ photos, photosPerPage = 6 }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [index, setIndex] = useState(0);
//   const total = photos.length;

//   const handleNext = () => setIndex(i => (i + 1) % total);
//   const handlePrev = () => setIndex(i => (i - 1 + total) % total);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box sx={{
//       height: '130vh',
//       width: '100%',
//       background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       p: { xs: 1, sm: 2, md: 4 },
//       overflow: 'hidden',
//       position: 'relative',
//     }}>
//       {/* Logo Marquee */}
//       <Box sx={{
//         width: '100%', height: { xs: 50, sm: 60, md: 70 },
//         background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(20px)',
//         border: '1px solid rgba(255,255,255,0.4)', borderRadius: '0',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         boxShadow: '0 12px 40px rgba(0,0,0,0.1)', zIndex: 5, overflow: 'hidden',
//       }}>
//         <span style={{
//           color: '#1e293b', fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
//           letterSpacing: { xs: '1px', sm: '1.5px', md: '2px' }, whiteSpace: 'nowrap',
//           textShadow: '0 2px 4px rgba(0,0,0,0.1)', animation: 'marquee 5s linear infinite',
//           width: '300%', display: 'flex', alignItems: 'center', gap: '20px',
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
//             <img src={LLogo} alt="Moontech Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
//             {LAB_NAME}
//           </div>
//           &nbsp; • &nbsp;
//           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//             <img src={LLogo} alt="Moontech Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
//             {LAB_NAME}
//           </div>
//           &nbsp; • &nbsp;
//           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//             <img src={LLogo} alt="Moontech Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
//             {LAB_NAME}
//           </div>
//         </span>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{
//         width: { xs: '95%', sm: '90%', md: '90%', lg: '85%' }, maxWidth: 1400,
//         mt: { xs: 2, sm: 3, md: 4 }, display: 'flex',
//         flexDirection: 'column', gap: { xs: 3, md: 4 },
//         alignItems: 'center',
//       }}>
//         {/* 🔥 REDUCED HEIGHT PHOTO SLIDESHOW FIRST */}
//         <Box sx={{
//           width: '100%',
//           // 👇 DECREASED HEIGHTS
//           height: { 
//             xs: '250px',    // 📱 Mobile: 350px → 250px
//             sm: '320px',    // 📱 Tablet: 450px → 320px
//             md: '450px',    // 💻 Desktop: 650px → 450px  
//             lg: '500px'     // 🖥️ Large: 750px → 500px
//           },
//           position: 'relative', borderRadius: 3, overflow: 'hidden',
//           background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(24px)',
//           border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
//         }}>
//           <Box sx={{
//             position: 'absolute', width: '100%', height: '100%',
//             animation: `slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
//             '& img': {
//               width: '100%', height: '100%', objectFit: 'cover',
//               filter: 'brightness(0.95) contrast(1.1)', transition: 'filter 0.5s ease',
//             },
//             '&:hover img': { filter: 'brightness(1.05) contrast(1.2)' },
//           }}>
//             <img src={photos[index].url} alt={photos[index].title || 'Lab Image'} loading="lazy" />
//           </Box>

//           <IconButton onClick={handlePrev} sx={{ 
//             position: 'absolute', left: { xs: 12, sm: 20 }, top: '50%', transform: 'translateY(-50%)',
//             zIndex: 20, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(20px)',
//             border: '1px solid rgba(255,255,255,0.5)', color: '#1e293b',
//             width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 },
//             borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             transition: 'all 0.3s ease',
//             '&:hover': { background: 'rgba(255,255,255,0.5)', transform: 'translateY(-50%) scale(1.1)', boxShadow: '0 12px 35px rgba(0,0,0,0.2)' }
//           }}>
//             <ArrowBackIosIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//           </IconButton>

//           <IconButton onClick={handleNext} sx={{ 
//             position: 'absolute', right: { xs: 12, sm: 20 }, top: '50%', transform: 'translateY(-50%)',
//             zIndex: 20, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(20px)',
//             border: '1px solid rgba(255,255,255,0.5)', color: '#1e293b',
//             width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 },
//             borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
//             transition: 'all 0.3s ease',
//             '&:hover': { background: 'rgba(255,255,255,0.5)', transform: 'translateY(-50%) scale(1.1)', boxShadow: '0 12px 35px rgba(0,0,0,0.2)' }
//           }}>
//             <ArrowForwardIosIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//           </IconButton>

//           <Box sx={{
//             position: 'absolute', bottom: { xs: 16, sm: 24 }, left: '50%', transform: 'translateX(-50%)',
//             display: 'flex', gap: 1, background: 'rgba(255,255,255,0.3)',
//             backdropFilter: 'blur(16px)', borderRadius: '20px', p: { xs: 0.5, sm: 0.75 },
//             border: '1px solid rgba(255,255,255,0.5)',
//             justifyContent: 'center',
//           }}>
//             {Array.from({ length: total }, (_, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   width: { xs: 12, sm: 14 }, height: { xs: 12, sm: 14 }, borderRadius: '50%',
//                   background: i === index ? '#1e293b' : 'rgba(255,255,255,0.5)',
//                   boxShadow: i === index ? '0 0 12px rgba(30,41,59,0.5)' : 'none',
//                   transition: 'all 0.3s ease', cursor: 'pointer',
//                   '&:hover': { background: '#1e293b', transform: 'scale(1.2)' },
//                 }}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </Box>
//         </Box>

//         {/* Certification - Desktop Only */}
//         {!isMobile && (
//           <Box sx={{
//             width: '100%',
//             height: '280px',
//             display: 'flex', flexDirection: 'column',
//             mt: 2,
//           }}>
//             <Box sx={{
//               background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', color: 'white',
//               p: 3, borderRadius: '20px 20px 0 0', textAlign: 'center',
//               boxShadow: '0 8px 32px rgba(30,41,59,0.4)', flexShrink: 0,
//             }}>
//               <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.4rem', letterSpacing: '1px' }}>
//                 CERTIFICATION
//               </Typography>
//             </Box>
//             <Box sx={{
//               flex: 1, p: 3.5, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
//               borderRadius: '0 0 20px 20px', border: '1px solid rgba(255,255,255,0.6)',
//               borderTop: 'none', boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//               display: 'flex', alignItems: 'center', overflow: 'hidden',
//             }}>
//               <Box sx={{ textAlign: 'center', maxWidth: 320, mx: 'auto' }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', mb: 2, fontSize: '1.3rem' }}>
//                   ISO/IEC 17025:2017
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
//                   "{LAB_NAME} has been assessed and accredited in accordance with the standard{' '}
//                   <strong>ISO/IEC 17025:2017</strong> 'General Requirements for the Competence of Testing & Calibration Laboratories'."
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         )}
//       </Box>

//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-33.333%); }
//         }
//         @keyframes slideFromRight {
//           0% { transform: translateX(100%); opacity: 0; }
//           100% { transform: translateX(0); opacity: 1; }
//         }
//       `}</style>
//     </Box>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LLogo from '../logo/L.png';

const LAB_NAME = "MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED";
const UTL_LOGO = LLogo;

const PHOTOS = [
  { url: "/images/lab1.jpg", title: "Advanced Material Testing" },
  { url: "/images/lab2.jpg", title: "NABL Accredited Facility" },
  { url: "/images/lab3.jpg", title: "Soil & Water Analysis" },
  { url: "/images/lab4.jpg", title: "Quality Control Experts" },
];

const SERVICES = [
  { icon: "🧱", title: "Material Testing", desc: "Cement, steel, bricks, concrete, tiles testing" },
  { icon: "🌱", title: "Soil Testing", desc: "Comprehensive soil analysis for construction" },
  { icon: "💧", title: "Water Testing", desc: "Construction & drinking water parameters" },
];

function Home({ photos = PHOTOS }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [index, setIndex] = useState(0);

  // Photo carousel logic
  const total = photos.length;
  const handleNext = () => setIndex(i => (i + 1) % total);
  const handlePrev = () => setIndex(i => (i - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: { xs: 1, sm: 2, md: 4 },
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Logo Marquee */}
      <Box sx={{
        width: '100%', height: { xs: 50, sm: 60, md: 70 },
        background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.4)', borderRadius: '0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 12px 40px rgba(0,0,0,0.1)', zIndex: 5, overflow: 'hidden',
      }}>
        <span style={{
          color: '#1e293b', fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
          letterSpacing: { xs: '1px', sm: '1.5px', md: '2px' }, whiteSpace: 'nowrap',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)', animation: 'marquee 5s linear infinite',
          width: '300%', display: 'flex', alignItems: 'center', gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
            <img src={UTL_LOGO} alt="UTL Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
            {LAB_NAME}
          </div>
          &nbsp; • &nbsp;
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={UTL_LOGO} alt="UTL Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
            {LAB_NAME}
          </div>
          &nbsp; • &nbsp;
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={UTL_LOGO} alt="UTL Logo" style={{ height: 32, width: 32, borderRadius: '6px', flexShrink: 0 }} />
            {LAB_NAME}
          </div>
        </span>
      </Box>

      {/* Main Content */}
      <Box sx={{
        width: { xs: '95%', sm: '90%', md: '90%', lg: '85%' }, maxWidth: 1400,
        mt: { xs: 2, sm: 3, md: 4 }, display: 'flex',
        flexDirection: 'column', gap: { xs: 3, md: 4 },
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        {/* 1. Sliding Photos */}
        <Box sx={{
          width: '100%',
          height: { xs: '250px', sm: '320px', md: '450px', lg: '500px' },
          position: 'relative', borderRadius: 3, overflow: 'hidden',
          background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
        }}>
          <Box sx={{
            position: 'absolute', width: '100%', height: '100%',
            '& img': {
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'brightness(0.95) contrast(1.1)', transition: 'filter 0.5s ease',
            },
            '&:hover img': { filter: 'brightness(1.05) contrast(1.2)' },
          }}>
            <img src={photos[index].url} alt={photos[index].title} loading="lazy" />
          </Box>

          <IconButton onClick={handlePrev} sx={{ 
            position: 'absolute', left: { xs: 12, sm: 20 }, top: '50%', transform: 'translateY(-50%)',
            zIndex: 20, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.5)', color: '#1e293b',
            width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 },
            borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': { 
              background: 'rgba(255,255,255,0.5)', 
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)'
            }
          }}>
            <ArrowBackIosIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>

          <IconButton onClick={handleNext} sx={{ 
            position: 'absolute', right: { xs: 12, sm: 20 }, top: '50%', transform: 'translateY(-50%)',
            zIndex: 20, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.5)', color: '#1e293b',
            width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 },
            borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': { 
              background: 'rgba(255,255,255,0.5)', 
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)'
            }
          }}>
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>

          <Box sx={{
            position: 'absolute', bottom: { xs: 16, sm: 24 }, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 1, background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(16px)', borderRadius: '20px', p: { xs: 0.5, sm: 0.75 },
            border: '1px solid rgba(255,255,255,0.5)',
          }}>
            {Array.from({ length: total }, (_, i) => (
              <Box
                key={i}
                sx={{
                  width: { xs: 12, sm: 14 }, height: { xs: 12, sm: 14 }, borderRadius: '50%',
                  background: i === index ? '#1e293b' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                  '&:hover': { background: '#1e293b', scale: 1.2 },
                }}
                onClick={() => setIndex(i)}
              />
            ))}
          </Box>
        </Box>

        {/* 2. Accreditation - INCREASED MOBILE HEIGHT */}
        <Box sx={{
          width: '100%',
          height: { 
            xs: '460px',    // 📱 Mobile: 380px → 460px (+80px)
            sm: '480px',    // 📱 Tablet: 420px → 480px (+60px) 
            md: '520px'     // 💻 Desktop: 480px → 520px (+40px)
          },
          display: 'flex', flexDirection: 'column',
          mt: { xs: 2, sm: 3, md: 4 },
        }}>
          <Box sx={{
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1d4ed8 100%)', 
            color: 'white',
            p: { xs: 3, sm: 3.5, md: 4 },
            borderRadius: '24px 24px 0 0', 
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(30,58,138,0.4)', 
            flexShrink: 0,
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '1.3rem', sm: '1.45rem', md: '1.6rem' },
                letterSpacing: '1.2px',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              CERTIFICATION
            </Typography>
          </Box>
          
          <Box sx={{
            flex: 1, 
            p: { xs: 4, sm: 5, md: 6 },
            background: 'rgba(255,255,255,0.97)', 
            backdropFilter: 'blur(24px)',
            borderRadius: '0 0 24px 24px', 
            border: '1px solid rgba(255,255,255,0.7)',
            borderTop: 'none', 
            boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden',
          }}>
            <Box sx={{ 
              textAlign: 'center', 
              maxWidth: { xs: 320, sm: 380, md: 450 },
              mx: 'auto',
              lineHeight: 1.4
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  color: '#1e293b', 
                  mb: 3, 
                  fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.35rem' }
                }}
              >
                MOONTECH INDIA TESTING AND RESEARCH LAB PRIVATE LIMITED
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#1e293b', 
                  mb: 4,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.5
                }}
              >
                has been assessed and accredited in accordance with the standard
              </Typography>
              
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 900, 
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '1.6rem', sm: '1.85rem', md: '2.1rem' },
                  mb: 3,
                  letterSpacing: '-0.03em'
                }}
              >
                ISO/IEC 17025:2017
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#475569', 
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  maxWidth: '90%'
                }}
              >
                "General Requirements for the Competence of Testing & Calibration Laboratories"
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 3. Simple Services Section */}
        <Box sx={{ width: '100%', mt: 6 }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#1e293b', 
            textAlign: 'center', 
            mb: 4,
            fontSize: { xs: '1.5rem', md: '1.8rem' }
          }}>
            OUR SERVICES
          </Typography>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 3 
          }}>
            {SERVICES.map((service, idx) => (
              <Box
                key={idx}
                sx={{
                  background: 'rgba(255,255,255,0.9)', 
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px', 
                  p: 3, 
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }
                }}
              >
                <Box sx={{ fontSize: '2.5rem', mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', mb: 1.5 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {service.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </Box>
  );
}

export default Home;

