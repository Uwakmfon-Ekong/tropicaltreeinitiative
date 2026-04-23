import Link from "next/link";

const posts = [
  {
    emoji: "♻️",
    date: "January 31, 2025",
    title: "From Waste to Wealth",
    excerpt: "How communities are turning agricultural waste into economic opportunity and ecological benefit.",
    href: "/blog/from-waste-to-wealth",
  },
  {
    emoji: "🐒",
    date: "January 27, 2025",
    title: "Red-Capped Mangabey: The Endangered African Monkey",
    excerpt: "A closer look at one of Africa's most threatened primate species and conservation efforts to protect it.",
    href: "/blog/red-capped-mangabey",
  },
  {
    emoji: "🔬",
    date: "November 28, 2024",
    title: "University of Uyo Baseline Soil Testing",
    excerpt: "Documenting soil health data to support sustainable agricultural planning across Akwa Ibom State.",
    href: "/blog/uyo-soil-testing",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white px-[5%] py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-medium text-green-light uppercase tracking-[0.12em] mb-3 block">
            Knowledge & Stories
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-green-dark">
            Latest from the Blog
          </h2>
        </div>
        <Link
          href="/blog"
          className="bg-green-light text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-green-bright transition-colors no-underline whitespace-nowrap self-start md:self-auto"
        >
          View All Posts
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group rounded-2xl overflow-hidden border border-green-light/15 bg-cream hover:-translate-y-1 hover:border-green-light transition-all duration-250 no-underline block"
          >
            <div className="h-40 bg-gradient-to-br from-green-pale to-[#b7e4c7] flex items-center justify-center text-4xl">
              {p.emoji}
            </div>
            <div className="p-6">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                {p.date}
              </p>
              <h3 className="font-serif text-[19px] font-semibold text-green-dark leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-green-light font-medium mt-3 group-hover:gap-2.5 transition-all">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
