import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    image: "/mangroverestore.jpeg",
    tag: "Ongoing",
    title: "Niger Delta Mangrove Restoration",
    desc: "Partnering with FasterCapital to restore critical mangrove ecosystems across the Niger Delta region.",
  },
  {
    image: "/socialimpact.jpeg",
    tag: "Social Impact",
    title: "1 Million Agro-Forestry Trees",
    desc: "A landmark initiative to plant one million agro-forestry trees across Nigeria, sequestering carbon and restoring livelihoods.",
  },
  {
    image: "/trcc1.jpg",
    tag: "Community",
    title: "Ondo State Community Consultation",
    desc: "Stakeholder-driven conservation planning bringing local voices to the center of environmental decision-making.",
  },
  // {
  //   image: "/mangroverestore.jpeg",
  //   tag: "Research",
  //   title: "Biodiversity Monitoring Program",
  //   desc: "Systematic documentation of flora and fauna across TRCC project sites to measure ecological recovery and conservation impact.",
  // },
  // {
  //   image: "/socialimpact.jpeg",
  //   tag: "Education",
  //   title: "School Environmental Clubs",
  //   desc: "Establishing green clubs in schools across Akwa Ibom State to build the next generation of environmental advocates.",
  // },
  // {
  //   image: "/trcc1.jpg",
  //   tag: "Ongoing",
  //   title: "Seedling Distribution Network",
  //   desc: "Distributing free seedlings to households, schools, churches, and community centers to expand Nigeria's green cover.",
  // },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        {/* HERO */}
        <section
          className="bg-cover bg-center bg-no-repeat py-24 px-6 text-center relative"
          style={{ backgroundImage: "url('/tree5.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/10" />
          <div className="relative z-10 pt-10">
          <span className="text-xs font-semibold text-[#a5d6a7] uppercase tracking-widest block mb-3">
            Impact in Action
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            Our Projects
          </h1>
          <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
            From mangrove restoration to agro-forestry, our projects create
            measurable impact at scale across Nigeria and beyond.
          </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 justify-center mt-12 pt-10 border-t border-white/10">
            {[
              { num: "100M", label: "Mangrove Trees Target" },
              { num: "3M+", label: "Trees Planted" },
              { num: "100K+", label: "People Reached" },
              { num: "15+", label: "Communities" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-[#74c69d] mb-1">
                  {s.num}
                </div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="bg-[#1a3a2a] px-[5%] py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group rounded-[20px] overflow-hidden border border-white/8 bg-white/4 hover:-translate-y-1.5 transition-all duration-250"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#74c69d]/20 backdrop-blur-md text-[#74c69d] border border-[#74c69d]/30 px-3 py-1 rounded-full text-[11px] uppercase tracking-widest">
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f1f8e9] py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1a3a2a] mb-4">
            Support Our Work
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Every donation helps us plant more trees, restore more ecosystems,
            and reach more communities across Nigeria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-[#40916c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#52b788] transition-colors no-underline"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-[#1a3a2a] text-[#1a3a2a] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a3a2a] hover:text-white transition-colors no-underline"
            >
              Volunteer
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
