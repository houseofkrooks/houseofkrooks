export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        {/* Glow background */}
        <div className="absolute w-[600px] h-[600px] bg-orange-500 opacity-20 blur-[120px] rounded-full top-1/4"></div>

        <img
          src="/logo.png"
          className="max-w-[320px] mb-8 drop-shadow-[0_0_40px_rgba(255,100,0,0.8)]"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          We create unforgettable <br />
          <span className="text-orange-500">live experiences</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          High-end production for events, music and visual storytelling.
        </p>

        <a
          href="mailto:houseofkrooks@gmail.com"
          className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Livestream Production",
            "Audio & Visual",
            "Event Production",
            "Video Editing",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 hover:border-orange-500 transition"
            >
              <h3 className="text-xl mb-3">{item}</h3>
              <p className="text-gray-400 text-sm">
                High-end production tailored for professional results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About</h2>

        <p className="text-gray-400 leading-relaxed">
          House of Krooks is a creative production studio specializing in live,
          audio and visual experiences. We blend technology and storytelling to
          create powerful moments on stage and on screen.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-6">Let’s work together</h2>

        <a
          href="mailto:houseofkrooks@gmail.com"
          className="bg-orange-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Get in touch
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 House of Krooks — Frame & Frequency
      </footer>
    </main>
  );
}