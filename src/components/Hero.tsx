export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black/20 bg-blend-overlay bg-[url(/tree5.jpeg)] bg-no-repeat bg-cover relative flex items-center justify-center px-[5%] pt-[120px] pb-20 overflow-hidden text-center"
    >

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
       

        


{/* Heading */}
<h1 className="font-serif text-[clamp(44px,6vw,80px)] font-semibold leading-[1.05] text-cream mb-6 tracking-tight">
  Planting Trees
  for a{" "}
  <em className="italic text-green-accent not-italic" style={{ fontStyle: "italic" }}>
    Greener
  </em>
  {" "}
  Future
</h1>

{/* Description */}
<p className="text-cream/70 text-lg leading-relaxed max-w-[520px] mb-10">
  Tropical Tree Initiative is committed to restoring the environment
  through large-scale tree planting and community action. We grow
  forests, fight climate change, and empower people to protect the
  planet—one tree at a time.
</p>

{/* Buttons */}
<div className="flex flex-wrap justify-center gap-4">
  <a
    href="#thematic"
    className="bg-green-light text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-green-bright transition-all hover:-translate-y-0.5 no-underline"
  >
    Support the Mission
  </a>
  <a
    href="#contact"
    className="border border-cream/30 text-cream px-8 py-3.5 rounded-full text-sm hover:border-cream/60 hover:bg-cream/5 transition-all no-underline"
  >
    Get Involved
  </a>
</div>

{/* Stats */}
<div className="flex justify-center gap-10 mt-14 pt-10 border-t border-cream/10 w-full">
  {[
    { num: "10K+", label: "Trees Planted" },
    { num: "500+", label: "Volunteers" },
    { num: "Niger Delta", label: "Impact Region" },
  ].map((s) => (
    <div key={s.label} className="text-center">
      <div className="font-serif text-4xl font-semibold text-green-accent leading-none mb-1">
        {s.num}
      </div>
      <div className="text-[11px] text-cream/40 uppercase tracking-widest">
        {s.label}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}