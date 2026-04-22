"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Booking", href: "/#booking" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-safari-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/">
          <Image
            src="/images/Gemini_Generated_Image_7fr6e87fr6e87fr6.png"
            alt="Torok Tours & Travel Ltd"
            width={80}
            height={80}
            className="object-contain"
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-safari-dark hover:text-safari-gold"
                    : "text-white/90 hover:text-safari-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden rounded-full border border-safari-gold/60 bg-safari-gold/10 px-6 py-2.5 text-sm font-semibold text-safari-gold backdrop-blur-sm transition-all duration-300 hover:bg-safari-gold hover:text-white md:inline-block"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-safari-dark" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="bg-safari-cream/95 px-6 pb-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-safari-dark hover:text-safari-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                className="mt-2 inline-block rounded-full bg-safari-gold px-6 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
