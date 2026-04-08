"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Activity, Book, Zap, Monitor } from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  iconBg: string;
  gradient: string;
  repo?: string;
  demo?: string;
  year: string;
};

const projects: Project[] = [
  {
    id: "proj-quiz",
    title: "Quiz Application",
    subtitle: "Quiz Application",
    description:
      "A full-stack quiz application that enables users to create, publish, and manage quizzes with public access. It integrates AI to generate questions automatically and provides a seamless quiz-taking experience with real-time feedback. Designed with a scalable architecture and optimized for performance and usability.",
    tags: ["Next.js", "Supabase", "TailwindCSS", "Shadcn UI"],
    icon: <Activity size={28} />,
    iconBg: "from-cyan-400 to-blue-500",
    gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
    repo: "https://github.com/Raflysaputra23/quiz-arena",
    year: "2026",
    demo: "https://quiz-arena.my.id"
  },
  {
    id: "proj-rafai",
    title: "Application Chatbot",
    subtitle: "Chatbot Application",
    description:
      "RAF-AI is a smart chatbot application built to deliver context-aware and efficient responses using modern AI capabilities. It supports natural conversations, enabling users to interact seamlessly while receiving accurate and relevant information. The system is designed with a scalable architecture and optimized for real-time performance.",
    tags: ["Next.JS", "TailwindCSS", "Shadcn UI", "Supabase"],
    icon: <Zap size={28} />,
    iconBg: "from-green-300 to-green-600",
    gradient: "from-green-500/15 via-green-500/10 to-transparent",
    repo: "https://github.com/Raflysaputra23/rafai-chat",
    year: "2025",
    demo: "https://rafai-chat.vercel.app"
  },
  {
    id: "proj-tugasku",
    title: "Application Tugasku",
    subtitle: "Tugasku Application",
    description:
      "Tugasku is a task management application that allows users to create, track, and manage tasks with deadline support. It provides clear visibility of pending tasks and integrates a campus schedule feature to help users manage both academic and daily activities in one place. Designed with a focus on usability, efficiency, and clean data organization.",
    tags: ["Next.JS", "TailwindCSS", "Shadcn UI", "Supabase"],
    icon: <Book size={28} />,
    iconBg: "from-blue-800 to-blue-900",
    gradient: "from-blue-800/15 via-blue-900/10 to-transparent",
    repo: "https://github.com/Raflysaputra23/tugasku",
    year: "2025",
    demo: "https://tugasku-orpin.vercel.app/"
  },
  {
    id: "proj-spp-pembayaran",
    title: "Application SPP Pembayaran",
    subtitle: "SPP Pembayaran Application",
    description:
      "A full-stack SPP payment system that enables schools to handle tuition fee transactions online through integrated payment gateway services. The system supports real-time transaction tracking, ensuring accurate monitoring and reporting of all payment activities. Built with a focus on security, reliability, and scalable transaction handling.",
    tags: ["PHP", "TailwindCSS", "MySQL", "HTML", "CSS", "Javascript", "Midtrans"],
    icon: <Monitor size={28} />,
    iconBg: "from-blue-600 to-blue-700",
    gradient: "from-blue-600/15 via-blue-700/10 to-transparent",
    repo: "https://github.com/Raflysaputra23/spp-pembayaran",
    year: "2024"
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/25 hover:shadow-2xl hover:shadow-orange-600/10"
    >
      {/* Top visual strip */}
      <div
        className={`relative h-52 bg-linear-to-br ${project.gradient} flex items-center justify-center border-b border-white/5 overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/3 border border-white/5" />
          <div className="absolute bottom-0 left-8 w-32 h-32 rounded-full bg-white/2 border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-orange-500/5 border border-orange-500/10" />
        </div>
        {/* Icon */}
        <div
          className={`relative z-10 w-20 h-20 rounded-3xl bg-linear-to-br ${project.iconBg} flex items-center justify-center text-white shadow-2xl shadow-orange-600/30 group-hover:scale-110 transition-transform duration-500`}
        >
          {project.icon}
        </div>
        {/* Year badge */}
        <div className="absolute top-4 left-4 text-xs font-mono text-white/40 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <div className="mb-1">
          <span className="text-orange-400/70 text-xs font-semibold uppercase tracking-wider">
            {project.subtitle}
          </span>
        </div>
        <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-orange-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.repo && (
            <a
              href={project.repo}
              id={`${project.id}-repo`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 py-2.5 text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              id={`${project.id}-demo`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 py-2.5 text-sm flex items-center justify-center gap-2"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          {!project.demo && (
            <span className="flex-1 py-2.5 text-sm flex items-center justify-center gap-2 text-white/25 border border-white/5 rounded-full cursor-default">
              <ExternalLink size={15} />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
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
      { threshold: 0.10 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* bg glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-orange-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-title-underline">
            Featured Projects
          </h2>
          <p className="text-white/45 mt-6 max-w-lg mx-auto text-base leading-relaxed">
            A selection of projects I&apos;ve built — from web systems to native mobile apps.
          </p>
        </div>

        {/* Projects grid */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className="reveal text-center mt-12">
          <a
            id="projects-more-github"
            href="https://github.com/Raflysaputra23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
