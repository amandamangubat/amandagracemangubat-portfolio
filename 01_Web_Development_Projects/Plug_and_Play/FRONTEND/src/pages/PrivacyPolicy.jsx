import React, { useEffect, useRef, useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("information-collect");
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef({});

  // Smooth scroll when clicking sidebar
  const handleSidebarClick = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // IntersectionObserver for active/visible sections
  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-100px 0px -50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (!id) return;

        if (entry.isIntersecting) {
          setActiveSection(id);
          setVisibleSections((prev) =>
            prev.includes(id) ? prev : [...prev, id]
          );
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div className="bg-[#110b39] text-gray-900 pt-24">
      {/* Hero Section */}
      <section className="bg-white min-h-96 flex items-center pt-8 pb-8 relative">
        <div className="w-full px-8">
          <div className="max-w-8xl mx-auto text-center">
            <div
              className="rounded-3xl p-20 shadow-2xl mx-auto max-w-7xl relative overflow-hidden"
              style={{
                backgroundImage: "url('3-BG.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl" />
              <div className="relative z-10">
                <h1 className="text-6xl font-bold text-white mb-6 leading-tight pixel-font">
                  PRIVACY POLICY
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  At PLUG&amp;PLAY, we are committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use,
                  and safeguard your data when you use our gaming hardware store
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-8 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-12">
            {/* Sidebar TOC */}
            <aside className="w-80 flex-shrink-0 hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-6 text-gray-800">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm font-medium text-gray-700">
                    {[
                      {
                        id: "information-collect",
                        icon: "ri-database-line",
                        label: "Information We Collect",
                      },
                      {
                        id: "how-use-information",
                        icon: "ri-settings-line",
                        label: "How We Use Your Information",
                      },
                      {
                        id: "data-protection",
                        icon: "ri-shield-check-line",
                        label: "How We Protect Your Data",
                      },
                      {
                        id: "cookies-policy",
                        icon: "ri-cookie-line",
                        label: "Cookies & Tracking",
                      },
                      {
                        id: "third-party-services",
                        icon: "ri-links-line",
                        label: "Third-Party Services",
                      },
                      {
                        id: "sharing-information",
                        icon: "ri-share-line",
                        label: "Sharing of Information",
                      },
                      {
                        id: "user-rights",
                        icon: "ri-user-settings-line",
                        label: "Your Privacy Rights",
                      },
                      {
                        id: "data-retention",
                        icon: "ri-time-line",
                        label: "Data Retention Policy",
                      },
                      {
                        id: "children-privacy",
                        icon: "ri-parent-line",
                        label: "Children's Privacy",
                      },
                      {
                        id: "international-transfers",
                        icon: "ri-global-line",
                        label: "International Data Transfers",
                      },
                      {
                        id: "policy-updates",
                        icon: "ri-refresh-line",
                        label: "Updates to This Policy",
                      },
                      {
                        id: "contact-privacy",
                        icon: "ri-customer-service-line",
                        label: "Contact Us About Privacy",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSidebarClick(item.id);
                        }}
                        className={`w-full text-left block px-4 py-3 rounded-lg sidebar-item flex items-center gap-2 ${
                          activeSection === item.id ? "active" : ""
                        }`}
                      >
                        <i className={`${item.icon} text-primary`} />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content sections */}
            <div className="flex-1 space-y-12 text-gray-700 leading-relaxed">
              {/* 1. Information We Collect */}
              <section
                id="information-collect"
                ref={(el) => (sectionRefs.current["information-collect"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("information-collect") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-database-line text-2xl text-primary mr-3" />
                  INFORMATION WE COLLECT
                </h2>
                <p className="mb-4">
                  We may collect the following information when you visit our
                  website or make a purchase:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Personal Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Name and contact details</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Billing and shipping address</li>
                      <li>Payment card information</li>
                      <li>Date of birth (for age verification)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Technical Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Device information</li>
                      <li>Website usage analytics</li>
                      <li>Cookies and tracking pixels</li>
                    </ul>
                  </div>
                </div>
                <p>
                  We also collect information about your interactions with our
                  website, including pages visited, products viewed, search
                  queries, and purchase history to improve your shopping
                  experience.
                </p>
              </section>

              {/* 2. How We Use Your Information */}
              <section
                id="how-use-information"
                ref={(el) => (sectionRefs.current["how-use-information"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("how-use-information") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-settings-line text-2xl text-primary mr-3" />
                  HOW WE USE YOUR INFORMATION
                </h2>
                <p className="mb-4">We use your information for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Processing orders and payments</li>
                  <li>Providing customer support and service</li>
                  <li>Shipping products to your address</li>
                  <li>Sending order confirmations and updates</li>
                  <li>Improving our website and services</li>
                  <li>Personalizing your shopping experience</li>
                  <li>Sending promotional emails (with your consent)</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Complying with legal obligations</li>
                  <li>Analyzing website performance and user behavior</li>
                </ul>
                <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                  <p className="font-semibold text-secondary mb-2">
                    Marketing Communications:
                  </p>
                  <p className="text-sm">
                    We will only send you marketing emails if you have opted in
                    to receive them. You can unsubscribe at any time by clicking
                    the unsubscribe link in our emails or contacting us
                    directly.
                  </p>
                </div>
              </section>

              {/* 3. How We Protect Your Data */}
              <section
                id="data-protection"
                ref={(el) => (sectionRefs.current["data-protection"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("data-protection") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-shield-check-line text-2xl text-primary mr-3" />
                  HOW WE PROTECT YOUR DATA
                </h2>
                <p className="mb-4">
                  We take data security seriously and implement multiple layers
                  of protection:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-sm">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-lock-line text-2xl text-green-600" />
                    </div>
                    <p className="font-semibold">SSL Encryption</p>
                    <p className="text-xs text-gray-600">
                      256-bit SSL encryption for all data transmission
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-server-line text-2xl text-blue-600" />
                    </div>
                    <p className="font-semibold">Secure Servers</p>
                    <p className="text-xs text-gray-600">
                      Data stored on secure, monitored servers
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-shield-user-line text-2xl text-primary" />
                    </div>
                    <p className="font-semibold">Access Controls</p>
                    <p className="text-xs text-gray-600">
                      Limited employee access on a need-to-know basis
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Firewall protection and intrusion detection systems</li>
                  <li>
                    Secure payment processing through PCI DSS-compliant
                    providers
                  </li>
                  <li>Regular encrypted data backups</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response procedures for data breaches</li>
                </ul>
                <p>
                  While we implement industry-standard security measures, no
                  method of transmission over the internet is 100% secure. We
                  cannot guarantee absolute security but are committed to
                  protecting your information.
                </p>
              </section>

              {/* 4. Cookies & Tracking */}
              <section
                id="cookies-policy"
                ref={(el) => (sectionRefs.current["cookies-policy"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("cookies-policy") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-cookie-line text-2xl text-primary mr-3" />
                  COOKIES &amp; TRACKING
                </h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Essential Cookies:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Shopping cart functionality</li>
                      <li>User authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Website performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Optional Cookies:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Analytics and usage statistics</li>
                      <li>Personalized content and recommendations</li>
                      <li>Social media integration</li>
                      <li>Advertising and marketing campaigns</li>
                    </ul>
                  </div>
                </div>
                <p className="mb-4">
                  You can manage your cookie preferences through your browser
                  settings. However, disabling certain cookies may limit website
                  functionality and your user experience.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-700 mb-2">
                    Cookie Management:
                  </p>
                  <p className="text-sm text-yellow-600">
                    Most web browsers automatically accept cookies, but you can
                    modify your browser settings to decline cookies if you
                    prefer. Please note that some features of our website may
                    not function properly if cookies are disabled.
                  </p>
                </div>
              </section>

              {/* 5. Third-Party Services */}
              <section
                id="third-party-services"
                ref={(el) => (sectionRefs.current["third-party-services"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("third-party-services") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-links-line text-2xl text-primary mr-3" />
                  THIRD-PARTY SERVICES
                </h2>
                <p className="mb-4">
                  We work with trusted third-party service providers to enhance
                  our services:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Payment Processors:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>PayPal for secure online payments</li>
                      <li>Stripe for credit card processing</li>
                      <li>Bank transfer services</li>
                      <li>Digital wallet providers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Analytics &amp; Marketing:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Google Analytics for website analytics</li>
                      <li>Facebook Pixel for advertising</li>
                      <li>Email marketing platforms</li>
                      <li>Customer support tools</li>
                    </ul>
                  </div>
                </div>
                <p className="mb-4">
                  These third parties have their own privacy policies and may
                  collect, use, and share your information according to their
                  terms. We encourage you to review their privacy policies
                  before using their services.
                </p>
                <p className="mb-4">
                  We only share the minimum necessary information with third
                  parties to provide our services and ensure they meet our data
                  protection standards through contractual agreements.
                </p>
              </section>

              {/* 6. Sharing of Information */}
              <section
                id="sharing-information"
                ref={(el) => (sectionRefs.current["sharing-information"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("sharing-information") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-share-line text-2xl text-primary mr-3" />
                  SHARING OF INFORMATION
                </h2>
                <p className="mb-4">
                  We do not sell, rent, or trade your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    With service providers who help us operate our business
                    (shipping, payment processing, customer support)
                  </li>
                  <li>
                    When required by law or to comply with legal processes
                  </li>
                  <li>
                    To protect our rights, property, or safety, or that of our
                    users
                  </li>
                  <li>
                    In connection with a business transfer, merger, or
                    acquisition
                  </li>
                  <li>With your explicit consent for specific purposes</li>
                  <li>
                    To prevent fraud or investigate suspected illegal activities
                  </li>
                </ul>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary mb-2">
                    Data Sharing Principles:
                  </p>
                  <p className="text-sm">
                    All third parties we work with are required to maintain the
                    confidentiality and security of your information and are
                    prohibited from using it for any purpose other than
                    providing services to us.
                  </p>
                </div>
              </section>

              {/* 7. Your Privacy Rights */}
              <section
                id="user-rights"
                ref={(el) => (sectionRefs.current["user-rights"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("user-rights") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-user-settings-line text-2xl text-primary mr-3" />
                  YOUR PRIVACY RIGHTS
                </h2>
                <p className="mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Access Rights:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Request copies of your personal data</li>
                      <li>Know what information we collect about you</li>
                      <li>Understand how we use your information</li>
                      <li>See who we share your data with</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">
                      Control Rights:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Correct inaccurate or incomplete data</li>
                      <li>Delete your personal information</li>
                      <li>Restrict processing of your data</li>
                      <li>Object to certain uses of your information</li>
                    </ul>
                  </div>
                </div>
                <p className="mb-4">
                  To exercise these rights, please contact us using the
                  information provided in the &quot;Contact Us About
                  Privacy&quot; section. We will respond to your request within
                  30 days.
                </p>
                <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                  <p className="font-semibold text-secondary mb-2">
                    Data Portability:
                  </p>
                  <p className="text-sm">
                    You have the right to receive your personal data in a
                    structured, commonly used format and to transmit that data
                    to another service provider where technically feasible.
                  </p>
                </div>
              </section>

              {/* 8. Data Retention Policy */}
              <section
                id="data-retention"
                ref={(el) => (sectionRefs.current["data-retention"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("data-retention") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-time-line text-2xl text-primary mr-3" />
                  DATA RETENTION POLICY
                </h2>
                <p className="mb-4">
                  We retain your personal information for as long as needed to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Provide our services and support your account</li>
                  <li>Comply with legal, regulatory, or tax requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Improve our products and services</li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-user-line text-2xl text-blue-600" />
                    </div>
                    <p className="font-semibold text-sm">Account Data</p>
                    <p className="text-xs text-gray-600">
                      Retained while account is active + 3 years after closure
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-shopping-bag-line text-2xl text-green-600" />
                    </div>
                    <p className="font-semibold text-sm">Transaction Records</p>
                    <p className="text-xs text-gray-600">
                      Kept for 7 years for tax and legal compliance
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-line-chart-line text-2xl text-primary" />
                    </div>
                    <p className="font-semibold text-sm">Analytics Data</p>
                    <p className="text-xs text-gray-600">
                      Anonymized and retained for 2 years maximum
                    </p>
                  </div>
                </div>
                <p>
                  When we no longer need your personal information, we will
                  securely delete or anonymize it in accordance with our data
                  destruction procedures.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section
                id="children-privacy"
                ref={(el) => (sectionRefs.current["children-privacy"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("children-privacy") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-parent-line text-2xl text-primary mr-3" />
                  CHILDREN&apos;S PRIVACY
                </h2>
                <p className="mb-4">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13 without verifiable parental consent.
                </p>
                <p className="mb-4">
                  If we become aware that we have collected personal information
                  from a child under 13 without parental consent, we will take
                  immediate steps to delete that information from our systems.
                </p>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-700 mb-2">
                    Parental Notice:
                  </p>
                  <p className="text-sm text-orange-600">
                    If you are a parent or guardian and believe your child has
                    provided us with personal information, please contact us
                    immediately so we can delete the information and terminate
                    any associated accounts.
                  </p>
                </div>
              </section>

              {/* 10. International Data Transfers */}
              <section
                id="international-transfers"
                ref={(el) =>
                  (sectionRefs.current["international-transfers"] = el)
                }
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("international-transfers") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-global-line text-2xl text-primary mr-3" />
                  INTERNATIONAL DATA TRANSFERS
                </h2>
                <p className="mb-4">
                  Your personal information may be transferred to and processed
                  in countries other than the Philippines, including the United
                  States and European Union, where our service providers
                  operate.
                </p>
                <p className="mb-4">
                  When we transfer your data internationally, we ensure
                  appropriate safeguards are in place:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Standard contractual clauses approved by relevant
                    authorities
                  </li>
                  <li>
                    Adequacy decisions recognizing equivalent data protection
                  </li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-700 mb-2">
                    Data Protection Standards:
                  </p>
                  <p className="text-sm text-blue-600">
                    All international transfers comply with applicable data
                    protection laws and maintain the same level of protection as
                    required in the Philippines.
                  </p>
                </div>
              </section>

              {/* 11. Updates to This Policy */}
              <section
                id="policy-updates"
                ref={(el) => (sectionRefs.current["policy-updates"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("policy-updates") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-refresh-line text-2xl text-primary mr-3" />
                  UPDATES TO THIS POLICY
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other factors. When we make significant changes, we will
                  notify you by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Posting the updated policy on our website with a &quot;Last
                    Updated&quot; date
                  </li>
                  <li>Sending an email notification to registered users</li>
                  <li>Displaying a prominent notice on our website</li>
                  <li>
                    Requesting your consent for material changes where required
                    by law
                  </li>
                </ul>
                <p className="mb-4">
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we protect your information. Your
                  continued use of our services after any changes constitutes
                  acceptance of the updated policy.
                </p>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary mb-2">
                    Version Control:
                  </p>
                  <p className="text-sm">
                    We maintain a record of all policy versions and can provide
                    previous versions upon request for your reference.
                  </p>
                </div>
              </section>

              {/* 12. Contact Us About Privacy */}
              <section
                id="contact-privacy"
                ref={(el) => (sectionRefs.current["contact-privacy"] = el)}
                className={`content-section bg-white rounded-xl p-8 border border-gray-200 shadow-sm ${
                  isVisible("contact-privacy") ? "visible" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800">
                  <i className="ri-customer-service-line text-2xl text-primary mr-3" />
                  CONTACT US ABOUT PRIVACY
                </h2>
                <p className="mb-6">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  using the information below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                        <i className="ri-shield-user-line text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Data Protection Officer
                        </h4>
                        <p className="text-sm text-gray-600">
                          PLUG&amp;PLAY Gaming Hardware Store
                          <br />
                          Privacy Department
                          <br />
                          123 Gaming Street, Tech District
                          <br />
                          Makati City, Metro Manila 1200
                          <br />
                          Philippines
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                        <i className="ri-mail-line text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Privacy Email
                        </h4>
                        <p className="text-sm text-gray-600">
                          privacy@plugandplay.ph
                          <br />
                          dpo@plugandplay.ph
                          <br />
                          We respond within 48 hours
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                        <i className="ri-phone-line text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Privacy Hotline
                        </h4>
                        <p className="text-sm text-gray-600">
                          +63 2 8123 4567 ext. 301
                          <br />
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Philippine Standard Time (PST)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                        <i className="ri-file-text-line text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Data Subject Requests
                        </h4>
                        <p className="text-sm text-gray-600">
                          Submit requests online through our Privacy Portal or
                          send written requests to the address above.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary mb-2">
                    Last Updated:
                  </p>
                  <p className="text-sm text-gray-700">
                    This Privacy Policy was last updated on November 29, 2025.
                    We are committed to protecting your privacy and will
                    continue to improve our practices to ensure your data
                    remains secure.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
