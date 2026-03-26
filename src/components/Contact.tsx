"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
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
            INITIATE <br className="hidden md:block"/>
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
          {/* Subtle background element inside form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold tracking-widest text-primary uppercase">
                System Endpoint (Email)
              </label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                placeholder="root@domain.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold tracking-widest text-primary uppercase">
                Message Payload
              </label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono resize-none"
                placeholder="Enter securely parsed data here..."
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-gray-900 text-white font-bold tracking-widest text-sm py-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-80 hover:bg-black overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div key="idle" className="flex items-center gap-2" initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0, y:-10}}>
                    <Mail size={18} />
                    TRANSMIT
                  </motion.div>
                )}
                {status === "loading" && (
                  <motion.div key="loading" className="flex items-center gap-2 text-blue-300" initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0, y:-10}}>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING...
                  </motion.div>
                )}
                {status === "success" && (
                  <motion.div key="success" className="flex items-center gap-2 text-green-400" initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0, y:-10}}>
                    <CheckCircle2 size={18} />
                    MESSAGE DELIVERED
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div key="error" className="flex items-center gap-2 text-red-400" initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0, y:-10}}>
                    <AlertCircle size={18} />
                    CONNECTION FAILED
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-900 font-bold tracking-tight text-lg">
            ARCHITECT.DEV
          </div>
          <div className="flex gap-8 text-sm font-bold tracking-widest text-gray-500">
            <Link href="https://github.com" className="hover:text-primary transition-colors">GITHUB</Link>
            <Link href="https://linkedin.com" className="hover:text-primary transition-colors">LINKEDIN</Link>
            <Link href="#stack" className="hover:text-primary transition-colors">STACK</Link>
          </div>
          <div className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} ARCHITECTURAL CANVAS.
          </div>
        </div>
      </div>
    </section>
  );
}
