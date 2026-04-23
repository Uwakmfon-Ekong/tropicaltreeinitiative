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
    href: "/thematic/tree-planting",
  },
  {
    title: "Agroforestry",
    desc: "Integrating trees into farming systems to improve soil fertility, increase crop yield, and support sustainable livelihoods.",
    image: "/trcc3.jpg",
    href: "/thematic/agroforestry",
  },
  {
    title: "Community Capacity Building",
    desc: "Training local communities to plant, nurture, and protect trees while adopting sustainable environmental practices.",
    image: "/trcc 4.jpg",
    href: "/thematic/community",
  },
  {
    title: "Climate Action",
    desc: "Using tree planting as a natural solution to combat climate change, reduce carbon emissions, and restore ecosystems.",
    image: "/trcc 5.jpg",
    href: "/thematic/climate",
  },
  {
    title: "Land Restoration",
    desc: "Reviving degraded and deforested lands into productive ecosystems through strategic planting and conservation.",
    image: "/trcc 6.jpg",
    href: "/thematic/land-restoration",
  },
  {
    title: "Indigenous Knowledge",
    desc: "Preserving traditional environmental practices that support sustainable land use and long-term ecosystem health.",
    image: "/trcc7.jpg",
    href: "/thematic/indigenous",
  },
];

export default function ThematicPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream text-green-dark">

        {/* HERO */}
        <section className="px-[5%] pt-32 pb-20 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.1] font-semibold mb-6">
            Our Work in Action
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            From planting trees to empowering communities, our work reflects a deep commitment
            to restoring nature and building a sustainable future.
          </p>
        </section>

        {/* GRID */}
        <section className="px-[5%] pb-24">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {areas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group block rounded-2xl overflow-hidden border border-green-light/15 hover:border-green-light transition-all duration-300 hover:-translate-y-1"
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
                <div className="p-6 bg-white">
                  <h3 className="font-serif text-xl mb-2 group-hover:text-green-light transition">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-dark text-white px-[5%] py-24 text-center">
          <h2 className="font-serif text-4xl mb-4">
            Join the Movement
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every tree planted is a step toward a healthier planet. Support our work
            or partner with us to create lasting impact.
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