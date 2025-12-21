import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton
} from '@mui/material';
import {
  ScienceTwoTone as ChemicalIcon,
  BuildTwoTone as MechanicalIcon,
  CheckCircle as CheckIcon,
  InfoOutlined as InfoIcon
} from '@mui/icons-material';

const chemicalCategories = [
  { title: 'Admixture', tests: [{ name: 'Ash Content', standard: 'IS 9103' }, { name: 'Chloride', standard: 'IS 6925' }, { name: 'Dry material Content', standard: 'IS 9103' }, { name: 'pH', standard: 'IS 9103' }, { name: 'Relative density', standard: 'IS 9103' }] },
  { title: 'Cement', tests: [{ name: 'Calcium Oxide', standard: 'IS 4032' }, { name: 'Combined Ferric Oxide & Alumina', standard: 'IS 4032' }, { name: 'Ferric Oxide', standard: 'IS 4032' }, { name: 'Silica', standard: 'IS 4032' }, { name: 'Alkali as Na2O', standard: 'IS 4032' }, { name: 'Chloride', standard: 'IS 4032' }, { name: 'Insoluble residue', standard: 'IS 4032' }, { name: 'Loss on ignition', standard: 'IS 4032' }, { name: 'Magnesium Oxide', standard: 'IS 4032' }, { name: 'Mno', standard: 'IS 4032' }, { name: 'Potassium K2O', standard: 'IS 4032' }, { name: 'Ratio of % Alumina to Iron Oxide', standard: 'IS 269' }, { name: 'Ratio of % lime to silica, Alumina & Iron Oxide', standard: 'IS 269' }, { name: 'Sulphuric anhydride (SO3)', standard: 'IS 4032' }, { name: 'Tricalcium Aluminate Content', standard: 'IS 269' }, { name: 'Tricalcium Silicate', standard: 'IS 269' }, { name: 'Loss of Ignition', standard: 'IS 4032' }, { name: 'Magnesia (Mgo)', standard: 'IS 4032' }, { name: 'Sulphuric Anhydride(SO3)', standard: 'IS 4032' }, { name: 'Sulphide Sulphur', standard: 'IS 4032' }] },
  { title: 'Drinking Water', tests: [{ name: 'Acidity as CaCO3', standard: 'IS 3025 (Part-22)' }, { name: 'Alkalinity as CaCO3', standard: 'IS 3025 (Part-23)' }, { name: 'Calcium', standard: 'IS 3025 (Part-40)' }, { name: 'Chloride', standard: 'IS 3025 (Part-32)' }, { name: 'Conductivity', standard: 'IS 3025 (Part-14)' }, { name: 'Magnesium', standard: 'IS 3025 (Part-46)' }, { name: 'pH', standard: 'IS 3025 (Part-11)' }, { name: 'Sulphate as SO3', standard: 'IS 3025 (Part-24)' }, { name: 'Total dissolved solid', standard: 'IS 3025 (Part-16)' }, { name: 'Total Hardness as CaCO3', standard: 'IS 3025 (Part-21)' }, { name: 'Total suspended solid', standard: 'IS 3025 (Part-17)' }, { name: 'Turbidity', standard: 'IS 3025 (Part-10)' }] },
  { title: 'Construction Water', tests: [{ name: 'Acidity', standard: 'IS 3025 (Part-22)' }, { name: 'Alkalinity', standard: 'IS 3025 (Part-23)' }, { name: 'Chloride', standard: 'IS 3025 (Part-32)' }, { name: 'Fixed Residue (Inorganic Solid)', standard: 'IS 3025 (Part-18)' }, { name: 'Non-filterable residue (Total Suspended solid)', standard: 'IS 3025 (Part-17)' }, { name: 'pH', standard: 'IS 3025 (Part-11)' }, { name: 'Sulphate as SO3', standard: 'IS 3025 Part-24 Sec-2' }, { name: 'Volatile Residue (Organic Solid)', standard: 'IS 3025 (Part-18)' }] },
  { title: 'Soil', tests: [{ name: 'Calcium as CaCO3', standard: 'IS 2720 (Part-23)' }, { name: 'Chloride', standard: 'BS 1377 Part-3' }, { name: 'Organic Matter, %', standard: 'IS 2720 (Part-22)' }, { name: 'pH Value', standard: 'IS 2720 (Part-26)' }, { name: 'Sulphate as Na2SO4', standard: 'IS 2720 (Part-27)' }, { name: 'Sulphate as SO4', standard: 'IS 2720 P27' }, { name: 'Total Soluble Content', standard: 'IS 2720 (Part-21)' }] },
  { title: 'Coarse Aggregate', tests: [{ name: 'Acid soluble Chloride', standard: 'IS 14959 (Part 2)' }, { name: 'Alkali Aggregate Reactivity (Concentration of Silica)', standard: 'IS 2386 Part-7' }, { name: 'Alkali Aggregate Reactivity (Reduction in alkalinity)', standard: 'IS 2386 Part-7' }, { name: 'Sulphur as SO3', standard: 'IS 4032' }] },
  { title: 'Fine Aggregate', tests: [{ name: 'Acid Soluble Chloride', standard: 'IS 14959 Part-2' }, { name: 'Alkali Aggregate Reactivity (Concentration of silica)', standard: 'IS 2386 Part-7' }, { name: 'Alkali Aggregate Reactivity (Reduction in alkalinity)', standard: 'IS 2386 Part-7' }, { name: 'Organic Impurity', standard: 'IS 2386 (Part 2)' }, { name: 'Sulphate', standard: 'IS 4032' }] },
  { title: 'Reinforcement Steel', tests: [{ name: 'Carbon', standard: 'ASTM E 415' }, { name: 'Carbon Equivalent by summation', standard: 'IS 1786' }, { name: 'Manganese', standard: 'ASTM E 415' }, { name: 'Nickel (Ni)', standard: 'IS 228 Part-5' }, { name: 'Phosphorus', standard: 'ASTM E 415' }, { name: 'Silicon', standard: 'ASTM E 415' }, { name: 'Sulphur', standard: 'ASTM E 415' }, { name: 'Sulphur + phosphorus', standard: 'IS 1786' }] },
  { title: 'Bentonite', tests: [{ name: 'Loss on Ignition', standard: 'IS 6186' }, { name: 'Matter Soluble in Water', standard: 'IS 6186' }, { name: 'pH', standard: 'IS 6186' }] },
  { title: 'Fly Ash', tests: [{ name: 'Chloride', standard: 'IS 4032' }, { name: 'Fe2O3, %', standard: 'IS 1727' }, { name: 'Loss in Ignition', standard: 'IS 1727' }, { name: 'Magnesium Oxide', standard: 'IS 1727' }, { name: 'R2O3, %', standard: 'IS 1727' }, { name: 'Silicon Di oxide', standard: 'IS 1727' }, { name: 'SiO2 + Al2O3 + Fe2O3', standard: 'IS 1727' }, { name: 'Total sulphur as SO3', standard: 'IS 1727' }] }
];

