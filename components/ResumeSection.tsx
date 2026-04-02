"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Eye, FileText, CheckCircle } from "lucide-react";

export default function ResumeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded]   = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    // Simulate download interaction (replace with actual CV link)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    // Trigger actual download
    const link = document.createElement("a");
    link.href = "/cv-rafly.pdf"; // Put your actual CV path in /public
    link.download = "CV-Rafly.pdf";
    link.click();
  };

  const experiences = [
    {
      id: "exp-1",
      role: "Website Developer",
      company: "Freelance / Project-Based",
      period: "2024 – Present",
      tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Next.js", "TailwindCSS", "TypeScript"],
    },
    {
      id: "exp-2",
      role: "Mobile Developer",
      company: "Project-Based",
      period: "2025 – Present",
      tags: ["React Native", "Expo", "TypeScript"],
    },
    {
      id: "exp-3",
      role: "IT Support",
      company: "Campus Project",
      period: "2024 – Present",
      tags: ["Java", "MySQL", "Python", "Kotlin", "PHP"],
    },
  ];

  const education = [
    {
      id: "edu-1",
      degree: "S1 Ilmu Komputer",
      institution: "Universitas XYZ",
      period: "2024 – Present",
      gpa: "3.68 / 4.00",
    },
  ];

  return (
    <section id="resume" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-0 right-0 w-96 h-64 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-title-underline">
            Resume
          </h2>
          <p className="text-white/45 mt-6 max-w-md mx-auto text-base">
            A summary of my experience, education, and professional background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-14">
          {/* Experience */}
          <div className="reveal-left">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                <FileText size={15} className="text-orange-400" />
              </span>
              Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-orange-500/40 via-orange-500/20 to-transparent" />

              <div className="space-y-6 pl-10">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.id}
                    id={exp.id}
                    className="relative"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-dark-900 shadow-lg shadow-orange-500/40" />

                    <div className="glass-card rounded-2xl p-4 hover:border-orange-500/20 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                        <span className="text-orange-400/60 text-xs font-mono shrink-0 ml-2">{exp.period}</span>
                      </div>
                      <p className="text-white/45 text-xs mb-3">{exp.company}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((t) => (
                          <span key={t} className="tech-badge text-xs">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & CV buttons */}
          <div className="reveal-right flex flex-col gap-8">
            {/* Education */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                  <FileText size={15} className="text-orange-400" />
                </span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} id={edu.id} className="glass-card rounded-2xl p-5 hover:border-orange-500/20 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                      <span className="text-orange-400/60 text-xs font-mono">{edu.period}</span>
                    </div>
                    <p className="text-white/45 text-xs mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-white/30">GPA:</span>
                      <span className="tech-badge">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Download card */}
            <div className="glass-card rounded-3xl p-7 border border-orange-500/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-600/30">
                  <FileText size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Curriculum Vitae</h4>
                  <p className="text-white/40 text-xs">Updated · Maret 2026</p>
                </div>
              </div>

              <p className="text-white/45 text-sm leading-relaxed mb-6">
                My comprehensive CV includes work history, technical skills, certifications, and academic background.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Preview */}
                <a
                  id="resume-preview-btn"
                  href="/cv-rafly.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 py-3 text-sm flex items-center justify-center gap-2 group"
                >
                  <Eye size={15} className="group-hover:scale-110 transition-transform" />
                  Preview CV
                </a>

                {/* Download */}
                <button
                  id="resume-download-btn"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="btn-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-80"
                >
                  {downloaded ? (
                    <>
                      <CheckCircle size={15} className="animate-bounce-in" />
                      Downloaded!
                    </>
                  ) : downloading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Downloading…
                    </>
                  ) : (
                    <>
                      <Download size={15} className="group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform" />
                      Download CV
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
