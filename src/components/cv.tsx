"use client";

import { FaCalendarAlt, FaSuitcase, FaGraduationCap } from "react-icons/fa";
import { getTechIcons } from "@/data/techIcons";
import { useTranslate } from "@/locales/use-locales";

export default function CV() {
  const { t } = useTranslate();

  const jobs = [
    "codeAndDesign",
    "knegarloggen",
    "frontend",
    "retail",
    "graphicDesigner",
  ];

  const educations = [
    { key: "fullstack", hasDescription: true },
    { key: "itProfile", hasDescription: false },
    { key: "construction", hasDescription: false },
  ];

  return (
    <main className="right-column flex-1 w-full lg:w-2/3 space-y-8">
      {/* Arbetslivserfarenhet */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
        <h2 className="flex items-center text-xl font-bold mb-8 text-white tracking-tight">
          <FaSuitcase className="mr-3 text-indigo-400 text-lg" />
          {t("cv.workExperience")}
        </h2>

        <div className="relative border-l border-slate-800 ml-3 space-y-8">
          {jobs.map((key, index) => {
            const bullets = t(`cv.jobs.${key}.bullets`, {
              returnObjects: true,
            }) as string[];
            return (
              <div key={index} className="relative pl-6 group/item">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-slate-700 rounded-full border border-slate-900 group-hover/item:bg-indigo-400 group-hover/item:scale-125 transition-all duration-300" />

                <div className="bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 rounded-xl p-5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                    <h3 className="font-semibold text-base text-white group-hover/item:text-indigo-400 transition-colors">
                      {t(`cv.jobs.${key}.title`)}
                    </h3>
                    <span className="flex items-center text-xs text-slate-400 font-medium shrink-0">
                      <FaCalendarAlt className="mr-1.5 text-[10px]" />
                      {t(`cv.jobs.${key}.period`)}
                    </span>
                  </div>

                  <p className="text-xs text-indigo-400/90 font-medium mb-3">
                    {t(`cv.jobs.${key}.company`)}
                  </p>

                  {Array.isArray(bullets) && bullets.length > 0 && (
                    <ul className="space-y-1.5">
                      {bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-indigo-400/60 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Utbildning */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
        <h2 className="flex items-center text-xl font-bold mb-8 text-white tracking-tight">
          <FaGraduationCap className="mr-3 text-cyan-400 text-xl" />
          {t("cv.education")}
        </h2>

        <div className="relative border-l border-slate-800 ml-3 space-y-8">
          {educations.map((education, index) => {
            const description = t(
              `cv.educations.${education.key}.description`,
              { defaultValue: "" },
            );
            return (
              <div key={index} className="relative pl-6 group/item">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-slate-700 rounded-full border border-slate-900 group-hover/item:bg-cyan-400 group-hover/item:scale-125 transition-all duration-300" />

                <div className="bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 rounded-xl p-5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                    <h3 className="font-semibold text-base text-white group-hover/item:text-cyan-400 transition-colors">
                      {t(`cv.educations.${education.key}.title`)}
                    </h3>
                    <span className="flex items-center text-xs text-slate-400 font-medium shrink-0">
                      <FaCalendarAlt className="mr-1.5 text-[10px]" />
                      {t(`cv.educations.${education.key}.period`)}
                    </span>
                  </div>

                  <p className="text-xs text-cyan-400/90 font-medium mb-3">
                    {t(`cv.educations.${education.key}.school`)}
                  </p>

                  {education.hasDescription && description && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/60">
                      {getTechIcons(description).map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-1 bg-slate-800/50 border border-slate-800 px-2.5 py-1 rounded-md"
                        >
                          <tech.icon
                            className="text-xs"
                            style={{ color: tech.color }}
                          />
                          <span className="text-slate-300 text-[11px] font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
