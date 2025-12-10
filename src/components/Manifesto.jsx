
import React from 'react';
import { motion } from 'framer-motion';

const terminalVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Manifesto() {
    return (
        <section id="manifesto" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.95) 20%)' }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={terminalVariant}
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        border: '1px solid #333',
                        background: 'var(--color-dim)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                        marginBottom: '100px'
                    }}
                >
                    <div style={{ background: '#1a1a1a', padding: '10px 15px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                        <span style={{ marginLeft: 'auto', fontFamily: 'monospace', color: '#666', fontSize: '12px' }}>user@breakpoint:~/manifesto.md</span>
                    </div>

                    <div style={{ padding: '40px', fontFamily: 'var(--font-mono)', color: 'var(--color-text)', lineHeight: '1.8' }}>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '30px', fontSize: '2rem' }}>&gt; THE_PHILOSOPHY</h2>
                        <div style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '20px', marginBottom: '40px' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>
                                "Production is already broken. You just haven't proved it yet."
                            </p>
                        </div>

                        <p style={{ marginBottom: '20px', color: 'var(--color-text)', opacity: 0.9 }}>
                            Soft assertions and happy-path tests provide a <strong>false sense of security</strong>.
                            Only by subjecting applications to <strong>hostile, adversarial conditions</strong> can we guarantee resilience.
                        </p>

                        <h3 style={{ color: 'var(--color-accent)', marginTop: '40px', marginBottom: '20px' }}>// CAPABILITIES::DEATH_SUIT</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            {[
                                { title: "Injection", desc: "SQLi, RCE, LDAP, SSTI" },
                                { title: "DoS Warfare", desc: "Slowloris, XML Bomb, ReDoS" },
                                { title: "Auth Bypass", desc: "JWT Forgery, IDOR, Cracking" },
                                { title: "Logic Flaws", desc: "Race Conditions, Prototype Pollution" },
                                { title: "Infrastructure", desc: "SSRF, HTTP Smuggling" },
                                { title: "Reporting", desc: "Forensic Audit Logs, Liability Calc" }
                            ].map((item, i) => (
                                <div key={i} style={{ padding: '15px', border: '1px solid #333', background: 'rgba(128,128,128,0.05)' }}>
                                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: '5px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
