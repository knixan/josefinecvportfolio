"use client";

import { FaRegStar, FaGlobe, FaRegCommentDots } from "react-icons/fa";
import { getTechIcons } from "@/data/techIcons";
import { useTranslate } from "@/locales/use-locales";
import ContactCard from "./ContactCard";
import { SwedishFlag, BritishFlag } from "./Flags";

const programs = getTechIcons(
  "React, Angular, React Vite, Next.js, Node.js, ASP.NET Core, C#, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Shadcn, MUI, Sanity, PostgreSQL, Prisma, Supabase, Docker, Figma, Photoshop, Lightroom, Illustrator, Azure",
);

// Varumärkesfärger för kompetens-rutnätet (övriga sidor använder rosa)
const BRAND_COLORS: Record<string, string> = {
  React: "#61dafb",
  Angular: "#dd0031",
  "React Vite": "#a78bfa",
  "Next.js": "#ffffff",
  "Node.js": "#5fa04e",
  "ASP.NET Core": "#7c6cf2",
  "C#": "#a179dc",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  HTML: "#e34f26",
  CSS: "#2965f1",
  Tailwind: "#38bdf8",
  Shadcn: "#ffffff",
  MUI: "#007fff",
  Sanity: "#f36458",
  PostgreSQL: "#699eca",
  Prisma: "#ffffff",
  Supabase: "#3ecf8e",
  Docker: "#2496ed",
  Figma: "#f24e1e",
  Photoshop: "#31a8ff",
  Lightroom: "#31a8ff",
  Illustrator: "#ff9a00",
  Azure: "#0089d6",
};

export default function Aside() {
  const { t } = useTranslate();
  const languages = [
    { label: t("aside.swedish"), flag: SwedishFlag },
    { label: t("aside.english"), flag: BritishFlag },
  ];

  return (
    <aside className="w-full lg:w-[38%] flex-none space-y-6">
      {/* Kompetens */}
      <div className="card p-6">
        <h3 className="flex items-center gap-3 text-lg font-medium text-white">
          <FaRegStar className="text-pink-400" />
          {t("aside.skills")}
        </h3>
        <ul className="mt-6 grid grid-cols-4 sm:grid-cols-5 gap-x-2 gap-y-5">
          {programs.map((program) => (
            <li
              key={program.name}
              className="group flex flex-col items-center gap-1.5 text-center"
            >
              <program.icon
                className="text-2xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                style={{ color: BRAND_COLORS[program.name] ?? program.color }}
              />
              <span className="text-[11px] leading-tight text-slate-300">
                {program.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Språk */}
      <div className="card p-6">
        <h3 className="flex items-center gap-3 text-lg font-medium text-white">
          <FaGlobe className="text-slate-300" />
          {t("aside.languages")}
        </h3>
        <div className="mt-4 flex items-center divide-x divide-white/10">
          {languages.map(({ label, flag: Flag }) => (
            <span
              key={label}
              className="flex items-center gap-3 px-4 first:pl-0 text-sm text-slate-300"
            >
              <Flag />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Referenser */}
      <div className="card p-6">
        <h3 className="flex items-center gap-3 text-lg font-medium text-white">
          <FaRegCommentDots className="text-pink-400" />
          {t("aside.references")}
        </h3>
        <p className="mt-3 pl-8 text-sm text-slate-400">
          {t("aside.referencesText")}
        </p>
      </div>

      <ContactCard />
    </aside>
  );
}
