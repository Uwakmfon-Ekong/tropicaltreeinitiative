"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the Tropical Research and Conservation Centre (TRCC)?",
    a: "TRCC is a Nigerian non-governmental organization founded in 2001, focused on environmental conservation, natural resource management, indigenous knowledge preservation, sustainable agriculture, and community healthy living in the Niger Delta region.",
  },
  {
    q: "Where does TRCC operate?",
    a: "TRCC's work is primarily based in Nigeria's Niger Delta region, with community-driven conservation initiatives across multiple states including Akwa Ibom.",
  },
  {
    q: "Why does TRCC focus on mangrove restoration?",
    a: "Mangroves protect coastlines from erosion and flooding, sequester large amounts of carbon, and provide critical habitats for fish, birds, and other wildlife. Restoring mangroves directly supports both climate resilience and local livelihoods.",
  },
  {
    q: "How many trees has TRCC planted so far?",
    a: "TRCC has planted over 3 million mangrove trees, with more than 500 hectares of degraded land restored to date.",
  },
  {
    q: "What is TRCC's target for mangrove restoration?",
    a: "TRCC is working toward a long-term target of 100 million mangrove trees as part of its large-scale ecosystem restoration efforts.",
  },
  {
    q: "What is agroforestry and why does TRCC promote it?",
    a: "Agroforestry integrates trees into farming systems to improve soil fertility, increase crop yields, and create additional income sources for farmers, while also restoring tree cover.",
  },
  {
    q: "How does TRCC support local communities?",
    a: "TRCC trains community members in organic farming, mixed cropping, and sustainable forest use, while also running education programs on the value of conservation. Over 20,000 people have been reached through these efforts.",
  },
  {
    q: "Does TRCC work with schools?",
    a: "Yes, TRCC engages schools and youth groups through environmental education programs to build long-term awareness and stewardship in the next generation.",
  },
  {
    q: "What endangered species does TRCC help protect?",
    a: "TRCC's biodiversity conservation work protects habitats for species including Sclater's guenon monkey, the red-capped mangabey monkey, sea turtles, African manatees, and several threatened bird species.",
  },
  {
    q: "How does TRCC fund its projects?",
    a: "TRCC's work is supported through partnerships with international organizations, donations, and grants. Individuals and organizations can contribute directly through the donate page.",
  },
  {
    q: "Can I volunteer with TRCC?",
    a: "Yes, TRCC welcomes volunteers for tree planting events, community education programs, and conservation monitoring. You can sign up through the Volunteer page.",
  },
  {
    q: "Can businesses or organizations partner with TRCC?",
    a: "Yes, TRCC partners with NGOs, government agencies, research institutions, and corporate organizations on conservation, restoration, and sustainability initiatives. Reach out through the Contact page to explore partnership opportunities.",
  },
  {
    q: "How can I donate to TRCC?",
    a: "Donations can be made directly through the Donate page, with options to give in Naira via Paystack or in USD via Stripe. Every donation directly supports tree planting and community programs.",
  },
  {
    q: "What is indigenous knowledge preservation and why does it matter?",
    a: "Indigenous knowledge refers to traditional environmental practices passed down through generations. TRCC works to preserve this knowledge because it often holds effective, time-tested approaches to sustainable land use and conservation.",
  },
  {
    q: "How does climate change affect the Niger Delta?",
    a: "The Niger Delta faces rising sea levels, coastal erosion, and increased flooding due to climate change. Mangrove restoration and sustainable land management are key strategies TRCC uses to help communities build resilience.",
  },
  {
    q: "How long has TRCC been operating?",
    a: "TRCC was founded in 2001 and has over 20 years of experience leading community-driven conservation initiatives.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        {/* HERO */}
        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tree5.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/60" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">
              Questions & Answers
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-cream/70 mx-auto text-lg leading-relaxed max-w-[520px]">
              Everything you need to know about TRCC's mission, mangrove restoration work, and how you can get involved.
            </p>
          </div>
        </section>

        {/* FAQ LIST */}
        <section className="bg-white px-[5%] py-24">
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div
                key={item.q}
                className="border border-green-light/15 rounded-2xl overflow-hidden bg-cream"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-base text-green-dark">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-green-light transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-dark text-white px-[5%] py-24 text-center">
          <h2 className="font-serif text-4xl mb-4">Still Have Questions?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Reach out and be part of the TRCC movement to restore Nigeria's ecosystems and support local communities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-light px-8 py-3 rounded-full text-sm hover:bg-green-bright transition no-underline"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition no-underline"
            >
              Donate
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}