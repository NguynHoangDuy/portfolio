"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#stack", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border-base transition-shadow duration-300 ${scrolled ? "shadow-sm shadow-black/5" : ""}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-black text-lg tracking-tight text-foreground">
          NHD.DEV
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="relative text-sm font-medium text-muted hover:text-foreground transition-colors group"
          >
            Resume
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </Link>

          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9, rotate: 15 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Sun size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Moon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-muted"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          )}
          <motion.button
            className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border-base p-6 flex flex-col gap-4 shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={l.href} onClick={() => setIsOpen(false)} className="block font-medium text-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: links.length * 0.05 }}>
              <Link href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className="block font-medium text-foreground hover:text-primary transition-colors">
                Resume
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (links.length + 1) * 0.05 }}>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2 block px-5 py-3 bg-primary text-white text-center text-sm font-semibold rounded-lg">
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
