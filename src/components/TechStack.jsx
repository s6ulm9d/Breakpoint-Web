
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
                            details: 'Powering the "Death Suite" with a modular plugin architecture. Uses `aiohttp` for massive asynchronous throughput and `requests` for protocol compliance.'
                        },
                        {
                            name: 'React 19 + Three.js',
                            role: 'VISUAL DASHBOARD',
                            details: 'The web interface you see right now. A futuristic window into the chaos, built with Fiber & Drei to visualize the engine\'s philosophy.'
                        },
                        {
                            name: 'Traffic Mutator (AI)',
                            role: 'ADAPTIVE EVASION',
                            details: 'Experimental logic to mutate payloads in real-time based on WAF response codes (403/406), attempting bypasses automatically.'
                        },
                        {
                            name: 'Forensic Ledger',
                            role: 'IMMUTABLE LOGS',
                            details: 'Cryptographically signed JSONL audit trails using SHA-256 chaining. Ensures a tamper-evident Chain of Custody for every packet sent.'
                        },
                        {
                            name: 'Docker / Binary',
                            role: 'DEPLOYMENT',
                            details: 'Zero-dependency binary releases for Windows, Linux, and Mac. Also available as a containerized agent for CI/CD pipelines.'
                        },
                        {
                            name: 'RSC Attack Suite',
                            role: 'MODERN WARFARE',
                            details: 'Specialized modules for React Server Components: Server Action Forgery, Async Context Bleed, and SSRF via Image Optimization.'
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
