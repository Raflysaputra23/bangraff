"use client";

import { Mail, Heart, ArrowUp, Code2 } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "About",    href: "#about"    },
    { label: "Skills",   href: "#skills"   },
    { label: "Projects", href: "#projects" },
    { label: "Resume",   href: "#resume"   },
    { label: "Contact",  href: "#contact"  },
  ],
  Connect: [
    { label: "GitHub",    href: "https://github.com/Raflysaputra23" },
    { label: "LinkedIn",  href: "https://linkedin.com/in/raflysaputra23" },
    { label: "Email",     href: "mailto:966raflisaputra@example.com" },
  ],
};

const quotes = [
  "Code is poetry written for machines, but read by humans.",
  "Building today what will inspire tomorrow.",
  "Efficiency is intelligence elegantly applied.",
];

export default function Footer() {
  const quote = quotes[new Date().getDay() % quotes.length];
  const year  = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-orange-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand blurb */}
          <div className="md:col-span-2">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="inline-flex items-center gap-2 mb-4 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-orange-700 shadow-lg shadow-orange-600/25">
                <Code2 size={18} className="text-white" />
              </span>
              <span className="text-white font-bold text-lg tracking-tight">
                raf<span className="text-orange-400">.</span>dev
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              A developer passionate about crafting elegant, efficient software — from web development to resilient backend systems.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                id="footer-github"
                href="https://github.com/Raflysaputra23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                {/* <Github size={17} /> */}
              </a>
              <a
                id="footer-linkedin"
                href="https://linkedin.com/in/Raflysaputra23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                {/* <Linkedin size={17} /> */}
              </a>
              <a
                id="footer-email"
                href="mailto:966raflisaputra@example.com"
                aria-label="Email"
                className="social-link"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(footerLinks) as [string, { label: string; href: string }[]][]).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white/80 font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={link.href.startsWith("#") ? (e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, link.href) : undefined}
                      className="text-white/40 hover:text-orange-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inspirational quote banner */}
        <div className="divider mb-8" />
        <div className="flex flex-col items-center text-center mb-8 gap-2">
          <p className="text-white/20 text-xs tracking-widest uppercase font-semibold">Quote of the day</p>
          <blockquote className="text-white/55 text-sm italic max-w-lg">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
        <div className="divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Rafly - All Rights Reserved.
          </p>

          {/* Back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-white/30 hover:text-orange-400 text-xs transition-colors duration-200"
          >
            Back to top
            <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all">
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
