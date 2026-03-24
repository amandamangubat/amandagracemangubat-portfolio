import React from "react";

export default function About() {
  return (
    <div className="pt-20 text-gray-900" style={{ backgroundColor: "#110B39" }}>
      {/* Hero Section */}
      <section
        className="w-full hero-section"
        style={{
          height: "500px",
          backgroundImage: "url('/ABOUT_US-HEADER.jpg')",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full"></div>
      </section>

      {/* About Section */}
      <section
        className="w-full relative about-section"
        style={{
          height: "966px",
          backgroundImage: "url('/3-BG.jpg')",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="relative z-10 flex items-start justify-center h-full px-8 pt-16">
            <div className="w-full text-center">
              <h1 className="text-6xl font-bold text-white mb-12 pixel-font">
                ABOUT US
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white mb-16">
                {/* Image */}
                <div>
                  <img
                    src="/ABOUT_US-ELEMENT.png"
                    alt="PLUG&PLAY Store"
                    className="w-full h-96 object-cover object-top"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 20%, 100% 100%, 15% 100%, 0% 80%)",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <p className="text-lg mb-4 leading-relaxed">
                    <b>
                      Welcome to Plug and Play — your gateway to gaming and
                      tech.
                    </b>
                  </p>
                  <p className="text-lg mb-4 leading-relaxed">
                    We’re not just a store — we’re a launchpad for gamers,
                    creators, and everyday users who demand performance, style,
                    and reliability.
                  </p>

                  <p className="text-lg mb-4 leading-relaxed">
                    At Plug and Play, we curate a powerful lineup of gear that
                    fuels your digital lifestyle:
                  </p>

                  <ul className="list-disc ml-6 text-lg mb-4 leading-relaxed">
                    <li>
                      <b>Gaming laptops and desktops</b> built for speed,
                      graphics, and multitasking
                    </li>
                    <li>
                      <b>Consoles and controllers</b> for immersive play across
                      platforms
                    </li>
                    <li>
                      <b>Smart accessories</b> like USB hubs, routers, and
                      portable SSDs to keep you connected
                    </li>
                    <li>
                      <b>Monitors and peripherals</b> designed for clarity,
                      precision, and comfort
                    </li>
                    <li>
                      <b>Streaming-ready audio gear</b> for creators and
                      communicators
                    </li>
                  </ul>

                  <p className="text-lg mb-4 leading-relaxed">
                    Whether you're grinding ranked matches, editing content, or
                    just browsing, we’ve got the tech to keep you ahead of the
                    curve.
                  </p>

                  <p className="text-lg leading-relaxed">
                    <b>Plug in. Play on. Power up.</b>
                  </p>
                  <p className="text-lg leading-relaxed">
                    That’s the Plug and Play promise.
                  </p>
                </div>
              </div>

              {/* 3 Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-primary rounded-full">
                    <i className="ri-gamepad-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Gaming Excellence
                  </h3>
                  <p className="text-gray-300">
                    Curated selection of premium gaming hardware from top brands
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-secondary rounded-full">
                    <i className="ri-customer-service-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Expert Support
                  </h3>
                  <p className="text-gray-300">
                    Dedicated team ready to help you find the perfect setup
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-primary rounded-full">
                    <i className="ri-shield-check-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Quality Guarantee
                  </h3>
                  <p className="text-gray-300">
                    100% authentic products with full warranty and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="team-section py-20"
        style={{ backgroundImage: "url('/1-BG.jpg')" }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2
            className="text-5xl font-bold text-center mb-16 pixel-font"
            style={{ color: "#110B39" }}
          >
            OUR TEAM
          </h2>

          <div className="space-y-12">
            {/* 🟣 TEAM MEMBERS — SAME ORDER, SAME DESIGN */}
            {[
              {
                name: "Adrian James Calalang",
                role: "Backend Developer",
                img: "/AJ.jpg",
                monster: "/AJ(M).png",
                reverse: false,
                monsterPos: "w-22 h-28 -bottom-4 -left-14",
              },
              {
                name: "Ciara Frances Comendador",
                role: "Project Manager / Frontend Developer",
                img: "/CIARA.jpg",
                monster: "/CIARA(M).png",
                reverse: true,
                monsterPos: "w-35 h-26 -top-20 -left-0",
              },
              {
                name: "Mhikaela Galo",
                role: "Backend Developer",
                img: "/MIKA.jpg",
                monster: "/MIKA(M).png",
                reverse: false,
                monsterPos: "w-30 h-28 -top-2 -left-14",
              },
              {
                name: "Amanda Grace Mangubat",
                role: "Frontend Developer",
                img: "/AMANDA.jpg",
                monster: "/AMANDA(M).png",
                reverse: true,
                monsterPos: "w-30 h-25 -top-20 -right-0",
              },
              {
                name: "Jacob Conrad Quendangan",
                role: "Backend Developer",
                img: "/JAKE.png",
                monster: "/JAKE(M).png",
                reverse: false,
                monsterPos: "w-30 h-25 -top-16 -right-0",
              },
              {
                name: "Ian Roncesvalles",
                role: "Backend Developer",
                img: "/IAN.png",
                monster: "/IAN(M).png",
                reverse: true,
                monsterPos: "w-24 h-30 -bottom-6 -right-14",
              },
            ].map((person, index) => (
              <div
                key={index}
                className={`team-member flex items-center space-x-8 ${
                  person.reverse ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-32 h-32 object-cover object-top"
                  />

                  {/* Monster with per-person positioning */}
                  <img
                    src={person.monster}
                    alt="Monster"
                    className={`monster-decoration absolute ${person.monsterPos}`}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#110B39" }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {person.role}
                  </p>
                  <p className="text-gray-700">
                    Bachelor of Science in Information Systems
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
