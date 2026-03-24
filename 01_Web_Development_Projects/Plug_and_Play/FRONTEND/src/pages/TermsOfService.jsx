import React, { useEffect, useRef, useState } from "react";

const TOC_SECTIONS = [
  { id: "acceptance", label: "Acceptance of Terms", icon: "ri-check-line" },
  { id: "use-website", label: "Use of the Website", icon: "ri-global-line" },
  {
    id: "user-accounts",
    label: "User Accounts & Registration",
    icon: "ri-user-settings-line",
  },
  {
    id: "product-info",
    label: "Product Information & Pricing",
    icon: "ri-information-line",
  },
  {
    id: "ordering-payment",
    label: "Ordering & Payment",
    icon: "ri-shopping-bag-3-line",
  },
  {
    id: "shipping-delivery",
    label: "Shipping & Delivery",
    icon: "ri-truck-line",
  },
  { id: "returns-refunds", label: "Returns & Refunds", icon: "ri-refund-line" },
  {
    id: "warranty-support",
    label: "Warranty & Support",
    icon: "ri-customer-service-2-line",
  },
  {
    id: "user-content",
    label: "User Content & Reviews",
    icon: "ri-chat-3-line",
  },
  {
    id: "limitation-liability",
    label: "Limitation of Liability",
    icon: "ri-error-warning-line",
  },
  {
    id: "governing-law",
    label: "Governing Law & Dispute Resolution",
    icon: "ri-scales-3-line",
  },
  {
    id: "changes-terms",
    label: "Changes to These Terms",
    icon: "ri-loop-left-line",
  },
  { id: "contact-info", label: "Contact Information", icon: "ri-phone-line" },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("acceptance");
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

  // IntersectionObserver for active/visible sections (same behavior as original JS)
  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter((el) => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
            setVisibleSections((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // On first load, fade all sections in after a short delay
    const timeout = setTimeout(() => {
      setVisibleSections(TOC_SECTIONS.map((s) => s.id));
    }, 500);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white min-h-96 flex items-center pt-32 pb-8 relative">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="terms-bg rounded-3xl p-20 shadow-2xl mx-auto max-w-7xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl" />
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight pixel-font">
                  TERMS OF SERVICE
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Please read these Terms of Service carefully before using our
                  gaming hardware store. By accessing or using our services, you
                  agree to be bound by these terms and conditions.
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
            {/* Sidebar Table of Contents */}
            <aside className="w-80 flex-shrink-0 hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-6 text-gray-800">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {TOC_SECTIONS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSidebarClick(item.id)}
                        className={`sidebar-item block w-full text-left px-4 py-3 rounded-lg text-sm font-medium cursor-pointer ${
                          activeSection === item.id ? "active" : ""
                        }`}
                      >
                        <span className="w-6 h-6 inline-flex items-center justify-center mr-3 align-middle">
                          <i className={`${item.icon} text-primary`} />
                        </span>
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content sections */}
            <div className="flex-1">
              <div className="space-y-12">
                {/* ACCEPTANCE OF TERMS */}
                <div
                  id="acceptance"
                  ref={(el) => (sectionRefs.current["acceptance"] = el)}
                  className={`content-section ${
                    isVisible("acceptance") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-check-line text-2xl text-primary" />
                      </div>
                      ACCEPTANCE OF TERMS
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        By visiting, accessing, or using the PLUG&amp;PLAY
                        website, you acknowledge that you have read, understood,
                        and agree to be bound by these Terms of Service. These
                        terms constitute a legally binding agreement between you
                        and PLUG&amp;PLAY Gaming Hardware Store.
                      </p>
                      <p className="mb-4">
                        If you do not agree to these terms, please discontinue
                        using the website immediately. Your continued use of our
                        services constitutes acceptance of any modifications to
                        these terms.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          You must be at least 18 years old to make purchases
                        </li>
                        <li>
                          You are responsible for maintaining the
                          confidentiality of your account
                        </li>
                        <li>
                          You agree to provide accurate and complete information
                        </li>
                        <li>
                          You understand that these terms may be updated
                          periodically
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* USE OF THE WEBSITE */}
                <div
                  id="use-website"
                  ref={(el) => (sectionRefs.current["use-website"] = el)}
                  className={`content-section ${
                    isVisible("use-website") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-global-line text-2xl text-primary" />
                      </div>
                      USE OF THE WEBSITE
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        PLUG&amp;PLAY grants you a limited, non-exclusive,
                        non-transferable license to access and use our website
                        for personal and commercial purposes in accordance with
                        these Terms of Service.
                      </p>
                      <p className="mb-4">You may NOT use our website:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>
                          For any unlawful purpose or to solicit others to
                          engage in unlawful acts
                        </li>
                        <li>
                          To violate any international, federal, provincial, or
                          state regulations, rules, laws, or local ordinances
                        </li>
                        <li>
                          To infringe upon or violate our intellectual property
                          rights or the intellectual property rights of others
                        </li>
                        <li>
                          To harass, abuse, insult, harm, defame, slander,
                          disparage, intimidate, or discriminate against others
                        </li>
                        <li>To submit false or misleading information</li>
                        <li>
                          To upload or transmit viruses or any other type of
                          malicious code
                        </li>
                      </ul>
                      <p>
                        We reserve the right to terminate your use of the
                        service or any related website for violating any of the
                        prohibited uses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* USER ACCOUNTS & REGISTRATION */}
                <div
                  id="user-accounts"
                  ref={(el) => (sectionRefs.current["user-accounts"] = el)}
                  className={`content-section ${
                    isVisible("user-accounts") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-user-settings-line text-2xl text-primary" />
                      </div>
                      USER ACCOUNTS &amp; REGISTRATION
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        To access certain features of the website, including
                        placing orders and tracking purchases, you may be
                        required to create a PLUG&amp;PLAY account.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-lg mb-3 text-gray-800">
                            Account Requirements:
                          </h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Valid email address</li>
                            <li>Secure password (minimum 8 characters)</li>
                            <li>Accurate personal information</li>
                            <li>Agreement to terms and conditions</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-lg mb-3 text-gray-800">
                            Account Responsibilities:
                          </h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Keep login credentials secure</li>
                            <li>Update information when necessary</li>
                            <li>Report unauthorized access immediately</li>
                            <li>Comply with all terms of service</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        You agree to immediately notify PLUG&amp;PLAY of any
                        unauthorized use of your account or any other breach of
                        security. We will not be liable for any loss or damage
                        arising from your failure to comply with this security
                        obligation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PRODUCT INFORMATION & PRICING */}
                <div
                  id="product-info"
                  ref={(el) => (sectionRefs.current["product-info"] = el)}
                  className={`content-section ${
                    isVisible("product-info") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-information-line text-2xl text-primary" />
                      </div>
                      PRODUCT INFORMATION &amp; PRICING
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We strive to display accurate product descriptions,
                        images, and pricing details on the PLUG&amp;PLAY
                        website. However, we do not warrant that product
                        information is error-free, complete, or current.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Prices are subject to change without prior notice.
                        </li>
                        <li>
                          In the event of a pricing error, we reserve the right
                          to cancel or refuse any orders placed at the incorrect
                          price.
                        </li>
                        <li>
                          Product availability is not guaranteed and may be
                          limited.
                        </li>
                      </ul>
                      <p>
                        If a product that you ordered is unavailable or
                        incorrectly priced, we may contact you to offer a
                        substitution, updated pricing, or a full refund.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ORDERING & PAYMENT */}
                <div
                  id="ordering-payment"
                  ref={(el) => (sectionRefs.current["ordering-payment"] = el)}
                  className={`content-section ${
                    isVisible("ordering-payment") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-shopping-bag-3-line text-2xl text-primary" />
                      </div>
                      ORDERING &amp; PAYMENT
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        By placing an order through the PLUG&amp;PLAY website,
                        you represent that:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          You are legally capable of entering into binding
                          contracts.
                        </li>
                        <li>
                          All information you provide is true, accurate, and
                          complete.
                        </li>
                        <li>
                          You are authorized to use the payment method provided.
                        </li>
                      </ul>
                      <p className="mb-4">
                        We accept various payment methods, including but not
                        limited to credit/debit cards, digital wallets, and bank
                        transfers, depending on availability at checkout.
                      </p>
                      <p>
                        Orders are not considered final until payment has been
                        successfully processed and you receive an order
                        confirmation email from PLUG&amp;PLAY.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SHIPPING & DELIVERY */}
                <div
                  id="shipping-delivery"
                  ref={(el) => (sectionRefs.current["shipping-delivery"] = el)}
                  className={`content-section ${
                    isVisible("shipping-delivery") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-truck-line text-2xl text-primary" />
                      </div>
                      SHIPPING &amp; DELIVERY
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We aim to process and ship orders within the estimated
                        timeframes displayed at checkout. Delivery times may
                        vary depending on your location, courier partners, and
                        external factors beyond our control.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Shipping fees and estimated delivery times are shown
                          at checkout.
                        </li>
                        <li>
                          Risk of loss and title pass to you upon delivery of
                          the products to the address you provided.
                        </li>
                        <li>
                          Incorrect or incomplete shipping information may
                          result in delays or failed deliveries.
                        </li>
                      </ul>
                      <p>
                        PLUG&amp;PLAY is not liable for delays caused by
                        customs, local courier issues, natural disasters, or
                        other events outside our reasonable control.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RETURNS & REFUNDS */}
                <div
                  id="returns-refunds"
                  ref={(el) => (sectionRefs.current["returns-refunds"] = el)}
                  className={`content-section ${
                    isVisible("returns-refunds") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-refund-line text-2xl text-primary" />
                      </div>
                      RETURNS &amp; REFUNDS
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        If you receive a defective, damaged, or incorrect item,
                        please contact us within the period indicated on our
                        Returns Policy page. We may offer a replacement, store
                        credit, or refund, subject to evaluation.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Products must be returned in original packaging, with
                          all included accessories.
                        </li>
                        <li>
                          Certain items may be non-returnable for hygiene or
                          licensing reasons.
                        </li>
                        <li>
                          Shipping costs for returns may be your responsibility,
                          unless otherwise specified.
                        </li>
                      </ul>
                      <p>
                        We reserve the right to refuse returns that do not meet
                        our conditions or appear to be instances of abuse of our
                        policies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WARRANTY & SUPPORT */}
                <div
                  id="warranty-support"
                  ref={(el) => (sectionRefs.current["warranty-support"] = el)}
                  className={`content-section ${
                    isVisible("warranty-support") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-customer-service-2-line text-2xl text-primary" />
                      </div>
                      WARRANTY &amp; SUPPORT
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Many of our products come with manufacturer warranties.
                        The specific terms, duration, and coverage may vary
                        depending on the brand and item.
                      </p>
                      <p className="mb-4">
                        PLUG&amp;PLAY may assist in coordinating warranty claims
                        but is not responsible for decisions made by
                        manufacturers regarding repairs or replacements.
                      </p>
                      <p>
                        For warranty assistance or technical support, please
                        contact our customer service team or refer to the
                        documentation included with your product.
                      </p>
                    </div>
                  </div>
                </div>

                {/* USER CONTENT & REVIEWS */}
                <div
                  id="user-content"
                  ref={(el) => (sectionRefs.current["user-content"] = el)}
                  className={`content-section ${
                    isVisible("user-content") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-chat-3-line text-2xl text-primary" />
                      </div>
                      USER CONTENT &amp; REVIEWS
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        When you submit reviews, comments, or other content to
                        PLUG&amp;PLAY, you grant us a non-exclusive,
                        royalty-free, worldwide license to use, reproduce,
                        modify, and display such content in connection with our
                        services.
                      </p>
                      <p className="mb-4">
                        You agree that your submitted content will not:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Contain offensive, hateful, or illegal material</li>
                        <li>
                          Infringe on the intellectual property rights of any
                          third party
                        </li>
                        <li>
                          Include false, misleading, or deceptive statements
                        </li>
                      </ul>
                      <p>
                        We reserve the right to remove or edit user content that
                        violates these terms or is otherwise inappropriate at
                        our sole discretion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* LIMITATION OF LIABILITY */}
                <div
                  id="limitation-liability"
                  ref={(el) =>
                    (sectionRefs.current["limitation-liability"] = el)
                  }
                  className={`content-section ${
                    isVisible("limitation-liability") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-error-warning-line text-2xl text-primary" />
                      </div>
                      LIMITATION OF LIABILITY
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        To the fullest extent permitted by law, PLUG&amp;PLAY
                        and its affiliates shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages
                        arising from your use of the website or purchase of our
                        products.
                      </p>
                      <p>
                        Our total liability for any claim relating to the
                        purchase of products through the website is limited to
                        the amount you actually paid for the product giving rise
                        to the claim.
                      </p>
                    </div>
                  </div>
                </div>

                {/* GOVERNING LAW & DISPUTE RESOLUTION */}
                <div
                  id="governing-law"
                  ref={(el) => (sectionRefs.current["governing-law"] = el)}
                  className={`content-section ${
                    isVisible("governing-law") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-scales-3-line text-2xl text-primary" />
                      </div>
                      GOVERNING LAW &amp; DISPUTE RESOLUTION
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        These Terms of Service shall be governed by and
                        construed in accordance with the laws of the Republic of
                        the Philippines, without regard to its conflict of law
                        provisions.
                      </p>
                      <p>
                        Any disputes arising out of or in connection with these
                        terms or your use of the website shall be resolved
                        through amicable negotiation, and if necessary, brought
                        before the proper courts in Metro Manila, Philippines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CHANGES TO THESE TERMS */}
                <div
                  id="changes-terms"
                  ref={(el) => (sectionRefs.current["changes-terms"] = el)}
                  className={`content-section ${
                    isVisible("changes-terms") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-loop-left-line text-2xl text-primary" />
                      </div>
                      CHANGES TO THESE TERMS
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We may update these Terms of Service from time to time
                        to reflect changes in our practices, products, or legal
                        requirements.
                      </p>
                      <p>
                        Any changes will be posted on this page with an updated
                        &quot;Last Updated&quot; date. Your continued use of the
                        website after any modifications indicates your
                        acceptance of the revised terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONTACT INFORMATION */}
                <div
                  id="contact-info"
                  ref={(el) => (sectionRefs.current["contact-info"] = el)}
                  className={`content-section ${
                    isVisible("contact-info") ? "visible" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-4">
                        <i className="ri-phone-line text-2xl text-primary" />
                      </div>
                      CONTACT INFORMATION
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-6">
                        If you have any questions about these Terms of Service
                        or need assistance with legal matters, please contact us
                        using the information below:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary bg-opacity-10 rounded-lg">
                              <i className="ri-building-line text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Company Address
                              </h4>
                              <p className="text-sm text-gray-600">
                                PLUG&amp;PLAY Gaming Hardware Store
                                <br />
                                123 Gaming Street, Tech District
                                <br />
                                Makati City, Metro Manila 1200
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary bg-opacity-10 rounded-lg">
                              <i className="ri-mail-line text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Email Support
                              </h4>
                              <p className="text-sm text-gray-600">
                                support@plugplaygaming.com
                                <br />
                                legal@plugplaygaming.com
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary bg-opacity-10 rounded-lg">
                              <i className="ri-phone-line text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Phone Support
                              </h4>
                              <p className="text-sm text-gray-600">
                                +63 900 123 4567
                                <br />
                                Monday - Friday: 9:00 AM - 6:00 PM
                                <br />
                                Saturday: 10:00 AM - 4:00 PM
                                <br />
                                Sunday: Closed
                                <br />
                                Philippine Standard Time (PST)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-primary bg-opacity-10 rounded-lg border-l-4 border-primary">
                        <p className="font-semibold text-primary mb-2">
                          Last Updated:
                        </p>
                        <p className="text-sm text-gray-700">
                          These Terms of Service were last updated on November
                          29, 2025. We reserve the right to update these terms
                          at any time. Continued use of our services after any
                          changes constitutes acceptance of the new terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END CONTENT SECTIONS */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
