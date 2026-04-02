"use client";

import { useEffect, useRef } from "react";
import {
  Smartphone,
  Server,
  Shield,
  Database,
  Globe,
  Terminal,
  Cpu,
  Code2,
  GitBranch,
  Lock,
  LineStyle,
  Atom,
  Toolbox,
  GitBranchIcon,
  Type,
} from "lucide-react";

type Skill = {
  id: string;
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
};

type SkillGroup = {
  id: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "sg-web",
    category: "Web Development",
    description: "Crafting website experiences with modern Next JS",
    icon: <Code2 size={22} className="text-orange-400" />,
    skills: [
      { id: "sk-nextjs", icon: <Code2 size={18} />, name: "Next JS", level: 90, color: "#7F52FF" },
      { id: "sk-nodejs", icon: <Cpu size={18} />, name: "Node JS", level: 85, color: "#4285F4" },
      { id: "sk-reactjs", icon: <Atom size={18} />, name: "React JS", level: 90, color: "#3DDC84" },
      { id: "sk-tailwind", icon: <LineStyle size={18} />, name: "Tailwind CSS", level: 90, color: "#f97316" },
      { id: "sk-typescript", icon: <Type size={18} />, name: "TypeScript", level: 90, color: "#007acc" },
    ],
  },
  {
    id: "sg-backend",
    category: "Backend & Systems",
    description: "Building scalable APIs and resilient backend systems.",
    icon: <Server size={22} className="text-orange-400" />,
    skills: [
      { id: "sk-nodejs", icon: <Globe size={18} />, name: "Node.js", level: 85, color: "#68A063" },
      { id: "sk-golang", icon: <Terminal size={18} />, name: "Golang", level: 78, color: "#00ADD8" },
      { id: "sk-java", icon: <Code2 size={18} />, name: "Java", level: 80, color: "#E76F00" },
      { id: "sk-python", icon: <Code2 size={18} />, name: "Python", level: 75, color: "#3776AB" },
      { id: "sk-db", icon: <Database size={18} />, name: "PostgreSQL / MySQL", level: 85, color: "#336791" },
    ],
  },
  {
    id: "sg-tools",
    category: "Tools",
    description: "Tools that I use to build applications.",
    icon: <Toolbox size={22} className="text-orange-400" />,
    skills: [
      { id: "sk-netsec", icon: <GitBranchIcon size={18} />, name: "Git", level: 80, color: "#f97316" },
      { id: "sk-linux", icon: <Terminal size={18} />, name: "Linux / CLI", level: 82, color: "#FCC624" },
      { id: "sk-http", icon: <Globe size={18} />, name: "REST / HTTP APIs", level: 88, color: "#EA7B3F" },
      { id: "sk-firebase", icon: <Database size={18} />, name: "Firebase", level: 88, color: "#EA7B3F" },
    ],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${skill.level}%`;
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [skill.level]);

  return (
    <div className="flex items-center gap-3 group" id={skill.id}>
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white/60 group-hover:text-orange-400 transition-colors"
        style={{ background: `${skill.color}15` }}
      >
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-1.5">
          <span className="text-white/80 text-sm font-medium">{skill.name}</span>
          <span className="text-orange-400/70 text-xs font-mono">{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            ref={barRef}
            className="h-full rounded-full transition-[width] duration-1000 ease-out"
            style={{
              width: "0%",
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-title-underline">
            My Skills
          </h2>
          <p className="text-white/45 mt-6 max-w-lg mx-auto text-base leading-relaxed">
            A curated set of technologies I use to build reliable applications — from web development to distributed backends.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.id}
              id={group.id}
              className={`reveal glass-card rounded-3xl p-7 space-y-5`}
              style={{ transitionDelay: `${gi * 120}ms` }}
            >
              {/* Group header */}
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">{group.category}</h3>
                  <p className="text-white/45 text-xs mt-0.5 leading-relaxed">{group.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="divider" />

              {/* Skills bars */}
              <div className="space-y-3.5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra tech tags row */}
        <div className="reveal mt-12 text-center">
          <p className="text-white/35 text-sm mb-5 font-medium">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Firebase", "Supabase", "Apache", "Github", "Expo",
              "Git", "Figma", "Postman", "TypeScript", "MongoDB",
            ].map((t) => (
              <span key={t} className="tech-badge text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
