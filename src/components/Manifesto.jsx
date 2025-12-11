
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
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '30px', fontSize: '2rem' }}>&gt; THE_HACKER_MANIFESTO</h2>
                        <div style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '20px', marginBottom: '40px' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>
                                "We are the breakers. The stress-testers. The chaos agents."
                            </p>
                        </div>

                        <p style={{ marginBottom: '20px', color: 'var(--color-text)', opacity: 0.9 }}>
                            We believe that <strong>security is not a state, but a process</strong>. A process that requires constant, relentless pressure.
                            If your system cannot withstand the storm we bring, it will not withstand the storm <em>they</em> bring.
                        </p>

                        <p style={{ marginBottom: '20px', color: 'var(--color-text)', opacity: 0.9 }}>
                            We do not seek to destroy. We seek to <strong>inoculate</strong>.
                            By injecting controlled chaos—SQL injections, race conditions, packet floods—we trigger the necessary immune response in your engineering culture.
                        </p>

                        <p style={{ marginBottom: '20px', color: 'var(--color-text)', opacity: 0.9 }}>
                            This is not a compliance check. This is a <strong>live-fire exercise</strong>.
                            We emulate the adversary because we respect the adversary.
                        </p>

                        <div style={{ marginTop: '40px', padding: '15px', border: '1px solid #333', background: 'rgba(255, 62, 62, 0.05)', color: 'var(--color-primary)' }}>
                            &gt; SYSTEM_STATUS: ARMED_AND_READY<br />
                            &gt; WAITING_FOR_AUTHORIZATION...<br />
                            &gt; <span className="blink">_</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
