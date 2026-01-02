import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

const HackerText = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);

    const triggerScramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= text.length) {
                clearInterval(interval);
            }
            iteration += 1 / 2;
        }, 30);
    };

    useEffect(() => {
        triggerScramble();
        const loop = setInterval(() => {
            if (!isHovering) triggerScramble();
        }, 7000);
        return () => clearInterval(loop);
    }, [text, isHovering]);

    const handleMouseOver = () => {
        if (!isHovering) {
            setIsHovering(true);
            triggerScramble();
            setTimeout(() => setIsHovering(false), 1000);
        }
    };

    return (
        <span
            onMouseOver={handleMouseOver}
            style={{ fontFamily: 'monospace', cursor: 'wait' }}
            className="glitch-text"
            data-text={text}
        >
            {displayText}
        </span>
    );
};

export default function Hero() {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            padding: '0 20px'
        }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '5px 15px',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        marginBottom: '30px',
                        borderRadius: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        v2.5.2-ELITE UNIFIED RELEASE
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        lineHeight: 0.9,
                        marginBottom: '30px',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        color: 'white'
                    }}>
                        THE UNIFIED <br />
                        <span style={{ color: 'var(--color-text)' }}>
                            <HackerText text="SECURITY" />
                        </span> <br />
                        ORCHESTRATOR
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        opacity: 0.7,
                        marginBottom: '40px',
                        lineHeight: 1.6,
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                        color: 'var(--color-text)'
                    }}>
                        Automate complex offensive research and security validation with a single, enterprise-grade binary.
                        Built for red teams who demand precision, scale, and stealth.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => document.getElementById('capabilities').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                            style={{ padding: '15px 35px', fontSize: '1rem' }}
                        >
                            Explore Capabilities
                        </button>
                        <Link
                            to="/pricing"
                            style={{
                                padding: '15px 35px',
                                border: '1px solid #333',
                                color: 'var(--color-text)',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.2s',
                                background: 'rgba(255,255,255,0.03)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--color-primary)';
                                e.target.style.background = 'rgba(255, 62, 62, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#333';
                                e.target.style.background = 'rgba(255,255,255,0.03)';
                            }}
                        >
                            View Plans
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)', opacity: 0.5 }}>↓</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '30px',
                    fontSize: '0.7rem',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    pointerEvents: 'none'
                }}
            >
                ENGINEERED BY SOULMAD INDUSTRIES
            </motion.div>
        </section>
    );
}
