"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DonatePage() {
  const [selected, setSelected] = useState(40);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const amount = custom ? Number(custom) : selected;

  return (
    <main className="bg-black/20 bg-blend-overlay bg-[url(/tree5.jpeg)] h-[70vh] bg-no-repeat bg-cover text-green-dark">
    
          <Navbar />

      {/* HERO */}
      <section className="bg-forest-dark flex justify-center items-center flex-col h-full py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Support the Mission
        </span>

        <h1 className="text-5xl font-bold text-white mb-5">
          Support a Greener Tomorrow
        </h1>

        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Your donation helps us buy seedlings, tools, water supplies, transportation,
          and educational materials for communities. Every contribution plants hope.
        </p>
      </section>

      {/* DONATION CARD */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="bg-white border border-forest-mist rounded-3xl p-10 shadow-sm">

            {/* Frequency */}
            <div className="flex gap-2 mb-8 bg-cream rounded-full p-1">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${
                    frequency === f
                      ? "bg-green-950 text-cream"
                      : "text-forest-dark"
                  }`}
                >
                  {f === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            {/* Amount */}
            <p className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">
              Choose an amount
            </p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[10, 20, 40, 60, 100, 200].map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelected(amt);
                    setCustom("");
                  }}
                  className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                    selected === amt && !custom
                      ? "bg-forest-dark text-forest-dark border-forest-dark"
                      : "border-forest-mist text-forest-dark hover:border-forest-light"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount ($)"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setSelected(0);
              }}
              className="w-full border-2 border-forest-mist rounded-xl px-4 py-3 text-sm mb-6 focus:border-forest-light outline-none"
            />

            {/* Impact */}
            <div className="bg-forest-fog rounded-2xl p-5 mb-6">
              <p className="text-sm font-semibold text-forest-dark mb-1">
                Your impact:{" "}
                <span className="text-forest-light">
                  ${amount} {frequency === "monthly" ? "/month" : "one-time"}
                </span>
              </p>

              <p className="text-xs text-gray-500">
                {amount >= 40
                  ? "Plants a full tree in a community — thank you! 🌳"
                  : "Helps provide seedlings and tools for our volunteers 🌱"}
              </p>
            </div>

            {/* MAIN DONATE BUTTON (NO TRCC REDIRECT) */}
            <button
              onClick={() => {
                alert(
                  `Donation initialized: $${amount} (${frequency}) — integrate payment gateway here`
                );
              }}
              className="w-full bg-forest-light text-forest-dark py-4 rounded-full text-base font-bold hover:bg-forest-bright transition-colors"
            >
              Donate ${amount} {frequency === "monthly" ? "/month" : ""}
            </button>

            {/* OTHER WAYS */}
            <div id="stock" className="mt-6 pt-6 border-t border-forest-mist text-center">
              <p className="text-xs text-gray-400 mb-3">
                Other ways to give
              </p>

              <div className="flex gap-3 justify-center flex-wrap">
                
                {/* STOCK */}
                <button className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors">
                  Stock Donation
                </button>

                {/* CORPORATE */}
                <Link
                  href="/contact"
                  className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors no-underline"
                >
                  Corporate Partnership
                </Link>

                {/* TRCC INITIATIVE (AS REQUESTED) */}
                <a
                  href="https://tropicalcentre.org/"
                  target="_blank"
                  className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors no-underline"
                >
                  Tropical Tree Initiative (TRCC)
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}