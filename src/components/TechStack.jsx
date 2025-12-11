
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[
                        {
                            name: 'Python 3.8+',
                            role: 'CORE ENGINE',
                            details: 'Powered by AsyncIO for highly concurrent non-blocking network I/O. Uses `aiohttp` for massive request throughput and `custom-tcp` for raw packet manipulation.'
                        },
                        {
                            name: 'React 19 + Three.js',
                            role: 'CONTROL CENTER',
                            details: 'A futuristic "Minority Report" style dashboard built with Fiber & Drei. Visualizes attack vectors in real-time 3D space.'
                        },
                        {
                            name: 'Express / Node.js',
                            role: 'C2 SERVER',
                            details: 'Acts as the Command & Control (C2) middleware. Handles WebSocket connections for live terminal streaming and manages agent orchestration.'
                        },
                        {
                            name: 'SQLite / JSONL',
                            role: 'FORENSIC STORAGE',
                            details: 'Zero-latency logging. Immutable JSONL audit trails ensure comprehensive post-mortem capability without the overhead of a heavy DB.'
                        },
                        {
                            name: 'Docker',
                            role: 'DEPLOYMENT',
                            details: 'Fully containerized runner images for ephemeral scanning agents. Spawns, attacks, and self-destructs.'
                        },
                        {
                            name: 'TensorFlow Lite',
                            role: 'EXPERIMENTAL AI',
                            details: 'Local inference engine for adaptive payload mutation based on WAF responses.'
                        }
                    ].map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: 'var(--color-primary)' }}
                            style={{
                                border: '1px solid #333',
                                padding: '25px',
                                background: 'rgba(10,10,10,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontWeight: 'bold' }}>{tech.name}</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', padding: '2px 6px' }}>{tech.role}</span>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7, lineHeight: '1.6' }}>
                                {tech.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
