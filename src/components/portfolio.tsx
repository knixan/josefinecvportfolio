"use client";

import ProjectCard from "./ProjectCard";
import { useTranslate } from "@/locales/use-locales";

const PROJECT_KEYS = [
  "fakeyNails",
  "bMovies",
  "dagensDons",
  "motionzone",
  "kladerEfterVader",
  "skeningeVvs",
  "vaderskuggan",
  "studenthubben",
  "sweettimeUf",
  "gammelBygg",
  "ledningsteknik",
  "jonnyEriksson",
];

const PROJECT_DATA: Record<
  string,
  { image: string; tech: string; projectLink?: string; codeLink?: string }
> = {
  bMovies: {
    image: "/Image/mockup-bmovies.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth, API",
    codeLink: "https://github.com/knixan/b-movies",
    projectLink: "https://b-movies-ag6m.vercel.app/",
  },
  sweettimeUf: {
    image: "/Image/mockup-sweettime-uf.png",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Zod, BetterAuth, Shadcn",
    projectLink: "https://sweettimeuf.vercel.app/",
    codeLink: "https://github.com/knixan/sweettimeuf",
  },
  fakeyNails: {
    image: "/Image/mockupbilder/fakeynails.jpg",
    tech: "React, Next.js, Sanity CMS, TypeScript, TailwindCSS, Shadcn, Nodmailer",
    codeLink: "https://github.com/knixan/fakey-nails",
    projectLink: "https://fakey-nails.vercel.app/",
  },
  dagensDons: {
    image: "/Image/mockupbilder/dagensdos.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth",
    codeLink: "https://github.com/knixan/dagens-dos",
  },
  motionzone: {
    image: "/Image/mockupbilder/motionzone.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma",
    projectLink: "https://dev.motionzoneworld.com/",
    codeLink: "https://github.com/motionzoneproject/motionzoneproject",
  },
  kladerEfterVader: {
    image: "/Image/mockupbilder/vaderefterklader.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS, OpenWeatherMap API",
    projectLink: "https://vaderefterklader.se",
    codeLink: "https://github.com/knixan/vaderefterklader",
  },
  skeningeVvs: {
    image: "/Image/mockupbilder/skenningevvs.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://skeningevvs.se/",
    codeLink: "https://github.com/knixan/skeningevvsab",
  },
  vaderskuggan: {
    image: "/Image/mockup-vaderskuggan.png",
    tech: "React, Next.js, TypeScript, Tailwind CSS, API",
    projectLink: "https://vaderskuggan.vercel.app/",
    codeLink: "https://github.com/knixan/vaderskuggan",
  },
  studenthubben: {
    image: "/Image/mockup-studenthubben.png",
    tech: "React, Next.js, TypeScript, Material UI",
    projectLink: "https://studenthubben-six.vercel.app/",
    codeLink: "https://github.com/knixan/studenthubben",
  },
  gammelBygg: {
    image: "/Image/mockupbilder/gammelbygg-mockup.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://gammelbyggnadsmaleri.vercel.app/",
    codeLink: "https://github.com/knixan/gammelbyggnadsmaleri",
  },
  ledningsteknik: {
    image: "/Image/mockupbilder/ledningsteknink-mockup.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://ledningsteknik.vercel.app/",
    codeLink: "https://github.com/knixan/ledningsteknik",
  },
  jonnyEriksson: {
    image: "/Image/mockupbilder/jonnyeriksson-mockup.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://jonnyeriksson.vercel.app/",
    codeLink: "https://github.com/knixan/jonnyeriksson-ART",
  },
};

export default function Portfolio() {
  const { t } = useTranslate();

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-white mb-16 tracking-tight">
          {t("portfolio.title")}
        </h2>

        {/* Ändrat till en vertikal lista med ordentligt avstånd */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECT_KEYS.map((key, index) => {
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
      </div>
    </div>
  );
}
