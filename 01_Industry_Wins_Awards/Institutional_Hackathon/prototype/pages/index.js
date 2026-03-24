// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function NoDataIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="min-icon-svg">
      <path
        d="M12 12.2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20.6c1.2-3.5 4-5.4 7.5-5.4s6.3 1.9 7.5 5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13.6l3.6 1.7v2.8c0 2-1.6 3.7-3.6 4.3-2-.6-3.6-2.3-3.6-4.3v-2.8L12 13.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.3 18.1l1.1 1.1 2.3-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TokenExpiryIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="min-icon-svg">
      <circle
        cx="12"
        cy="12"
        r="8.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 11.2h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.2 8.7h5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M15.6 15.4h-3.8a1.3 1.3 0 0 0-1.3 1.3v2.1h6.4v-2.1a1.3 1.3 0 0 0-1.3-1.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.4v-1.1a1.7 1.7 0 1 1 3.4 0v1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EncryptedStorageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="min-icon-svg">
      <path
        d="M6.2 7.3c0-2.1 2.6-3.8 5.8-3.8s5.8 1.7 5.8 3.8-2.6 3.8-5.8 3.8-5.8-1.7-5.8-3.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6.2 7.3v9.2c0 2.1 2.6 3.8 5.8 3.8s5.8-1.7 5.8-3.8V7.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16.9 13.5h-3.5a1.2 1.2 0 0 0-1.2 1.2v2.2h5.9v-2.2a1.2 1.2 0 0 0-1.2-1.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 13.5v-1.1a1.7 1.7 0 1 1 3.4 0v1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AuditLogsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="min-icon-svg">
      <path
        d="M8 3.8h8a2 2 0 0 1 2 2v12.4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.8a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.4h6M9 11.6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13.7l3.2 1.5v2.4c0 1.8-1.4 3.3-3.2 3.8-1.8-.5-3.2-2-3.2-3.8v-2.4L12 13.7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17l1 1 2.2-2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarBadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="identity-icon-svg"
    >
      <path
        d="M12 2.6l2.8 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.1 6.4 20l1.1-6.3L2.9 9.2l6.3-.9L12 2.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity="0.35"
      />
    </svg>
  );
}

function SealCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="identity-icon-svg"
    >
      <path
        d="M12 2.8l2.5 1.4 2.8-.4 1.4 2.5 2.5 1.4-.4 2.8 1.4 2.5-2.5 1.4-1.4 2.5-2.8-.4L12 21.2l-2.5-1.4-2.8.4-1.4-2.5-2.5-1.4.4-2.8L1.8 12l2.5-1.4 1.4-2.5 2.8.4L12 2.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 12.2l2.3 2.3 5.4-5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClipboardClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="identity-icon-svg"
    >
      <path
        d="M9 4.5h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 3.8h8a2 2 0 0 1 2 2v12.4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.8a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.8h4a1.2 1.2 0 0 1 1.2 1.2v1.3H8.8V4a1.2 1.2 0 0 1 1.2-1.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="16.7"
        cy="16.7"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16.7 15.2v1.7l1.1.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --- NEW ICONS FOR "WHY DO WE CARE?" BLOCK --- */

function CareMegaphoneIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="28" fill="currentColor" />
      <path
        d="M22 35l-2-8 22-9c1.2-.5 2.5.4 2.5 1.7v22.6c0 1.3-1.3 2.2-2.5 1.7L22 35z"
        fill="#fff"
      />
      <path
        d="M20 27h-4c-1 0-2 .8-2 1.8v4.4c0 1 1 1.8 2 1.8h5"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 36l2.5 9c.3 1.2 1.4 2 2.7 2h2.1c1.8 0 3.1-1.7 2.7-3.4L34 35"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M46 27l5-2M46.8 33.5l5 1.2M46 39l4 3"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CareShieldLockIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        d="M32 6l22 10v18c0 14.5-9.5 22.7-22 26C19.5 56.7 10 48.5 10 34V16L32 6z"
        fill="currentColor"
      />
      <path
        d="M32 12l16 7v14c0 10.8-7 16.8-16 19-9-2.2-16-8.2-16-19V19l16-7z"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        opacity="0.8"
      />
      <path
        d="M26 30v-3.5c0-3.3 2.7-6 6-6s6 2.7 6 6V30"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="22" y="30" width="20" height="16" rx="3" fill="#fff" />
      <path d="M32 36v6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="36" r="2.2" fill="currentColor" />
    </svg>
  );
}

function CareAuditIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        d="M14 14h22l8 8v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M36 14v10h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M20 28h18M20 34h18M20 40h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M41 38a10 10 0 1 0 3.5 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M52 38v8h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M44 26l8-3-3 8-9 9-5 1 1-5 8-10z"
        fill="currentColor"
        opacity="0.95"
      />
    </svg>
  );
}

function CareIntegrationIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        d="M14 23c6 0 10 6 14 6s8-6 14-6c4 0 8 2 10 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 26l10 10c2 2 6 2 8 0l4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 42a16 16 0 0 1-28 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="44" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M44 39v3M44 50v3M37 46h3M48 46h3M39.3 41.3l2.1 2.1M46.6 48.6l2.1 2.1M48.6 41.3l-2.1 2.1M41.4 48.6l-2.1 2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="44" cy="46" r="3.3" fill="currentColor" opacity="0.95" />
    </svg>
  );
}

function IdentityRow({ feature, showDivider }) {
  return (
    <li className="identity-row">
      <div className="identity-icon-wrap">{feature.icon}</div>
      <p className="identity-row-text">{feature.text}</p>

      {showDivider ? <div className="identity-divider" aria-hidden="true" /> : null}
    </li>
  );
}

/* --- NEW "WHY DO WE CARE?" ROW --- */
function CareRow({ item }) {
  return (
    <li className="care-row">
      <div className="care-icon" aria-hidden="true">
        {item.icon}
      </div>
      <div className="care-text">
        <p className="care-title-right">{item.title}</p>
        <p className="care-subtitle-right">{item.subtitle}</p>
      </div>
    </li>
  );
}

