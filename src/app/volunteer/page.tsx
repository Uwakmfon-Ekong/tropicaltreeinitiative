"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

export default function VolunteerPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const getField = (name: string) =>
    (formRef.current?.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement)?.value ?? "";

  const handleSubmit = async () => {
    const name = getField("volunteer_name");
    const email = getField("volunteer_email");

    if (!name.trim() || name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID!,
        {
          firstName: name,
          lastName: "",
          from_email: email,
          subject: "New Volunteer Sign Up — TRCC",
          message: `Location: ${getField("volunteer_location")}\nHow they want to help: ${getField("volunteer_role")}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="bg-[#1a3a2a] py-24 px-6 text-center">
          <span className="text-xs font-semibold text-[#a5d6a7] uppercase tracking-widest block mb-3">
            Get Involved
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            Become a Volunteer
          </h1>
          <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
            Join our community of passionate volunteers helping restore
            Nigeria's forests and build sustainable communities — no experience
            needed, just a passion for the planet.
          </p>
        </section>

        {/* ROLES */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-[#40916c] uppercase tracking-widest block mb-2">
                Ways to Help
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">
                How You Can Get Involved
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Tree Planting Events",
                  desc: "Join our community planting days in parks, forests, and open lands across Nigeria.",
                  href: "/projects",
                },
                {
                  title: "Environmental Education",
                  desc: "Help us teach children and communities about conservation, biodiversity, and sustainable living.",
                  href: "/thematic",
                },
                {
                  title: "Research & Documentation",
                  desc: "Support our field research teams in monitoring ecosystems, collecting data, and documenting impact.",
                  href: "/projects",
                },
                {
                  title: "Community Outreach",
                  desc: "Help us engage rural communities in conservation activities and sustainable agriculture programs.",
                  href: "/thematic",
                },
                {
                  title: "Social Media & Awareness",
                  desc: "Amplify our mission online — share our work, create content, and help us reach more people.",
                  href: "/contact",
                },
                {
                  title: "Fundraising Support",
                  desc: "Help us raise funds for tree planting programs, seedling distribution, and community projects.",
                  href: "/donate",
                },
              ].map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  className="border-2 border-[#c8e6c9] rounded-2xl p-7 no-underline hover:border-[#40916c] hover:-translate-y-1 hover:shadow-md transition-all block group"
                >
                  <div className="w-10 h-1.5 rounded-full bg-[#40916c] mb-5 group-hover:w-14 transition-all duration-300" />
                  <h3 className="text-lg font-bold text-[#1a3a2a] mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  <span className="text-[#40916c] text-sm mt-4 block group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>

            {/* SIGNUP FORM */}
            <div className="bg-[#f1f8e9] border border-[#c8e6c9] rounded-3xl p-10 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1a3a2a] mb-2 text-center">
                Sign Up to Volunteer
              </h2>
              <p className="text-gray-500 text-sm text-center mb-8">
                Fill in the form below and our team will reach out to you with
                details on how to get involved.
              </p>

              {sent ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-16 h-16 bg-[#c8e6c9] rounded-full flex items-center justify-center mx-auto mb-5">
                    <div className="w-8 h-8 bg-[#40916c] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a2a] mb-2">
                    Thank you for signing up!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We'll be in touch soon with details on how to get involved.
                  </p>
                </div>
              ) : (
                <form ref={formRef} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="volunteer_name"
                      type="text"
                      placeholder="Your full name"
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="volunteer_email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      name="volunteer_phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      City / Location
                    </label>
                    <input
                      name="volunteer_location"
                      type="text"
                      placeholder="Your city or state"
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      How Would You Like to Help?
                    </label>
                    <select
                      name="volunteer_role"
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors bg-white"
                    >
                      <option>Select an option</option>
                      <option>Tree Planting Events</option>
                      <option>Environmental Education</option>
                      <option>Research & Documentation</option>
                      <option>Community Outreach</option>
                      <option>Social Media & Awareness</option>
                      <option>Fundraising Support</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Additional Message
                    </label>
                    <textarea
                      name="volunteer_message"
                      rows={3}
                      placeholder="Tell us a bit about yourself or why you want to volunteer..."
                      className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors resize-none bg-white"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <p className="text-red-500 text-xs">{error}</p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-[#1a3a2a] text-white py-3.5 rounded-full text-sm font-bold hover:bg-[#2d6a4f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Sign Me Up"}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    Fields marked <span className="text-red-400">*</span> are required
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a3a2a] py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Every Action Counts
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you plant one tree or lead a community campaign — you are
            making a difference for Nigeria's forests and future generations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-[#40916c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#52b788] transition-colors no-underline"
            >
              Donate Instead
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}