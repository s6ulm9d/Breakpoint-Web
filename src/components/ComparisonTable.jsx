
import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
    { feature: "Active Exploitation", breakpoint: "YES (Weaponized)", others: "NO (Passive/Scanner)" },
    { feature: "Traffic Profiling", breakpoint: "Adversarial (WAF Evasion)", others: "Standard (Blocked)" },
    { feature: "Payloads", breakpoint: "Context-Aware & Mutating", others: "Static Databases" },
    { feature: "RSC / Next.js Support", breakpoint: "Native (Action Forgery)", others: "None (Blind)" },
    { feature: "CI/CD Output", breakpoint: "Pass/Fail + Financial Impact", others: "PDF Report" },
    { feature: "False Positives", breakpoint: "Near Zero (Verified Exploits)", others: "High (Heuristics)" },
    { feature: "Performance", breakpoint: "Async/Parallel (Aggressive)", others: "Sequential (Slow)" },
];

export default function ComparisonTable() {
    return (
        <section id="comparison" style={{ padding: '80px 0', background: 'var(--color-dim)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', color: 'var(--color-text)', marginBottom: '50px' }}
                >
                    VS_LEGACY_SCANNERS
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