export default function Home() {
  const identityFeatures = [
    {
      icon: <StarBadgeIcon />,
      text: "Aegis replaces raw personal data with temporary\nmasked identity tokens",
    },
    {
      icon: <SealCheckIcon />,
      text: "Institutions and partnerships verify validity, not\npersonal details",
    },
    {
      icon: <ClipboardClockIcon />,
      text: "All access is logged and auditable",
    },
  ];

    const minimizationFeatures = [
      { icon: <NoDataIcon />, text: "No unnecessary\npersonal data stored" },
      { icon: <TokenExpiryIcon />, text: "Token-based verification\nwith expiration" },
      { icon: <EncryptedStorageIcon />, text: "Encrypted storage" },
      { icon: <AuditLogsIcon />, text: "Full audit logs for\naccountability" },
    ];


  const careFeatures = [
    {
      icon: <CareMegaphoneIcon />,
      title: "Reduced Liability",
      subtitle: "Minimized exposure in breaches",
    },
    {
      icon: <CareShieldLockIcon />,
      title: "Privacy-by-Design",
      subtitle: "Less data collected, less risk",
    },
    {
      icon: <CareAuditIcon />,
      title: "Audit & Accountability",
      subtitle: "Every verification is logged",
    },
    {
      icon: <CareIntegrationIcon />,
      title: "Easy Integration",
      subtitle: "API-based, no complex setup",
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>Aegis | Built to verify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logos/favicon.png?v=1" />
      </Head>

      <div className="nav-stack">
        <nav className="top-nav">
          <div className="logo">
  <Link href="/" aria-label="Go to homepage">
    <img className="logo-img" src="/logos/Logo.png" alt="Aegis Logo" />
  </Link>
</div>
          <div className="tagline">
            Built to verify <br />
            Designed to protect
          </div>
        </nav>

        <nav className="sub-nav">
          <div className="nav-links">
            <Link href="/product" className="nav-link">Product</Link>
            <a href="#">How it Works</a>
            <a href="#">Use Cases</a>
            <a href="#">Developers</a>
            <Link href="/demo">Demo</Link>
          </div>

          <div className="nav-right">
            <Link href="/contact_form" className="contact-btn">
              Contact Sales
            </Link>
          </div>
        </nav>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {[...Array(11)].map((_, i) => {
            const num = i + 1;
            const extension = [6, 8, 9, 11].includes(num) ? "jpg" : "png";

            return (
              <div className="partner-logo" key={`a-${num}`}>
                <img src={`/logos/${num}.${extension}`} alt={`Partner ${num}`} />
              </div>
            );
          })}

          {[...Array(11)].map((_, i) => {
            const num = i + 1;
            const extension = [6, 8, 9, 11].includes(num) ? "jpg" : "png";

            return (
              <div className="partner-logo" key={`b-${num}`}>
                <img src={`/logos/${num}.${extension}`} alt={`Partner ${num}`} />
              </div>
            );
          })}
        </div>
      </div>

      <main>
        <header className="hero">
          <h1>
            A mask isn't <span className="deception">deception.</span>
            <br />
            It's protection.
          </h1>

          <p className="subtitle">Privacy-First Identity Verification for Modern Organizations</p>

          <div className="hero-buttons">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-secondary">View How It Works</button>
          </div>
        </header>

        <section className="problem-section">
          <div className="problem-panel">
            <div className="problem-content">
              <h2>
                The Problem with{" "}
                <span className="serif-italic">Traditional Identity Verification</span>
              </h2>

              <div className="problem-grid">
                <div className="callout-column">
                  <div className="callout callout--org left">
                    <p>Organizations collect more personal data than necessary</p>
                    <div className="line" />
                  </div>

                  <div className="callout callout--breach left">
                    <p>High risk of data breaches and misuse</p>
                    <div className="line" />
                  </div>
                </div>

                <div className="callout-column">
                  <div className="callout callout--trust right">
                    <div className="line" />
                    <p>Loss of user trust</p>
                  </div>

                  <div className="callout callout--regs right">
                    <div className="line" />
                    <p>Increasing pressure from privacy regulations</p>
                  </div>
                </div>
              </div>

              <div className="problem-footer">
                <p>
                  More data doesn’t mean more security — it means <strong>more risk.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="identity-section">
          <div className="identity-inner">
            <div className="identity-left">
              <h2 className="identity-title">
                A Better Way to <br />
                Verify <span className="identity-emph">Identity</span>
              </h2>

              <ul className="identity-list">
                {identityFeatures.map((f, idx) => (
                  <IdentityRow
                    key={idx}
                    feature={f}
                    showDivider={idx !== identityFeatures.length - 1}
                  />
                ))}
              </ul>

              <p className="identity-footnote">
                Aegis verifies <strong>identity</strong> — not identity details.
              </p>
            </div>

            <div className="identity-right" aria-hidden="true">
              <div className="identity-road-frame">
                <Image
                  src="/logos/15.png"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className="identity-road-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="how-section">
          <h2 className="how-title">
            How <span className="how-accent">Aegis</span> Works?
          </h2>

          <div className="how-cards">
            <div className="how-card how-1">An organization requests identity verification</div>
            <div className="how-card how-2">A user generates a masked identity token</div>
            <div className="how-card how-3">The organization verifies via Aegis API</div>
            <div className="how-card how-4">Only limited, non-sensitive data is returned</div>
          </div>
        </section>

        {/* ✅ NEW: "Why Do We Care?" block */}
        <section className="care-section">
          <div className="care-frame">
            <div className="care-inner">
              <div className="care-left">
                <h2 className="care-title-left">Why Do We Care?</h2>
                <div className="care-underline" aria-hidden="true" />
              </div>

              <div className="care-right">
                <ul className="care-list">
                  {careFeatures.map((item) => (
                    <CareRow key={item.title} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="min-section">
            <h2 className="min-title">
              Security Through Data <span className="min-accent">Minimization</span>
            </h2>

            <div className="min-features">
              {minimizationFeatures.map((f, i) => (
                <div className="min-feature" key={i}>
                  <div className="min-icon">{f.icon}</div>
                  <p className="min-text">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="min-demo-card">
              <div className="min-demo-content">
                <h3 className="min-demo-title">
                  See Aegis in <span className="min-demo-accent">Action</span>
                </h3>

                <p className="min-demo-sub">
                  Experience how identity verification works without exposing personal data.
                </p>

                <Link href="/demo" className="min-demo-btn">
                  Launch Demo
                </Link>
              </div>
            </div>
          </section>
          {/* ===== FOOTER (logo pinned LEFT, locale pinned RIGHT) ===== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img className="footer-logo" src="/logos/Logo.png" alt="Aegis Logo" />
            <div className="footer-tagline">
              <i>
                Built to verify. <br />
                Designed to protect.
              </i>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="#">How It Works</a>
              <a href="#">Use Cases</a>
              <a href="#">Developers</a>
              <a href="#">Demo</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Account</div>
              <a href="#">Log In / Sign Up</a>
              <a href="#">About Us</a>
              <a href="#">Contact Sales</a>
              <a href="#">Pricing</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Team Photos</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="locale">
              <span className="globe">🌐</span> United States (English)
            </div>
            <div className="copyright">© 2026 Aegis, BSIS.</div>
          </div>
        </div>
      </footer>

      </main>

      <style jsx global>{`
        :root {
          --Aegis-red: #901519;
          --border: #e5e5e5;
          --text-gray: #666;
          --panel-radius: 80px;
          --panel-shadow: 0 10px 90px rgba(0, 0, 0, 0.12);
          --pattern-size: 2000px auto;
          --pattern-opacity: 0.28;
          --pattern-position: center;
          --overlay-size: 1200px auto;
          --overlay-opacity: 0.9;
          --overlay-x: center;
          --overlay-y: top;
          --callout-side-padding: 70px;
          --callout-grid-gap: 140px;
          --callout-default-line: 80px;
        }

        body {
          margin: 0;
          font-family: "Inter", -apple-system, system-ui, sans-serif;
          color: #000;
          background-color: #fff;
          background-image: url("/logos/12.png");
          background-repeat: no-repeat;
          background-position: left 140px;
          background-size: 1400px auto;
          background-attachment: scroll;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: none;
          padding: 0;
          margin: 0;
        }

        .nav-stack {
          position: sticky;
          top: 0;
          z-index: 9999;
        }

        .top-nav {
          background: #000;
          color: #fff;
          padding: 15px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-img {
          height: 54px;
          width: auto;
          display: block;
        }

        .tagline {
          font-size: 0.75rem;
          font-style: italic;
          opacity: 0.8;
          text-align: right;
          line-height: 1.2;
        }

        .sub-nav {
          background: #f5f5f5;
          padding: 12px 60px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          font-size: 0.85rem;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-gray);
          font-weight: 600;
        }

        .contact-btn {
          text-decoration: none;
          color: var(--text-gray);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .carousel-container {
          width: 100%;
          height: 100px;
          overflow: hidden;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
        }

        .carousel-track {
          display: flex;
          width: calc(250px * 22);
          animation: scroll 25s linear infinite;
        }

        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }

        .partner-logo {
          width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partner-logo img {
          height: 35px;
          transition: transform 0.1s ease;
        }

        .partner-logo img:hover {
          transform: scale(1.15);
          cursor: pointer;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 5));
          }
        }

        .hero {
          text-align: center;
          padding: 120px 20px 240px;
          max-width: 950px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 500;
          margin-bottom: 15px;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .deception {
          color: var(--Aegis-red);
          font-style: italic;
          font-weight: 700;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--text-gray);
          margin-bottom: 45px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .btn-primary {
          background: var(--Aegis-red);
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary {
          background: transparent;
          color: #000;
          border: 1.5px solid #000;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .problem-section {
          padding: 0 0 90px;
          background: transparent;
        }

        .problem-panel {
          width: 100vw;
          margin: -120px 0 0;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          border-radius: var(--panel-radius) var(--panel-radius) 0 0;
          box-shadow: var(--panel-shadow);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          position: relative;
          background: #ffffff;
        }

        .problem-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/logos/13.png");
          background-repeat: repeat;
          background-size: var(--pattern-size);
          background-position: var(--pattern-position);
          opacity: var(--pattern-opacity);
          pointer-events: none;
          z-index: 0;
        }

        .problem-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/logos/14.png");
          background-repeat: no-repeat;
          background-size: var(--overlay-size);
          background-position: var(--overlay-x) var(--overlay-y);
          opacity: var(--overlay-opacity);
          pointer-events: none;
          z-index: 1;
        }

        .problem-content {
          position: relative;
          z-index: 2;
          padding: 20px 20px;
          text-align: center;
        }

        .problem-content h2 {
          font-size: 2.5rem;
          margin-bottom: 170px;
          font-weight: 700;
        }

        .serif-italic {
          font-family: "Georgia", serif;
          font-style: italic;
          font-weight: 400;
        }

        .problem-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--callout-grid-gap);
          margin-bottom: 50px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .callout-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 110px;
        }

        .problem-grid .callout-column:first-child {
          padding-right: var(--callout-side-padding);
        }

        .problem-grid .callout-column:last-child {
          padding-left: var(--callout-side-padding);
        }

        .callout {
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          color: #333;
          font-weight: 500;
          --dx: 0px;
          --dy: 0px;
          --line-w: var(--callout-default-line);
          transform: translate(var(--dx), var(--dy));
        }

        .callout.left {
          text-align: right;
          justify-content: flex-end;
        }

        .callout.right {
          text-align: left;
          justify-content: flex-start;
        }

        .line {
          width: var(--line-w);
          height: 1px;
          background: #cfcfcf;
          margin: 0 15px;
        }

        .callout--org {
          --dx: -80px;
          --dy: -50px;
          --line-w: 300px;
        }

        .callout--breach {
          --dx: -50px;
          --dy: 0px;
          --line-w: 50px;
        }

        .callout--trust {
          --dx: 0px;
          --dy: 70px;
          --line-w: 200px;
        }

        .callout--regs {
          --dx: 30px;
          --dy: 60px;
          --line-w: 80px;
        }

        .problem-footer {
          background-color: var(--Aegis-red);
          color: white;
          padding: 20px 40px;
          display: inline-block;
          margin-top: 80px;
          border-radius: 14px;
        }

        .problem-footer p {
          margin: 0;
          font-style: italic;
          font-size: 1.1rem;
        }

        .identity-section {
          background: #ffffff;
          padding: 90px 0 110px;
        }

        .identity-inner {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .identity-left {
          text-align: left;
        }

        .identity-title {
          margin: 0 0 28px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.05;
          font-size: clamp(40px, 4.2vw, 64px);
          color: #111111;
        }

        .identity-emph {
          color: var(--Aegis-red);
        }

        .identity-list {
          list-style: none;
          padding: 0;
          margin: 0;
          width: min(640px, 100%);
        }

        .identity-row {
          position: relative;
          display: grid;
          grid-template-columns: 56px 1fr;
          align-items: center;
          column-gap: 16px;
          padding: 18px 0;
        }

        .identity-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #111111;
          border: 2px solid rgba(0, 0, 0, 0.85);
          background: #ffffff;
        }

        .identity-icon-svg {
          width: 26px;
          height: 26px;
        }

        .identity-row-text {
          margin: 0;
          white-space: pre-line;
          font-size: 18px;
          line-height: 1.4;
          color: #222222;
        }

        .identity-divider {
          position: absolute;
          left: 56px;
          right: 0;
          bottom: 0;
          height: 1px;
          background: #e7e7e7;
        }

        .identity-footnote {
          margin: 46px 0 0;
          font-size: 20px;
          line-height: 1.35;
          font-style: italic;
          color: #111111;
        }

        .identity-footnote strong {
          font-weight: 800;
          font-style: italic;
        }

        .identity-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .identity-road-frame {
          position: relative;
          width: 100%;
          height: min(560px, 72vh);
        }

        .identity-road-img {
          object-fit: cover;
          object-position: right center;
          transform: scale(1.15);
          transform-origin: right center;
        }

        @media (max-width: 900px) {
          .problem-grid {
            flex-direction: column;
            gap: 40px;
          }

          .callout-column {
            gap: 30px;
            padding: 0 !important;
          }

          .callout {
            transform: none;
          }

          .callout.left,
          .callout.right {
            justify-content: center;
            text-align: center;
          }

          .line {
            display: none;
          }

          .problem-panel {
            margin-top: -70px;
          }

          .identity-inner {
            grid-template-columns: 1fr;
            gap: 28px;
            width: min(1000px, calc(100% - 32px));
          }

          .identity-road-frame {
            height: 44vh;
          }

          .identity-footnote {
            font-size: 18px;
          }
        }

        /* ✅ HOW IT WORKS SECTION */
        .how-section {
          position: relative;
          padding: 90px 20px;
          background: #fff;
          overflow: hidden;
          text-align: center;
        }

        .how-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/logos/16.png");
          background-repeat: no-repeat;
          background-position: center 30%;
          background-size: cover;
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
        }

        .how-section * {
          position: relative;
          z-index: 1;
        }

        .how-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 35px;
        }

        .how-accent {
          color: var(--Aegis-red);
        }

        .how-cards {
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: center;
        }

        .how-card {
          width: min(920px, 92vw);
          padding: 22px 34px;
          border-radius: 22px;
          font-size: 1.35rem;
          font-weight: 600;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
        }

        .how-1 {
          background: #fff;
          border: 1px solid #ddd;
          transform: rotate(-3deg);
        }

        .how-2 {
          background: var(--Aegis-red);
          color: #fff;
          transform: rotate(2deg);
        }

        .how-3 {
          background: #000;
          color: #fff;
          transform: rotate(-2deg);
        }

        .how-4 {
          background: #d9d9d9;
          color: #000;
          transform: rotate(4deg);
        }

        /* ✅ NEW: WHY DO WE CARE? (matches screenshot style) */
        .care-section {
          background: #fff;
          padding: 80px 0 120px; /* ✅ no left/right padding so the frame can hit edges */
        }

        .care-frame {
          width: 100vw; /* ✅ full-bleed */
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          position: relative;
          border-radius: 0; /* ✅ reaches edges cleanly */
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          border-left: 0;
          border-right: 0;
          overflow: hidden;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.08);
          background: linear-gradient(
            135deg,
            #bdbdbd 0%,
            #d0d0d0 46%,
            #e2e2e2 62%,
            #f0f0f0 100%
          );
        }

        .care-inner {
          position: relative;
          z-index: 1;
          width: min(1200px, calc(100% - 64px)); /* ✅ content stays nicely centered */
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
          padding: 64px 0; /* ✅ vertical padding only; horizontal handled by width */
        }

        @media (max-width: 900px) {
          .care-inner {
            width: min(1000px, calc(100% - 32px));
            grid-template-columns: 1fr;
            padding: 44px 0;
            text-align: left;
            }
          }   
          

        .care-frame::before {
          content: "";
          position: absolute;
          inset: 18px;
          z-index: 2;
          border: 2px solid rgba(0, 0, 0, 0.10);
          border-radius: 8px;
          pointer-events: none;
        }

        .care-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
          padding: 64px 64px;
        }

        .care-left {
          padding-left: 10px;
        }

        .care-title-left {
          margin: 0;
          font-size: clamp(40px, 5vw, 58px);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #111;
        }

        .care-underline {
          margin-top: 16px;
          height: 4px;
          width: 92px;
          background: var(--Aegis-red);
          border-radius: 999px;
          position: relative;
        }

        .care-underline::after {
          content: "";
          position: absolute;
          left: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%);
          height: 4px;
          width: 34px;
          border-radius: 999px;
          opacity: 0.75;
          background: repeating-linear-gradient(90deg, #1f1f1f 0 4px, transparent 4px 8px);
        }

        .care-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .care-row {
          display: grid;
          grid-template-columns: 74px 1fr;
          align-items: center;
          column-gap: 18px;
        }

        .care-icon {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          color: var(--Aegis-red);
        }

        .care-icon svg {
          width: 74px;
          height: 74px;
          display: block;
        }

        .care-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .care-title-right {
          margin: 0;
          font-family: "Georgia", serif;
          font-size: 34px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.01em;
        }

        .care-subtitle-right {
          margin: 0;
          font-family: "Georgia", serif;
          font-size: 18px;
          font-style: italic;
          color: rgba(0, 0, 0, 0.62);
        }

        @media (max-width: 900px) {
          .care-inner {
            grid-template-columns: 1fr;
            padding: 44px 28px;
            text-align: left;
          }

          .care-title-right {
            font-size: 28px;
          }

          .care-subtitle-right {
            font-size: 16px;
          }
        }

        .min-section {
          padding: 90px 20px 110px;
          background: #fff;
          text-align: center;
        }

        .min-title {
          margin: 0 0 34px;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .min-accent {
          color: var(--Aegis-red);
        }

        .min-features {
          width: min(1100px, 94vw);
          margin: 0 auto 44px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 34px;
          align-items: start;
        }

        .min-feature {
          display: grid;
          justify-items: center;
          row-gap: 14px;
        }

        .min-icon {
          width: 76px;
          height: 76px;
          display: grid;
          place-items: center;
          color: var(--Aegis-red);
        }

        .min-icon-svg {
          width: 64px;
          height: 64px;
        }

        .min-text {
          margin: 0;
          white-space: pre-line;
          font-style: italic;
          font-size: 0.98rem;
          line-height: 1.35;
          color: #111;
        }

        /* ✅ demo card */
        .min-demo-card {
          width: min(1200px, 94vw);
          height: clamp(240px, 34vw, 360px);
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          position: relative;

          /* Replace the url(...) with your own server-room image if you have one */
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.55)
            ),
            url("/images/datacenter.jpg");
          background-size: cover;
          background-position: center;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.18);
        }

        .min-demo-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            60% 80% at 50% 35%,
            rgba(255, 255, 255, 0.12),
            rgba(0, 0, 0, 0)
          );
          pointer-events: none;
        }

        .min-demo-content {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 30px;
          text-align: center;
        }

        .min-demo-title {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .min-demo-accent {
          color: var(--Aegis-red);
        }

        .min-demo-sub {
          margin: 0 0 20px;
          color: rgba(255, 255, 255, 0.78);
          font-style: italic;
          font-size: clamp(14px, 1.8vw, 18px);
          max-width: 720px;
        }

        .min-demo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border-radius: 999px;
          background: var(--Aegis-red);
          color: #fff;
          font-weight: 800;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
          transition: transform 0.15s ease, filter 0.15s ease;
        }

        .min-demo-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.02);
        }

        /* ✅ responsive */
        @media (max-width: 900px) {
          .min-features {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 520px) {
          .min-features {
            grid-template-columns: 1fr;
          }
        }
        
        /* FOOTER */
        .footer {
          background: #000;
          color: #fff;
          padding: 70px 0 34px; /* enough space for the overlap, but NOT huge */
          position: relative;
          z-index: 2;
        }

        .footer-inner {
          width: 100%;
          padding: 0 60px;
          display: grid;
          grid-template-columns: auto 1fr auto; /* LEFT | CENTER | RIGHT */
          align-items: center;
          gap: 28px;
        }

        .footer-left {
          justify-self: start; /* pin LEFT */
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-logo {
          height: 56px; /* keeps logo NORMAL size */
          width: auto;
          display: block;
        }

        .footer-tagline {
          font-size: 11px;
          opacity: 0.9;
          line-height: 1.3;
        }

        .footer-cols {
          justify-self: center; /* keep centered */
          display: flex;
          gap: 70px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11px;
        }

        .footer-col-title {
          font-weight: 800;
          margin-bottom: 6px;
          font-size: 11px;
        }

        .footer-col a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
        }

        .footer-right {
          justify-self: end; /* pin RIGHT */
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 11px;
          opacity: 0.95;
          white-space: nowrap;
        }

        .locale {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          font-weight: 600;
        }

        .globe {
          font-size: 13px;
        }

        .copyright {
          opacity: 0.9;
        }

        /* responsive */
        @media (max-width: 980px) {
          .top-nav,
          .sub-nav {
            padding-left: 20px;
            padding-right: 20px;
          }
          .footer-inner {
            padding-left: 20px;
            padding-right: 20px;
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-left,
          .footer-right {
            justify-self: center;
            text-align: center;
            align-items: center;
          }
          .footer-cols {
            justify-self: center;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
          }
          .locale {
            justify-content: center;
          }
          .privacy-card {
            margin-left: 16px;
            margin-right: 16px;
          }
        }

      `}</style>
    </div>
  );
}
