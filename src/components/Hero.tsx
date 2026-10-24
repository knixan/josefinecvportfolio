"use client";

import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegFileAlt,
} from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

export default function Hero() {
  const { t } = useTranslate();

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16 lg:pt-40 lg:pb-32">
        {/* Porträtt till höger, tonat från vänster och mot nederkanten */}
        <div className="relative -mx-4 sm:-mx-8 mb-8 h-80 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:h-auto lg:w-[48%] [mask-image:linear-gradient(to_top,transparent,black_35%),linear-gradient(to_bottom,transparent,black_20%)] lg:[mask-image:linear-gradient(to_right,transparent,black_45%),linear-gradient(to_top,transparent,black_30%),linear-gradient(to_bottom,transparent,black_25%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]">
          <Image
            src="/image/josefineeriksson-profil.jpg"
            alt="Josefine Eriksson"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover object-[50%_20%]"
          />
        </div>

        <div className="relative max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-white">
            Josefine Eriksson<span className="text-pink-500">.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200">
            {t("aside.role")}
          </p>

          <ul className="mt-8 space-y-3 text-sm sm:text-base text-slate-300">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-400" />
              {t("aside.location")}
            </li>
            <li className="flex items-center gap-3">
              <FaRegEnvelope className="text-pink-400" />
              <a
                href="mailto:josefineeriksson@live.se"
                className="hover:text-white transition-colors"
              >
                josefineeriksson@live.se
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-400" />
              <a
                href="tel:+46762484234"
                className="hover:text-white transition-colors"
              >
                076-248 42 34
              </a>
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Pdf/CV-SE-JosefineEriksson.pdf"
              download="CV-SE-JosefineEriksson.pdf"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:brightness-110 transition-all"
            >
              <FaRegFileAlt />
              {t("aside.downloadCvSv")}
            </a>
            <a
              href="/Pdf/CV-EN-JosefineEriksson.pdf"
              download="CV-EN-JosefineEriksson.pdf"
              className="inline-flex items-center gap-2.5 rounded-full border border-pink-400/70 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-500/10 transition-colors"
            >
              <FaRegFileAlt className="text-pink-300" />
              {t("aside.downloadCvEn")}
            </a>
          </div>
        </div>
      </div>

      {/* Vågband i nederkant */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full sm:h-28 lg:h-36"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="waveBand"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7e22ce" stopOpacity="0.15" />
            <stop offset="0.45" stopColor="#c026d3" stopOpacity="0.45" />
            <stop offset="1" stopColor="#ec4899" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="waveLine"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f0abfc" stopOpacity="0" />
            <stop offset="0.35" stopColor="#fce7f3" stopOpacity="1" />
            <stop offset="0.8" stopColor="#f9a8d4" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
          </linearGradient>
          <filter id="waveGlow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Bakre band */}
        <path
          d="M0 70C240 20 480 40 760 95C1020 145 1260 120 1440 60V100C1260 150 1020 165 760 130C480 85 240 70 0 110Z"
          fill="url(#waveBand)"
          opacity="0.6"
        />
        {/* Främre band */}
        <path
          d="M0 95C260 45 520 60 780 110C1030 155 1250 135 1440 85V120C1250 160 1030 170 780 145C520 100 260 90 0 130Z"
          fill="url(#waveBand)"
        />
        {/* Glödande kantlinje */}
        <path
          d="M0 95C260 45 520 60 780 110C1030 155 1250 135 1440 85"
          stroke="url(#waveLine)"
          strokeWidth="8"
          filter="url(#waveGlow)"
        />
        <path
          d="M0 95C260 45 520 60 780 110C1030 155 1250 135 1440 85"
          stroke="url(#waveLine)"
          strokeWidth="2"
        />
        <path
          d="M0 70C240 20 480 40 760 95C1020 145 1260 120 1440 60"
          stroke="url(#waveLine)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </section>
  );
}
