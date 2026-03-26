"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center pt-10">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ENGINEERING <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
            DIGITAL STRUCTURES
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Constructing invisible backbones that power high-concurrency applications with global reach. Built with precision and architectural intent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="#projects"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest text-white bg-primary hover:bg-primary-dark rounded transition-all shadow-lg hover:-translate-y-0.5"
          >
            VIEW SELECTED WORKS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
