import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Dashboard({ isDark }) {
    const { user, logout, verifyPaymentSession } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [verifying, setVerifying] = useState(false);
    const [verifyError, setVerifyError] = useState(null);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const sessionId = query.get('session_id');

        if (sessionId && user && user.subscriptionStatus !== 'Verified') {
            handleVerification(sessionId);
        }
    }, [location, user]);

    const handleVerification = async (sessionId) => {
        setVerifying(true);
        const result = await verifyPaymentSession(sessionId);
        setVerifying(false);
        if (!result.success) {
            setVerifyError(result.error);
        } else {
            // Clean URL after success
            navigate('/dashboard', { replace: true });
        }
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    const stats = [
        { label: 'Active Licenses', value: '1/1' },
        { label: 'Subscription', value: user.subscriptionStatus || 'Community', color: user.subscriptionStatus === 'Verified' ? 'var(--color-primary)' : 'inherit' },
        { label: 'Platform Status', value: 'Operational', color: 'var(--color-secondary)' },
        { label: 'Next Renewal', value: user.expiry }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '120px 20px 60px' }}>
            <div className="container">
                <AnimatePresence>
                    {(verifying || verifyError) && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{
                                padding: '20px',
                                borderRadius: '8px',
                                background: verifyError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(56,189,248,0.1)',
                                border: `1px solid ${verifyError ? '#ef4444' : '#38bdf8'}`,
                                color: verifyError ? '#ef4444' : '#38bdf8',
                                marginBottom: '40px',
                                textAlign: 'center'
                            }}
                        >
                            {verifying ? (
                                <div>
                                    <span style={{ display: 'inline-block', width: '15px', height: '15px', border: '2px solid', borderTopColor: 'transparent', borderRadius: '50%', marginRight: '10px' }} className="spin"></span>
                                    Cryptographically verifying your Stripe payment session...
                                </div>
                            ) : (
                                <div>
                                    ❌ Verification failed: {verifyError} <br />
                                    <button onClick={() => setVerifyError(null)} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', marginTop: '10px' }}>Close</button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <header style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Command Center {user.subscriptionStatus === 'Verified' && <span style={{ fontSize: '1rem', verticalAlign: 'middle', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', marginLeft: '10px', border: '1px solid var(--color-primary)' }}>VERIFIED</span>}</h1>
                        <p style={{ opacity: 0.6 }}>Welcome back, {user.name}. You are currently on the <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{user.tier} Tier</span>.</p>
                    </div>
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        style={{ padding: '10px 20px', border: '1px solid #333', color: 'var(--color-text)', opacity: 0.7, cursor: 'pointer' }}
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
                            border: `1px solid ${isDark ? '#222' : '#eee'}`,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                    >
                        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>🔑</span> Unified Identity
                        </h3>
                        {user.subscriptionStatus === 'Verified' && (
                            <div style={{ padding: '10px', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', fontSize: '0.8rem', borderRadius: '4px', marginBottom: '20px', border: '1px solid rgba(34, 197, 94, 0.2)', textAlign: 'center' }}>
                                ✨ Automated License Rotation Complete
                            </div>
                        )}
                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ fontSize: '0.7rem', opacity: 0.5, display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>License Key</label>
                            <div style={{ position: 'relative' }}>
                                <code style={{
                                    display: 'block',
                                    padding: '18px',
                                    background: isDark ? '#050505' : '#f5f5f5',
                                    borderRadius: '6px',
                                    fontSize: '1rem',
                                    color: 'var(--color-secondary)',
                                    border: '1px solid #222',
                                    fontFamily: 'var(--font-mono)',
                                    overflowX: 'auto'
                                }}>
                                    {user.licenseKey}
                                </code>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(user.licenseKey);
                                        alert("License Key copied to clipboard!");
                                    }}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'var(--color-dim)',
                                        border: '1px solid #333',
                                        color: 'var(--color-text)',
                                        padding: '5px 12px',
                                        fontSize: '0.7rem',
                                        cursor: 'pointer',
                                        borderRadius: '4px'
                                    }}
                                >
                                    COPY
                                </button>
                            </div>
                        </div>

                        <div style={{
                            padding: '15px',
                            background: 'rgba(56, 189, 248, 0.05)',
                            borderLeft: '4px solid #38bdf8',
                            marginBottom: '30px',
                            fontSize: '0.9rem'
                        }}>
                            To connect your terminal, run:<br />
                            <code style={{ background: '#000', padding: '2px 5px', color: '#38bdf8' }}>breakpoint --login</code>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                            <div>
                                <label style={{ fontSize: '0.7rem', opacity: 0.5 }}>STATUS</label>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>● {user.status.toUpperCase()}</div>
                            </div>
                            <div>
                                <label style={{ fontSize: '0.7rem', opacity: 0.5 }}>TIER</label>
                                <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{user.tier.toUpperCase()} EDITION</div>
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
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                letterSpacing: '1px'
                            }}>
                                Upgrade to Enterprise
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
                                <span>Breakpoint v2.6.3-ELITE (Linux)</span>
                                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Download</a>
                            </li>
                            <li style={{ padding: '15px 0', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Breakpoint v2.6.3-ELITE (Windows)</span>
                                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Download</a>
                            </li>
                            <li style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Documentation (PDF)</span>
                                <a href="#" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '0.9rem' }}>View</a>
                            </li>
                            <li style={{ padding: '15px 0', borderTop: '1px solid #222', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Link to="/download" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.8 }}>View All Releases & Platform Builds</Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
