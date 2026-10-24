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
      <article
        className={`card group flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-5 lg:p-8 transition-all duration-300 hover:border-pink-400/30 ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Bildbehållare - Optimerad för breda panoramabilder */}
        <button
          type="button"
          className="w-full md:w-[60%] aspect-[16/9] relative rounded-xl overflow-hidden group/image cursor-pointer flex-none bg-white"
          onClick={toggleModal}
          aria-label={alt}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "contain" }} // Garanterar att HELA bilden alltid syns
            className="transition-transform duration-700 group-hover/image:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-[#140a22]/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-lg shadow-pink-500/40 scale-90 group-hover/image:scale-100 transition-transform duration-300">
              <FaExpandAlt className="text-white text-sm" />
            </div>
          </div>
        </button>

        {/* Textinnehåll */}
        <div className="w-full md:w-[40%] flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-pink-400/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-2xl font-medium text-white tracking-tight">
              {title}
            </h3>
            <span className="mt-3 block h-0.5 w-12 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-5 pt-5 border-t border-white/5">
            {/* Länkar */}
            <div className="flex flex-wrap gap-3">
              {projectLink && (
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/30 hover:brightness-110 transition-all"
                >
                  <FaGlobe className="text-sm" />
                  {t("portfolio.viewProject")}
                </Link>
              )}
              {codeLink && (
                <Link
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-400/70 px-5 py-2.5 text-xs font-semibold text-white hover:bg-pink-500/10 transition-colors"
                >
                  <FaGithub className="text-sm text-pink-300" />
                  {t("portfolio.viewCode")}
                </Link>
              )}
            </div>

            {/* Teknologier */}
            <div className="flex flex-wrap gap-2">
              {getTechIcons(tech).map((techItem) => (
                <span
                  key={techItem.name}
                  className="flex items-center gap-1.5 rounded-full border border-pink-400/20 bg-white/[0.03] px-3 py-1"
                  title={techItem.name}
                >
                  <techItem.icon
                    className="text-xs"
                    style={{ color: techItem.color }}
                  />
                  <span className="text-slate-300 text-[11px] font-medium">
                    {techItem.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Bild-modal (Fullskärm) */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#140a22]/90 backdrop-blur-md"
            onClick={toggleModal}
          ></div>
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center z-10">
            <button
              onClick={toggleModal}
              className="absolute -top-12 right-0 text-slate-300 hover:text-pink-400 transition-colors p-2"
              aria-label="Stäng"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="relative border border-pink-400/20 rounded-xl p-2 shadow-2xl max-w-full max-h-full">
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
