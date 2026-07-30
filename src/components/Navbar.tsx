"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/thematic" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const start = window.innerHeight * 0.1; // 10% of viewport height
      const end = window.innerHeight * 0.3; // fully solid by 30%
      const y = window.scrollY;
      let value = 0;
      if (y > start) {
        value = Math.min((y - start) / (end - start), 1);
      }
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: `rgba(9, 30, 24, ${progress * 0.92})`,
        backdropFilter: `blur(${progress * 14}px)`,
        boxShadow: progress > 0.1 ? "0 4px 24px rgba(0,0,0,0.15)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 lg:py-14 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline shrink-0">
        <Image src="/tropslogo.png" alt="TRCC Logo" width={42} height={42} className="rounded-full" />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        <ul className="flex gap-1 list-none items-center mr-4">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors no-underline ${
                    isActive ? "text-white" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-green-light rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="border border-white/25 text-cream text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all no-underline"
        >
          Contact Us
        </Link>
        <Link
          href="/donate"
          className="bg-white text-green-dark text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-cream font-semibold transition-all no-underline ml-2 shadow-sm"
        >
          Donate
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-cream w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-cream backdrop-blur-md h-screen flex flex-col px-[8%] py-24 md:hidden">
          <button
            className="absolute top-6 right-[8%] text-green-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-2">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-green-800 text-center hover:text-green-900 text-2xl font-serif py-3 border-b border-white/10 transition-colors no-underline"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="border border-green-800 text-green-800 text-sm uppercase tracking-widest px-5 py-3.5 rounded-full text-center no-underline hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-white text-green-dark text-sm uppercase tracking-widest px-5 py-3.5 rounded-full text-center font-semibold no-underline"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}