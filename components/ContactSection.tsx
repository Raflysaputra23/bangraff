"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const socials = [
  {
    id: "contact-github",
    icon: <Lock size={20} />,
    label: "GitHub",
    value: "@Raflysaputra23",
    href: "https://github.com/Raflysaputra23",
  },
  {
    id: "contact-linkedin",
    icon: <Lock size={20} />,
    label: "LinkedIn",
    value: "Rafly Saputra",
    href: "https://linkedin.com/in/raflysaputra23",
  },
  {
    id: "contact-email",
    icon: <Mail size={20} />,
    label: "Email",
    value: "966raflisaputra@example.com",
    href: "mailto:966raflisaputra@example.com",
  },
];

export default function ContactSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const [form, setForm]     = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim())    errs.name    = "Name is required";
    if (!form.email.trim())   errs.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1800)); // Simulate network
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* bg glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-title-underline">
            Contact Me
          </h2>
          <p className="text-white/45 mt-6 max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left sidebar: contact info */}
          <div className="md:col-span-2 reveal-left space-y-5">
            {/* Location */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-orange-500/12 border border-orange-500/20 flex items-center justify-center">
                <MapPin size={18} className="text-orange-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Location</p>
                <p className="text-white text-sm font-medium">Indonesia 🇮🇩</p>
              </div>
            </div>

            {/* Social cards */}
            {socials.map((s) => (
              <a
                key={s.id}
                id={s.id}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-orange-500/12 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  {s.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{s.label}</p>
                  <p className="text-white text-sm font-medium">{s.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <div className="md:col-span-3 reveal-right">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-white/60 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? "border-red-500/50! shadow-none!" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-white/60 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? "border-red-500!/50 shadow-none!" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-white/60 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Hi Rafly, I have a project I'd like to discuss…"
                  value={form.message}
                  onChange={handleChange}
                  className={`form-input resize-none ${errors.message ? "border-red-500!/50 shadow-none!" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success banner */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <CheckCircle size={18} />
                  <span>Message sent! I&apos;ll get back to you soon 🙌</span>
                </div>
              )}

              {/* Submit */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 group disabled:opacity-75"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
