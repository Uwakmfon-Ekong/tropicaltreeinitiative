import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MangroveRestorationPage() {
  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        {/* HERO */}
        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/mangroverestore.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/90" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">Ongoing</span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6">
              Niger Delta Mangrove Restoration
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed max-w-[520px] mx-auto">
              Restoring critical mangrove ecosystems across the Niger Delta in partnership with FasterCapital.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white px-[5%] py-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-green-light uppercase tracking-widest block mb-3">Overview</span>
            <h2 className="font-serif text-4xl font-semibold text-green-dark mb-6">About This Project</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              In partnership with FasterCapital through the EquityPilot Program, TRCC is leading a large-scale effort to restore critical mangrove ecosystems across the Niger Delta region. Over 1.5 million mangrove seedlings have been planted across degraded coastal zones, sequestering carbon, protecting shorelines from erosion, and restoring critical habitats for fish, birds, and marine wildlife.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Community members are trained and employed as conservation stewards, ensuring long-term sustainability of restored sites and providing local livelihoods through conservation work.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-cream px-[5%] py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "1.5M+", label: "Seedlings Planted" },
              { num: "500ha", label: "Area Restored" },
              { num: "15+", label: "Communities" },
              { num: "2023", label: "Project Start" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-green-light/15 rounded-2xl p-6 text-center">
                <p className="font-serif text-3xl font-semibold text-green-light mb-1">{s.num}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="bg-white px-[5%] py-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-green-light uppercase tracking-widest block mb-3">Goals</span>
            <h2 className="font-serif text-4xl font-semibold text-green-dark mb-8">Key Objectives</h2>
            <div className="flex flex-col gap-4">
              {[
                "Restore degraded mangrove ecosystems across the Niger Delta coastline",
                "Sequester carbon and contribute to Nigeria's climate commitments",
                "Protect coastal communities from flooding and shoreline erosion",
                "Restore habitats for endangered marine and bird species",
                "Train and employ local community members as conservation stewards",
                "Build long-term community ownership of restored ecosystems",
              ].map((o, i) => (
                <div key={o} className="flex items-start gap-4 bg-cream border border-green-light/15 rounded-2xl px-6 py-4">
                  <div className="w-8 h-8 min-w-[32px] rounded-full bg-green-light flex items-center justify-center text-white text-sm font-bold">{i + 1}</div>
                  <p className="text-sm text-green-dark leading-relaxed pt-1">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-dark text-white px-[5%] py-20 text-center">
          <h2 className="font-serif text-4xl mb-4">Support This Project</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Every donation goes directly toward planting and protecting mangrove trees across the Niger Delta.</p>
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