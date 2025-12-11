import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeBlock = ({ label, code, language = 'bash' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div style={{
            background: 'var(--color-dim)',
            border: '1px solid rgba(128,128,128,0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '25px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            position: 'relative',
            group: 'parent'
        }}>
            <div style={{
                borderBottom: '1px solid rgba(128,128,128,0.1)',
                padding: '10px 15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.02)'
            }}>
                <div style={{
                    color: 'var(--color-text)',
                    opacity: 0.6,
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {label || language}
                </div>
                <button
                    onClick={handleCopy}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: copied ? 'var(--color-secondary)' : 'var(--color-text)',
                        opacity: copied ? 1 : 0.5,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => !copied && (e.currentTarget.style.opacity = 0.5)}
                >
                    {copied ? (
                        <>
                            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.span>
                            COPIED
                        </>
                    ) : (
                        <>
                            <span>📋</span> COPY
                        </>
                    )}
                </button>
            </div>

            <div style={{
                padding: '20px',
                overflowX: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--color-text)',
                opacity: 0.9,
                lineHeight: '1.6'
            }}>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{code}</pre>
            </div>
        </div>
    );
};

export default CodeBlock;
