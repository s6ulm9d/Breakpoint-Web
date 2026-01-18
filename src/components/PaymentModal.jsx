import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PaymentModal({ isOpen, onClose, plan, onComplete }) {
    const [step, setStep] = useState('card'); // card, processing, success
    const [cardData, setCardData] = useState({ number: '', expiry: '', cvc: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep('processing');
        // Simulate payment gateway interaction
        setTimeout(() => {
            setStep('success');
            onComplete();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    style={{
                        background: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '450px',
                        padding: '40px',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#666', fontSize: '1.5rem', cursor: 'pointer' }}
                    >×</button>

                    {step === 'card' && (
                        <div style={{ color: 'white' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Secure Checkout</h2>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '30px' }}>
                                Upgrading to <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{plan.name}</span> Edition.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Card Number</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="4242 4242 4242 4242"
                                        style={{ width: '100%', padding: '15px', background: '#111', border: '1px solid #333', borderRadius: '4px', color: 'white', fontFamily: 'monospace' }}
                                    />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Expiry</label>
                                        <input required type="text" placeholder="MM/YY" style={{ width: '100%', padding: '15px', background: '#111', border: '1px solid #333', borderRadius: '4px', color: 'white' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>CVC</label>
                                        <input required type="text" placeholder="***" style={{ width: '100%', padding: '15px', background: '#111', border: '1px solid #333', borderRadius: '4px', color: 'white' }} />
                                    </div>
                                </div>

                                <button type="submit" style={{
                                    width: '100%',
                                    padding: '18px',
                                    background: 'var(--color-primary)',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
                                }}>
                                    CONFIRM PAYMENT ({plan.price})
                                </button>

                                <p style={{ textAlign: 'center', fontSize: '0.7rem', opacity: 0.4, marginTop: '20px' }}>
                                    🛡️ 256-bit AES Encrypted Protocol via Breakpoint Guard
                                </p>
                            </form>
                        </div>
                    )}

                    {step === 'processing' && (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                style={{ width: '50px', height: '50px', border: '3px solid #222', borderTopColor: 'var(--color-primary)', borderRadius: '50%', margin: '0 auto 20px' }}
                            />
                            <h2 style={{ color: 'white' }}>Verifying Transaction</h2>
                            <p style={{ color: '#666' }}>Connecting to decentralized identity cluster...</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ fontSize: '4rem', marginBottom: '20px' }}
                            >
                                ✅
                            </motion.div>
                            <h2 style={{ color: 'white', marginBottom: '10px' }}>Payment Verified</h2>
                            <p style={{ color: '#666', marginBottom: '30px' }}>Your subscription has been activated and your persistent license has been generated.</p>

                            <button
                                onClick={() => { onClose(); }}
                                style={{ width: '100%', padding: '15px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', background: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                GO TO COMMAND CENTER
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
