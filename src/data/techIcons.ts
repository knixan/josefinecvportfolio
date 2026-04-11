import { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiSanity,
  SiPostgresql,
  SiPrisma,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiBootstrap,
  SiDotnet,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";

export interface TechIcon {
  icon: IconType;
  name: string;
  color: string;
}

const techIconMap: Record<string, TechIcon> = {
  "react": { icon: SiReact, name: "React", color: "#f472b6" },
  "next.js": { icon: RiNextjsLine, name: "Next.js", color: "#f472b6" },
  "node.js": { icon: SiNodedotjs, name: "Node.js", color: "#f472b6" },
  "typescript": { icon: SiTypescript, name: "TypeScript", color: "#f472b6" },
  "javascript": { icon: SiJavascript, name: "JavaScript", color: "#f472b6" },
  "javascript/typescript": { icon: SiTypescript, name: "JS/TS", color: "#f472b6" },
  "html": { icon: SiHtml5, name: "HTML", color: "#f472b6" },
  "css": { icon: SiCss3, name: "CSS", color: "#f472b6" },
  "tailwind css": { icon: SiTailwindcss, name: "Tailwind", color: "#f472b6" },
  "tailwindcss": { icon: SiTailwindcss, name: "Tailwind", color: "#f472b6" },
  "shadcn": { icon: SiShadcnui, name: "Shadcn", color: "#f472b6" },
  "material ui": { icon: SiMui, name: "MUI", color: "#f472b6" },
  "mui": { icon: SiMui, name: "MUI", color: "#f472b6" },
  "sanity": { icon: SiSanity, name: "Sanity", color: "#f472b6" },
  "sanity cms": { icon: SiSanity, name: "Sanity", color: "#f472b6" },
  "postgresql": { icon: SiPostgresql, name: "PostgreSQL", color: "#f472b6" },
  "prisma": { icon: SiPrisma, name: "Prisma", color: "#f472b6" },
  "photoshop": { icon: SiAdobephotoshop, name: "Photoshop", color: "#f472b6" },
  "lightroom": { icon: SiAdobelightroom, name: "Lightroom", color: "#f472b6" },
  "illustrator": { icon: SiAdobeillustrator, name: "Illustrator", color: "#f472b6" },
  "azure": { icon: VscAzure, name: "Azure", color: "#f472b6" },
  "bootstrap": { icon: SiBootstrap, name: "Bootstrap", color: "#f472b6" },
  "sql": { icon: SiPostgresql, name: "SQL", color: "#f472b6" },
  "asp.net core": { icon: SiDotnet, name: "ASP.NET Core", color: "#f472b6" },
  "c#": { icon: FaCode, name: "C#", color: "#f472b6" },
  "csharp": { icon: FaCode, name: "C#", color: "#f472b6" },
};

export function getTechIcons(techString: string): TechIcon[] {
  return techString
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter((t) => t.length > 0)
    .map((t) => techIconMap[t])
    .filter((t): t is TechIcon => t !== undefined);
}
