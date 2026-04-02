"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";

const TITLES = [
  "Front-End Developer",
  "Back-End Developer",
  "Mobile Developer",
  "Full-Stack Developer",
  "Web Developer",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    void (async() => {
        setMounted(true);
      })();
  }, []);

  /* Typing effect */
  useEffect(() => {
    if (!mounted) return;

    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((i) => i + 1);
      }, 80);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((i) => i - 1);
      }, 45);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex < 0) {
      void (async() => {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setCharIndex(0);
      })()
    }

    return () => clearTimeout(timeout);
  }, [mounted, charIndex, deleting, titleIndex]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="mesh-bg" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />

      {/* Glow orbs */}
      <div
        className="glow-orb absolute w-96 h-96 -top-20 -left-20 bg-orange-600/20"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="glow-orb absolute w-64 h-64 bottom-20 right-0 bg-orange-500/15"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="glow-orb absolute w-48 h-48 top-1/2 -translate-y-1/2 right-1/4 bg-amber-500/10"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Floating ring decoration */}
      <div className="absolute top-20 right-16 md:right-32 w-40 h-40 rounded-full border border-orange-500/15 animate-spin-slow hidden md:block" />
      <div className="absolute top-24 right-20 md:right-36 w-28 h-28 rounded-full border border-orange-400/10 animate-spin-slow hidden md:block" style={{ animationDirection: "reverse", animationDuration: "15s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability pill */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to work · Available for projects
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Rafly</span>
        </h1>

        {/* Typing subtitle */}
        <div className="animate-fade-in-up delay-200 h-12 flex items-center justify-center gap-1 mb-6">
          <span className="text-2xl md:text-3xl font-semibold text-white/80">
            {displayText}
          </span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-300 max-w-xl mx-auto text-base md:text-lg text-white/50 leading-relaxed mb-10">
          Full-stack web developer and mobile developer building elegant and efficient solutions.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            id="hero-cta-contact"
            onClick={scrollToContact}
            className="btn-primary px-7 py-3.5 text-sm md:text-base inline-flex items-center gap-2"
          >
            Get in Touch
            <span className="text-lg">✦</span>
          </button>
          <a
            id="hero-cta-github"
            href="https://github.com/Raflysaputra23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-7 py-3.5 text-sm md:text-base inline-flex items-center gap-2"
          >
            {/* <Github size={16} /> */}
            View GitHub
          </a>
        </div>

        {/* Social icons */}
        <div className="animate-fade-in-up delay-500 flex items-center justify-center gap-4">
          <a
            id="hero-social-github"
            href="https://github.com/Raflysaputra23"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            {/* <Github size={18} /> */}
          </a>
          <a
            id="hero-social-linkedin"
            href="https://linkedin.com/in/Raflysaputra"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            {/* <Linkedin size={18} /> */}
          </a>
          <a
            id="hero-social-email"
            href="mailto:966raflisaputra@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        id="hero-scroll-down"
        onClick={scrollDown}
        className="animate-fade-in delay-700 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-orange-400 transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-orange-400" />
      </button>
    </section>
  );
}
