"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaUser,
  FaFolderOpen,
  FaFileAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      href: "/",
      label: "CV",
      icon: FaFileAlt,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      href: "/ommig",
      label: "Om mig",
      icon: FaUser,
      gradient: "from-pink-400 to-rose-400",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      icon: FaFolderOpen,
      gradient: "from-rose-400 to-orange-400",
    },
    {
      href: "https://kodochdesign.se",
      label: "Kod & Design",
      icon: FaCode,
      gradient: "from-orange-400 to-cyan-400",
      external: true,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-700 ease-in-out`}
    >
      {/* Background with glassmorphism */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10"
            : "backdrop-blur-md bg-slate-950/60"
        }`}
      ></div>

      {/* Glowing border effect */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isScrolled
            ? "bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 blur-sm"
            : "bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 blur-lg"
        }`}
      ></div>

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className={`self-center text-2xl lg:text-3xl font-bold whitespace-nowrap transition-all duration-700 group ${
            isMounted
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-pink-400 group-hover:to-violet-400 transition-all duration-500">
            Josefine Eriksson
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="relative inline-flex items-center p-3 w-12 h-12 justify-center text-sm rounded-xl md:hidden group overflow-hidden backdrop-blur-xl bg-slate-800/40 border border-white/20 hover:bg-slate-700/60 focus:outline-none transition-all duration-300"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="sr-only">Öppna huvudmeny</span>
            <div className="relative">
              {isOpen ? (
                <FaTimes className="text-xl text-white transform rotate-0 transition-transform duration-300" />
              ) : (
                <FaBars className="text-xl text-white transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Navigation menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2 md:flex-row backdrop-blur-xl bg-slate-900/60 md:bg-transparent rounded-2xl md:rounded-none border border-white/10 md:border-none">
            {navItems.map((item, index) => (
              <li key={index} className="group/item">
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="relative block py-3 px-6 rounded-xl transition-all duration-300 group/link overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/link:opacity-20 rounded-xl transition-all duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center transform group-hover/link:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="text-white text-xs" />
                    </div>
                    <span className="text-white font-medium group-hover/link:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                    {item.external && (
                      <svg
                        className="w-3 h-3 text-slate-400 group-hover/link:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/link:translate-x-full transition-transform duration-700"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 left-4 w-1 h-1 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-2 right-4 w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-500"></div>
    </nav>
  );
};

export default Navbar;
