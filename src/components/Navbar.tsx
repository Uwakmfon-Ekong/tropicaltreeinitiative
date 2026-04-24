"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/thematic" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const start = window.innerHeight; // 100vh
      const end = start + 200; // fade over next 200px

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
        backgroundColor: `rgba(9, 30, 24, ${progress * 0.9})`, // richer green
        backdropFilter: `blur(${progress * 12}px)`,
        boxShadow: progress > 0 ? "0 8px 30px rgba(0,0,0,0.2)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 py-12 px-[5%] flex items-center justify-between h-[70px] transition-all duration-300"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image src="/tropslogo.png" alt="TRCC Logo" width={50} height={50} />
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-cream/80 hover:text-green-pale text-xs uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href="/contact"
            className="bg-green-light text-white text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:bg-green-bright transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <button
        className="md:hidden text-cream text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-[70px] left-0 right-0 bg-green-dark flex flex-col gap-4 px-[5%] py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 text-sm uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-green-light text-white text-sm uppercase tracking-widest px-5 py-3 rounded-full text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}