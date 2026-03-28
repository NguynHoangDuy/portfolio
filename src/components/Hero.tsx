"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone, Github, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-base bg-surface text-muted text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground text-center mb-6 leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Nguyen{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            Hoang Duy
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-center text-xl md:text-2xl font-semibold text-muted mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer — Full Stack
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-center text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ~3 years building full-stack products with React.js and Node.js.
          Experienced in cloud platforms (AWS, Google Cloud) and async systems (Redis, RabbitMQ).
        </motion.p>

        {/* Contact info */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm text-muted mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" /> Nha Trang, Khánh Hòa
          </span>
          <a href="mailto:nguyenhoangduy933@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" /> nguyenhoangduy933@gmail.com
          </a>
          <a href="tel:0369454037" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={14} className="text-primary" /> 0369 454 037
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/nguynhoangduy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border-base bg-surface hover:bg-surface-2 text-foreground text-sm font-bold rounded-lg transition-all hover:-translate-y-0.5"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://nguynhoangduy.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border-base bg-surface hover:bg-surface-2 text-foreground text-sm font-bold rounded-lg transition-all hover:-translate-y-0.5"
          >
            <ExternalLink size={16} /> Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
