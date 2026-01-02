import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ isDark, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navItems = [
        { label: 'Platform', id: 'capabilities' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Docs', id: 'architecture' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            if (window.innerWidth >= 850) setIsMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollTo = (id) => {
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                const homeEl = document.getElementById(id);
                if (homeEl) homeEl.scrollIntoView({ behavior: 'smooth' });
            }, 100);
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
            background: scrolled || isMenuOpen ? (isDark ? 'rgba(5,5,5,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
            backdropFilter: scrolled || isMenuOpen ? 'blur(10px)' : 'none',
            borderBottom: scrolled || isMenuOpen ? '1px solid #222' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        color: isDark ? 'white' : 'black',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        zIndex: 102,
                        textDecoration: 'none'
                    }}
                >
                    <span style={{ color: 'var(--color-primary)' }}>💀</span> BREAKPOINT
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ alignItems: 'center', gap: '30px' }}>
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map(item => (
                            <li key={item.label}>
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        style={{
                                            color: isDark ? '#ccc' : '#444',
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            textDecoration: 'none',
                                            fontFamily: 'var(--font-mono)'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                                        onMouseLeave={(e) => e.target.style.color = isDark ? '#ccc' : '#444'}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => scrollTo(item.id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: isDark ? '#ccc' : '#444',
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            transition: 'color 0.2s',
                                            padding: '5px',
                                            fontFamily: 'inherit'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                                        onMouseLeave={(e) => e.target.style.color = isDark ? '#ccc' : '#444'}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '1px solid #333', paddingLeft: '30px' }}>
                            <Link to="/dashboard" style={{
                                color: 'var(--color-primary)',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                letterSpacing: '1px'
                            }}>
                                Dashboard
                            </Link>
                            <div style={{
                                fontSize: '0.7rem',
                                padding: '4px 10px',
                                background: 'rgba(255, 62, 62, 0.1)',
                                border: '1px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                borderRadius: '4px'
                            }}>
                                {user.tier} TIER
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', padding: '8px 20px', fontSize: '0.8rem' }}>
                            Sign In
                        </Link>
                    )}

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

                {/* Mobile Menu Button */}
                <div className="mobile-only" style={{ alignItems: 'center', gap: '20px', zIndex: 102 }}>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${isDark ? '#333' : '#ccc'}`,
                            padding: '5px 8px',
                            borderRadius: '4px',
                            color: isDark ? 'white' : 'black',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        {isDark ? '☀' : '☾'}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            padding: '5px'
                        }}
                    >
                        <span style={{ display: 'block', width: '25px', height: '2px', background: isDark ? 'white' : 'black', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                        <span style={{ display: 'block', width: '25px', height: '2px', background: isDark ? 'white' : 'black', transition: '0.3s', opacity: isMenuOpen ? 0 : 1 }}></span>
                        <span style={{ display: 'block', width: '25px', height: '2px', background: isDark ? 'white' : 'black', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className="mobile-only" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: isDark ? 'rgba(5,5,5,0.98)' : 'rgba(255,255,255,0.98)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                zIndex: 101,
            }}>
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                    {navItems.map(item => (
                        <li key={item.label} style={{ marginBottom: '30px' }}>
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: isDark ? 'white' : 'black',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontFamily: 'var(--font-mono)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: isDark ? 'white' : 'black',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                >
                                    {item.label}
                                </button>
                            )}
                        </li>
                    ))}
                    {user ? (
                        <li style={{ marginTop: '20px' }}>
                            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                COMMAND CENTER
                            </Link>
                        </li>
                    ) : (
                        <li style={{ marginTop: '20px' }}>
                            <Link to="/login" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                SIGN IN
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

