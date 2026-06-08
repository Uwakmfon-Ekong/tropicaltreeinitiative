"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NGN_PER_TREE = 500;
const USD_PER_TREE = 0.5;

const ngnAmounts = [
  { amount: 2500, trees: 5 },
  { amount: 5000, trees: 10 },
  { amount: 12500, trees: 25 },
  { amount: 25000, trees: 50 },
  { amount: 50000, trees: 100 },
  { amount: 100000, trees: 200 },
];

const usdAmounts = [
  { amount: 5, trees: 10 },
  { amount: 10, trees: 20 },
  { amount: 25, trees: 50 },
  { amount: 50, trees: 100 },
  { amount: 100, trees: 200 },
  { amount: 250, trees: 500 },
];

export default function DonatePage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amounts = currency === "NGN" ? ngnAmounts : usdAmounts;
  const symbol = currency === "NGN" ? "₦" : "$";
  const perTree = currency === "NGN" ? NGN_PER_TREE : USD_PER_TREE;

  const finalAmount = custom ? parseFloat(custom) : selected;
  const treesFromAmount = finalAmount ? Math.floor(finalAmount / perTree) : 0;

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (!finalAmount || finalAmount <= 0)
      return "Please select or enter a donation amount.";
    return null;
  };

  const handleDonate = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setLoading(true);

    try {
      const endpoint =
        currency === "NGN" ? "/api/donate-paystack" : "/api/donate-stripe";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, email, name }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>

        {/* HERO — full bg image like Clean Air */}
        <section
          className="bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat min-h-[70vh] flex flex-col items-center justify-center px-6 text-center"
          style={{ backgroundImage: "url('/tree5.jpeg')" }}
        >
          <span className="text-xs font-semibold text-[#a5d6a7] uppercase tracking-widest block mb-3">
            Support TRCC
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Plant a Tree Today
          </h1>
          <p className="text-white/75 max-w-xl mx-auto leading-relaxed text-lg mb-12">
            Every donation goes directly toward planting trees, restoring
            ecosystems, and empowering communities across Nigeria.
          </p>
          <div className="flex flex-wrap gap-10 justify-center pt-10 border-t border-white/20 w-full max-w-xl">
            {[
              { num: "100M", label: "Mangrove Trees Target" },
              { num: "3M+", label: "Trees Planted" },
              { num: "100K+", label: "People Reached" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-[#74c69d] mb-1">{s.num}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DONATE FORM */}
        <section className="bg-[#f1f8e9] py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[#c8e6c9] rounded-3xl p-10 shadow-sm">

              {/* Currency Toggle */}
              <div className="mb-8">
                <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-3">
                  Select Currency
                </p>
                <div className="flex gap-2 bg-[#e8f5e9] rounded-full p-1">
                  {(["NGN", "USD"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setSelected(0);
                        setCustom("");
                      }}
                      className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                        currency === c
                          ? "bg-[#1a3a2a] text-white"
                          : "text-[#1a3a2a] hover:bg-[#c8e6c9]"
                      }`}
                    >
                      {c === "NGN" ? "Nigerian Naira (₦)" : "US Dollar ($)"}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-2 text-center">
                  {currency === "NGN"
                    ? "Pay with Paystack — Nigerian bank cards, bank transfer, USSD"
                    : "Pay with Stripe — International debit/credit cards"}
                </p>
              </div>

              {/* Amount Selection */}
              <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-3">
                Choose an Amount
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((a) => (
                  <button
                    key={a.amount}
                    onClick={() => {
                      setSelected(a.amount);
                      setCustom("");
                    }}
                    className={`py-3 px-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                      selected === a.amount && !custom
                        ? "bg-[#1a3a2a] text-white border-[#1a3a2a]"
                        : "border-[#c8e6c9] text-[#1a3a2a] hover:border-[#40916c]"
                    }`}
                  >
                    <div>{symbol}{a.amount.toLocaleString()}</div>
                    <div className={`text-[10px] mt-0.5 ${
                      selected === a.amount && !custom
                        ? "text-[#74c69d]"
                        : "text-gray-400"
                    }`}>
                      {a.trees} trees
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1.5">
                  Or enter custom amount ({symbol})
                </label>
                <input
                  type="number"
                  placeholder={`Custom amount in ${currency}`}
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setSelected(0);
                  }}
                  className="w-full border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors"
                />
              </div>

              {/* Impact Preview */}
              {treesFromAmount > 0 && (
                <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-2xl p-4 mb-6">
                  <p className="text-sm font-semibold text-[#1a3a2a] mb-1">
                    Your impact
                  </p>
                  <p className="text-2xl font-bold text-[#40916c]">
                    {treesFromAmount.toLocaleString()}{" "}
                    {treesFromAmount === 1 ? "tree" : "trees"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {symbol}{finalAmount?.toLocaleString()} at {symbol}{perTree} per tree
                  </p>
                </div>
              )}

              {/* Donor Details */}
              <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-3">
                Your Details
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-[#c8e6c9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#40916c] transition-colors"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                  <p className="text-red-500 text-xs">{error}</p>
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={loading}
                className="w-full bg-[#40916c] text-white py-4 rounded-full text-base font-bold hover:bg-[#52b788] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Processing..."
                  : finalAmount
                  ? `Donate ${symbol}${finalAmount.toLocaleString()} via ${
                      currency === "NGN" ? "Paystack" : "Stripe"
                    }`
                  : "Select an amount to donate"}
              </button>

              {/* Payment Info */}
              <div className="mt-5 pt-5 border-t border-[#c8e6c9]">
                <p className="text-[11px] text-gray-400 text-center mb-3">
                  Secure payment powered by{" "}
                  {currency === "NGN" ? "Paystack" : "Stripe"}
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <span className="border border-[#c8e6c9] text-[#2d6a4f] text-[11px] px-3 py-1.5 rounded-full">
                    {currency === "NGN" ? "Bank Transfer" : "Visa"}
                  </span>
                  <span className="border border-[#c8e6c9] text-[#2d6a4f] text-[11px] px-3 py-1.5 rounded-full">
                    {currency === "NGN" ? "USSD" : "Mastercard"}
                  </span>
                  <span className="border border-[#c8e6c9] text-[#2d6a4f] text-[11px] px-3 py-1.5 rounded-full">
                    {currency === "NGN" ? "Nigerian Cards" : "American Express"}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 text-center mt-4">
                Fields marked <span className="text-red-400">*</span> are required
              </p>
            </div>

            {/* Other Ways */}
            <div className="mt-8 bg-white border border-[#c8e6c9] rounded-2xl p-6 text-center">
              <p className="text-sm font-semibold text-[#1a3a2a] mb-4">
                Other Ways to Support TRCC
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="border border-[#c8e6c9] text-[#2d6a4f] text-xs px-4 py-2 rounded-full hover:border-[#40916c] transition-colors no-underline"
                >
                  Corporate Partnership
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#c8e6c9] text-[#2d6a4f] text-xs px-4 py-2 rounded-full hover:border-[#40916c] transition-colors no-underline"
                >
                  Volunteer
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#c8e6c9] text-[#2d6a4f] text-xs px-4 py-2 rounded-full hover:border-[#40916c] transition-colors no-underline"
                >
                  In-Kind Donation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DONATE */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-[#40916c] uppercase tracking-widest block mb-2">
                Why It Matters
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">
                Your Donation in Action
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                100% of donations go toward tree planting, seedling distribution,
                and environmental education across Nigeria.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Mangrove Restoration",
                  desc: "Restoring critical mangrove ecosystems across the Niger Delta region to protect coastlines and marine biodiversity.",
                  amount: "₦500 = 1 tree",
                },
                {
                  title: "Community Empowerment",
                  desc: "Training communities in sustainable agriculture, environmental conservation, and tree care practices.",
                  amount: "₦5,000 = 10 trees",
                },
                {
                  title: "Environmental Education",
                  desc: "Teaching schools and communities about biodiversity, climate change, and the importance of protecting Nigeria's forests.",
                  amount: "₦25,000 = 50 trees",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="border-2 border-[#e8f5e9] rounded-2xl p-7 hover:-translate-y-1 hover:border-[#40916c] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-1.5 rounded-full bg-[#40916c] mb-5" />
                  <h3 className="text-lg font-bold text-[#1a3a2a] mb-3">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.desc}</p>
                  <span className="bg-[#e8f5e9] text-[#2d6a4f] text-xs font-semibold px-3 py-1.5 rounded-full">
                    {c.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}