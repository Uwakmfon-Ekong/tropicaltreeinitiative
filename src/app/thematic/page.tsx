"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const areas = [
  {
    title: "Tree Planting & Reforestation",
    desc: "Restoring degraded lands through large-scale tree planting initiatives that rebuild ecosystems and improve biodiversity.",
    image: "/trcc2.jpg",
  },
  {
    title: "Agroforestry",
    desc: "Integrating trees into farming systems to improve soil fertility, increase crop yield, and support sustainable livelihoods.",
    image: "/trcc3.jpg",
  },
  {
    title: "Community Capacity Building",
    desc: "Training local communities to plant, nurture, and protect trees while adopting sustainable environmental practices.",
    image: "/trcc 4.jpg",
  },
  {
    title: "Climate Action",
    desc: "Using tree planting as a natural solution to combat climate change, reduce carbon emissions, and restore ecosystems.",
    image: "/trcc 5.jpg",
  },
  {
    title: "Renewable Energy",
    desc: "Promoting clean energy solutions and reducing reliance on fossil fuels through innovative tree-based projects.",
    image: "/trcc 6.jpg",
  },
  {
    title: "Indigenous Knowledge",
    desc: "Preserving traditional environmental practices that support sustainable land use and long-term ecosystem health.",
    image: "/trcc7.jpg",
  },
];

export default function ThematicPage() {
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
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">
              Our Impact
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-semibold leading-[1.05] text-cream mb-6 tracking-tight">
              3 Million Trees Planted
              <br />
              <span className="text-green-light">And Counting</span>
            </h1>
            <p className="text-cream/70 mx-auto text-lg leading-relaxed max-w-[600px] mb-10">
              Through large-scale reforestation and community-driven efforts, we
              are restoring degraded landscapes, improving biodiversity, and
              creating a more sustainable future — one tree at a time.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="px-[5%] py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-xs uppercase tracking-widest text-green-light block mb-3">
                Our Focus Areas
              </span>
              <h2 className="font-serif text-4xl font-semibold text-green-dark">
                Where We Make Impact
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="group block rounded-2xl overflow-hidden border border-green-light/15 bg-cream hover:border-green-light transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-green-dark mb-2 group-hover:text-green-light transition">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-dark text-white px-[5%] py-24 text-center">
          <h2 className="font-serif text-4xl mb-4">Be Part of the Change</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every tree planted is a step toward a healthier planet. Join us in
            restoring ecosystems and empowering communities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-light px-8 py-3 rounded-full text-sm hover:bg-green-bright transition"
            >
              Partner With Us
            </Link>
            <Link
              href="/about"
              className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}