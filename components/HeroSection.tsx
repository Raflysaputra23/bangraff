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
    void (async () => {
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
      void (async () => {
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
          </a>
          <a
            id="hero-social-linkedin"
            href="https://linkedin.com/in/Raflysaputra"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
