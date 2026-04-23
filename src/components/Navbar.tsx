"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/thematic" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-14 bg-transparent backdrop-blur-md px-[5%] flex items-center justify-between h-[70px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image src="/tropslogo.png" alt="TRCC Logo" width={50} height={50} />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-cream/70 hover:text-green-pale text-xs uppercase tracking-widest transition-colors no-underline"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-green-light text-white text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:bg-green-bright transition-colors no-underline"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-cream text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[70px] left-0 right-0 bg-green-dark flex flex-col gap-4 px-[5%] py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 text-sm uppercase tracking-widest no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-green-light text-white text-sm uppercase tracking-widest px-5 py-3 rounded-full text-center no-underline"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
