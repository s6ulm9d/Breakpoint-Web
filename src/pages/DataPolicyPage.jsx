import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function DataPolicyPage({ isDark }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteAccount = () => {
        // Simulate data deletion
        alert("Account deletion request received. All associated data will be purged within 24 hours.");
        logout();
        navigate('/');
    };

    return (
        <div style={{ minHeight: '100vh', padding: '140px 20px 100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <header style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Data Policy</h1>
                    <p style={{ opacity: 0.6 }}>How we handle your account metadata and scanning identity.</p>
                </header>

                <div style={{ display: 'grid', gap: '40px' }}>
                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>1. Information We Collect</h2>
                        <ul style={{ lineHeight: '2', opacity: 0.8 }}>
                            <li>Account Email & Identity</li>
                            <li>Subscription Status & Expiry</li>
                            <li>License Key Metadata</li>
                            <li>Download History (for security audit logs)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>2. Scanning Data Privacy</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            Breakpoint is a local-first tool. We do <strong>not</strong> collect scanning results, target URLs, or discovered vulnerabilities.
                            All attack execution data remains on your infrastructure. Our backend only validates that the operator's license is active.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>3. Data Retention</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            Billing data is retained for as long as required by financial regulations.
                            Technical logs related to license validation are automatically purged every 90 days.
                        </p>
                    </section>

                    <section style={{ marginTop: '40px', padding: '40px', border: '1px solid #ff3e3e33', borderRadius: '12px', background: 'rgba(255, 62, 62, 0.05)' }}>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>4. Account Deletion & Right to be Forgotten</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8, marginBottom: '25px' }}>
                            You may request a complete purge of your account data at any time. This action is permanent and will immediately invalidate any active licenses.
                        </p>

                        {user ? (
                            !confirmDelete ? (
                                <button
                                    onClick={() => setConfirmDelete(true)}
                                    style={{ padding: '12px 25px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', cursor: 'pointer' }}
                                >
                                    Initiate Account Deletion
                                </button>
                            ) : (
                                <div style={{ border: '1px solid var(--color-primary)', padding: '20px', borderRadius: '4px' }}>
                                    <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '15px' }}>ARE YOU SURE? This cannot be undone.</p>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button
                                            onClick={handleDeleteAccount}
                                            style={{ background: 'var(--color-primary)', color: 'black', padding: '10px 20px', fontWeight: 'bold' }}
                                        >
                                            YES, DELETE MY DATA
                                        </button>
                                        <button
                                            onClick={() => setConfirmDelete(false)}
                                            style={{ color: 'var(--color-text)', opacity: 0.6 }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )
                        ) : (
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>Sign in to manage your data deletion preferences.</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
