
import React from 'react';
import { motion } from 'framer-motion';

import aggressiveImg from '../assets/--aggressive.png';
import baseUrlImg from '../assets/--base-url.png';
import continuousImg from '../assets/--continuous.png';
import forceLiveFireImg from '../assets/--force-live-fire.png';
import helpImg from '../assets/--help.png';
import htmlReportImg from '../assets/--html-report.png';
import intervalImg from '../assets/--interval.png';
import jsonReportImg from '../assets/--json-report.png';
import sarifReportImg from '../assets/--sarif-report.png';
import verboseImg from '../assets/--verbose.png';
import architectureImg from '../assets/architecture_diagram.png'; // Generated Artifact

import CodeBlock from './ui/CodeBlock';

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
                    <strong>BREAKPOINT</strong> is not a vulnerability scanner; it is a <strong>Red-Team Accelerator</strong>.
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

                    <FeatureList title="NEXT.JS / RSC ARSENAL (NEW)" features={[
                        { name: "Server Action Forgery", desc: "Bypassing auth by fuzzing Next-Action headers to invoke unexposed server functions." },
                        { name: "Async Context Bleed", desc: "Detecting data leakage between users during high-concurrency RSC rendering." },
                        { name: "RSC SSRF", desc: "Injecting cloud metadata URLs into Image Optimization endpoints (_next/image)." },
                        { name: "Hydration Collapse", desc: "Forcing server-side rendering of admin routes via Router-State-Tree manipulation." }
                    ]} />

                    <FeatureList title="DENIAL OF SERVICE (WARFARE)" features={[
                        { name: "XML Bomb (Billion Laughs)", desc: "Recursive entity expansion to exhaust server RAM." },
                        { name: "Slowloris", desc: "Partial HTTP requests to exhaust thread pools/connections." },
                        { name: "ReDoS", desc: "Catastrophic backtracking in Regex engines." },
                        { name: "HTTP Desync", desc: "Request Smuggling via Transfer-Encoding: chunked CL.TE/TE.CL." }
                    ]} />

                    <FeatureList title="AUTHENTICATION & LOGIC FLAWS" features={[
                        { name: "JWT Attacks", desc: "Forging Admin tokens via 'None' algorithm, weak HMAC secrets, and key confusion." },
                        { name: "IDOR / BOLA", desc: "Broken Object Level Authorization. Iterates violently through user IDs." },
                        { name: "Race Conditions", desc: "Exploiting Time-of-Check/Time-of-Use (TOCTOU) for double-spending." },
                        { name: "SSRF (Cloud)", desc: "Targeting AWS IMDSv2, GCP Metadata, and internal K8s endpoints." },
                        { name: "Prototype Pollution", desc: "Injecting properties into Object.prototype to alter application logic." }
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

            {/* 1. QUICK START (NEW) */}
            <Section title="Quick Start Guide" id="quick-start">
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>⚡ Get Running in 2 Minutes</h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '20px' }}>
                            Prerequisites: <strong>None</strong>. The engine is self-contained.
                            No API keys required.
                        </p>

                        <div style={{ marginBottom: '25px' }}>
                            <strong style={{ display: 'block', color: 'var(--color-text)', marginBottom: '10px' }}>1. Zero-Config Run</strong>
                            <CodeBlock label="BASH / POWERSHELL" code={`breakpoint http://localhost:3000`} />
                        </div>

                        <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                            &gt; Engine will Auto-Initialize, generate aggressive profile, and launch report generation.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 2. INSTALLATION & SETUP (REVISED) */}
            <Section title="Installation & Setup Guide" id="setup">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', fontSize: '1.2rem' }}>
                    Welcome to the official installation guide for <strong>BREAKPOINT (Elite Edition)</strong>.
                    Follow these steps to deploy the engine on your system.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

                    {/* END USERS SECTION */}
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '1px solid var(--color-primary)', paddingBottom: '10px', marginBottom: '30px' }}>
                            📦 For End Users (Zero Config)
                        </h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9, marginBottom: '30px' }}>
                            The recommended installation method. We now provide a dedicated installer that handles PATH configuration automatically.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>1. Download the Installer</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '20px' }}>
                                    Navigate to the official Releases page and download the installer for your OS.
                                </p>
                                <motion.a
                                    href="https://github.com/s6ulm9d/Breakpoint/releases/latest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '12px 25px',
                                        background: 'var(--color-primary)',
                                        color: '#000',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        borderRadius: '4px',
                                        fontFamily: 'var(--font-mono)',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>⬇</span> DOWNLOAD INSTALLER
                                </motion.a>
                                <ul style={{ color: 'var(--color-text)', opacity: 0.8, listStyle: 'none', paddingLeft: '15px', borderLeft: '3px solid var(--color-dim)' }}>
                                    <li style={{ marginBottom: '5px' }}><strong>Current Version:</strong> 2.5.2-ELITE</li>
                                    <li><strong>Windows:</strong> breakpoint-installer.exe</li>
                                    <li><strong>Linux/Mac:</strong> breakpoint (binary)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>2. Installation</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                                    <div style={{ background: 'var(--color-dim)', padding: '20px', border: '1px solid #333' }}>
                                        <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '10px' }}>WINDOWS</strong>
                                        <ol style={{ color: 'var(--color-text)', opacity: 0.8, paddingLeft: '20px', lineHeight: '1.6' }}>
                                            <li>Run <code>breakpoint-installer.exe</code>.</li>
                                            <li>Accept the license terms.</li>
                                            <li>Click <strong>Install</strong>.</li>
                                            <li>The tool is automatically added to your System PATH.</li>
                                        </ol>
                                    </div>
                                    <div style={{ background: 'var(--color-dim)', padding: '20px', border: '1px solid #333' }}>
                                        <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '10px' }}>LINUX / MACOS</strong>
                                        <ol style={{ color: 'var(--color-text)', opacity: 0.8, paddingLeft: '20px', lineHeight: '1.6' }}>
                                            <li>Download the binary.</li>
                                            <li>Make it executable: <code>chmod +x breakpoint</code></li>
                                            <li>Run it: <code>./breakpoint</code> (or move to /usr/local/bin).</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>3. Verification</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '15px' }}>
                                    Open a <strong>new</strong> terminal window and verify the installation:
                                </p>
                                <CodeBlock label="TERMINAL" code={`breakpoint --version`} />
                            </div>
                        </div>
                    </div>

                    {/* DEVELOPERS SECTION */}
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '1px solid var(--color-primary)', paddingBottom: '10px', marginBottom: '30px' }}>
                            🛠️ For Developers (Source Code)
                        </h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.9, marginBottom: '30px' }}>
                            Instructions for contributors and engineers who wish to modify or build upon the BREAKPOINT engine.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>Prerequisites</h4>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text)', opacity: 0.8 }}>
                                    <li>➜ <strong>Python</strong>: Version 3.8 or higher.</li>
                                    <li>➜ <strong>Git</strong>: Version control system.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>1. Clone Repository</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '10px' }}>
                                    Retrieve the source code from the repository.
                                </p>
                                <CodeBlock label="BASH" code={`git clone https://github.com/soulmad/breakpoint.git\ncd breakpoint`} />
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>2. Environment Setup</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '10px' }}>
                                    It is highly recommended to run BREAKPOINT in an isolated virtual environment to avoid dependency conflicts.
                                </p>
                                <CodeBlock label="WINDOWS POWERSHELL" code={`python -m venv .venv\n.\\.venv\\Scripts\\activate`} />
                                <CodeBlock label="LINUX / MACOS" code={`python3 -m venv .venv\nsource .venv/bin/activate`} />
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>3. Install Dependencies</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '10px' }}>
                                    Install the package in "editable" mode. This allows changes in the source code to be immediately reflected when running the tool.
                                </p>
                                <CodeBlock label="BASH" code={`pip install -e .`} />
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '10px' }}>4. Usage</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '10px' }}>
                                    Immediately verify your development setup:
                                </p>
                                <CodeBlock label="BASH" code={`breakpoint --help`} />
                            </div>
                        </div>
                    </div>

                    {/* COMMAND REFERENCE */}
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '1px solid var(--color-primary)', paddingBottom: '10px', marginBottom: '30px' }}>
                            📸 Visual CLI Reference
                        </h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '40px' }}>
                            See the engine in action. Below are the supported flags with their usage and expected output.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                            {/* --base-url */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: 'var(--color-primary)', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>REQUIRED</span>
                                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>--base-url</h4>
                                </div>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    The target URL to audit. This is the primary entry point for all tests.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url http://localhost:3000`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={baseUrlImg} alt="--base-url usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --help */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--help</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Displays the help menu with all available arguments and options.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --help`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={helpImg} alt="--help usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --aggressive */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: 'var(--color-primary)', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>DANGER</span>
                                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>--aggressive</h4>
                                </div>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Enables <strong>DESTRUCTIVE</strong> mode. Increases concurrency and uses heavier payloads.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --aggressive`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={aggressiveImg} alt="--aggressive usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --continuous & --interval */}
                            <motion.div style={{ gridColumn: 'span 1' }} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--continuous / --interval</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Runs the audit loop indefinitely. Use <code>--interval</code> to set a delay (in seconds).
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --continuous --interval 60`} />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <motion.div
                                        style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img src={continuousImg} alt="--continuous usage" style={{ width: '100%', display: 'block' }} />
                                    </motion.div>
                                    <motion.div
                                        style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img src={intervalImg} alt="--interval usage" style={{ width: '100%', display: 'block' }} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* --verbose */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--verbose</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Output full network traffic and debug details to the console.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --verbose`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={verboseImg} alt="--verbose usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --html-report */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--html-report</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Generates a comprehensive HTML executive dashboard.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --html-report audit.html`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={htmlReportImg} alt="--html-report usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --json-report */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--json-report</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Exports raw results to a JSON file for machine parsing.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --json-report data.json`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={jsonReportImg} alt="--json-report usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --sarif-report */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '15px' }}>--sarif-report</h4>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Exports results in SARIF format for GitHub Security integration.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --sarif-report security.sarif`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={sarifReportImg} alt="--sarif-report usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                            {/* --force-live-fire */}
                            <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: 'var(--color-primary)', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>CI/CD</span>
                                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>--force-live-fire</h4>
                                </div>
                                <p style={{ color: 'var(--color-text)', opacity: 0.7, marginBottom: '15px', fontSize: '0.9rem', height: '40px' }}>
                                    Bypasses interactive safety checks. Use this for CI/CD pipelines.
                                </p>
                                <CodeBlock label="COMMAND" code={`breakpoint --base-url ... --force-live-fire`} />
                                <motion.div
                                    style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={forceLiveFireImg} alt="--force-live-fire usage" style={{ width: '100%', display: 'block' }} />
                                </motion.div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </Section>

            {/* 4. SCENARIO LIBRARY (NEW) */}
            <Section title="Scenario Library" id="scenarios">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', fontSize: '1.1rem' }}>
                    <strong>BREAKPOINT</strong> ships with battle-tested attack campaigns. Select a preset or build your own.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[
                        { title: 'Reconnaissance', id: 'header_security', desc: 'Passive header analysis, open redirect checks.' },
                        { title: 'Adversarial Injection', id: 'aggressive_sqli_login', desc: 'Active SQLi, XSS, and RCE payload injection.', highlight: true },
                        { title: 'Server-Side Attacks', id: 'ssrf_webhook', desc: 'SSRF, XXE, and RCE parameter testing.' },
                        { title: 'Prototype Pollution', id: 'prototype_pollution_login', desc: 'Advanced NodeJS specific vector.' },
                        { title: 'Denial of Service', id: 'slowloris_dos', desc: 'Slowloris socket exhaustion (Aggressive Mode).' }
                    ].map(s => (
                        <div key={s.id} style={{
                            padding: '25px',
                            border: s.highlight ? '1px solid var(--color-primary)' : '1px solid #333',
                            background: s.highlight ? 'rgba(255,62,62,0.05)' : 'var(--color-dim)'
                        }}>
                            <h4 style={{ color: s.highlight ? 'var(--color-primary)' : 'var(--color-text)', marginBottom: '10px' }}>{s.title}</h4>
                            <p style={{ color: 'var(--color-text)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '15px' }}>{s.desc}</p>
                            <code style={{ background: '#000', padding: '5px', fontSize: '0.8rem' }}>id: {s.id}</code>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. SCENARIO CONFIGURATION (NEW) */}
            <Section title="Scenario Configuration" id="config">
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <p style={{ color: 'var(--color-text)', marginBottom: '20px' }}>
                            Full control over the chaos. Define your specific attack vectors in YAML.
                        </p>
                        <CodeBlock label="custom_scenario.yaml" code={`name: "Custom API Audit"
