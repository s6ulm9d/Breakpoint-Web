import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login({ isDark }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate('/dashboard');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px',
            background: 'transparent'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    background: isDark ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    padding: '40px',
                    borderRadius: '12px',
                    border: `1px solid ${isDark ? '#222' : '#eee'}`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
            >
                <h2 style={{ marginBottom: '30px', textAlign: 'center', color: 'var(--color-primary)' }}>Terminal Access</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', opacity: 0.6, fontFamily: 'var(--font-mono)' }}>IDENTIFIER</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: isDark ? '#050505' : '#f9f9f9',
                                border: `1px solid ${isDark ? '#333' : '#ddd'}`,
                                color: 'var(--color-text)',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)'
                            }}
                            placeholder="operator@breakpoint.io"
                        />
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', opacity: 0.6, fontFamily: 'var(--font-mono)' }}>CHALLENGE</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: isDark ? '#050505' : '#f9f9f9',
                                border: `1px solid ${isDark ? '#333' : '#ddd'}`,
                                color: 'var(--color-text)',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)'
                            }}
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: '100%', padding: '15px' }}
                    >
                        Authenticate
                    </button>
                </form>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
                    Secure authentication required for license management and download access.
                </p>
            </motion.div>
        </div>
    );
}
