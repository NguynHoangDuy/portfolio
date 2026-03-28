"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

// Get your free access key at https://web3forms.com
// Enter nguyenhoangduy933@gmail.com → copy the key → set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("to", "nguyenhoangduy933@gmail.com");
    formData.append("subject", `Portfolio contact from ${formData.get("name") || formData.get("email")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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
    <section id="contact" className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            INITIATE <br className="hidden md:block" />
            <span className="text-gray-400">CONNECTION.</span>
          </motion.h2>
        </div>

        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest text-primary uppercase">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest text-primary uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold tracking-widest text-primary uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-gray-900 text-white font-bold tracking-widest text-sm py-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-70 hover:bg-black overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <Mail size={16} /> SEND MESSAGE
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.span key="loading" className="flex items-center gap-2 text-blue-300" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span key="success" className="flex items-center gap-2 text-green-400" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <CheckCircle2 size={16} /> MESSAGE SENT
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span key="error" className="flex items-center gap-2 text-red-400" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <AlertCircle size={16} /> FAILED — TRY AGAIN
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-900 font-bold tracking-tight text-lg">
            NGUYEN HOANG DUY
          </div>
          <div className="flex gap-8 text-sm font-bold tracking-widest text-gray-500">
            <Link href="https://github.com/nguynhoangduy" className="hover:text-primary transition-colors">GITHUB</Link>
            <Link href="https://nguynhoangduy.github.io/portfolio/" className="hover:text-primary transition-colors">PORTFOLIO</Link>
            <Link href="/portfolio/resume.pdf" target="_blank" className="hover:text-primary transition-colors">RESUME</Link>
          </div>
          <div className="text-gray-400 text-sm font-medium" suppressHydrationWarning>
            © {new Date().getFullYear()} NGUYEN HOANG DUY.
          </div>
        </div>
      </div>
    </section>
  );
}
