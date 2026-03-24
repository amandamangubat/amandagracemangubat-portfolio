// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section
      className="w-full pt-32 pb-20 min-h-screen relative"
      style={{
        backgroundImage: "url('/5-BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl mb-8 pixel-font" style={{ color: "#110b39" }}>
            NEED HELP?
          </h1>
          <h2 className="text-2xl font-bold mb-12" style={{ color: "#110b39" }}>
            CONTACT US THROUGH:
          </h2>
        </div>

        {/* Contact Information Cards - 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* EMAIL */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">support@plugandplaygaming.com</p>
                <p className="text-sm text-gray-500">
                  We reply within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* TELEPHONE */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Telephone</h3>
                <p className="text-gray-600">(02) 8234-5678</p>
                <p className="text-sm text-gray-500">
                  Mon–Fri: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Mobile Number
                </h3>
                <p className="text-gray-600">+63 917 234 5678</p>
                <p className="text-sm text-gray-500">
                  Available for WhatsApp & Viber
                </p>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Store Location
                </h3>
                <p className="text-gray-600">Unit 2A, Cyberzone Mall</p>
                <p className="text-gray-600">Ortigas Center, Pasig City</p>
                <p className="text-sm text-gray-500">
                  Metro Manila, Philippines 1605
                </p>
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Business Hours
                </h3>
                <p className="text-gray-600">Mon–Fri: 9:00 AM – 8:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM – 7:00 PM</p>
                <p className="text-gray-600">Sunday: 11:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* LIVE CHAT */}
          <div className="contact-card p-6 rounded-xl bg-white/95 backdrop-blur border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Live Chat Support
                </h3>
                <p className="text-gray-600">Available on our website</p>
                <p className="text-sm text-gray-500">
                  Instant responses during business hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mb-16">
          <div
            className="map-container h-96 rounded-2xl overflow-hidden relative"
            style={{
              backgroundImage: "url('/MAP-Placeholder.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="map-overlay w-full h-full flex items-center justify-center bg-white/10 backdrop-blur">
              <div className="bg-white bg-opacity-90 p-6 rounded-xl text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-primary rounded-full">
                  <i className="ri-map-pin-fill text-white text-2xl"></i>
                </div>
                <p className="font-bold text-gray-800 text-lg">
                  PLUG&PLAY Gaming Store
                </p>
                <p className="text-gray-600 mb-2">Unit 2A, Cyberzone Mall</p>
                <p className="text-gray-600 mb-2">Ortigas Center, Pasig City</p>
                <p className="text-sm text-gray-500">
                  Metro Manila, Philippines 1605
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM + FOLLOW US */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="contact-form p-8 rounded-xl bg-white/98 backdrop-blur border border-primary/10">
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "#110b39" }}
            >
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-button hover:bg-opacity-90 transition-all font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media / Connection */}
          <div className="text-center">
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "#110b39" }}
            >
              Follow Us & Stay Connected
            </h3>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                ["facebook-fill", "primary"],
                ["twitter-fill", "secondary"],
                ["instagram-fill", "primary"],
                ["youtube-fill", "secondary"],
                ["discord-fill", "primary"],
              ].map(([icon, bg], i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-12 h-12 flex items-center justify-center bg-${bg} rounded-full hover:bg-opacity-90 transition-all`}
                >
                  <i className={`ri-${icon} text-2xl text-white`}></i>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FAQ */}
              <div className="contact-card p-6 rounded-xl text-center bg-white/95 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary rounded-full">
                  <i className="ri-question-answer-line text-2xl text-white"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">FAQ Section</h4>
                <p className="text-sm text-gray-600">
                  Find quick answers to common questions about our products and
                  services.
                </p>
              </div>

              {/* TECH SUPPORT */}
              <div className="contact-card p-6 rounded-xl text-center bg-white/95 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-secondary rounded-full">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Technical Support
                </h4>
                <p className="text-sm text-gray-600">
                  Get help with installation, setup, and troubleshooting for
                  your gaming gear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
