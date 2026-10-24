"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaFolderOpen,
  FaFileAlt,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";
import { useTranslate, useLocales } from "@/locales/use-locales";
import { FLAGS } from "./Flags";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const pathname = usePathname();
  const { t, onChangeLang } = useTranslate();
  const { allLangs, currentLang } = useLocales();
  const CurrentFlag = FLAGS[currentLang.value];

  const NAV_ITEMS = [
    { href: "/", label: t("nav.cv"), icon: FaFileAlt },
    { href: "/portfolio", label: t("nav.portfolio"), icon: FaFolderOpen },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-[#140a22]/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-gradient-to-b from-[#140a22]/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
        >
          <span className="font-script text-4xl leading-none text-pink-400">
            JE
          </span>
          <span className="text-lg font-medium tracking-tight">
            Josefine Eriksson
          </span>
        </Link>

        {/* Mobil-meny knapp */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl p-2"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigationslänkar */}
        <div
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[#140a22]/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-none p-6 md:p-0 flex-col md:flex-row md:flex items-center gap-2 md:gap-1 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-1 w-full md:w-auto">
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2.5 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      isActive
                        ? "text-white border-pink-500/70 bg-pink-500/10 shadow-[0_0_12px_rgba(236,72,153,0.25)]"
                        : "text-slate-300 border-transparent hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon
                      className={`text-xs ${isActive ? "text-pink-400" : "text-slate-500"}`}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Språkväljare */}
            <li className="relative mt-2 md:mt-0 md:ml-2 pt-2 md:pt-0 border-t border-white/5 md:border-none">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
                aria-haspopup="menu"
                className={`flex items-center justify-between md:justify-start gap-2.5 w-full px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                  langMenuOpen
                    ? "text-white border-pink-500/50 bg-pink-500/10"
                    : "text-slate-300 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <CurrentFlag className="h-3.5 w-5" />
                  {currentLang.label}
                </span>
                <FaChevronDown
                  className={`text-[10px] text-pink-300 transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langMenuOpen && (
                <div
                  role="menu"
                  className="md:absolute right-0 mt-2 md:w-48 p-1.5 rounded-2xl border border-pink-400/20 bg-[#1d0f30]/95 backdrop-blur-xl shadow-2xl shadow-black/50 z-50"
                >
                  {allLangs.map((lang) => {
                    const Flag = FLAGS[lang.value];
                    const isActive = currentLang.value === lang.value;
                    return (
                      <button
                        key={lang.value}
                        role="menuitem"
                        onClick={() => {
                          onChangeLang(lang.value);
                          setLangMenuOpen(false);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? "text-white bg-gradient-to-r from-pink-500/20 to-fuchsia-500/10"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {Flag && <Flag className="h-3.5 w-5" />}
                          {lang.label}
                        </span>
                        {isActive && (
                          <FaCheck className="text-[10px] text-pink-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
