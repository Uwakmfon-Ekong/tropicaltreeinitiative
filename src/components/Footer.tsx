const footerLinks = {
  Organisation: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Thematic Areas", href: "/thematic" },
    { label: "Projects", href: "/projects" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Publications", href: "/publications" },
    { label: "Annual Reports", href: "/reports" },
  ],
  Connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1f17] px-[5%] pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-serif text-2xl font-semibold text-cream mb-3">
            🌿 TRCC
          </div>
          <p className="text-[13px] text-cream/40 leading-relaxed max-w-[240px]">
            Tropical Research and Conservation Centre — advancing environmental
            conservation and sustainable livelihoods in Nigeria since 2001.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div key={col}>
            <h4 className="text-[11px] text-cream/40 uppercase tracking-[0.1em] mb-4">
              {col}
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-cream/60 hover:text-green-accent transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-cream/30">
          © 2025 Tropical Research and Conservation Centre. All rights reserved.
        </p>
        <div className="flex gap-3">
          {["f", "in", "tw"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center text-[13px] text-cream/50 hover:bg-green-light hover:text-white transition-colors no-underline"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
