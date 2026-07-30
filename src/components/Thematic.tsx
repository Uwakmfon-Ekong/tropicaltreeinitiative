import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    image: "/trcc2.jpg",
    title: "Environmental & Natural Resources Management",
    desc: "Protecting ecosystems, monitoring forest cover, and building sustainable resource-use practices across communities.",
  },
  {
    image: "/trcc3.jpg",
    title: "Sustainable Agriculture",
    desc: "Promoting organic farming, mixed cropping, and improved livestock practices to enhance rural livelihoods.",
  },
  {
    image: "/trcc 4.jpg",
    title: "Eco-Tourism",
    desc: "Developing responsible tourism that celebrates biodiversity while generating income for local communities.",
  },
  {
    image: "/trcc 5.jpg",
    title: "Community Health",
    desc: "Linking environmental health to human wellbeing through education and sustainable practices.",
  },
  {
    image: "/trcc 6.jpg",
    title: "Renewable Energy",
    desc: "Reducing dependence on wood fuel through clean and sustainable energy solutions.",
  },
  {
    image: "/trcc7.jpg",
    title: "Indigenous Resources",
    desc: "Preserving traditional knowledge and practices that support environmental sustainability.",
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
          View All Areas
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <div
            key={a.title}
            className="group bg-white rounded-[20px] p-8 border border-green-light/15 relative overflow-hidden hover:-translate-y-1.5 hover:border-green-light transition-all duration-250 block"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

            <div className="mb-5">
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-green-dark mb-2 leading-snug">
              {a.title}
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}