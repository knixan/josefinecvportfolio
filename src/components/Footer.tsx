"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronUp } from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";
import ContactCard from "./ContactCard";

export default function Footer() {
  const { t } = useTranslate();
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden bg-[#140a22] text-white">
      {/* Våg */}
      <svg
        className="absolute top-0 left-0 w-full h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 60C320 0 700 10 1000 40C1200 60 1340 50 1440 30"
          stroke="url(#footerWave)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="footerWave" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="0.6" stopColor="#ec4899" stopOpacity="0.5" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-10">
        {/* Kontaktkortet ligger i CV-sidans sidokolumn, övriga sidor visar det här */}
        {pathname !== "/" && (
          <div className="mb-12 max-w-sm">
            <ContactCard />
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-300">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Josefine Eriksson Kod & Design</p>
            <p className="text-slate-400">{t("footer.allRightsReserved")}</p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center divide-x divide-white/15">
              <Link
                href="/"
                className="px-4 hover:text-pink-400 transition-colors"
              >
                {t("nav.cv")}
              </Link>
              <Link
                href="/portfolio"
                className="px-4 hover:text-pink-400 transition-colors"
              >
                {t("nav.portfolio")}
              </Link>
            </nav>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label={t("footer.backToTop")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-500/70 text-pink-300 hover:bg-pink-500/10 transition-colors"
            >
              <FaChevronUp className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
