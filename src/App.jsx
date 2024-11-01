import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import ActivityDetail from './pages/ActivityDetail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es" />
        <title>CORDIPRODDHH - Defensa de Derechos Humanos</title>
        <meta name="description" content="CORDIPRODDHH: Corporación dirigida en la protección y defensa de los derechos humanos de la región." />
        <meta name="keywords" content="derechos humanos, defensa, protección, justicia social, víctimas del conflicto" />
        <meta name="author" content="CORDIPRODDHH" />
        <link rel="canonical" href="https://cordiproddhh.org" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cordiproddhh.org" />
        <meta property="og:title" content="CORDIPRODDHH - Defensa de Derechos Humanos" />
        <meta property="og:description" content="Protección y defensa integral de los derechos humanos" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cordiproddhh.org" />
        <meta property="twitter:title" content="CORDIPRODDHH - Defensa de Derechos Humanos" />
        <meta property="twitter:description" content="Protección y defensa integral de los derechos humanos" />
      </Helmet>

      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/trabajo" element={<Work />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/actividades/:id" element={<ActivityDetail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;