
import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
    { feature: "Exploitation Method", breakpoint: "Active Validation & Proof", others: "Passive Scanning / Heuristics" },
    { feature: "Traffic Profiling", breakpoint: "Adversarial (WAF Evasive)", others: "Standard Protocol (Blocked)" },
    { feature: "Payload Logic", breakpoint: "Context-Aware & Mutating", others: "Static String Databases" },
    { feature: "RSC / Next.js Support", breakpoint: "Native Framework Auditing", others: "None (Legacy Support Only)" },
    { feature: "CI/CD Output", breakpoint: "Verified Proof of Concept", others: "Risk Scores (Theoretical)" },
    { feature: "False Positives", breakpoint: "Near Zero (Verified Logic)", others: "High (Heuristic Noise)" },
    { feature: "Execution Model", breakpoint: "Asynchronous & Parallel", others: "Sequential (Throttled)" },
];

export default function ComparisonTable() {
    return (
        <section id="comparison" style={{ padding: '80px 0', background: 'var(--color-dim)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', color: 'var(--color-text)', marginBottom: '50px', letterSpacing: '4px' }}
                >
                    STRATEGIC DIFFERENTIATORS
                </motion.h2>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-text)', fontFamily: 'var(--font-mono)' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                                <th style={{ padding: '20px', textAlign: 'left', width: '30%' }}>METRIC</th>
                                <th style={{ padding: '20px', textAlign: 'left', width: '35%', color: 'var(--color-primary)' }}>BREAKPOINT ENGINE</th>
                                <th style={{ padding: '20px', textAlign: 'left', width: '35%', opacity: 0.6 }}>LEGACY TOOLS (ZAP, NESSUS)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ borderBottom: '1px solid #333', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                                >
                                    <td style={{ padding: '20px', fontWeight: 'bold' }}>{row.feature}</td>
                                    <td style={{ padding: '20px', color: 'var(--color-text)', fontWeight: 'bold' }}>{row.breakpoint}</td>
                                    <td style={{ padding: '20px', color: 'var(--color-text)', opacity: 0.5 }}>{row.others}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
