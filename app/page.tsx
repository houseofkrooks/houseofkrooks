export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <img 
          src="/logo.png" 
          className="max-w-3xl w-full mb-6 drop-shadow-[0_0_40px_rgba(255,60,0,0.7)]"
        />

        <h1 className="text-xl text-gray-400 mb-6">
          Frame & Frequency – Audio. Visual. Live.
        </h1>

        <a 
          href="mailto:houseofkrooks@gmail.com"
          className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 rounded-full font-semibold"
        >
          Contact
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Livestream Production",
            "Audio & Visual",
            "Event Production",
            "Video Editing"
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:scale-105 transition"
            >
              <h3 className="text-xl mb-2">{item}</h3>
              <p className="text-gray-400">
                High-end production tailored for professional results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-4">Let’s Work</h2>
        <p className="text-gray-400">houseofkrooks@gmail.com</p>
      </section>

    </main>
  );
}