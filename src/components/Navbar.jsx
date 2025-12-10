
import React, { useState, useEffect } from 'react';

const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Philosophy', id: 'about' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Setup', id: 'setup' },
    { label: 'Legal', id: 'legal' },
    { label: 'Contact', id: 'contact' }
];

export default function Navbar({ isDark, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: '20px 0',
            transition: 'all 0.3s',
            background: scrolled ? (isDark ? 'rgba(5,5,5,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid #222' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        color: isDark ? 'white' : 'black',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <span style={{ color: 'var(--color-primary)' }}>💀</span> BREAKPOINT
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map(item => (
                            <li key={item.label}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    style={{
                                        color: isDark ? '#ccc' : '#444',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'color 0.2s',
                                        padding: '5px'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = isDark ? '#ccc' : '#444'}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${isDark ? '#333' : '#ccc'}`,
                            padding: '5px 10px',
                            borderRadius: '4px',
                            color: isDark ? 'white' : 'black',
                            fontSize: '1.2rem',
                            cursor: 'pointer'
                        }}
                        title="Toggle Light/Dark Mode"
                    >
                        {isDark ? '☀' : '☾'}
                    </button>
                </div>
            </div>
        </nav>
    );
}
