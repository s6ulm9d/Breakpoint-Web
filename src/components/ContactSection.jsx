
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactItem = ({ label, value, link, isLink = true }) => (
    <div style={{ marginBottom: '15px' }}>
        <span style={{ color: 'var(--color-text)', opacity: 0.7, fontSize: '0.9rem', display: 'block', marginBottom: '5px' }}>{label}</span>
        {isLink ? (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '1.1rem', borderBottom: '1px solid var(--color-primary)' }}
            >
                {value}
            </a>
        ) : (
            <span style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>{value}</span>
        )}
    </div>
);

export default function ContactSection() {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate network request
        setTimeout(() => {
            setFormStatus('sent');
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: '100px 0', background: 'var(--color-bg)', borderTop: '1px solid #222', transition: 'background 0.3s' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        color: 'var(--color-text)',
                        marginBottom: '60px',
                        fontSize: '3rem',
                        borderLeft: '5px solid var(--color-primary)',
                        paddingLeft: '20px'
                    }}
                >
                    GET IN TOUCH
                </motion.h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ flex: 1, minWidth: '300px' }}
                    >
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '30px' }}>// DEVELOPER_CONTACT</h3>

                        <ContactItem
                            label="Email"
                            value="sryrboiambusy@gmail.com"
                            link="mailto:sryrboiambusy@gmail.com"
                        />
                        <ContactItem
                            label="Phone"
                            value="+91 75697 51897"
                            isLink={false}
                        />
                        <ContactItem
                            label="GitHub Profile"
                            value="github.com/s6ulm9d"
                            link="https://github.com/s6ulm9d"
                        />
                        <ContactItem
                            label="LikedIn"
                            value="Megha Sairaj"
                            link="https://www.linkedin.com/in/sairaj-megha-0110b9392/"
                        />
                        <ContactItem
                            label="Project Repository"
                            value="github.com/s6ulm9d/Breakpoint"
                            link="https://github.com/s6ulm9d/Breakpoint"
                        />
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ flex: 1, minWidth: '300px' }}
                    >
                        <h3 style={{ color: 'var(--color-text)', marginBottom: '30px' }}>Send Encypted Message</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '0.8rem', marginBottom: '5px', display: 'block' }}>IDENTITY</label>
                                <input
                                    type="text"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        background: 'var(--color-dim)',
                                        border: '1px solid #333',
                                        color: 'var(--color-text)',
                                        outline: 'none',
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '0.8rem', marginBottom: '5px', display: 'block' }}>COMM_CHANNEL</label>
                                <input
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        background: 'var(--color-dim)',
                                        border: '1px solid #333',
                                        color: 'var(--color-text)',
                                        outline: 'none',
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '0.8rem', marginBottom: '5px', display: 'block' }}>PAYLOAD</label>
                                <textarea
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        background: 'var(--color-dim)',
                                        border: '1px solid #333',
                                        color: 'var(--color-text)',
                                        outline: 'none',
                                        fontFamily: 'var(--font-mono)',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={formStatus === 'sent'}
                                style={{
                                    marginTop: '10px',
                                    opacity: formStatus === 'sent' ? 0.5 : 1,
                                    cursor: formStatus === 'sent' ? 'default' : 'pointer'
                                }}
                            >
                                {formStatus === 'sending' ? 'TRANSMITTING...' : formStatus === 'sent' ? 'TRANSMISSION COMPLETE' : 'SEND TRANSMISSION'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
