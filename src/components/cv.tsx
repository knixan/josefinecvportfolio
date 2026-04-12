"use client";

import {
  FaCalendarAlt,
  FaSuitcase,
  FaGraduationCap,
} from "react-icons/fa";
import { getTechIcons } from "@/data/techIcons";
import { useTranslate } from "@/locales/use-locales";

export default function CV() {
  const { t } = useTranslate();

  const jobs = [
    { key: "fullstack", gradient: "from-purple-500 to-pink-500" },
    { key: "frontend", gradient: "from-purple-500 to-pink-500" },
    { key: "graphicDesign", gradient: "from-pink-500 to-rose-500" },
    { key: "shopAssistant", gradient: "from-rose-500 to-orange-500" },
    { key: "sales", gradient: "from-orange-500 to-amber-500" },
    { key: "graphicDesigner", gradient: "from-amber-500 to-cyan-500" },
  ];

  const educations = [
    { key: "fullstack", gradient: "from-cyan-500 to-blue-500", hasDescription: true },
    { key: "itProfile", gradient: "from-blue-500 to-indigo-500", hasDescription: false },
    { key: "construction", gradient: "from-indigo-500 to-purple-500", hasDescription: false },
  ];

  return (
    <main className="right-column flex-1 w-full lg:w-2/3 space-y-8">
          {/* Work Experience */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <FaSuitcase className="mr-4 text-purple-400" />
                {t("cv.workExperience")}
              </h2>

              <div className="space-y-8">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-gradient group/item"
                  >
                    <div
                      className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r ${job.gradient} rounded-full border-2 border-slate-900`}
                    ></div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group-hover/item:bg-white/10 transition-colors duration-300">
                      <h5
                        className={`font-bold text-xl mb-2 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}
                      >
                        {t(`cv.jobs.${job.key}.title`)}
                      </h5>
                      <p className="flex items-center text-slate-300 mb-2">
                        <FaCalendarAlt className="mr-2" />
                        {t(`cv.jobs.${job.key}.period`)}
                      </p>
                      <p className="text-slate-200 font-semibold mb-2">
                        {t(`cv.jobs.${job.key}.company`)}
                      </p>
                      <p className="text-slate-300 italic">{t(`cv.jobs.${job.key}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                <FaGraduationCap className="mr-4 text-cyan-400" />
                {t("cv.education")}
              </h2>

              <div className="space-y-8">
                {educations.map((education, index) => {
                  const description = t(`cv.educations.${education.key}.description`, { defaultValue: "" });
                  return (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-gradient group/item"
                    >
                      <div
                        className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r ${education.gradient} rounded-full border-2 border-slate-900`}
                      ></div>
                      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group-hover/item:bg-white/10 transition-colors duration-300">
                        <h5
                          className={`font-bold text-xl mb-2 bg-gradient-to-r ${education.gradient} bg-clip-text text-transparent`}
                        >
                          {t(`cv.educations.${education.key}.title`)}
                        </h5>
                        <p className="flex items-center text-slate-300 mb-2">
                          <FaCalendarAlt className="mr-2" />
                          {t(`cv.educations.${education.key}.period`)}
                        </p>
                        <p className="text-slate-200 font-semibold mb-2">
                          {t(`cv.educations.${education.key}.school`)}
                        </p>
                        {education.hasDescription && description && (
                          <div className="flex flex-wrap gap-3 mt-2">
                            {getTechIcons(description).map((tech, i) => (
                              <div key={i} className="flex flex-col items-center gap-1 group/icon">
                                <div className="w-10 h-10 rounded-xl backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 group-hover/icon:scale-110">
                                  <tech.icon className="text-lg" style={{ color: tech.color }} />
                                </div>
                                <span className="text-cyan-200 text-[9px] font-medium text-center leading-tight">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
  );
}
