import Image from "next/image";

const pillars = [
  {
    title: "Vision",
    text: "A sound society living in harmony with nature, where communities and ecosystems thrive together sustainably.",
  },
  {
    title: "Mission",
    text: "To create awareness and build the capacity of rural communities by promoting sustainable agriculture, environmental conservation, healthy living, and the preservation of indigenous knowledge.",
  },
  {
    title: "Objectives",
    text: "We promote natural resource conservation, educate communities on environmental and socio-economic sustainability, and support improved livelihoods through practices like organic farming, mixed cropping, and livestock production.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-[5%] py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="w-full aspect-[3.5/5] bg-gradient-to-br from-green-mid to-green-dark rounded-3xl flex items-center justify-center text-8xl text-white/10 relative overflow-hidden">
            <Image
              src="/trcc1.jpg"
              alt="Vision"
              width={700}
              height={400}
              className="object-cover w-full h-full rounded-3xl"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-green-dark/90 rounded-2xl p-5 backdrop-blur-sm">
              <p className="font-serif text-lg italic text-cream leading-snug">
                "A sound society in harmony with nature."
              </p>
              <span className="text-xs text-cream/40 uppercase tracking-widest mt-2 block">
                TRCC Vision Statement
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-xs font-medium text-green-light uppercase tracking-[0.12em] mb-3 block">
            Who We Are
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-green-dark mb-5">
            Planting Trees.
            <br />
            Restoring Life.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-[520px] mb-8">
            TRCC is dedicated to restoring the environment through tree planting
            and community action. Since 2001, we have worked with rural
            communities to grow trees, restore degraded land, and build
            sustainable livelihoods through nature-based solutions.
          </p>

          <div className="flex flex-col gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-green-light/15 bg-cream hover:border-green-light hover:translate-x-1 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-green-pale flex items-center justify-center text-base mb-3"></div>
                <h3 className="text-xs font-medium text-green-dark uppercase tracking-widest mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
