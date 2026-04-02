"use client";

import { useEffect, useRef } from "react";
import { Lightbulb, Target, Zap, Layers, Plus } from "lucide-react";

const highlights = [
  {
    id: "about-h1",
    icon: <Target size={20} className="text-orange-400" />,
    title: "Detail-Oriented",
    desc: "Every pixel, every function — crafted with precision.",
  },
  {
    id: "about-h2",
    icon: <Zap size={20} className="text-orange-400" />,
    title: "Efficiency First",
    desc: "Optimized solutions that scale without compromising clarity.",
  },
  {
    id: "about-h3",
    icon: <Layers size={20} className="text-orange-400" />,
    title: "Full-Stack Mindset",
    desc: "From mobile UI to backend APIs — comfortable across the stack.",
  },
  {
    id: "about-h4",
    icon: <Lightbulb size={20} className="text-orange-400" />,
    title: "Continuous Learner",
    desc: "Always exploring new technologies and best practices.",
  },
];

const stats = [
  { id: "stat-projects", value: "5+", label: "Projects Delivered" },
  { id: "stat-techs", value: "13+", label: "Technologies Mastered" },
  { id: "stat-years", value: "5+", label: "Years of Experience" },
  { id: "stat-collab", value: "1+", label: "Teams Collaborated" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="reveal text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-title-underline">
            Who I Am
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <div className="reveal-left space-y-5">
            <p className="text-lg text-white/75 leading-relaxed">
              I&apos;m <span className="text-orange-400 font-semibold">Rafly</span>, a passionate{" "}
              <span className="text-white font-medium">full-stack web and mobile developer</span> focused on building{" "}
              <span className="text-white font-medium">scalable, maintainable, and high-performance applications</span>. I enjoy turning complex problems into clean and efficient solutions.
            </p>

            <p className="text-base text-white/55 leading-relaxed">
              I work across web and mobile development, with backend experience using{" "}
              <span className="text-white font-medium">Node.js</span> and{" "}
              <span className="text-white font-medium">Python</span>. I prioritize writing code that is not only functional but also easy to understand, maintain, and extend.
            </p>

            <p className="text-base text-white/55 leading-relaxed">
              Beyond coding, I have a strong interest in{" "}
              <span className="text-white font-medium">system architecture</span> and{" "}
              <span className="text-white font-medium">networking</span>, allowing me to design and build robust, production-ready applications from end to end.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2 pt-2 items-center">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "Next.js", "Python", "MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
              <Plus className="text-orange-400/80" strokeWidth={4} size={18} />
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="reveal-right grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.id}
                id={h.id}
                className="glass-card glass-card-hover rounded-2xl p-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                  {h.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{h.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.id} id={s.id} className="stat-card">
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-white/50 text-xs font-medium leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
