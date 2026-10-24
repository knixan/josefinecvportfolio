"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import FigmaSection from "./FigmaSection";
import { useTranslate } from "@/locales/use-locales";

type Category = "all" | "apps" | "websites" | "design";

const PROJECT_KEYS: string[] = [
  "nathanget",
  "jonnyerikssonKonst",
  "knegarloggen",
  "sweettimeUf",
  "kodochdesign",
  "skeningeVvs",
  "tassaIn",
  "dagensDos",
  "kladerEfterVader",
  "bMovies",
  "motionzone",
  "fakeyNails",
  "ledningsteknik",
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
  nathanget: {
    image: "/image/mockupbilder/nathanget.png",
    tech: "React Vite, React Native, Expo, Hono, TypeScript, PostgreSQL, Prisma, pnpm, Turborepo",
    category: "apps",
    codeLink: "https://github.com/knixan/nathanget-monorepo",
  },
  jonnyerikssonKonst: {
    image: "/image/mockupbilder/jonnykonst.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, Sanity CMS, PostgreSQL, Prisma, Stripe",
    category: "apps",
    projectLink: "https://jonnyeriksson-konst.vercel.app/",
    codeLink: "https://github.com/knixan/jonnyeriksson-konst",
  },
  knegarloggen: {
    image: "/image/mockupbilder/knegarloggen.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, pnpm, Zod, BetterAuth, Stripe, Nodmailer",
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
    image: "/image/mockupbilder/sweettime.png",
    tech: "React, Next.js, Node.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Sanity CMS, Zod, BetterAuth, Shadcn, Nodmailer",
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
  const tagline = t("portfolio.tagline", { returnObjects: true }) as string[];

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
    <div className="relative min-h-screen overflow-hidden bg-[#140a22] text-white">
      {/* Bakgrundsglöd */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(126,34,206,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(219,39,119,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#140a22]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-20 lg:pt-40">
        {/* Rubrik */}
        <header className="max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-300">
            {Array.isArray(tagline) &&
              tagline.map((word, i) => (
                <span key={word} className="flex items-center gap-3">
                  {i > 0 && <span className="text-pink-400">·</span>}
                  {word}
                </span>
              ))}
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl font-medium tracking-tight text-white">
            {t("portfolio.title")}
            <span className="text-pink-500">.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
            {t("portfolio.subtitle")}
          </p>
        </header>

        {/* Filterknappar */}
        <div className="mt-10 mb-14 flex flex-wrap gap-3">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === key
                  ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 border-transparent text-white shadow-lg shadow-pink-500/30"
                  : "border-pink-400/30 text-slate-300 hover:text-white hover:border-pink-400/70 hover:bg-pink-500/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projektkort */}
        {activeFilter !== "design" && (
          <div className="space-y-10 lg:space-y-14">
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
          <div className={activeFilter === "all" ? "mt-20" : ""}>
            <FigmaSection />
          </div>
        )}
      </div>
    </div>
  );
}
