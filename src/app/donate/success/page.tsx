import Link from "next/link";

export default function DonateSuccess() {
  return (
    <main className="pt-16 min-h-screen bg-[#f1f8e9] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl p-12 text-center max-w-md shadow-sm border border-[#c8e6c9]">
        <div className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-10 h-10 bg-[#40916c] rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#1a3a2a] mb-3">Thank You!</h1>
        <p className="text-gray-500 leading-relaxed mb-2">
          Your donation has been received. You are helping restore Nigeria's forests, one tree at a time.
        </p>
        <p className="text-[#40916c] font-semibold text-sm mb-8">
          A receipt has been sent to your email.
        </p>
        <Link href="/" className="bg-[#1a3a2a] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#2d6a4f] transition-colors no-underline inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  );
}