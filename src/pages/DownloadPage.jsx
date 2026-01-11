import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function DownloadPage({ isDark }) {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    const releases = [
        {
            version: '2.6.3-ELITE',
            date: '2026-01-02',
            type: 'Stable',
            notes: 'Unified binary architecture, enhanced WAF bypass core, smart proxy rotation v3, and optimized PATH resolution for Windows.',
            files: [
                { platform: 'Linux (amd64)', size: '96KB', link: 'https://github.com/s6ulm9d/Breakpoint/releases/tag/v2.6.3' },
                { platform: 'Windows (x64)', size: '7.9MB', link: 'https://github.com/s6ulm9d/Breakpoint/releases/download/v2.6.3/breakpoint-installer.exe' },
                { platform: 'macOS (Silicon)', size: '38MB', link: 'https://github.com/s6ulm9d/Breakpoint/releases/tag/v2.6.3' }
            ]
        },
        {
            version: '2.6.2-ELITE',
            date: '2025-12-30',
            type: 'Legacy',
            notes: 'Initial enterprise feature gating, improved soft 404 detection.',
            files: [
                { platform: 'Linux (amd64)', size: '41MB', link: '#' },
                { platform: 'Windows (x64)', size: '44MB', link: '#' }
            ]
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '140px 20px 100px' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <header style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Download Center</h1>
                    <div style={{ padding: '15px 25px', background: 'rgba(0,216,255,0.1)', border: '1px solid var(--color-accent)', borderRadius: '8px', marginBottom: '40px' }}>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            <strong style={{ color: 'var(--color-accent)' }}>Active Session:</strong> Authenticated as {user.email}.
                            License Tier: <span style={{ color: 'var(--color-primary)' }}>{user.tier}</span>
                        </p>
                    </div>
                </header>

                <div style={{ display: 'grid', gap: '40px' }}>
                    {releases.map((release, i) => (
                        <motion.div
                            key={release.version}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: isDark ? '#0a0a0a' : '#fff',
                                padding: '40px',
                                borderRadius: '12px',
                                border: `1px solid ${i === 0 ? 'var(--color-primary)' : (isDark ? '#222' : '#eee')}`
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Version {release.version}</h3>
                                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Released on {release.date} | {release.type}</p>
                                </div>
                                {i === 0 && (
                                    <span style={{
                                        padding: '4px 12px',
                                        background: 'var(--color-primary)',
                                        color: 'black',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        borderRadius: '20px'
                                    }}>LATEST</span>
                                )}
                            </div>

                            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '30px', borderLeft: '2px solid #333', paddingLeft: '20px', fontStyle: 'italic' }}>
                                {release.notes}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                                {release.files.map(file => (
                                    <a
                                        key={file.platform}
                                        href={file.link}
                                        style={{
                                            padding: '15px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            background: isDark ? '#111' : '#f9f9f9',
                                            border: `1px solid ${isDark ? '#222' : '#eee'}`,
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#222' : '#eee'}
                                    >
                                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{file.platform}</div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{file.size}</div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>
                        Missing a specific build? <Link to="/#contact" style={{ color: 'var(--color-primary)' }}>Contact technical support</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