// ✅ COMPLETE Mechanical Testing - ALL 5 categories (FULL DATA)
const mechanicalCategories = [
  { title: 'Ceramic Tiles', tests: [
    { name: 'Breaking Strength', standard: 'IS 13630 (Part 6)' },
    { name: 'Chemical Resistance to Methylene Blue', standard: 'IS 13630 (Part 8)' },
    { name: 'Chemical Resistance to Household Chemicals', standard: 'IS 13630 (Part 8)' },
    { name: 'Crazing Resistance', standard: 'IS 13630 (Part 9)' },
    { name: 'Dimensions - length', standard: 'IS 13630 (Part 1)' },
    { name: 'Dimensions - thickness', standard: 'IS 13630 (Part 1)' },
    { name: 'Dimensions - width', standard: 'IS 13630 (Part 1)' },
    { name: 'Modulus of Rupture', standard: 'IS 13630 (Part 6)' },
    { name: 'Resistance to Thermal Shock', standard: 'IS 13630 (Part 5)' },
    { name: "Scratch Hardness of Surface (Moh's Scale)", standard: 'IS 13630 (Part 13)' },
    { name: 'Water Absorption', standard: 'IS 13630 (Part 2)' }
  ]},
  { title: 'Coarse Aggregate', tests: [
    { name: '10 percent Fines Value', standard: 'IS 2386 (Part 4)' },
    { name: 'Bulk Density', standard: 'IS 2386 (Part 3)' },
    { name: 'Clay Lumps', standard: 'IS 2386 (Part 2)' },
    { name: 'Crushing Value', standard: 'IS 2386 (Part 4)' },
    { name: 'Los Angeles Abrasion Value', standard: 'IS 2386 (Part 4)' },
    { name: 'Soundness by Na2SO4', standard: 'IS 2386 (Part 5)' },
    { name: 'Specific Gravity', standard: 'IS 2386 (Part 3)' },
    { name: 'Water Absorption', standard: 'IS 2386 (Part 3)' },
    { name: '% of Void', standard: 'IS 2386 (Part-3)' },
    { name: 'Coal and Lignite', standard: 'IS 2386 (Part-2)' },
    { name: 'Combined Flakiness Index & Elongation Index', standard: 'IS 2386 Part-1' },
    { name: 'Elongation Index', standard: 'IS 2386 (Part 1)' },
    { name: 'Flakiness Index', standard: 'IS 2386 (Part 1)' },
    { name: 'Impact Value', standard: 'IS 2386 (Part 4)' },
    { name: 'Material Finer than 75 Micron', standard: 'IS 2386 (Part 1)' },
    { name: 'Petrographic Examination', standard: 'IS 2386 Part - 8' },
    { name: 'Polished Stone Value', standard: 'BS 812-114' },
    { name: 'Sieve Analysis', standard: 'IS 2386 (Part 1)' },
    { name: 'Soundness by MgSo4', standard: 'IS 2386 Part 5' }
  ]},
  { title: 'Concrete', tests: [
    { name: 'Drying Shinkage', standard: 'IS 516 Part-6' },
    { name: 'Moisture Movement', standard: 'IS 516 Part-6' },
    { name: 'Pull-out Test (Bond in Reinforcement Concrete)', standard: 'IS 2770 Part-1' },
    { name: 'Split Tensile Test', standard: 'IS 516 (Part-1/Sec-1)' },
    { name: 'Water Absorption', standard: 'BS 1881 Part-122' }
  ]},
  { title: 'Concrete Admixture', tests: [
    { name: 'Air Content', standard: 'IS 1199 (Part-4)' },
    { name: 'Bleeding', standard: 'ASTM C-1741' },
    { name: 'Bleeding', standard: 'IS 9103 (Annex-D)' },
    { name: 'Compaction Factor', standard: 'IS 1199 (Part- 6)' },
    { name: 'Compressive Strength', standard: 'ASTM C-942' },
    { name: 'Density', standard: 'IS 1199 (Part-3)' },
    { name: 'Drying Shrinkage', standard: 'IS 516 (Part-6)' },
    { name: 'Flexural Strength', standard: 'IS 516 (Part-1, Sec-1)' },
    { name: 'Flow', standard: 'IS 9103 (Annexure- C)' },
    { name: 'Loss Workability', standard: 'IS 9103 (Clause 7.2.1.2)' },
    { name: 'Setting Time', standard: 'IS 8142' },
    { name: 'Slump', standard: 'IS 1199 (Part-2)' },
    { name: 'Water Content', standard: 'IS 9103' }
  ]},
  { title: 'Concrete Beam', tests: [
    { name: 'Flexural Strength', standard: 'IS 516 : Part 1 : Sec 1' }
  ]},
  { title: 'Concrete Cube', tests: [
    { name: 'Compressive Strength', standard: 'IS 516 (Part 1, Sec 1)' }
  ]},
  { title: 'Concrete Cubical/Cylindrical', tests: [
    { name: 'Permeability Test (Depth of water Penetration under pressure)', standard: 'IS 516 Part-2/ Sec-1' }
  ]},
  { title: 'Concrete Paving Blocks', tests: [
    { name: 'Tensile Splitting Strength', standard: 'IS 15658 Annexure-E' }
  ]},
  { title: 'Curing Compound', tests: [
    { name: 'Curing Efficiency', standard: 'BS 7542' },
    { name: 'Day Light Reflactance', standard: 'BS 7542' },
    { name: 'Ford Cup (B4) Viscosity', standard: 'BS 7542' },
    { name: 'Loss of Water in 72 Hrs.', standard: 'BS 7542' },
    { name: 'Specific Gravity', standard: 'BS 7542' }
  ]},
  { title: 'Fine Aggregate', tests: [
    { name: 'Sieve Analysis', standard: 'IS 2386 (Part 1)' },
    { name: 'Bulk Density', standard: 'IS 2386 (Part 3)' },
    { name: 'Clay Lumps', standard: 'IS 2386 (Part 2)' },
    { name: 'Coal and Lingnite', standard: 'IS 2386 Part 2' },
    { name: 'Material Finer than 75 Micron', standard: 'IS 2386 (Part 1)' },
    { name: 'Petrographic Examination', standard: 'IS 2386 Part-8' },
    { name: 'Silt Content', standard: 'CPWD, Cl 3.1.3.2' },
    { name: 'Soundness by Na2SO4', standard: 'IS 2386 (Part 5)' },
    { name: 'Soundness by MgSO4', standard: 'IS 2386 (Part-5)' },
    { name: 'Specific Gravity', standard: 'IS 2386 (Part 3)' },
    { name: 'Water Absorption', standard: 'IS 2386 (Part 3)' }
  ]},
  { title: 'Fly Ash', tests: [
    { name: 'Compressive Strength', standard: 'IS 1727 Clause 10' },
    { name: 'Fineness by Blaine', standard: 'IS 1727 Clause 6' },
    { name: 'Lime Reactivity', standard: 'IS 1727 Clause-9' },
    { name: 'Particle retained on 45 micron', standard: 'IS 1727' },
    { name: 'Soundness by Autoclave expansion', standard: 'IS 4031 Part-3' },
    { name: 'Specific Gravity', standard: 'IS 1727' }
  ]},
  { title: 'Fresh Concrete', tests: [
    { name: 'Air Content', standard: 'IS 1199 Part-4' },
    { name: 'Bleeding', standard: 'IS 9103' },
    { name: 'Flow', standard: 'IS 9103' },
    { name: 'Loss Workability', standard: 'IS 9103' },
    { name: 'Setting Time- Initial & Final', standard: 'IS 1199 (Part-7)' },
    { name: 'Slump', standard: 'IS 1199 Part-2' }
  ]},
  { title: 'GI Sheet/ HDPE / Sheathing Duct', tests: [
    { name: 'Tension Load', standard: 'MORT&H Spec. Clause 1805.6.2) Appendix 1800/ITest C' },
    { name: 'Transverse Load Rating Test', standard: 'MORT&H Spec. Clause 1805.6.2) Appendix 1800/ITest B' },
    { name: 'Water Loss Test', standard: 'MORT&H Spec. Clause 1805.6.2) Appendix 1800/ITest D' },
    { name: 'Workability', standard: 'MORT&H Spec. Clause 1805.6.2) Appendix 1800/ITest A' },
    { name: 'Dimension', standard: 'IRC 18' }
  ]},
  { title: 'Granular subbase', tests: [
    { name: 'Coefficient of permeability by Constant Head', standard: 'IS 2720 Part-36' },
    { name: 'Fractured Faces', standard: 'ASTM D5821' },
    { name: 'Heavy Compaction-MDD', standard: 'IS 2720 Part-8' },
    { name: 'Heavy Compaction-OMC', standard: 'IS 2720 Part-8' },
    { name: 'Impact Value', standard: 'IS 2386 Part-4' },
    { name: 'Liquid Limit', standard: 'IS 2720 Part-5' },
    { name: 'Los Angeles Abrasion Value', standard: 'IS 2386 Part-4' },
    { name: 'Moisture Content', standard: 'IS 2720 Part-2' },
    { name: 'Plastic Limit', standard: 'IS 2720 Part-5' },
    { name: 'Sieve Analysis', standard: 'IS 2386 Part-1' },
    { name: 'Soundness by MgSO4', standard: 'IS 2386 Part-5' },
    { name: 'Soundness by Na2SO4', standard: 'IS 2386 Part-5' },
    { name: 'Water Absorption', standard: 'IS 2386 Part-3' },
    { name: 'Wet Aggregate Impact', standard: 'IS 5640' }
  ]},
  { title: 'Ground Granulated Blast Furnace Slag- GGBS', tests: [
    { name: 'Fineness By Blaine Air permeability apparatus', standard: 'IS 4031 (Part-2)' },
    { name: 'Moisture Content', standard: 'IS 16714' },
    { name: 'Compressive Strength', standard: 'IS 16714' },
    { name: 'Density', standard: 'IS 4031 (Part-11)' }
  ]}
];



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

