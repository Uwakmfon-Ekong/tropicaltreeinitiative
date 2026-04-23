"use client";
import { useState } from "react";

const details = [
  { icon: "📍", label: "Address", value: "41 Oron Road, Uyo, Akwa Ibom State, Nigeria" },
  { icon: "📞", label: "Phone", value: "+234 806 759 6435" },
  { icon: "✉️", label: "Email", value: "info@tropicalcentre.org" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-green-dark px-[5%] py-24">
      <span className="text-xs font-medium text-green-accent uppercase tracking-[0.12em] mb-3 block">
        Get in Touch
      </span>
      <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-cream mb-12">
        Let's Work Together
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <p className="text-cream/65 text-base leading-relaxed mb-8">
            Whether you're a researcher, community partner, donor, or simply
            passionate about conservation — we'd love to hear from you.
          </p>
          <div className="flex flex-col gap-4">
            {details.map((d) => (
              <div key={d.label} className="flex gap-3 items-start">
                <div className="w-9 h-9 min-w-[36px] bg-green-light/20 rounded-xl flex items-center justify-center text-base">
                  {d.icon}
                </div>
                <div>
                  <p className="text-[11px] text-cream/40 uppercase tracking-widest mb-0.5">
                    {d.label}
                  </p>
                  <p className="text-[14px] text-cream/70">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-serif text-2xl text-cream mb-2">Message Sent!</h3>
            <p className="text-cream/50 text-sm">We'll get back to you soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-cream/40 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/30 outline-none focus:border-green-light transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-cream/40 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/30 outline-none focus:border-green-light transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-cream/40 uppercase tracking-widest">
                Subject
              </label>
              <select className="bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-cream text-sm outline-none focus:border-green-light transition-colors">
                <option className="bg-green-dark">Partnership Inquiry</option>
                <option className="bg-green-dark">Research Collaboration</option>
                <option className="bg-green-dark">Donation</option>
                <option className="bg-green-dark">General Inquiry</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-cream/40 uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can work together..."
                className="bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/30 outline-none focus:border-green-light transition-colors resize-none"
              />
            </div>
            <button
              onClick={() => setSubmitted(true)}
              className="bg-green-light text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-green-bright transition-colors self-start cursor-pointer"
            >
              Send Message →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
