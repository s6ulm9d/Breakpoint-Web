import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PricingPage({ isDark }) {
    const { user, startPaymentFlow } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'For independent researchers and hobbyists.',
            features: [
                'Standard Security Scans',
                'Basic XSS & SQLi Detection',
                'Single Target Execution',
                'Community Documentation',
                'Standard Dispatch Speed'
            ],
            buttonText: user?.tier === 'Free' ? 'Current Plan' : 'Get Started',
            highlight: false,
            action: () => { if (!user) navigate('/login'); }
        },
        {
            name: 'Professional',
            price: '$49',
            period: 'per month',
            description: 'For professional bug hunters and consultants.',
            features: [
                'Everything in Free +',
                'Advanced Omni-Attack Suite',
                'Evasive WAF Bypass Core',
                'Parallel Multi-Target Scanning',
                'Priority Support',
                'Aggressive Performance Modes'
            ],
            buttonText: loading ? 'Initializing...' : (user?.tier === 'Pro' ? 'Current Plan' : 'Buy Professional'),
            highlight: true,
            action: async () => {
                if (!user) { navigate('/login'); return; }
                if (user.tier === 'Pro') return;

                setLoading(true);
                setError(null);
                const result = await startPaymentFlow('Professional');
                if (result.error) {
                    setError(result.error);
                    setLoading(false);
                }
            }
        },
        {
            name: 'Enterprise',
            price: '$249',
            period: 'per month',
            description: 'For organizations and red teams.',
            features: [
                'Everything in Pro +',
                'Unified CI/CD Integration',
                'Custom Attack Modules',
                'SLA Guaranteed Support',
                'Fleet Orchestration',
                'On-Premise Deployment'
            ],
            buttonText: loading ? 'Initializing...' : (user?.tier === 'Elite' ? 'Current Plan' : 'Buy Enterprise'),
            highlight: false,
            action: async () => {
                if (!user) { navigate('/login'); return; }
                if (user.tier === 'Elite') return;

                setLoading(true);
                setError(null);
                const result = await startPaymentFlow('Elite');
                if (result.error) {
                    setError(result.error);
                    setLoading(false);
                }
            }
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '140px 20px 100px' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Unified Scaling</h1>
                    <p style={{ opacity: 0.6, maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Choose the power level required for your security operations.
                        Real payment integration via encrypted checkout.
                    </p>
                    {error && (
                        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '4px', maxWidth: '500px', margin: '20px auto' }}>
                            ⚠️ {error} <br />
                            <small>Make sure STRIPE_SECRET_KEY is set in Vercel Environment Variables.</small>
                        </div>
                    )}
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                                padding: '50px 40px',
                                borderRadius: '16px',
                                border: `1px solid ${plan.highlight ? 'var(--color-primary)' : (isDark ? '#222' : '#eee')}`,
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '-35px',
                                    background: 'var(--color-primary)',
                                    color: 'black',
                                    padding: '5px 40px',
                                    transform: 'rotate(45deg)',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>
                                    Popular
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
                            <div style={{ marginBottom: '20px' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{plan.price}</span>
                                <span style={{ opacity: 0.5, fontSize: '1rem', marginLeft: '10px' }}>/ {plan.period}</span>
                            </div>
                            <p style={{ opacity: 0.7, fontSize: '0.9rem', minHeight: '50px', marginBottom: '30px' }}>{plan.description}</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flexGrow: 1 }}>
                                {plan.features.map(feature => (
                                    <li key={feature} style={{ padding: '10px 0', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: plan.highlight ? 'var(--color-primary)' : 'var(--color-secondary)' }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={plan.action}
                                disabled={loading || user?.tier === (plan.name === 'Professional' ? 'Pro' : (plan.name === 'Enterprise' ? 'Elite' : plan.name))}
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    background: plan.highlight ? 'var(--color-primary)' : 'transparent',
                                    color: plan.highlight ? 'black' : 'var(--color-text)',
                                    border: plan.highlight ? 'none' : `1px solid ${isDark ? '#333' : '#ccc'}`,
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    opacity: (loading || user?.tier === (plan.name === 'Professional' ? 'Pro' : (plan.name === 'Enterprise' ? 'Elite' : plan.name))) ? 0.5 : 1,
                                    transition: 'all 0.2s'
                                }}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
