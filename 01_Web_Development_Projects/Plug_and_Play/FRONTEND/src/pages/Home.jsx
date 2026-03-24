// src/pages/Home.jsx

function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20">
      <div className="w-full px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="flex-1 max-w-xl pr-20">
              <h1 className="text-7xl font-bold text-black mb-6 leading-tight pixel-font">
                ROG ALLY X
              </h1>
              <p className="text-xl text-black-200 mb-8 leading-relaxed">
                Experience the ultimate portable gaming with the ROG ALLY X.
                Featuring AMD Ryzen Z1 Extreme processor, 24GB LPDDR5X RAM, and
                up to 1TB of SSD storage, this advanced handheld console
                delivers exceptional performance for gaming on the go.
              </p>
            </div>
            <div className="flex space-x-4 ml-8 mt-80">
              <a
                href="product-desc.html"
                className="bg-primary text-white px-8 py-4 !rounded-button hover:bg-opacity-90 transition-all whitespace-nowrap text-lg font-semibold"
              >
                Learn More
              </a>
              <button className="bg-secondary text-dark px-8 py-4 !rounded-button hover:bg-opacity-90 transition-all whitespace-nowrap text-lg font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsHotSection() {
  const products = [
    {
      img: "/LS9.jpg",
      title: "LEGION SERIES 9",
      subtitle: "GAMING LAPTOP",
    },
    {
      img: "/ROG.webp",
      title: "ASUS ROG STRIX",
      subtitle: "GAMING LAPTOP",
    },
    {
      img: "/NITRO5.webp",
      title: "ACER NITRO 5",
      subtitle: "GAMING LAPTOP",
    },
    {
      img: "/ALIENWAREM15.jpg",
      title: "ALIENWARE M15",
      subtitle: "GAMING LAPTOP",
    },
  ];

  return (
    <section
      className="whats-hot-bg pt-20 pb-40"
      style={{ backgroundColor: "#110b39" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-16 pixel-font">
          WHAT&apos;S HOT
        </h2>
        <div className="grid grid-cols-5 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="carousel-item bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover object-top"
              />
              <div className="p-5">
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.subtitle}</p>
                <button className="bg-primary text-white px-4 py-2 !rounded-button hover:bg-opacity-90 transition-all whitespace-nowrap text-sm font-medium w-full">
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          <div className="carousel-item bg-primary bg-opacity-20 rounded-lg overflow-hidden cursor-pointer border-2 border-primary">
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-grid-line text-4xl text-primary"></i>
              </div>
              <h3 className="text-white font-semibold text-lg">VIEW ALL</h3>
            </div>
            <div className="p-5">
              <a
                href="products.html"
                className="block bg-secondary text-dark px-4 py-2 !rounded-button hover:bg-opacity-90 transition-all whitespace-nowrap text-sm font-medium w-full text-center"
              >
                See Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesAndPS5Section() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/5-BG.jpg')" }}
    >
      <div className="py-20">
        {/* Floating Features Card */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative -mt-40 mb-20 z-10">
            <div className="max-w-4xl mx-auto">
              <div className="floating-card bg-white rounded-xl shadow-2xl p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <i className="ri-gamepad-line text-3xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Your Plug-in Trusted Plug &amp; Play
                    </h3>
                    <p className="text-gray-600 text-sm">
                      With all our new Plug and Play setup
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <i className="ri-truck-line text-3xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Fast &amp; Shipping Nationwide
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Shipping all over the Philippines
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <i className="ri-shield-check-line text-3xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      100% Safe and Secured
                    </h3>
                    <p className="text-gray-600 text-sm">Your payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PS5 Block */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative mb-0">
            <div className="rounded-[32px] bg-primary px-12 py-12 text-white shadow-2xl">
              <div className="flex justify-end">
                <div className="w-2/3 pl-16">
                  <h2 className="text-4xl font-bold mb-4 pixel-font tracking-wide">
                    SONY PLAYSTATION 5 CONSOLE
                  </h2>

                  <p className="text-lg mb-6 leading-relaxed max-w-xl">
                    Experience next-generation gaming with the PlayStation 5.
                    Featuring lightning-fast SSD, ray tracing capabilities, and
                    exclusive games that redefine what&apos;s possible in
                    gaming.
                  </p>

                  <div className="flex justify-start mt-4">
                    <a
                      href="product-desc.html"
                      className="bg-white text-primary px-10 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/PS5.webp"
              alt="PlayStation 5"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[850px] drop-shadow-2xl -ml-52"
            />
          </div>
        </div>

        {/* Story / Brand Section */}
        <div className="max-w-4xl mx-auto px-8 text-center pt-16 pb-4">
          <h2 className="text-4xl font-bold mb-8">
            Built for Every Kind of Player
          </h2>
          <div className="mb-16">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Plug and Play was born from a simple idea — that gaming and tech
              should be exciting, accessible, and built for everyone. We started
              as a small team of enthusiasts who knew the thrill of a smooth
              frame rate, the satisfaction of a responsive keyboard, and the joy
              of gear that just works. Today, we offer a curated lineup of
              laptops, desktops, consoles, accessories, and peripherals designed
              to power every kind of player — from students and streamers to
              competitive gamers and casual explorers. Whether you&apos;re
              building your dream setup or upgrading your everyday essentials,
              our goal is to make sure you plug in with confidence and play
              without limits. Because at Plug and Play, we don’t just sell tech
              — we deliver the tools to unlock your next level.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We believe that great gear should never be out of reach. That’s
              why our catalog includes everything from budget-friendly entry
              laptops to high-performance gaming rigs, from sleek accessories to
              pro-grade peripherals. Whether you&apos;re looking for a reliable
              school laptop, a streaming-ready microphone, or a 144Hz monitor
              that keeps up with your reflexes, we’ve got you covered. Every
              product we stock is handpicked for quality, value, and gamer
              appeal — because we know what it means to invest in your setup.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Our platform is built for simplicity and control. Customers enjoy
              a smooth, secure shopping experience with clear product specs,
              fast checkout, and responsive support. Behind the scenes, our
              admin dashboard empowers store managers with real-time insights,
              inventory tools, and order tracking — making Plug and Play not
              just a store, but a smart retail ecosystem. We’re constantly
              evolving to meet the needs of both shoppers and sellers, with
              features that scale as you grow.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              At the heart of it all is our community — the players, creators,
              students, and tech lovers who inspire us every day. Plug and Play
              is more than a brand; it’s a mindset. It’s about jumping into the
              game, embracing the grind, and having the gear to back you up. So
              whether you&apos;re chasing high scores or high productivity,
              we’re here to help you plug in, play on, and power up.
            </p>
          </div>
          <div className="mb-12">
            <img
              src="/PP-Logo.png"
              alt="PLUG&PLAY Logo"
              className="mx-auto h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatsHotSection />
      <FeaturesAndPS5Section />
    </>
  );
}