function ServicesPage() {
  const [activeTab, setActiveTab] = useState('chemical');
  const [selectedCategory, setSelectedCategory] = useState(chemicalCategories[0]);
  const [selectedTest, setSelectedTest] = useState(null);

  const currentCategories = activeTab === 'chemical' ? chemicalCategories : mechanicalCategories;
  
  useEffect(() => {
    setSelectedCategory(currentCategories[0]);
    setSelectedTest(null);
  }, [activeTab]);

  const handleTestSelect = (test) => {
    setSelectedTest(test === selectedTest ? null : test);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      width: '100vw',
      p: 0, m: 0,
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
      py: 6, px: 4, display: 'flex', flexDirection: 'column'
    }}>
      
      {/* Header - ALL BLACK TEXT */}
      <Box sx={{ textAlign: 'center', mb: 6, zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#000000',
            fontWeight: 900,
            letterSpacing: 2,
            mb: 2,
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            textShadow: '0 0 40px rgba(16,185,129,0.5)',
            background: 'rgba(16,185,129,0.15)',
            backdropFilter: 'blur(20px)',
            padding: { xs: '0.8rem 1.5rem', sm: '1rem 2rem' },
            borderRadius: '20px',
            border: '1px solid rgba(16,185,129,0.4)',
            mx: 'auto',
            maxWidth: 500,
            lineHeight: 1.2,
          }}
        >
          Testing Services
        </Typography>
        <Typography sx={{ color: '#000000', fontSize: '1.1rem', fontWeight: 500, maxWidth: 500, mx: 'auto' }}>
        </Typography>
      </Box>

      {/* Tab Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, zIndex: 2 }}>
        <Button
          variant={activeTab === 'chemical' ? 'contained' : 'outlined'}
          onClick={() => setActiveTab('chemical')}
          size="small"
          sx={{
            px: 3, py: 1, fontSize: '0.875rem', fontWeight: 700, borderRadius: '20px',
            background: `linear-gradient(135deg, #10b981 0%, ${adjustColor('#10b981', 20)} 100%)`,
            color: '#ffffff',
            boxShadow: '0 6px 20px rgba(16,185,129,0.4)',
            textTransform: 'none',
            minWidth: 140,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 30px rgba(16,185,129,0.5)',
            },
          }}
          startIcon={<ChemicalIcon sx={{ fontSize: 20 }} />}
        >
          Chemical
        </Button>
        <Button
          variant={activeTab === 'mechanical' ? 'contained' : 'outlined'}
          onClick={() => setActiveTab('mechanical')}
          size="small"
          sx={{
            px: 3, py: 1, fontSize: '0.875rem', fontWeight: 700, borderRadius: '20px',
            background: `linear-gradient(135deg, #10b981 0%, ${adjustColor('#10b981', 20)} 100%)`,
            color: '#ffffff',
            boxShadow: '0 6px 20px rgba(16,185,129,0.4)',
            textTransform: 'none',
            minWidth: 140,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 30px rgba(16,185,129,0.5)',
            },
          }}
          startIcon={<MechanicalIcon sx={{ fontSize: 20 }} />}
        >
          Mechanical
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ zIndex: 2 }}>
        {/* LEFT: FIXED 320px */}
        <Grid item sx={{ width: 320 }}>
          <Paper sx={{ 
            p: 3, height: 600, 
            background: 'rgba(16,185,129,0.30)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(16,185,129,0.7)',
            boxShadow: '0 25px 50px rgba(16,185,129,0.4)',
            overflow: 'hidden'
          }}>
            <Typography sx={{ mb: 2.5, fontWeight: 700, fontSize: '1rem', color: '#000000' }}>
              Categories
            </Typography>
            <Box sx={{ height: 'calc(100% - 50px)', overflowY: 'auto' }}>
              {currentCategories.map((category, idx) => (
                <Box
                  key={idx}
                  onClick={() => { setSelectedCategory(category); setSelectedTest(null); }}
                  sx={{
                    p: 2.5, mb: 1.5, borderRadius: '16px', cursor: 'pointer',
                    background: 'white',
                    border: `2px solid ${selectedCategory.title === category.title ? '#10b981' : 'transparent'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 15px 35px rgba(16,185,129,0.3)',
                      border: '2px solid #10b981'
                    }
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#000000' }}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: '#000000' }}>
                    {category.tests.length} tests
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT: FIXED 600px */}
        <Grid item sx={{ width: 800 }}>
          <Paper sx={{ 
            p: 3, height: 600, 
            background: 'rgba(16,185,129,0.30)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(16,185,129,0.7)',
            boxShadow: '0 25px 50px rgba(16,185,129,0.4)',
            overflow: 'hidden'
          }}>
            <Typography sx={{ mb: 3, fontWeight: 700, fontSize: '1.1rem', color: '#000000' }}>
              {selectedCategory.title}
            </Typography>
            <Box sx={{ height: 'calc(100% - 50px)', overflowY: 'auto' }}>
              {selectedCategory.tests.map((test, idx) => (
                <Box
                  key={idx}
                  onClick={() => handleTestSelect(test)}
                  sx={{
                    mb: 1.5, borderRadius: '16px', cursor: 'pointer',
                    background: 'white',
                    border: `2px solid ${selectedTest?.name === test.name ? '#10b981' : 'transparent'}`,
                    transition: 'all 0.3s ease',
                    p: 2.5,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 15px 35px rgba(16,185,129,0.3)',
                      border: '2px solid #10b981'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                    <Box sx={{ 
                      minWidth: 40, 
                      mr: 2 
                    }}>
                      {selectedTest?.name === test.name ? 
                        <CheckIcon sx={{ fontSize: 20, color: '#10b981' }} /> : 
                        <InfoIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
                      }
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography sx={{ 
                        fontWeight: selectedTest?.name === test.name ? 700 : 600, 
                        fontSize: '1rem',
                        color: '#000000',
                        mb: 0.5
                      }}>
                        {test.name}
                      </Typography>
                      <Typography sx={{ 
                        fontSize: '0.85rem', 
                        color: '#000000',
                        fontWeight: 600
                      }}>
                        {test.standard}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServicesPage;

