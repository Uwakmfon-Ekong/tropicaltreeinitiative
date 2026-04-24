"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const details = [
  { icon: "📞", label: "Phone", value: "+234 806 759 6435" },
  { icon: "✉️", label: "Email", value: "info@tropicalcentre.org" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-black/30 bg-blend-overlay bg-[url(/tree5.jpeg)] bg-no-repeat bg-cover">
      <Navbar />

      {/* HERO */}
      <section className="px-[5%] pt-[140px] pb-20 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-semibold leading-[1.05] text-cream mb-6 tracking-tight">
          Let’s Work Together
        </h1>
        <p className="text-cream/70 mx-auto text-lg leading-relaxed max-w-[520px]">
          Whether you're a partner, donor, or passionate about the environment —
          we’d love to hear from you.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-[5%] pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>
            <span className="text-xs uppercase tracking-widest text-white mb-3 block">
              Get in Touch
            </span>

            <h2 className="font-serif text-4xl text-cream mb-6">
              Reach Out Anytime
            </h2>

            <p className="text-cream/65 leading-relaxed mb-10">
              We collaborate with communities, organizations, and individuals
              to drive real environmental impact through tree planting and
              sustainable practices.
            </p>

            <div className="flex flex-col gap-5">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-green-light/20 rounded-xl flex items-center justify-center text-lg">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-cream/40 uppercase tracking-widest">
                      {d.label}
                    </p>
                    <p className="text-cream/90 text-sm">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-serif text-2xl text-cream mb-2">
                  Message Sent!
                </h3>
                <p className="text-cream/60 text-sm">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-cream/60 uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/40 outline-none focus:border-green-light"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-cream/60 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/40 outline-none focus:border-green-light"
                    />
                  </div>

                </div>

                {/* SUBJECT */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-cream/60 uppercase tracking-widest">
                    Subject
                  </label>
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream text-sm outline-none focus:border-green-light">
                    <option className="bg-green-dark">Partnership Inquiry</option>
                    <option className="bg-green-dark">Research Collaboration</option>
                    <option className="bg-green-dark">Donation</option>
                    <option className="bg-green-dark">General Inquiry</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-cream/60 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can work together..."
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/40 outline-none focus:border-green-light resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-green-light text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-green-bright transition self-start"
                >
                  Send Message →
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}