"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about"   },
  { label: "Skills",   href: "#skills"  },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume"  },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* IntersectionObserver to highlight active nav */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-black/20 border-b border-white/5 shadow-2xl shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-orange-700 shadow-lg shadow-orange-600/30 group-hover:shadow-orange-500/50 transition-shadow duration-300">
            <Code2 size={18} className="text-white" />
          </span>
          <span className="text-white font-bold text-lg tracking-tight">
            Bang<span className="text-orange-400">raff</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`nav-link ${active === link.href.slice(1) ? "text-orange-400!" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          id="nav-cta"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm"
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-orange-400 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col gap-1 px-6 py-4 bg-black/90 backdrop-blur-xl border-t border-white/5"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? "bg-orange-500/15 text-orange-400"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              id="mobile-nav-cta"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); setMenuOpen(false); }}
              className="btn-primary block text-center px-5 py-3 text-sm"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
