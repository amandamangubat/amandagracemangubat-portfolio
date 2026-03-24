import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
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
            Built to verify <br /> Designed to protect
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
            <Link href="/contact_form" className="contact-btn">
              Contact Sales
            </Link>
          </div>
        </nav>
      </div>

      {/* Put 22.png AFTER 21.png so it continues from the bottom edge */}
      {/* Ensure 22.png exists at: public/logos/22.png */}
      <section className="hero-seam">
        <Image
          src="/logos/21.png"
          alt="AEGIS Verification Platform preview"
          width={718}
          height={1167}
          priority
          sizes="100vw"
          className="seam-img"
        />

        <Image
          src="/logos/22.png"
          alt="AEGIS content section"
          width={544}
          height={2048}
          sizes="100vw"
          className="seam-img"
        />
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


      <style jsx global>{`
        :root {
          --border: #e5e5e5;
          --text-gray: #666;
        }

        body {
          margin: 0;
          font-family: "Inter", -apple-system, system-ui, sans-serif;
          color: #000;
          background: #fff;
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

        /* FULL BLEED + NO GAP BETWEEN IMAGES */
        .hero-seam {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding: 0;

          /* removes tiny gaps caused by inline formatting around Next/Image wrappers */
          font-size: 0;
          line-height: 0;
        }

        /* Next/Image wraps with a span; force block so the stack is tight */
        .hero-seam :global(span) {
          display: block !important;
        }

        .hero-seam :global(img.seam-img) {
          width: 100%;
          height: auto;
          display: block;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          vertical-align: top;
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
