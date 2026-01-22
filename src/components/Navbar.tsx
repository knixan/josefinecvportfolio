"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCode, FaUser, FaFolderOpen, FaFileAlt } from "react-icons/fa";

const NAV_ITEMS = [
  { href: "/", label: "CV", icon: FaFileAlt, gradient: "from-purple-400 to-pink-400" },
  { href: "/ommig", label: "Om mig", icon: FaUser, gradient: "from-pink-400 to-rose-400" },
  { href: "/portfolio", label: "Portfolio", icon: FaFolderOpen, gradient: "from-rose-400 to-orange-400" },
  { href: "https://kodochdesign.se", label: "Kod & Design", icon: FaCode, gradient: "from-orange-400 to-cyan-400", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0">
      {/* Backgrounds */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10" 
          : "backdrop-blur-md bg-slate-950/60"
      }`} />
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled
          ? "bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 blur-sm"
          : "bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 blur-lg"
      }`} />

      <div className="relative z-10 max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl lg:text-3xl font-bold group">
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-pink-400 group-hover:to-violet-400 transition-all duration-500">
            Josefine Eriksson
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 w-12 h-12 rounded-xl backdrop-blur-xl bg-slate-800/40 border border-white/20 hover:bg-slate-700/60 transition-all duration-300 group"
        >
          <span className="sr-only">Öppna huvudmeny</span>
          {isOpen ? <FaTimes className="text-xl text-white" /> : <FaBars className="text-xl text-white" />}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </button>

        {/* Nav menu */}
        <div className={`w-full md:w-auto md:flex ${isOpen ? "flex" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2 backdrop-blur-xl bg-slate-900/60 md:bg-transparent rounded-2xl md:rounded-none border border-white/10 md:border-none">
            {NAV_ITEMS.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  onClick={() => setIsOpen(false)}
                  className="relative block py-3 px-6 rounded-xl group/link overflow-hidden"
                >
                  {/* Hover effects */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/link:opacity-20 rounded-xl transition-all duration-300`} />
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white text-xs" />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                    {item.external && (
                      <svg className="w-3 h-3 text-slate-400 group-hover/link:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/link:translate-x-full transition-transform duration-700" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-2 left-4 w-1 h-1 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-2 right-4 w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse" />
    </nav>
  );
}