author: "Security Team"
config:
  concurrency: 50         # Parallel threads
  timeout: 5s            # Request timeout
  retries: 3
  
vectors:
  - type: "sqli"
    payloads: ["' OR 1=1--", "admin'--"]
    points: ["query", "body"]
    
  - type: "xss"
    aggressive: true     # Use polyglots
    
conditions:
  fail_on: ["CRITICAL", "HIGH"]
  stop_on_error: false`} language="yaml" />
                    </div>
                </div>
            </Section>

            {/* 6. ARCHITECTURE (NEW) */}
            <Section title="System Architecture" id="architecture">
                <p style={{ color: 'var(--color-text)', marginBottom: '40px' }}>
                    <strong>BREAKPOINT</strong> is built on a high-performance AsyncIO engine designed for non-blocking adversarial emulation.
                </p>
                <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
                    <img src={architectureImg} alt="System Architecture Diagram" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div>
                        <strong style={{ color: 'var(--color-primary)' }}>1. CLI Runner</strong>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Entry point. Parses flags and loads config.</p>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--color-secondary)' }}>2. Attack Engine</strong>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>AsyncIO event loop managing concurrent vectors.</p>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--color-accent)' }}>3. Traffic Mutator</strong>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>AI-driven payload adaptation based on WAF response.</p>
                    </div>
                    <div>
                        <strong style={{ color: 'white' }}>4. Forensic Logger</strong>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Zero-latency SQLite/JSONL writer.</p>
                    </div>
                </div>
            </Section>

            {/* 7. BENCHMARKS & MITRE (NEW) */}
            <Section title="Performance & Capabilities" id="benchmarks">
                <div style={{ marginBottom: '60px' }}>
                    <h3 style={{ color: 'var(--color-text)', marginBottom: '30px' }}>Startling Performance</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                        <div style={{ padding: '20px', background: 'var(--color-dim)', border: '1px solid #333' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>5k+</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Requests / Sec</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--color-dim)', border: '1px solid #333' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>&lt;15ms</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Avg. Latency</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--color-dim)', border: '1px solid #333' }}>
                            <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>100%</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>CPU Utilization</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--color-dim)', border: '1px solid #333' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>&lt;0.1%</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>False Positives</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: 'var(--color-text)', marginBottom: '30px' }}>MITRE ATT&CK Mapping</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-text)', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
                                <th style={{ padding: '10px' }}>Tactic</th>
                                <th style={{ padding: '10px' }}>Technique ID</th>
                                <th style={{ padding: '10px' }}>Breakpoint Module</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px', color: 'var(--color-accent)' }}>Initial Access</td>
                                <td style={{ padding: '10px' }}>T1190</td>
                                <td style={{ padding: '10px' }}>Exploit Public-Facing Application</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px', color: 'var(--color-accent)' }}>Execution</td>
                                <td style={{ padding: '10px' }}>T1059</td>
                                <td style={{ padding: '10px' }}>Command and Scripting Interpreter</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px', color: 'var(--color-accent)' }}>Discovery</td>
                                <td style={{ padding: '10px' }}>T1083</td>
                                <td style={{ padding: '10px' }}>File and Directory Discovery</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', color: 'var(--color-accent)' }}>Impact</td>
                                <td style={{ padding: '10px' }}>T1498</td>
                                <td style={{ padding: '10px' }}>slowloris (DoS)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* NEW SECTION: CI/CD INTEGRATION */}
            <Section title="CI/CD Pipeline Integration" id="cicd">
                <p style={{ marginBottom: '30px', color: 'var(--color-text)', fontSize: '1.1rem' }}>
                    Shift Left securely. Embed <strong>BREAKPOINT</strong> directly into your GitHub Actions workflow to block vulnerable builds before they reach production.
                </p>

                <div style={{ marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid #333' }}>
                        <button style={{ padding: '10px 20px', background: 'var(--color-dim)', border: 'none', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-primary)' }}>GitHub</button>
                        <button style={{ padding: '10px 20px', background: 'transparent', border: 'none', color: 'var(--color-text)', opacity: 0.6 }}>GitLab</button>
                        <button style={{ padding: '10px 20px', background: 'transparent', border: 'none', color: 'var(--color-text)', opacity: 0.6 }}>Jenkins</button>
                    </div>

                    <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>GitHub Actions Workflow (.github/workflows/security.yml)</h4>
                    <CodeBlock label="YAML" code={`name: Breakpoint Security Scan
