"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaExpandAlt, FaGlobe, FaGithub } from "react-icons/fa";
import { getTechIcons } from "@/data/techIcons";
import { useTranslate } from "@/locales/use-locales";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string;
  projectLink?: string;
  codeLink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  alt,
  tech,
  projectLink,
  codeLink,
  index,
}: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { t } = useTranslate();

  const toggleModal = () => {
    setIsImageModalOpen(!isImageModalOpen);
    document.body.style.overflow = isImageModalOpen ? "unset" : "hidden";
  };

  const isReversed = index % 2 === 1;

  return (
    <>
      <div className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-slate-700/60 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}>
        
        {/* Bildbehållare - Optimerad för breda panoramabilder */}
        <div 
          className="w-full md:w-[60%] aspect-[16/9] relative rounded-xl overflow-hidden group/image cursor-pointer flex-none" 
          onClick={toggleModal}
        >
          <Image 
            src={image} 
            alt={alt} 
            fill 
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "contain" }} // Garanterar att HELA bilden alltid syns
            className="transition-transform duration-700 group-hover/image:scale-102" 
          />
          
          {/* Subtilt hover-overlay anpassat för contain-format */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
            <div className="backdrop-blur-md bg-slate-900/80 border border-slate-700/50 p-3 rounded-lg transform scale-90 group-hover/image:scale-100 transition-all duration-300">
              <FaExpandAlt className="text-white text-sm" />
            </div>
          </div>
        </div>

        {/* Textinnehåll */}
        <div className="w-full md:w-[40%] flex flex-col justify-between h-full space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
              {title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* Knappar och teknik */}
          <div className="space-y-5 pt-4 border-t border-slate-800/60">
            {/* Länkar */}
            <div className="flex gap-3">
              {projectLink && (
                <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button aria-label={t("portfolio.viewProject")} title={t("portfolio.viewProject")} className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-slate-800 border border-slate-700 hover:border-slate-600 hover:bg-slate-750 transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm">
                    <FaGlobe className="text-sm text-slate-400" />
                    <span>{t("portfolio.viewProject") || "Visa projekt"}</span>
                  </button>
                </Link>
              )}
              {codeLink && (
                <Link href={codeLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button aria-label={t("portfolio.viewCode")} title={t("portfolio.viewCode")} className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-slate-800 border border-slate-700 hover:border-slate-600 hover:bg-slate-750 transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm">
                    <FaGithub className="text-sm text-slate-400" />
                    <span>{t("portfolio.viewCode") || "Källkod"}</span>
                  </button>
                </Link>
              )}
            </div>

            {/* Teknologier */}
            <div>
              <div className="flex flex-wrap gap-2">
                {getTechIcons(tech).map((techItem, i) => (
                  <div 
                    key={i} 
                    className="flex items-center space-x-1.5 bg-slate-800/40 border border-slate-800/80 px-2.5 py-1 rounded-md"
                    title={techItem.name}
                  >
                    <techItem.icon className="text-xs" style={{ color: techItem.color }} />
                    <span className="text-slate-300 text-[11px] font-medium">{techItem.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bild-modal (Fullskärm) */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={toggleModal}></div>
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center z-10">
            <button onClick={toggleModal} className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-colors p-2">
              <FaTimes className="text-xl" />
            </button>
            <div className="relative border border-slate-800/50 rounded-xl p-2 shadow-2xl max-w-full max-h-full">
              <Image
                src={image}
                alt={alt}
                width={1600}
                height={900}
                className="rounded-lg max-w-full max-h-[75vh] w-auto h-auto object-contain"
                quality={95}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}