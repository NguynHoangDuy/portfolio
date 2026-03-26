"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          ARCHITECT.DEV
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</Link>
          <Link href="#stack" className="text-gray-600 hover:text-primary transition-colors">Stack</Link>
          <Link href="#articles" className="text-gray-600 hover:text-primary transition-colors">Articles</Link>
          <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          <Link 
            href="/resume.pdf"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded font-medium transition-colors"
          >
            Resume
          </Link>
        </div>

        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-lg">
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800">Projects</Link>
          <Link href="#stack" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800">Stack</Link>
          <Link href="#articles" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800">Articles</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800">Contact</Link>
          <Link 
            href="/resume.pdf"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center px-6 py-3 rounded-md font-medium mt-4"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
