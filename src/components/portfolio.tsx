"use client";

import ProjectCard from "./ProjectCard";
import { useTranslate } from "@/locales/use-locales";

const PROJECT_KEYS = [
  "fakeyNails", "bMovies", "dagensDons", "motionzone", "kladerEfterVader",
  "skeningeVvs", "vaderskuggan", "studenthubben", "sweettimeUf",
  "gammelBygg", "ledningsteknik", "jonnyEriksson",
];

const PROJECT_DATA: Record<string, { image: string; tech: string; projectLink?: string; codeLink?: string }> = {
  fakeyNails: {
    image: "/Image/mockupbilder/fakeynails.jpg",
    tech: "React, Next.js, Sanity CMS, TypeScript, TailwindCSS, Shadcn, Nodmailer",
    codeLink: "https://github.com/knixan/fakey-nails",
    projectLink: "https://fakey-nails.vercel.app/",
  },
  bMovies: {
    image: "/Image/mockup-bmovies.jpg",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth, API",
    codeLink: "https://github.com/knixan/b-movies",
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
  sweettimeUf: {
    image: "/Image/mockup-sweettime-uf.png",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://sweettime-uf.se/",
    codeLink: "https://github.com/Ludde2525/sweettime/tree/main",
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
    <div className="bg-gray-900 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          {t("portfolio.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_KEYS.map((key) => {
            const data = PROJECT_DATA[key];
            return (
              <ProjectCard
                key={key}
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
