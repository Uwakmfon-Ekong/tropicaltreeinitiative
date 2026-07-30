import Image from "next/image";
import { Eye, Target, ListChecks } from "lucide-react";

const pillars = [
  {
    title: "Vision",
    text: "A sound society living in harmony with nature, where communities and ecosystems thrive together sustainably.",
    icon: Eye,
  },
  {
    title: "Mission",
    text: "To create awareness and build the capacity of rural communities by promoting sustainable agriculture, environmental conservation, healthy living, and the preservation of indigenous knowledge.",
    icon: Target,
  },
  {
    title: "Objectives",
    text: "We promote natural resource conservation, educate communities on environmental and socio-economic sustainability, and support improved livelihoods through practices like organic farming, mixed cropping, and livestock production.",
    icon: ListChecks,
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
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group p-6 rounded-2xl border border-green-light/15 bg-cream hover:border-green-light hover:bg-white hover:shadow-md hover:translate-x-1 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-dark flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} strokeWidth={1.75} className="text-white" />
                  </div>
                  <h3 className="text-xs font-semibold text-green-dark uppercase tracking-widest mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}