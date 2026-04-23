"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
   return (
    <main className="h-screen pt-[120px] pb-20 bg-black/20 bg-blend-overlay bg-[url(/tree5.jpeg)] bg-no-repeat bg-cover text-green-dark">
 <Navbar />
      {/* HERO */}
      <section className="px-[5%] pt-32 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-semibold leading-[1.05] text-cream mb-6 tracking-tight">
          Growing a Greener Future,<br />
          One Tree at a Time
        </h1>
        <p className="text-cream/70 mx-auto text-center text-lg leading-relaxed max-w-[520px] mb-10">
          We restore landscapes, empower communities, and fight climate change
          through tree planting and sustainable environmental practices.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="px-[5%] py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="/tree1.png"
            alt="Tree planting"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <span className="text-xs uppercase tracking-widest text-green-light mb-3 block">
            Who We Are
          </span>

          <h2 className="font-serif text-4xl font-semibold mb-5">
            Rooted in Communities.<br />Driven by Impact.
          </h2>

          <p className="text-gray-500 leading-relaxed mb-5">
            TRCC (Tropical Research and Conservation Centre) is a Nigerian-based
            organization dedicated to restoring the environment through tree
            planting and community-led solutions.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Since 2001, we have worked closely with rural communities to combat
            deforestation, restore degraded lands, and promote sustainable
            livelihoods through nature-based approaches.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white px-[5%] py-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-widest text-green-light block mb-3">
              What We Do
            </span>
            <h2 className="font-serif text-4xl font-semibold">
              Practical Solutions. Lasting Impact.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tree Planting",
                desc: "Restoring degraded lands and rebuilding forest ecosystems.",
              },
              {
                title: "Agroforestry",
                desc: "Integrating trees into farming to improve soil and income.",
              },
              {
                title: "Community Training",
                desc: "Equipping locals with skills to grow and protect trees.",
              },
              {
                title: "Climate Action",
                desc: "Using trees to combat climate change and environmental decline.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-green-light/15 bg-cream hover:border-green-light transition-all"
              >
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-[5%] py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[
            { num: "10,000+", label: "Trees Planted" },
            { num: "20+", label: "Communities Reached" },
            { num: "20+ Years", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="font-serif text-4xl text-green-accent mb-2">
                {stat.num}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-cream px-[5%] py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-8 rounded-2xl border border-green-light/20 bg-white">
            <h3 className="font-serif text-2xl mb-3">Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              A greener society where people live in harmony with nature, and
              trees sustain life and livelihoods.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-green-light/20 bg-white">
            <h3 className="font-serif text-2xl mb-3">Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To restore the environment through tree planting while empowering
              communities with the tools and knowledge to sustain ecosystems.
            </p>
          </div>

        </div>
      </section>

      {/* WHY TREES */}
      <section className="px-[5%] py-24 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-6">
          Why Tree Planting Matters
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Trees improve air quality, restore soil fertility, prevent erosion,
          support biodiversity, and provide food and income. By planting trees,
          we are not just restoring land — we are restoring life.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-dark text-white px-[5%] py-24 text-center">
        <h2 className="font-serif text-4xl mb-4">
          Be Part of the Change
        </h2>
        <p className="text-white/70 mb-8">
          Join us in planting trees and building a more sustainable future.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-green-light px-8 py-3 rounded-full text-sm hover:bg-green-bright transition"
          >
            Partner With Us
          </Link>
          <Link
            href="/thematic"
            className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition"
          >
            Explore Projects
          </Link>
        </div>
      </section>
      <Footer />

    </main>
  );
}