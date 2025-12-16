
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        // Initial play
        triggerScramble();

        // Auto play loop (every 7 seconds)
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
            zIndex: 1
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        fontSize: 'min(5rem, 15vw)',
                        fontWeight: '900',
                        marginBottom: '20px',
                        color: 'white', // Keeping white for now as per design, but text-shadow handles the color.
                        textShadow: '0 0 30px rgba(255, 62, 62, 0.6)',
                        letterSpacing: '-2px'
                    }}
                >
                    <span style={{ color: 'var(--color-text)' }}>
                        <HackerText text="BREAKPOINT" />
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ fontSize: 'min(1.5rem, 5vw)', marginBottom: '10px', color: 'var(--color-text)', opacity: 0.8, fontFamily: 'var(--font-mono)' }}
                >
                    Production is already broken. You just haven't proved it yet.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    style={{ fontSize: '1rem', marginBottom: '40px', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px' }}
                >
                    Developed by Megha Sairaj
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <button
                        className="btn-primary"
                        onClick={() => {
                            const el = document.getElementById('about');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Initiate Sequence
                    </button>
                </motion.div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>↓</span>
            </motion.div>
        </section>
    );
}
