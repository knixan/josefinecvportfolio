"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import FigmaSection from "./FigmaSection";
import { useTranslate } from "@/locales/use-locales";

type Category = "all" | "apps" | "websites" | "design";

const PROJECT_KEYS: string[] = [
  "knegarloggen",
   "tassaIn",
  "kodochdesign",
  "skeningeVvs",
  "dagensDos",
  "kladerEfterVader",
  "bMovies",
  "motionzone",
  "fakeyNails",
  "ledningsteknik",
  "sweettimeUf",
  "vaderskuggan",
  "studenthubben",
];

const PROJECT_DATA: Record<
  string,
  {
    image: string;
    tech: string;
    category: "apps" | "websites";
    projectLink?: string;
    codeLink?: string;
  }
> = {
  knegarloggen: {
    image: "/image/mockupbilder/knegarloggen.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth, Stripe, Nodmailer",
    category: "apps",
    codeLink: "https://github.com/knixan/knegarloggen",
    projectLink: "https://knegarloggen.vercel.app/",
  },

    skeningeVvs: {
    image: "/image/mockupbilder/skeningevvs.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS",
    category: "websites",
    projectLink: "https://skeningevvs.se/",
    codeLink: "https://github.com/skeningevvs/skeningevvs",
  },

  kladerEfterVader: {
    image: "/image/mockupbilder/kladereftervader.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, OpenWeatherMap API",
    category: "websites",
    projectLink: "https://kladereftervader.se",
    codeLink: "https://github.com/knixan/kladereftervader",
  },
  bMovies: {
    image: "/image/mockupbilder/b-movies.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth",
    category: "apps",
    codeLink: "https://github.com/knixan/b-movies",
    projectLink: "https://b-movies.vercel.app/",
  },
  motionzone: {
    image: "/image/mockupbilder/motionzone.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma",
    category: "apps",
    projectLink: "https://motionzoneworld.com/",
    codeLink: "https://github.com/motionzoneproject/motionzoneproject",
  },


  fakeyNails: {
    image: "/image/mockupbilder/fakey-nails.png",
    tech: "React, Next.js, Node.js, Sanity CMS, TypeScript, Tailwind CSS, Shadcn, Nodmailer",
    category: "apps",
    codeLink: "https://github.com/knixan/fakey-nails",
    projectLink: "https://fakey-nails.vercel.app/",
  },

      tassaIn: {
    image: "/image/mockupbilder/tassa-in.png",
    tech: "React Vite, ASP.NET Core, C#, TypeScript, Tailwind CSS, Shadcn",
    category: "apps",
    codeLink: "https://github.com/knixan/tassa-in",
    projectLink: "https://tassa-in.vercel.app/",
  },
  
  sweettimeUf: {
    image: "/image/mockupbilder/sweettimeuf.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Zod, BetterAuth, Shadcn",
    category: "apps",
    projectLink: "https://sweettimeuf.vercel.app/",
    codeLink: "https://github.com/knixan/sweettimeuf",
  },
  dagensDos: {
    image: "/image/mockupbilder/dagensdos.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth",
    category: "apps",
    codeLink: "https://github.com/knixan/dagens-dos",
  },
  kodochdesign: {
    image: "/image/mockupbilder/kodochdesign.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn",
    category: "websites",
    projectLink: "https://kodochdesign.se/",
    codeLink: "https://github.com/knixan/kodochdesign",
  },

  vaderskuggan: {
    image: "/image/mockupbilder/vaderskuggan.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS",
    category: "websites",
    projectLink: "https://vaderskuggan.vercel.app/",
    codeLink: "https://github.com/knixan/vaderskuggan",
  },
  studenthubben: {
    image: "/image/mockupbilder/studenthubben.png",
    tech: "React, Next.js, Node.js, TypeScript, Material UI",
    category: "websites",
    projectLink: "https://studenthubben-six.vercel.app/",
    codeLink: "https://github.com/knixan/studenthubben",
  },

  ledningsteknik: {
    image: "/image/mockupbilder/ledningsteknik.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS",
    category: "websites",
    projectLink: "https://ledningsteknikab.vercel.app/",
    codeLink: "https://github.com/knixan/ledningsteknikAB",
  },

};

export default function Portfolio() {
  const { t } = useTranslate();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: t("filter.all") },
    { key: "apps", label: t("filter.apps") },
    { key: "websites", label: t("filter.websites") },
    { key: "design", label: t("filter.design") },
  ];

  const filteredKeys = PROJECT_KEYS.filter((key) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "design") return false;
    return PROJECT_DATA[key].category === activeFilter;
  });

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-white mb-10 tracking-tight">
          {t("portfolio.title")}
        </h2>

        {/* Filterknappar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === key
                  ? "bg-indigo-500/20 border-indigo-500/60 text-white"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projektkort */}
        {activeFilter !== "design" && (
          <div className="space-y-16 lg:space-y-24">
            {filteredKeys.map((key, index) => {
              const data = PROJECT_DATA[key];
              return (
                <ProjectCard
                  key={key}
                  index={index}
                  title={t(`portfolio.projects.${key}.title`)}
                  description={t(`portfolio.projects.${key}.description`)}
                  image={data.image}
                  alt={t(`portfolio.projects.${key}.alt`)}
                  tech={data.tech}
                  projectLink={data.projectLink}
                  codeLink={data.codeLink}
                />
              );
            })}
          </div>
        )}

        {/* Design-sektion */}
        {(activeFilter === "design" || activeFilter === "all") && (
          <div className={activeFilter === "all" ? "mt-24" : ""}>
            <FigmaSection />
          </div>
        )}
      </div>
    </div>
  );
}
