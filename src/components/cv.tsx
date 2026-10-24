"use client";

import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaChevronRight,
} from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

export default function CV() {
  const { t } = useTranslate();
  const [openJob, setOpenJob] = useState<string | null>(null);

  const jobs = [
    "erakcins",
    "codeAndDesign",
    "frontend",
    "retail",
    "graphicDesigner",
  ];

  const educations = ["fullstack", "itProfile", "construction"];

  const stack = [
    {
      label: "Frontend",
      value:
        "React, Next.js, Vite, React Native, TanStack, Tailwind CSS, Shadcn, Zod",
    },
    { label: "Backend", value: "Node.js, Hono, TypeScript" },
    {
      label: t("aside.stackDatabase"),
      value: "PostgreSQL, Prisma, Supabase, Docker",
    },
  ];

  return (
    <div className="flex-1 min-w-0 space-y-14">
      {/* Hej hej! */}
      <section>
        <h2 className="text-3xl font-medium text-white">
          {t("aside.greeting")}
        </h2>
        <span className="mt-3 block h-0.5 w-14 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
          <p className="text-white">{t("aside.jobTitle")}</p>
          <p>{t("aside.bio1")}</p>
          <p>{t("aside.bio2")}</p>
        </div>

        {/* Primär stack */}
        <div className="card mt-8 p-6">
          <h3 className="flex items-center gap-3 text-lg font-medium text-pink-400">
            <FaCode />
            {t("aside.primaryStack")}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:divide-x sm:divide-pink-500/30">
            {stack.map((item) => (
              <div key={item.label} className="sm:px-4 sm:first:pl-0">
                <p className="text-sm font-medium text-white">{item.label}:</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arbetslivserfarenhet */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-medium text-white">
          <FaBriefcase className="text-pink-500" />
          {t("cv.workExperience")}
        </h2>

        <ol className="relative mt-6 ml-2 space-y-3 border-l border-pink-500/40">
          {jobs.map((key) => {
            const bullets = t(`cv.jobs.${key}.bullets`, {
              returnObjects: true,
            }) as string[];
            const isOpen = openJob === key;
            return (
              <li key={key} className="relative pl-8">
                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-pink-500 ring-4 ring-pink-500/20" />

                <div className="card overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpenJob(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span>
                      <span className="block font-medium text-white">
                        {t(`cv.jobs.${key}.title`)}
                      </span>
                      <span className="block text-sm text-slate-400">
                        {t(`cv.jobs.${key}.company`)} ·{" "}
                        {t(`cv.jobs.${key}.period`)}
                      </span>
                    </span>
                    <FaChevronRight
                      className={`shrink-0 text-xs text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-pink-400" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {Array.isArray(bullets) && bullets.length > 0 && (
                        <ul className="space-y-1.5 border-t border-white/5 px-5 py-4">
                          {bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink-400" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Utbildning */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-medium text-white">
          <FaGraduationCap className="text-pink-500" />
          {t("cv.education")}
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {educations.map((key) => {
            const bullets = t(`cv.educations.${key}.bullets`, {
              returnObjects: true,
            }) as string[];
            return (
              <div key={key} className="border-l-2 border-pink-500/70 pl-4">
                <h3 className="text-sm font-medium text-white">
                  {t(`cv.educations.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {t(`cv.educations.${key}.period`)}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {t(`cv.educations.${key}.school`)}
                </p>

                {Array.isArray(bullets) && bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
