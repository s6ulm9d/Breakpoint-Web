
import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
    return (
        <section style={{ padding: '80px 0', background: 'var(--color-bg)', backdropFilter: 'blur(5px)', transition: 'background 0.3s' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', color: 'var(--color-text)', marginBottom: '60px' }}
                >
                 // SYSTEM_ARCHITECTURE
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { name: 'Python 3.8+', role: 'Core Engine' },
                        { name: 'React + Three.js', role: 'Visual Interface' },
                        { name: 'Express / Node', role: 'Command & Control' },
                        { name: 'SQLite', role: 'Forensic Storage' },
                        { name: 'Docker', role: 'Containerization' }
                    ].map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
                            style={{
                                border: '1px solid #333',
                                padding: '20px 30px',
                                borderRadius: '0px',
                                color: 'var(--color-text)',
                                fontFamily: 'var(--font-mono)',
                                background: 'var(--color-dim)',
                                minWidth: '200px',
                                textAlign: 'center',
                                cursor: 'crosshair'
                            }}>
                            <div style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '5px' }}>{tech.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text)', opacity: 0.6 }}>{tech.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
