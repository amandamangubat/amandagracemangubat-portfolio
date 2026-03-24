import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function AegisUltimateDemo() {
  const [isMasked, setIsMasked] = useState(true);
  const [logs, setLogs] = useState([]);
  const [isRequesting, setIsRequesting] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Create a ref to auto-scroll to the bottom of the logs
  const logEndRef = useRef(null);

  useEffect(() => {
    setLogs([
      "[SYSTEM]: Aegis Shield Protocol v1.0.4 Initialized...",
      "[AUTH]: CIIT Validator Node Connected.",
    ]);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleToggleRequest = () => {
    if (isMasked) {
      setIsRequesting(true);
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] [PENDING]: Permission request sent...`,
      ]);

      setTimeout(() => {
        setIsRequesting(false);
        setIsMasked(false);
        setLogs((prev) => [
          ...prev,
          `[${timestamp}] [GRANTED]: Access approved via Aegis Auth.`,
        ]);
      }, 2000);
    } else {
      setIsMasked(true);
      setLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] [ENCRYPT]: Shield re-engaged.`,
      ]);
    }
  };

  return (
    <div className="demo-page">
      <Head>
        <title>Aegis | Interactive Masking Demo</title>
      </Head>

      <nav className="demo-nav">
  <Link href="/" className="back-link">
    ← Back to Aegis Home
  </Link>

  <Link href="/" className="demo-logo" aria-label="Go to Aegis Home">
    AEGIS
  </Link>
</nav>


      <main className="demo-content">
        <div className="demo-intro">
          <h1>
            Identity Masking <span>Interface</span>
          </h1>
          <p>
            Selective disclosure demo for <strong>CIIT</strong> Career Partners.
            Recruiters must request access to unmask sensitive student data.
          </p>

          <div className="shield-toggle-container">
            <span className={!isMasked ? "label-active" : ""}>REVEALED</span>
            <button
              className={`shield-toggle ${isMasked ? "on" : "off"} ${isRequesting ? "requesting" : ""}`}
              onClick={handleToggleRequest}
              disabled={isRequesting}
            >
              <div className="knob">
                {isRequesting ? "⏳" : isMasked ? "🔒" : "🔓"}
              </div>
              {isMasked && <div className="pulse-ring"></div>}
            </button>
            <span className={isMasked ? "label-active" : ""}>SHIELDED</span>
          </div>
        </div>

        <div className="demo-grid">
          {/* --- LEFT: INTERACTIVE CARD --- */}
          <div
            className={`profile-card ${isMasked ? "is-shielded" : "is-revealed"}`}
          >
            <div className="card-banner">
              {isRequesting
                ? "WAITING FOR STUDENT APPROVAL..."
                : isMasked
                  ? "🛡️ AEGIS PROTOCOL ACTIVE"
                  : "⚠️ AEGIS PROTOCOL DISABLED"}
            </div>

            <div className="card-inner">
              <div className="user-info">
                <div className="avatar">{isMasked ? "?" : "JD"}</div>
                <div>
                  <h3>{isMasked ? "•••••••• ••••••••" : "Juan Dela Cruz"}</h3>
                  <p>CIIT B.S. Information Systems</p>
                </div>
              </div>

              <div className="data-grid">
                <div className="data-item">
                  <label>Contact Number</label>
                  <div className="value-box">
                    {isMasked ? "09XX-XXX-XXXX" : "0917-555-0123"}
                  </div>
                </div>
                <div className="data-item">
                  <label>Email Address</label>
                  <div className="value-box">
                    {isMasked
                      ? "••••••••@student.ciit.edu.ph"
                      : "j.delacruz@student.ciit.edu.ph"}
                  </div>
                </div>

                <div className="data-item full-width">
                  <label className="zk-label">
                    Academic Verification <span className="info-icon">i</span>
                    <div className="tooltip">
                      Verified by CIIT Registrar Node: CIIT-VER-992
                    </div>
                  </label>
                  <div className="credential-list">
                    <div className="cred-pill">
                      <span className="check">✓</span> GPA:{" "}
                      {isMasked ? "Top 5% Verified" : "3.85 (Cum Laude)"}
                    </div>
                    <div className="cred-pill">
                      <span className="check">✓</span> Internship:{" "}
                      {isMasked ? "Aegis Verified" : "Google PH (3 Mos)"}
                    </div>
                  </div>
                </div>

                <div className="data-item full-width">
                  <label>Verified Skill Stack (Institutional Proof)</label>
                  <div className="skills-grid">
                    {[
                      { name: "React / Next.js", hash: "sha256:7f8e..." },
                      { name: "Cybersecurity", hash: "sha256:3a1b..." },
                    ].map((skill, idx) => (
                      <div key={idx} className="skill-box">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="v-tag">VERIFIED</span>
                        </div>
                        <div className="skill-hash">
                          {isMasked ? skill.hash : "View CIIT Signature"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                className="download-btn"
                onClick={() => alert("Generating Encrypted PDF...")}
              >
                Download Shielded CV (PDF)
              </button>
            </div>
          </div>

          {/* --- RIGHT: STICKY SECURITY CONSOLE --- */}
          <div className="console-sticky-wrapper">
            <div className="security-logs">
              <div className="log-header">AEGIS SECURITY CONSOLE</div>
              <div className="log-body">
                {logs.map((log, i) => (
                  <div key={i} className="log-entry">
                    {log}
                  </div>
                ))}
                {/* Scroll target */}
                <div ref={logEndRef} />
                <div className="cursor">_</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .demo-page {
          min-height: 100vh;
          background: #ffffff;
          color: #000000;
          font-family: "Inter", sans-serif;
        }
        .demo-nav {
          padding: 20px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid #d1d2d4;
        }
        .back-link {
          color: #901519;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .demo-logo {
          font-weight: 900;
          letter-spacing: 1px;
          color: #000000;
        }
        .demo-logo span {
          color: #901519;
          font-weight: 400;
          font-size: 0.8rem;
          margin-left: 10px;
        }
        .demo-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .demo-intro {
          text-align: center;
          margin-bottom: 40px;
        }
        .demo-intro h1 {
          font-size: 2.5rem;
          color: #000000;
        }
        .demo-intro h1 span {
          color: #901519;
        }
        .demo-intro p {
          color: #666666;
          max-width: 600px;
          margin: 10px auto 40px;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
          align-items: start;
        }

        .shield-toggle-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .shield-toggle {
          width: 80px;
          height: 40px;
          border-radius: 40px;
          border: none;
          background: #f0f0f0;
          cursor: pointer;
          position: relative;
          transition: 0.3s;
          border: 1px solid #d1d2d4;
        }
        .shield-toggle.on {
          background: #901519;
        }
        .shield-toggle.requesting {
          background: #d1d2d4;
          cursor: wait;
        }
        .knob {
          width: 32px;
          height: 32px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 4px;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          border: 1px solid #d1d2d4;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .shield-toggle.on .knob {
          left: 44px;
          background: #ffffff;
        }
        .label-active {
          color: #901519;
          font-weight: 700;
        }
        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          background: #901519;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .profile-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #d1d2d4;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: 0.5s;
        }
        .is-shielded {
          border-color: #901519;
          box-shadow: 0 4px 12px rgba(144, 21, 25, 0.1);
        }
        .is-revealed {
          border-color: #2ecc71;
          box-shadow: 0 4px 12px rgba(46, 204, 113, 0.1);
        }
        .card-banner {
          padding: 10px;
          font-size: 0.7rem;
          text-align: center;
          font-weight: 800;
          background: #f5f5f5;
          color: #000000;
        }
        .is-shielded .card-banner {
          background: #901519;
          color: #ffffff;
        }
        .is-revealed .card-banner {
          background: #2ecc71;
          color: #ffffff;
        }

        .card-inner {
          padding: 40px;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }
        .avatar {
          width: 60px;
          height: 60px;
          background: #f5f5f5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          border: 2px solid #901519;
          color: #000000;
        }

        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }
        .full-width {
          grid-column: 1 / span 2;
        }
        .data-item label {
          display: block;
          font-size: 0.7rem;
          color: #666666;
          text-transform: uppercase;
          margin-bottom: 5px;
          position: relative;
        }
        .value-box {
          font-size: 0.95rem;
          font-weight: 500;
          color: #000000;
          transition: 0.3s;
          padding: 8px 0;
        }
        .is-shielded .value-box:not(.verified-text) {
          background: #f5f5f5;
          color: #f5f5f5;
          border-radius: 6px;
          user-select: none;
          padding: 8px 12px;
        }

        .credential-list {
          display: flex;
          gap: 10px;
          margin-top: 5px;
        }
        .cred-pill {
          background: rgba(46, 204, 113, 0.1);
          border: 1px solid #2ecc71;
          color: #2ecc71;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 5px;
        }
        .skill-box {
          background: #f9f9f9;
          padding: 12px;
          border-radius: 8px;
          border-left: 3px solid #901519;
          color: #000000;
          border: 1px solid #eaeaea;
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-size: 0.85rem;
          font-weight: 700;
        }
        .v-tag {
          font-size: 0.5rem;
          background: #42b98b;
          color: #ffffff;
          padding: 2px 5px;
          border-radius: 3px;
          font-weight: 900;
        }
        .skill-hash {
          font-family: monospace;
          font-size: 0.6rem;
          color: #666666;
          margin-top: 4px;
        }

        .console-sticky-wrapper {
          position: sticky;
          top: 20px;
          height: fit-content;
        }

        .security-logs {
          background: #000000;
          border-radius: 8px;
          border: 1px solid #333;
          height: 450px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .log-header {
          background: #222;
          padding: 10px;
          font-size: 0.7rem;
          color: #d1d2d4;
          border-bottom: 1px solid #333;
          font-family: monospace;
          flex-shrink: 0;
        }
        .log-body {
          padding: 15px;
          font-size: 0.75rem;
          color: #0f0;
          line-height: 1.6;
          font-family: "Courier New", monospace;
          flex-grow: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #333 #000000;
        }

        .log-body::-webkit-scrollbar {
          width: 6px;
        }
        .log-body::-webkit-scrollbar-thumb {
          background-color: #333;
          border-radius: 10px;
        }

        .log-entry {
          margin-bottom: 8px;
          animation: fadeIn 0.3s ease-in;
          word-break: break-all;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: #0f0;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .zk-label {
          cursor: help;
        }
        .info-icon {
          background: #901519;
          color: #ffffff;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          margin-left: 5px;
        }
        .tooltip {
          visibility: hidden;
          position: absolute;
          bottom: 100%;
          left: 0;
          background: #901519;
          color: #ffffff;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.6rem;
          width: 220px;
          z-index: 10;
          margin-bottom: 5px;
          line-height: 1.2;
        }
        .zk-label:hover .tooltip {
          visibility: visible;
        }

        .download-btn {
          width: 100%;
          margin-top: 30px;
          background: transparent;
          color: #901519;
          border: 1px solid #901519;
          padding: 12px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }
        .download-btn:hover {
          background: #901519;
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .demo-grid {
            grid-template-columns: 1fr;
          }
          .console-sticky-wrapper {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}
