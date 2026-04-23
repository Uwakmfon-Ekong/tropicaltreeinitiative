import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    image: "/trcc2.jpg",
    title: "Environmental & Natural Resources Management",
    desc: "Protecting ecosystems, monitoring forest cover, and building sustainable resource-use practices across communities.",
    href: "/thematic/environment",
  },
  {
    image: "/trcc3.jpg",
    title: "Sustainable Agriculture",
    desc: "Promoting organic farming, mixed cropping, and improved livestock practices to enhance rural livelihoods.",
    href: "/thematic/agriculture",
  },
  {
    image: "/trcc 4.jpg",
    title: "Eco-Tourism",
    desc: "Developing responsible tourism that celebrates biodiversity while generating income for local communities.",
    href: "/thematic/ecotourism",
  },
  {
    image: "/trcc 5.jpg",
    title: "Community Health",
    desc: "Linking environmental health to human wellbeing through education and sustainable practices.",
    href: "/thematic/health",
  },
  {
    image: "/trcc 6.jpg",
    title: "Renewable Energy",
    desc: "Reducing dependence on wood fuel through clean and sustainable energy solutions.",
    href: "/thematic/energy",
  },
  {
    image: "/trcc7.jpg",
    title: "Indigenous Resources",
    desc: "Preserving traditional knowledge and practices that support environmental sustainability.",
    href: "/thematic/indigenous",
  },
];

export default function Thematic() {
  return (
    <section id="thematic" className="bg-cream px-[5%] py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-medium text-green-light uppercase tracking-[0.12em] mb-3 block">
            What We Do
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-green-dark">
            Our Thematic Areas
          </h2>
        </div>
        <Link
          href="/thematic"
          className="bg-green-light text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-green-bright transition-colors no-underline whitespace-nowrap self-start md:self-auto"
        >
          View All Projects
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <Link
            key={a.title}
            href={a.href}
            className="group bg-white rounded-[20px] p-8 border border-green-light/15 relative overflow-hidden hover:-translate-y-1.5 hover:border-green-light transition-all duration-250 no-underline block"
          >
            {/* Bottom accent bar */}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

            {/* Arrow */}
            <span className="absolute top-7 right-7 w-8 h-8 rounded-full bg-green-pale flex items-center justify-center text-green-mid text-sm group-hover:bg-green-mid group-hover:text-white transition-colors">
              →
            </span>

            <div className="mb-5">
              <div className="rounded-xl flex items-center justify-center relative">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={500}
                  height={200}
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-green-dark mb-2 leading-snug">
              {a.title}
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              {a.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
