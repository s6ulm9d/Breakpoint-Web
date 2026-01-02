import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './canvas/Scene';
import Hero from './components/Hero';
import ProfessionalContent from './components/ProfessionalContent';
import TechStack from './components/TechStack';
import Manifesto from './components/Manifesto';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import ComparisonTable from './components/ComparisonTable';
import { AuthProvider, useAuth } from './context/AuthContext';

// Import New Pages (to be created)
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PricingPage from './pages/PricingPage';
import DownloadPage from './pages/DownloadPage';
import LegalPage from './pages/LegalPage';
import DataPolicyPage from './pages/DataPolicyPage';

const HomePage = () => (
  <>
    <Hero />
    <ProfessionalContent />
    <ComparisonTable />
    <TechStack />
    <section id="demo" style={{ padding: '100px 0', background: 'var(--color-bg)', position: 'relative', transition: 'background 0.3s' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <a
            href="https://github.com/s6ulm9d/Breakpoint"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              padding: '12px 25px',
              border: '1px solid var(--color-primary)',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              background: 'transparent',
              fontSize: '1.1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-primary)';
              e.target.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--color-text)';
            }}
          >
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{`</>`}</span> Access Repository
          </a>
        </div>
        <Manifesto />
      </div>
    </section>
    <ContactSection />
  </>
);

const AppContent = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--color-bg', '#ffffff');
      root.style.setProperty('--color-text', '#111111');
      root.style.setProperty('--color-dim', '#f0f0f0');
    } else {
      root.style.setProperty('--color-bg', '#050505');
      root.style.setProperty('--color-text', '#e0e0e0');
      root.style.setProperty('--color-dim', '#0a0a0a');
    }
    setIsDark(!isDark);
  };

  return (
    <main style={{ position: 'relative', width: '100%', minHeight: '100vh', color: 'var(--color-text)' }}>
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene isDark={isDark} />
      </Suspense>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login isDark={isDark} />} />
          <Route path="/dashboard" element={<Dashboard isDark={isDark} />} />
          <Route path="/pricing" element={<PricingPage isDark={isDark} />} />
          <Route path="/download" element={<DownloadPage isDark={isDark} />} />
          <Route path="/legal" element={<LegalPage isDark={isDark} />} />
          <Route path="/data-policy" element={<DataPolicyPage isDark={isDark} />} />
        </Routes>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #111', background: 'var(--color-dim)', padding: '60px 0', transition: 'background 0.3s' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Breakpoint</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  The unified security orchestration platform for offensive security research and automated red-teaming.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '20px' }}>Platform</h4>
                <ul style={{ listStyle: 'none', padding: 0, opacity: 0.6, fontSize: '0.9rem', lineHeight: '2' }}>
                  <li><Link to="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing & Plans</Link></li>
                  <li><Link to="/download" style={{ color: 'inherit', textDecoration: 'none' }}>Download Center</Link></li>
                  <li><Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>License Portal</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '20px' }}>Compliance</h4>
                <ul style={{ listStyle: 'none', padding: 0, opacity: 0.6, fontSize: '0.9rem', lineHeight: '2' }}>
                  <li><Link to="/legal" style={{ color: 'inherit', textDecoration: 'none' }}>Legal & TOS</Link></li>
                  <li><Link to="/data-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Data Policy</Link></li>
                  <li><Link to="/legal#security" style={{ color: 'inherit', textDecoration: 'none' }}>Security Standards</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '20px' }}>Connect</h4>
                <ul style={{ listStyle: 'none', padding: 0, opacity: 0.6, fontSize: '0.9rem', lineHeight: '2' }}>
                  <li><a href="https://github.com/s6ulm9d" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/sairaj-megha-0110b9392/" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'var(--color-text)', opacity: 0.4, fontSize: '0.8rem', borderTop: '1px solid #222', paddingTop: '40px' }}>
              <p>&copy; 2026 SOULMAD INDUSTRIES. BUILT FOR DEFENSE. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

