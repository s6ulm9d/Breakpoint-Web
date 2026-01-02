import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard({ isDark }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const stats = [
        { label: 'Active Licenses', value: '1/1' },
        { label: 'Downloads Today', value: '0' },
        { label: 'Platform Status', value: 'Operational', color: 'var(--color-secondary)' },
        { label: 'Next Renewal', value: user.expiry }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '120px 20px 60px' }}>
            <div className="container">
                <header style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Command Center</h1>
                        <p style={{ opacity: 0.6 }}>Welcome back, {user.name}. You are currently on the <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{user.tier} Tier</span>.</p>
                    </div>
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        style={{ padding: '10px 20px', border: '1px solid #333', color: 'var(--color-text)', opacity: 0.7 }}
                    >
                        Sign Out
                    </button>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                            padding: '25px',
                            borderRadius: '8px',
                            border: `1px solid ${isDark ? '#222' : '#eee'}`
                        }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '10px', textTransform: 'uppercase' }}>{stat.label}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color || 'inherit' }}>{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            background: isDark ? '#0a0a0a' : '#fff',
                            padding: '40px',
                            borderRadius: '12px',
                            border: `1px solid ${isDark ? '#222' : '#eee'}`
                        }}
                    >
                        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>🔑</span> License Details
                        </h3>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ fontSize: '0.7rem', opacity: 0.5, display: 'block', marginBottom: '5px' }}>LICENSE TOKEN</label>
                            <code style={{
                                display: 'block',
                                padding: '15px',
                                background: isDark ? '#111' : '#f5f5f5',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                color: 'var(--color-secondary)'
                            }}>
                                {user.licenseKey}
                            </code>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                            <div>
                                <label style={{ fontSize: '0.7rem', opacity: 0.5 }}>STATUS</label>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>● {user.status}</div>
                            </div>
                            <div>
                                <label style={{ fontSize: '0.7rem', opacity: 0.5 }}>TIER</label>
                                <div style={{ fontSize: '0.9rem' }}>{user.tier}</div>
                            </div>
                        </div>
                        {user.tier === 'Free' && (
                            <Link to="/pricing" style={{
                                display: 'block',
                                textAlign: 'center',
                                padding: '15px',
                                background: 'var(--color-primary)',
                                color: 'black',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                borderRadius: '4px'
                            }}>
                                Upgrade to Pro
                            </Link>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            background: isDark ? '#0a0a0a' : '#fff',
                            padding: '40px',
                            borderRadius: '12px',
                            border: `1px solid ${isDark ? '#222' : '#eee'}`
                        }}
                    >
                        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-accent)' }}>📥</span> Quick Downloads
                        </h3>
                        <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '30px' }}>
                            Access the latest unified binary for your platform.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '15px 0', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Breakpoint v2.5.2-ELITE (Linux)</span>
                                <Link to="/download" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Download</Link>
                            </li>
                            <li style={{ padding: '15px 0', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Breakpoint v2.5.2-ELITE (Windows)</span>
                                <Link to="/download" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Download</Link>
                            </li>
                            <li style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Documentation (PDF)</span>
                                <a href="#" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '0.9rem' }}>View</a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
