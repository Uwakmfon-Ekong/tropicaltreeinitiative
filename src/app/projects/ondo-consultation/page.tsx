import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OndoConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/trcc1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/90" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">Community</span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6">
              Ondo State Community Consultation
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed max-w-[520px] mx-auto">
              Stakeholder-driven conservation planning bringing local voices to the center of environmental decision-making.
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-green-light uppercase tracking-widest block mb-3">Overview</span>
            <h2 className="font-serif text-4xl font-semibold text-green-dark mb-6">About This Project</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              TRCC conducted a series of stakeholder-driven conservation planning meetings across Ondo State, bringing local community leaders, farmers, women's groups, and government representatives to the center of environmental decision-making.
            </p>
            <p className="text-gray-500 leading-relaxed">
              The consultations identified key areas for reforestation, mapped community land use patterns, and established local conservation committees to oversee and sustain long-term environmental management in the region.
            </p>
          </div>
        </section>

        <section className="bg-cream px-[5%] py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "12+", label: "Communities" },
              { num: "500+", label: "Stakeholders" },
              { num: "8", label: "Meetings Held" },
              { num: "2024", label: "Year" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-green-light/15 rounded-2xl p-6 text-center">
                <p className="font-serif text-3xl font-semibold text-green-light mb-1">{s.num}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white px-[5%] py-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-green-light uppercase tracking-widest block mb-3">Goals</span>
            <h2 className="font-serif text-4xl font-semibold text-green-dark mb-8">Key Objectives</h2>
            <div className="flex flex-col gap-4">
              {[
                "Engage local communities in conservation planning and decision-making",
                "Identify priority areas for reforestation across Ondo State",
                "Map existing community land use patterns and forest cover",
                "Establish local conservation committees for long-term oversight",
                "Build community awareness of environmental threats and solutions",
                "Develop community-led action plans for sustainable land management",
              ].map((o, i) => (
                <div key={o} className="flex items-start gap-4 bg-cream border border-green-light/15 rounded-2xl px-6 py-4">
                  <div className="w-8 h-8 min-w-[32px] rounded-full bg-green-light flex items-center justify-center text-white text-sm font-bold">{i + 1}</div>
                  <p className="text-sm text-green-dark leading-relaxed pt-1">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-dark text-white px-[5%] py-20 text-center">
          <h2 className="font-serif text-4xl mb-4">Support Our Work</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Community-led conservation is at the heart of everything we do at TRCC.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/donate" className="bg-green-light px-8 py-3 rounded-full text-sm hover:bg-green-bright transition no-underline">Donate Now</Link>
            <Link href="/contact" className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition no-underline">Partner With Us</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}