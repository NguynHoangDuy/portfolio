"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Github, Linkedin, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1063ed79-18d7-43ce-9f39-ac026742aba7",
          name,
          email,
          message,
          subject: `Portfolio contact from ${name || email}`,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <motion.p
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — info */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-muted leading-relaxed mb-8">
                I'm open to new opportunities and collaborations. Feel free to reach out — I'll get back to you as soon as possible.
              </p>
              <div className="space-y-3">
                <a href="mailto:nguyenhoangduy933@gmail.com" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border-base flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Mail size={14} className="text-primary" />
                  </div>
                  nguyenhoangduy933@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/nguynhoangduy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-base bg-surface hover:bg-surface-2 text-sm font-semibold text-foreground transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/duyhoang291/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-base bg-surface hover:bg-surface-2 text-sm font-semibold text-foreground transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://nguynhoangduy.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-base bg-surface hover:bg-surface-2 text-sm font-semibold text-foreground transition-colors"
              >
                <ExternalLink size={15} /> Portfolio
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-base bg-surface hover:bg-surface-2 text-sm font-semibold text-foreground transition-colors"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border-base rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-muted uppercase">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="w-full bg-background border border-border-base rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-muted uppercase">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full bg-background border border-border-base rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-muted uppercase">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  className="w-full bg-background border border-border-base rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-60 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                      <Mail size={15} /> Send Message
                    </motion.span>
                  )}
                  {status === "loading" && (
                    <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                      <CheckCircle2 size={15} /> Message Sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span key="error" className="flex items-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                      <AlertCircle size={15} /> Failed — Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-black text-base text-foreground tracking-tight">NHD.DEV</span>
          <span className="text-muted text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Nguyen Hoang Duy. All rights reserved.
          </span>
        </div>

      </div>
    </section>
  );
}
