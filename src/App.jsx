import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Scene from './canvas/Scene';
import Hero from './components/Hero';
import ProfessionalContent from './components/ProfessionalContent';
import TechStack from './components/TechStack';
import Manifesto from './components/Manifesto';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      // Switch to Light (Corporate) Mode
      root.style.setProperty('--color-bg', '#ffffff');
      root.style.setProperty('--color-text', '#111111');
      root.style.setProperty('--color-dim', '#f0f0f0');
    } else {
      // Switch back to Dark (Hacker) Mode
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
        <Hero />

        <ProfessionalContent />

        <TechStack />

        {/* MANIFESTO SECTION */}
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

        {/* Contact Section */}
        <ContactSection />

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #111', background: 'var(--color-dim)', padding: '40px 0', transition: 'background 0.3s' }}>
          <div className="container" style={{ textAlign: 'center', color: 'var(--color-text)', opacity: 0.6, fontSize: '0.8rem' }}>
            <p>&copy; 2025 SOULMAD INDUSTRIES. BUILT FOR DEFENSE.</p>
            <p style={{ marginTop: '10px' }}>
              <a href="https://github.com/s6ulm9d/Breakpoint" style={{ color: 'var(--color-text)', marginRight: '15px', textDecoration: 'none' }}>GITHUB</a>
              <a href="https://www.linkedin.com/in/sairaj-megha-0110b9392/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>LINKEDIN</a>
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}
