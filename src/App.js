import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';  // Keep this
import './App.css';
import Home from './components/Home/Home';
import MyNavbar from './components/Navbar/navbar';
import ContactPage from './components/Contact/contact';
import CompanyPage from './components/logo/logo';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeImagesRowFixed from './components/Client/Client.jsx'
import AboutUsPage from './components/About/About';
import ServicesPage from './components/Service/Service';
import MontechPhoto from './photo/MontechPhoto.jpg';
import Photo1 from './photo/photo1.jpg';
import Photo2 from './photo/photo2.png';
import Photo3 from './photo/photo3.jpg';
import Photo4 from './photo/photo4.jpg';
import Photo5 from './photo/photo5.jpg';
import Photo6 from './photo/photo6.jpg';
import Photo7 from './photo/photo7.jpg';
import Photo8 from './photo/photo8.jpg';

const photos = [
  { id: 11, url: MontechPhoto, title: 'Mountain' },
  { id: 1, url: Photo1, title: 'Photo 1' },
  { id: 2, url: Photo2, title: 'Photo 2' },
  { id: 3, url: Photo3, title: 'Photo 3' },
  { id: 4, url: Photo4, title: 'Photo 4' },
  { id: 5, url: Photo5, title: 'Photo 5' },
  { id: 6, url: Photo6, title: 'Photo 6' },
  { id: 7, url: Photo7, title: 'Photo 7' },
  { id: 8, url: Photo8, title: 'Photo 8' },
];

function App() {
  return (
    <HelmetProvider>  {/* WRAP everything */}
      <Helmet>         {/* ONE Helmet only */}
        <title>Moontech Labs Patna - NABL Testing & Research Lab | mtrl.in</title>
        <meta name="description" content="Moontech Labs - Premier NABL accredited testing and research laboratory in Patna, Bihar. Advanced material testing services at mtrl.in" />
        <meta name="keywords" content="moontech labs, mtrl.in, patna testing lab, NABL laboratory patna, material testing bihar, soil testing patna, concrete testing bihar" />
        <meta property="og:title" content="Moontech Labs - Testing Laboratory Patna" />
        <meta property="og:description" content="NABL accredited testing lab in Patna - mtrl.in" />
        <meta property="og:image" content="https://mtrl.in/photo/MontechPhoto.jpg" />
        <meta property="og:url" content="https://mtrl.in" />
      </Helmet>

      <Router>
        <CompanyPage/>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home photos={photos} photosPerPage={1} />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/client" element={<ThreeImagesRowFixed />} />
          <Route path="/accrediation" element={<Home photos={photos} photosPerPage={1} />} />
          <Route path="/career" element={<Home photos={photos} photosPerPage={1} />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
        </Routes>
        <Footer/>
      </Router>
     </HelmetProvider>
  );
}

export default App;
