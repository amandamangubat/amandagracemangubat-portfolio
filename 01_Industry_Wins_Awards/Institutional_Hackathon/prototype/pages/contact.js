// pages/contact.js
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="page">
      <Head>
        <title>Aegis | Contact Sales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logos/favicon.png?v=1" />
      </Head>

      {/* ===== NAV (same as yours, kept here so everything works in ONE file) ===== */}
      <div className="nav-stack">
        <nav className="top-nav">
          <div className="demo-logo">
  <div className="logo">
    <Link href="/" aria-label="Go to homepage">
      <img className="logo-img" src="/logos/Logo.png" alt="Aegis Logo" />
    </Link>
  </div>
</div>


          <div className="tagline">
            Built to verify <br /> Designed to protect.
          </div>
        </nav>

        <nav className="sub-nav">
          <div className="nav-links">
            <Link href="/product" className="nav-link">Product</Link>
            <a href="#">How it Works</a>
            <a href="#">Use Cases</a>
            <a href="#">Developers</a>
            <a href="#">Demo</a>
          </div>

          <div className="nav-right">
            <Link href="/contact" className="contact-btn">
              Contact Sales
            </Link>
          </div>
        </nav>
      </div>

      {/* ===== HERO ===== */}
      <main className="main">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">Contact Sales</h1>
            <p className="hero-sub">
              Talk to our team about using <b>Aegis</b> for your organization.
            </p>
          </div>

          {/* Image 17 overlay */}
          <div className="hero-image-wrap" aria-hidden="true">
            <img className="hero-image" src="/logos/17.png" alt="" />
          </div>
        </section>

        {/* ===== CONTENT ===== */}
        <section className="content">
          <h2 className="why-title">Why Contact Us?</h2>

          <p className="why-text">
            AEGIS works exclusively with institutions and partner organizations. If you are
            representing an educational institution, government office, non-profit organization,
            or enterprise partner and would like to explore how AEGIS can support secure,
            privacy-first verification, we invite you to get in touch with our team.
          </p>

          <p className="why-text">
            Use this page to request a product demonstration, discuss potential partnerships, or
            inquire about integration opportunities. Our team will review your inquiry and
            coordinate the next steps based on your organization’s needs.
          </p>

          <div className="next-steps-card">
            <h3 className="next-steps-title">Next Steps</h3>
            <ol className="next-steps-list">
              <li>We review your inquiry</li>
              <li>We schedule a short discussion or demo</li>
              <li>We explore partnership or pilot options</li>
            </ol>
          </div>

          <div className="privacy-card">
            <div className="privacy-title">Privacy Statement</div>
            <div className="privacy-text">
              <i>
                Contact information is used solely to respond to institutional inquiries and
                partnership discussions.
              </i>
            </div>
          </div>
        </section>
      </main>

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
              <Link href="/product" className="footer-col-title">Product</Link>
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

      {/* ===== STYLES ===== */}
      <style jsx global>{`
        :root {
          --Aegis-red: #901519;
          --border: #e5e5e5;
          --text-gray: #666;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Inter", -apple-system, system-ui, sans-serif;
          color: #000;
          overflow-x: hidden;
          background: #fff;
        }

        /* page wrapper */
        .page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
        }

        /* sticky nav */
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
          opacity: 0.85;
          text-align: right;
          line-height: 1.2;
        }

        .sub-nav {
          background: #d9d9d9;
          padding: 12px 60px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          font-size: 0.85rem;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: #111;
          font-weight: 600;
        }

        .contact-btn {
          text-decoration: none;
          color: #111;
          font-weight: 700;
        }

        /* MAIN */
        .main {
          width: 100%;
        }

        /* HERO with background 18 */
        .hero {
          width: 100%;
          padding: 70px 0 0;
          background-image: url("/logos/18.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center top;
        }

        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .hero-title {
          font-size: 52px;
          margin: 0;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .hero-sub {
          margin: 10px 0 0;
          font-size: 13px;
        }

        /* image 17 placement */
        .hero-image-wrap {
          max-width: 1100px;
          margin: 38px auto 0;
          padding: 0 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          width: min(980px, 92vw);
          height: auto;
          display: block;
          transform: translateY(8px); /* keeps it closer to the title */
        }

        /* CONTENT */
        .content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 10px 24px 0;
          text-align: center;
          background: #fff;
        }

        .why-title {
          margin: 10px 0 14px;
          font-size: 22px;
          font-weight: 800;
          font-style: italic;
        }

        .why-text {
          max-width: 760px;
          margin: 0 auto 14px;
          font-size: 11.5px;
          line-height: 1.55;
        }

        .next-steps-card {
          width: min(760px, 92vw);
          margin: 28px auto 0;
          padding: 26px 34px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .next-steps-title {
          margin: 0 0 10px;
          font-size: 26px;
          font-style: italic;
          font-weight: 800;
        }

        .next-steps-list {
          margin: 0 auto;
          padding: 0 0 0 18px;
          display: inline-block;
          text-align: left;
          font-size: 16px;
          line-height: 1.7;
        }

        .privacy-card {
          width: min(980px, 96vw);
          margin: 40px auto -40px; /* overlap footer slightly like your mock */
          padding: 26px 26px;
          border-radius: 24px;
          color: #fff;
          background: radial-gradient(
            circle at left,
            #8d1216 0%,
            #5d0c0f 55%,
            #2c0709 100%
          );
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
          position: relative;
          z-index: 3;
          text-align: center;
        }

        .privacy-title {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .privacy-text {
          font-size: 13px;
          opacity: 0.95;
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
