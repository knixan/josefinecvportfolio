"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaUser,
  FaFolderOpen,
  FaFileAlt,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";
import { useTranslate, useLocales } from "@/locales/use-locales";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const pathname = usePathname();
  const { t, onChangeLang } = useTranslate();
  const { allLangs, currentLang } = useLocales();

  const NAV_ITEMS = [
    { href: "/", label: t("nav.cv"), icon: FaFileAlt },
    { href: "/ommig", label: t("nav.aboutMe"), icon: FaUser },
    { href: "/portfolio", label: t("nav.portfolio"), icon: FaFolderOpen },
    {
      href: "https://kodochdesign.se",
      label: t("nav.kodDesign"),
      icon: FaCode,
      external: true,
    },
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
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          Josefine Eriksson
          <span className="text-indigo-400 ml-1">.</span>
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
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-slate-950 md:bg-transparent border-b border-slate-900 md:border-none p-6 md:p-0 flex-col md:flex-row md:flex items-center gap-2 md:gap-1 ${
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
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white border border-slate-800"
                        : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                    }`}
                  >
                    <item.icon
                      className={`text-xs ${isActive ? "text-indigo-400" : "text-slate-500"}`}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Språkväljare */}
            <li className="relative mt-2 md:mt-0 md:ml-2 pt-2 md:pt-0 border-t border-slate-900 md:border-none">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center justify-between md:justify-start space-x-2 w-full px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900/50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-slate-500 text-xs" />
                  <span>
                    {currentLang.icon} {currentLang.label}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-[10px] text-slate-500 transition-transform ${langMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden z-50">
                  {allLangs.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => {
                        onChangeLang(lang.value);
                        setLangMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium flex items-center space-x-2 hover:bg-slate-800 transition-colors ${
                        currentLang.value === lang.value
                          ? "text-white bg-slate-800/40"
                          : "text-slate-400"
                      }`}
                    >
                      <span>{lang.icon}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
