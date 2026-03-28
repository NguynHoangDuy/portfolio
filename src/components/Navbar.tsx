"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#stack", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border-base">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-black text-lg tracking-tight text-foreground">
          NHD.DEV
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Resume
          </Link>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-muted hover:text-foreground hover:bg-surface-2 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <Link
            href="#contact"
            className="px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border-base p-6 flex flex-col gap-4 shadow-xl">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="font-medium text-foreground">
              {l.label}
            </Link>
          ))}
          <Link href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className="font-medium text-foreground">
            Resume
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 bg-primary text-white text-center text-sm font-semibold rounded-lg"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
