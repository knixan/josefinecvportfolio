"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaQuoteRight,
} from "react-icons/fa";
import { getTechIcons } from "@/data/techIcons";
import { useTranslate } from "@/locales/use-locales";

const programs = getTechIcons(
  "React, React Vite, Next.js, Node.js, ASP.NET Core, C#, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Shadcn, MUI, Sanity, PostgreSQL, Prisma, Photoshop, Lightroom, Illustrator, Azure",
);

export default function Aside() {
  const { t } = useTranslate();
  const languages = [t("aside.swedish"), t("aside.english")];

  return (
    <aside className="left-column flex-none w-full lg:w-1/3">
      <div className="relative group">
        {/* Subtil och lyxig glow */}
        <div className="absolute -inset-px bg-gradient-to-b from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-md transition duration-500" />

        <div className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
          {/* Profilbild med ett högre 3:4-porträttformat */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
            <Image
              src="/image/josefineeriksson-profil.jpg"
              alt="Josefine Eriksson"
              width={500}
              height={667}
              priority
              className="object-cover object-top w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Elegant mörk toning i botten för textens läsbarhet */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                {t("aside.greeting")}
              </span>
            </div>
          </div>

          <div className="p-6 lg:p-8 space-y-8">
            {/* Kontaktinfo */}
            <div className="space-y-4">
              {[
                { icon: FaBriefcase, text: t("aside.jobTitle") },
                { icon: FaHome, text: t("aside.location") },
                {
                  icon: FaEnvelope,
                  text: "josefineeriksson@live.se",
                  isLink: true,
                  href: "mailto:josefineeriksson@live.se",
                },
                { icon: FaPhone, text: "076-248 42 34" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-slate-300 group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700/50 group-hover/item:border-indigo-500/50 group-hover/item:text-indigo-400 transition-colors duration-300">
                    <item.icon className="text-sm text-slate-400 group-hover/item:text-indigo-400" />
                  </div>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.text}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Ladda ner CV-knappar */}
            <div className="flex gap-2">
              <a
                href="/Pdf/CV-SV-JosefineEriksson.pdf"
                download="CV-SV-JosefineEriksson.pdf"
                className="relative flex-1 group/btn"
              >
                <button className="w-full py-3 px-3 rounded-xl font-semibold text-xs text-white bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm hover:bg-slate-750">
                  <FaDownload className="text-xs text-slate-400 group-hover/btn:text-white transition-colors shrink-0" />
                  <span>{t("aside.downloadCvSv")}</span>
                </button>
              </a>
              <a
                href="/Pdf/CV-EN-JosefineEriksson.pdf"
                download="CV-EN-JosefineEriksson.pdf"
                className="relative flex-1 group/btn"
              >
                <button className="w-full py-3 px-3 rounded-xl font-semibold text-xs text-white bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm hover:bg-slate-750">
                  <FaDownload className="text-xs text-slate-400 group-hover/btn:text-white transition-colors shrink-0" />
                  <span>{t("aside.downloadCvEn")}</span>
                </button>
              </a>
            </div>

            {/* Kompetenser */}
            <div className="space-y-6 pt-2 border-t border-slate-800/60">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-4">
                  {t("aside.programs")}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {programs.map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1.5 bg-slate-800/40 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-all duration-300"
                    >
                      <program.icon
                        className="text-base"
                        style={{ color: program.color }}
                      />
                      <span className="text-slate-300 text-xs font-medium">
                        {program.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Språk */}
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-3">
                  {t("aside.languages")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <span
                      key={index}
                      className="bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-medium px-3 py-1 rounded-md"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Referenser */}
              <div className="pt-2">
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-3 flex items-center gap-2">
                  <FaQuoteRight className="text-xs text-indigo-400" />
                  {t("aside.references")}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed italic font-light">
                  {t("aside.referencesText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
