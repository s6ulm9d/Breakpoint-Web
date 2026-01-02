import React from 'react';
import { motion } from 'framer-motion';

export default function LegalPage({ isDark }) {
    return (
        <div style={{ minHeight: '100vh', padding: '140px 20px 100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <header style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Legal Compliance</h1>
                    <p style={{ opacity: 0.6 }}>Terms of Service and Authorization Agreements.</p>
                </header>

                <div style={{ display: 'grid', gap: '40px' }}>
                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>1. Authorized Usage Only</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            Breakpoint is a security research tool. Usage is strictly limited to targets where the operator has explicit, written authorization to perform security testing.
                            Unauthorized use of this software against systems you do not own or have permission to test is a violation of law in most jurisdictions.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>2. Subscription Terms</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            Subscriptions are billed on a recurring basis. You may cancel at any time, but no refunds will be issued for partial months.
                            License keys are strictly for individual or organization-internal use as identified by the subscription tier.
                        </p>
                    </section>

                    <section id="security">
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>3. Security Standards</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            Soulmad Industries follows industry-leading security practices for the storage of account data.
                            All communications with our authentication servers use TLS 1.3 encryption. Internal license validation
                            is performed using non-reversible cryptographic hashes.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '20px' }}>4. Limitation of Liability</h2>
                        <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
                            The software is provided "as is". Soulmad Industries is not responsible for any damage, data loss,
                            or service disruption caused by the use of Breakpoint, whether authorized or unauthorized.
                        </p>
                    </section>
                </div>

                <div style={{ marginTop: '80px', padding: '30px', border: '1px solid #333', borderRadius: '8px', background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: '15px' }}>Compliance Officer</h3>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                        For legal inquiries or compliance documentation, contact: legal@soulmad.industries
                    </p>
                </div>
            </div>
        </div>
    );
}
