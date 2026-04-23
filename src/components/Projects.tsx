import Link from "next/link";

const projects = [
  {
    emoji: "🌊",
    gradient: "from-[#1b4332] to-[#2d6a4f]",
    tag: "Ongoing",
    title: "Niger Delta Mangrove Restoration",
    desc: "Partnering with FasterCapital to restore critical mangrove ecosystems across the Niger Delta region.",
    href: "/projects/mangrove-restoration",
  },
  {
    emoji: "🌳",
    gradient: "from-[#3a5a40] to-[#588157]",
    tag: "Social Impact",
    title: "1 Million Agro-Forestry Trees",
    desc: "A landmark initiative to plant one million agro-forestry trees across Nigeria, sequestering carbon and restoring livelihoods.",
    href: "/projects/agro-forestry",
  },
  {
    emoji: "🤝",
    gradient: "from-[#52796f] to-[#354f52]",
    tag: "Community",
    title: "Ondo State Community Consultation",
    desc: "Stakeholder-driven conservation planning bringing local voices to the center of environmental decision-making.",
    href: "/projects/ondo-consultation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-green-dark px-[5%] py-24">
      <span className="text-xs font-medium text-green-accent uppercase tracking-[0.12em] mb-3 block">
        Impact in Action
      </span>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-cream">
            Featured Projects
          </h2>
          <p className="text-cream/60 text-base leading-relaxed max-w-[480px] mt-3">
            From mangrove restoration to agro-forestry, our projects create measurable impact at scale.
          </p>
        </div>
        <Link
          href="/projects"
          className="border border-cream/30 text-cream px-7 py-3 rounded-full text-sm hover:border-cream/60 hover:bg-cream/5 transition-all no-underline whitespace-nowrap self-start md:self-auto"
        >
          All Projects →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group rounded-[20px] overflow-hidden border border-white/8 bg-white/4 hover:-translate-y-1.5 hover:border-green-accent/40 transition-all duration-250 no-underline block"
          >
            <div
              className={`h-44 flex items-center justify-center text-5xl bg-gradient-to-br ${p.gradient}`}
            >
              {p.emoji}
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-accent/15 text-green-accent border border-green-accent/30 px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-3">
                {p.tag}
              </span>
              <h3 className="font-serif text-xl font-semibold text-cream leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
