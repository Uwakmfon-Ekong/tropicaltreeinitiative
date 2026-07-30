import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgroForestryPage() {
  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/socialimpact.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/90" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">Social Impact</span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6">
              1 Million Agro-Forestry Trees
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed max-w-[520px] mx-auto">
              Integrating trees into farmlands to improve livelihoods and restore ecosystems across Nigeria.
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-green-light uppercase tracking-widest block mb-3">Overview</span>
            <h2 className="font-serif text-4xl font-semibold text-green-dark mb-6">About This Project</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              A landmark initiative to plant one million agro-forestry trees across rural farming communities in Nigeria. By integrating trees into existing farmlands, this project improves soil fertility, increases crop yields, and provides additional income for smallholder farmers through timber, fruits, and shade crops.
            </p>
            <p className="text-gray-500 leading-relaxed">
              The project targets vulnerable farming households across Akwa Ibom, Cross River, and Ondo States, combining environmental restoration with direct livelihood support for rural families.
            </p>
          </div>
        </section>

        <section className="bg-cream px-[5%] py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "1M", label: "Target Trees" },
              { num: "3", label: "States Covered" },
              { num: "5,000+", label: "Farmers Reached" },
              { num: "Ongoing", label: "Status" },
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
                "Plant one million agro-forestry trees across rural farming communities",
                "Improve soil fertility and increase crop yields for smallholder farmers",
                "Provide supplementary income through timber, fruits, and shade crops",
                "Reduce deforestation by integrating trees into existing farm systems",
                "Support food security and climate resilience in vulnerable communities",
                "Build farmer capacity in sustainable land management practices",
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
          <h2 className="font-serif text-4xl mb-4">Support This Project</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Help us reach our target of one million trees and transform livelihoods across Nigeria.</p>
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