on: [push, pull_request]

jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run Attack Simulation
        run: |
          # Download Binary
          curl -L -o breakpoint https://github.com/s6ulm9d/Breakpoint/releases/latest/download/breakpoint-linux
          chmod +x breakpoint
          
          # Fails build if risk_score > 8.0 (Critical)
          ./breakpoint --base-url https://staging.myapp.com --force-live-fire --html-report audit_results.html
          
      - name: Upload Report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: security-report
          path: audit_results.html`} />
                </div>

                <div>
                    <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Troubleshooting & Exit Codes</h4>
                    <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: '20px' }}>
                        The CLI returns POSIX-compliant exit codes for pipeline orchestration.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '30px' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
                                <th style={{ padding: '10px' }}>Code</th>
                                <th style={{ padding: '10px' }}>Meaning</th>
                                <th style={{ padding: '10px' }}>Mitigation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ background: 'rgba(0,255,65,0.05)' }}>
                                <td style={{ padding: '10px', color: '#00ff41', fontWeight: 'bold' }}>0</td>
                                <td style={{ padding: '10px' }}>SUCCESS (Secure)</td>
                                <td style={{ padding: '10px' }}>No critical vulnerabilities found.</td>
                            </tr>
                            <tr style={{ background: 'rgba(255,62,62,0.1)' }}>
                                <td style={{ padding: '10px', color: '#ff3e3e', fontWeight: 'bold' }}>1</td>
                                <td style={{ padding: '10px' }}>CRITICAL FAILURE</td>
                                <td style={{ padding: '10px' }}>Exploit verified. Immediate patch required.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 'bold' }}>2</td>
                                <td style={{ padding: '10px' }}>Target Unreachable</td>
                                <td style={{ padding: '10px' }}>Check DNS, Firewall, or if target is down.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 'bold' }}>3</td>
                                <td style={{ padding: '10px' }}>Config Error</td>
                                <td style={{ padding: '10px' }}>Validate YAML syntax or CLI flags.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 'bold' }}>130</td>
                                <td style={{ padding: '10px' }}>Interrupted</td>
                                <td style={{ padding: '10px' }}>User manually stopped scan (Ctrl+C).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* ROADMAP & GOVERNANCE (NEW) */}
            <Section title="Roadmap & Governance" id="roadmap">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div>
                        <h4 style={{ color: 'var(--color-text)', marginBottom: '20px' }}>Development Roadmap</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px' }}>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Q1 2026 (Short Term)</span>
                                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>• AI-driven GraphQL Fuzzing<br />• Jira/Ticketing Integration</p>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>Q2 2026 (Mid Term)</span>
                                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>• Distributed Agent Grid<br />• Kubernetes Operator</p>
                            </li>
                            <li>
                                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Q4 2026 (Long Term)</span>
                                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>• Autonomous Red Team (ART) SaaS</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-text)', marginBottom: '20px' }}>Release Notes (v2.5.2-ELITE)</h4>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px' }}>Released: Current Build</p>
                        <ul style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.6' }}>
                            <li><strong>NEW:</strong> Next.js / RSC Attack Arsenal</li>
                            <li><strong>NEW:</strong> Zero-Config Windows Installer</li>
                            <li><strong>NEW:</strong> --aggressive Destructive Mode (DROP TABLE)</li>
                            <li><strong>CORE:</strong> 18+ Attack Modules Enabled</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 6. LEGAL & LIABILITY (CRITICAL) */}
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
                            "The creators, <strong>Megha Sairaj & Gantela Sai Sharanya</strong> (and the <strong>Soulmad</strong> entity), expressly disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the use or misuse of this software.
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

            {/* FAQ (NEW) */}
            <Section title="Frequently Asked Questions" id="faq">
                <div style={{ display: 'grid', gap: '30px' }}>
                    {[
                        { q: "Is this safe to run on production?", a: "NO. Unless you use standard mode. Aggressive mode can and will degrade service." },
                        { q: "How destructive is destructive mode?", a: "It uses techniques like 'XML Bomb' and 'Slowloris' which target resource exhaustion. It effectively performs a DoS." },
                        { q: "Can I add custom attack modules?", a: "Yes. Drop new Python modules into the /vectors directory and register them in the YAML config." },
                        { q: "What is the difference between Elite and Standard?", a: "Elite includes the AI mutation engine and Reporting capabilities. Standard is CLI-only." }
                    ].map((item, i) => (
                        <div key={i}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>{item.q}</h4>
                            <p style={{ color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

        </div>
    );
}
