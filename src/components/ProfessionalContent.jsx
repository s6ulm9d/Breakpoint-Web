
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, id }) => (
    <section id={id} style={{ padding: '80px 0', borderBottom: '1px solid rgba(128,128,128,0.1)' }}>
        <div className="container">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontSize: '2.5rem',
                    marginBottom: '50px',
                    color: 'var(--color-primary)',
                    borderLeft: '5px solid var(--color-primary)',
                    paddingLeft: '20px',
                    textTransform: 'uppercase'
                }}
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text)' }}
            >
                {children}
            </motion.div>
        </div>
    </section>
);

const CodeBlock = ({ label, code }) => (
    <div style={{ background: 'var(--color-dim)', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '4px', overflow: 'hidden', marginBottom: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        {label && <div style={{ borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '10px 15px', color: 'var(--color-text)', opacity: 0.6, fontSize: '0.8rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>}
        <div style={{ padding: '20px', overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', opacity: 0.9 }}>
            <pre style={{ margin: 0 }}>{code}</pre>
        </div>
    </div>
);

const FeatureList = ({ title, features }) => (
    <div style={{ marginBottom: '30px' }}>
        <h4 style={{ color: 'var(--color-text)', marginBottom: '15px', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '10px' }}>{title}</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {features.map((f, i) => (
                <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>➜</span>
                    <div>
                        <strong style={{ color: 'var(--color-text)' }}>{f.name}:</strong>
                        <span style={{ color: 'var(--color-text)', opacity: 0.7, marginLeft: '8px' }}>{f.desc}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default function ProfessionalContent() {
    return (
        <div style={{ background: 'var(--color-bg)', transition: 'background 0.3s' }}>

            {/* 1. MISSION STATEMENT */}
            <Section title="The Philosophy: Break It To Fix It" id="about">
                <p style={{ maxWidth: '900px', marginBottom: '30px', fontSize: '1.25rem', color: 'var(--color-text)' }}>
                    <strong>BREAKPOINT</strong> is not a vulnerability scanner; it is a <strong>Weaponized Resilience Engine</strong>.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                    <div>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9 }}>
                            Traditional tools (OWASP ZAP, Burp) are passive or semi-passive. They suggest something <em>might</em> be wrong.
                            Breakpoint takes the adversarial role of an "Internal Threat" or "Compromised User" to <strong>actively exploit</strong> those weaknesses.
                        </p>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9 }}>
                            We operate on a simple truth: <strong>Production is already broken. You just haven't proved it yet.</strong>
                            Soft assertions in tests provide a false sense of security. Only hostile conditions reveal the truth.
                        </p>
                    </div>
                    <div style={{ background: 'var(--color-dim)', padding: '20px', borderLeft: '3px solid var(--color-accent)' }}>
                        <h4 style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>Use Cases</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}>✓ <strong>Chaos Engineering</strong>: Verify system behavior under DoS/Stress.</li>
                            <li style={{ marginBottom: '10px' }}>✓ <strong>CI/CD Gating</strong>: "If High Severity -&gt; Build Failed".</li>
                            <li style={{ marginBottom: '10px' }}>✓ <strong>Blue Team Training</strong>: Generate real attack logs for SIEM tuning.</li>
                            <li>✓ <strong>Liability Calculation</strong>: Estimate financial loss from potential breaches.</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 2. THE DEATH SUITE */}
            <Section title="Capabilities: The Death Suite" id="capabilities">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', opacity: 0.9 }}>
                    The engine forces the target through a gauntlet of modern attack vectors, categorized by impact.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    <FeatureList title="INJECTION & CORRUPTION" features={[
                        { name: "SQL Injection (SQLi)", desc: "Union-based, Boolean-Blind, Time-Based Blind, and Error-Based extraction." },
                        { name: "Command Injection (RCE)", desc: "OS Command injection via shell metacharacters (;, &&, |)." },
                        { name: "SSTI", desc: "Server-Side Template Injection (Jinja2, Thymeleaf, EJS) leading to RCE." },
                        { name: "LDAP / XPath", desc: "Directory service manipulation and XML structure queries." }
                    ]} />

                    <FeatureList title="DENIAL OF SERVICE (WARFARE)" features={[
                        { name: "XML Bomb (Billion Laughs)", desc: "Recursive entity expansion to exhaust server RAM." },
                        { name: "Slowloris", desc: "Partial HTTP requests to exhaust thread pools/connections." },
                        { name: "ReDoS", desc: "Catastrophic backtracking in Regex engines." },
                        { name: "HTTP Desync", desc: "Request Smuggling via Transfer-Encoding: chunked CL.TE/TE.CL." }
                    ]} />

                    <FeatureList title="AUTHENTICATION & LOGIC FLAWS" features={[
                        { name: "JWT Attacks", desc: "Forging Admin tokens via 'None' algorithm, weak HMAC secrets, and key confusion (RSA->HMAC)." },
                        { name: "IDOR / BOLA", desc: "Broken Object Level Authorization. Iterates violently through user IDs to find data leaks." },
                        { name: "Race Conditions", desc: "Exploiting Time-of-Check/Time-of-Use (TOCTOU) for double-spending or inventory bypass." },
                        { name: "SSRF (Cloud)", desc: "Targeting AWS IMDSv2 (169.254.169.254), GCP Metadata, and internal K8s endpoints." },
                        { name: "Prototype Pollution", desc: "Injecting properties into Object.prototype to alter application logic globally." }
                    ]} />
                </div>
            </Section>

            {/* 3. ARCHITECTURE & FORENSICS */}
            <Section title="Enterprise Architecture" id="architecture">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-text)', marginBottom: '20px' }}>Modular Engine</h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                            Breakpoint is built on <strong>Python 3.8+</strong> using a plugin-first architecture.
                            Every attack is a standalone module (`breakpoint.attacks.*`), allowing for rapid inclusion of new CVEs (e.g., Log4Shell).
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <CodeBlock label="ENGINE ORCHESTRATION" code={`# Pseudo-code Structure
class BreakpointEngine:
    def __init__(self, target, config):
        self.loader = PluginLoader("./attacks")
        self.logger = ForensicLogger()

    def execute_campaign(self, strategy):
        for attack in strategy.steps:
            if not self.safety_check(target): break
            result = attack.run(target)
            self.logger.sign(result)`} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--color-text)', marginBottom: '20px' }}>Forensic Audit Trail</h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                            Every transaction is logged to an immutable, cryptographically signed JSONL file (`audit_UUID.log`).
                            This provides a Chain of Custody for post-mortem analysis.
                        </p>
                        <CodeBlock label="SAMPLE LOG ENTRY (JSONL)" code={`{
  "timestamp": 1765347141.826, 
  "method": "POST", 
  "url": "https://api.target.com/v1/user", 
  "payload_type": "SSRF_AWS_METADATA",
  "request_body": "REDACTED_CONFIDENTIAL_PAYLOAD", 
  "status_code": 200, 
  "risk_score": "CRITICAL" 
}`} />
                    </div>
                </div>
            </Section>

            {/* 4. INSTALLATION & SETUP (REVISED) */}
            <Section title="Installation & Setup Guide" id="setup">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', fontSize: '1.2rem' }}>
                    Follow these steps to deploy BREAKPOINT on your local machine or Red Team infrastructure.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                    {/* STEP 1 */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>STEP 1: Prerequisites</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text)', opacity: 0.8 }}>
                            <li>➜ <strong>Python 3.8</strong> or higher installed.</li>
                            <li>➜ <strong>Git</strong> installed for version control.</li>
                            <li>➜ <strong>Network Access</strong> to the target environment.</li>
                        </ul>
                    </div>

                    {/* STEP 2 */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>STEP 2: Download Binary</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7, marginBottom: '10px' }}>
                            Fetch the latest pre-compiled binary for your architecture from Releases.
                        </p>
                        <CodeBlock label="TERMINAL (WINDOWS)" code={`# Download latest release
Invoke-WebRequest -Uri "https://github.com/s6ulm9d/Breakpoint/releases/latest/download/breakpoint-windows.exe" -OutFile "breakpoint.exe"`} />

                        <CodeBlock label="TERMINAL (LINUX/MAC)" code={`# Download and make executable
curl -L -o breakpoint https://github.com/s6ulm9d/Breakpoint/releases/latest/download/breakpoint-linux
chmod +x breakpoint`} />
                    </div>

                    {/* STEP 3 */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>STEP 3: Verify Signature</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7, marginBottom: '10px' }}>
                            Validate the cryptographic signature of the binary before execution.
                        </p>
                        <CodeBlock label="TERMINAL" code={`./breakpoint --version
> Breakpoint v2.0.0-ELITE (Build: 2025-12)`} />
                    </div>

                    {/* STEP 4 */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>STEP 4: Launch Audit (Direct)</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7, marginBottom: '10px' }}>
                            Execute the binary directly against the target.
                        </p>
                        <CodeBlock label="TERMINAL" code={`./breakpoint --target http://localhost:3000`} />
                    </div>

                    {/* STEP 5 */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>STEP 5: Launch Your First Audit</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7, marginBottom: '10px' }}>
                            Run the "Elite Scenarios" against a test target.
                        </p>
                        <CodeBlock label="TERMINAL" code={`./breakpoint \\
  --base-url http://localhost:3000 \\
  --scenarios examples/elite_scenarios.yaml \\
  --html-report audit_results.html`} />
                    </div>

                </div>
            </Section>

            {/* NEW SECTION: CI/CD INTEGRATION */}
            <Section title="CI/CD Pipeline Integration" id="cicd">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', fontSize: '1.1rem' }}>
                    Shift Left securely. Embed <strong>BREAKPOINT</strong> directly into your GitHub Actions workflow to block vulnerable builds before they reach production.
                </p>

                <div style={{ marginBottom: '40px' }}>
                    <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>GitHub Actions Workflow (.github/workflows/security.yml)</h4>
                    <CodeBlock label="YAML" code={`name: Breakpoint Security Scan
on: [push, pull_request]

jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          
      - name: Run Attack Simulation
        run: |
          # Download Binary
          curl -L -o breakpoint https://github.com/s6ulm9d/Breakpoint/releases/latest/download/breakpoint-linux
          chmod +x breakpoint
          
          # Fails build if risk_score > 8.0 (Critical)
          ./breakpoint --target https://staging.myapp.com --threshold 8.0 --ci
          
      - name: Upload Forensic Report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: security-report
          path: audit_results.html`} />
                </div>

                <div>
                    <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Exit Codes & Thresholds</h4>
                    <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '20px' }}>
                        The CLI is designed for automation. It returns standard POSIX exit codes based on scan results.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <li style={{ padding: '15px', border: '1px solid #333', background: 'var(--color-dim)' }}>
                            <strong style={{ color: '#00ff41' }}>Exit 0</strong><br />No Critical Vulnerabilities
                        </li>
                        <li style={{ padding: '15px', border: '1px solid #333', background: 'var(--color-dim)' }}>
                            <strong style={{ color: '#ff3e3e' }}>Exit 1</strong><br />Critical Vulnerability Found
                        </li>
                        <li style={{ padding: '15px', border: '1px solid #333', background: 'var(--color-dim)' }}>
                            <strong style={{ color: '#ffbd2e' }}>Exit 2</strong><br />Connection/Target Error
                        </li>
                    </ul>
                </div>
            </Section>

            {/* 5. LEGAL & LIABILITY (CRITICAL) */}
            <Section title="Legal & Liability Framework" id="legal">
                <div style={{
                    background: 'rgba(255, 62, 62, 0.1)',
                    border: '2px solid #ff3e3e',
                    padding: '40px',
                    borderRadius: '0px',
                    position: 'relative'
                }}>
                    <h3 style={{
                        color: '#ff3e3e',
                        marginBottom: '30px',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid #ff3e3e',
                        paddingBottom: '15px'
                    }}>
                        ⚠️ CRITICAL LIABILITY DISCLAIMER
                    </h3>

                    <p style={{ color: 'var(--color-text)', marginBottom: '25px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <strong>BREAKPOINT</strong> is a high-grade Offensive Security Tool (OST) developed solely for educational and defensive testing purposes.
                    </p>

                    <div style={{ background: 'var(--color-dim)', padding: '25px', border: '1px solid rgba(128,128,128,0.2)', marginBottom: '30px' }}>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9, fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.8' }}>
                            "The creator, <strong>Megha Sairaj</strong> (and the <strong>Soulmad</strong> entity), expressly disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the use or misuse of this software.
                            Users assume full legal responsibility for any actions taken with this tool."
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', fontSize: '1rem' }}>
                        <div>
                            <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '10px' }}>1. UNLAWFUL USE</strong>
                            <p style={{ color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6' }}>
                                Using this tool to attack targets without mutual, written consent is illegal.
                                It violates the <strong>Computer Fraud and Abuse Act (CFAA)</strong>, the <strong>IT Act (India)</strong>, and comparable international laws.
                                If you are not the system administrator, DO NOT RUN THIS.
                            </p>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '10px' }}>2. NO WARRANTY</strong>
                            <p style={{ color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6' }}>
                                This software is provided "AS IS", without warranty of any kind.
                                Mechanisms like the "XML Bomb" or "Slowloris" modules <strong>can and will crash production servers</strong>.
                                We are not responsible for your downtime, data corruption, or financial loss.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', textAlign: 'center', borderTop: '1px solid rgba(255,62,62,0.3)', paddingTop: '20px' }}>
                        <span style={{ color: '#ff3e3e', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            By downloading this tool, you agree to these terms.
                        </span>
                    </div>
                </div>
            </Section>

            {/* 6. ABOUT THE ARCHITECT */}
            <Section title="The Architect" id="architect">
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ color: 'var(--color-text)', marginBottom: '20px', fontSize: '1.8rem' }}>Megha Sairaj</h3>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>// SOULMAD INDUSTRIES</h4>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                            Created with the intention of demystifying advanced cyber-warfare for the defensive community.
                            Megha Sairaj built <strong>BREAKPOINT</strong> to bridge the gap between "Compliance Security" and "Real-World Resilience".
                        </p>
                        <p style={{ color: 'var(--color-text)', opacity: 0.7, lineHeight: '1.8' }}>
                            His work focuses on <strong>Offensive Engineering</strong>—building tools that emulate sophisticated adversaries to force systems to evolve.
                            This project represents hours of research into injection vectors, concurrency patterns, and forensic audit methodologies.
                        </p>
                    </div>
                    <div style={{
                        flex: 1,
                        minWidth: '300px',
                        background: 'var(--color-dim)',
                        padding: '30px',
                        borderLeft: '4px solid var(--color-primary)',
                        fontStyle: 'italic'
                    }}>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9, fontSize: '1.2rem', marginBottom: '15px' }}>
                            "We don't break code to destroy it. We break it to understand why it survived as long as it did."
                        </p>
                        <p style={{ color: 'var(--color-text)', opacity: 0.7, textAlign: 'right' }}>— Megha Sairaj</p>
                    </div>
                </div>
            </Section>

        </div>
    );
}
