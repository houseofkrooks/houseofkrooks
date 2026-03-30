"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Glow */}
        <div className="absolute w-[600px] h-[600px] bg-orange-500 opacity-20 blur-[140px] rounded-full"></div>

        <div className={`relative z-10 transition duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <img
            src="/logo.png"
            className="max-w-[360px] mb-8 drop-shadow-[0_0_40px_rgba(255,80,0,0.9)]"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We create unforgettable <br />
            <span className="text-orange-500">live experiences</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            High-end production for events, music and visual storytelling.
          </p>

          <a
            href="mailto:houseofkrooks@gmail.com"
            className="bg-gradient-to-r from-orange-500 to-red-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Livestream", icon: "🎥" },
            { title: "Audio & Visual", icon: "🔊" },
            { title: "Events", icon: "🎤" },
            { title: "Editing", icon: "🎬" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(255,100,0,0.4)] transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">
                High-end production tailored for professional results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
            "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img}
                className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <p className="text-gray-400 leading-relaxed">
          House of Krooks is a creative production studio blending audio,
          visuals and storytelling to create powerful live experiences.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-6">Let’s work together</h2>

        <a
          href="mailto:houseofkrooks@gmail.com"
          className="bg-orange-500 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
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