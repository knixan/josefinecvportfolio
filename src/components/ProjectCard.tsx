"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaExpandAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string;
  projectLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  alt,
  tech,
  projectLink,
  codeLink,
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = () => {
    setIsImageModalOpen(true);
    // Förhindra scrolling på body när modal är öppen
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    // Återställ scrolling på body
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="group relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-50 transition duration-500"></div>

        <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
          {/* Image Section - utan text overlay */}
          <div
            className="relative h-64 overflow-hidden cursor-pointer group/image"
            onClick={openImageModal}
          >
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 group-hover:scale-110"
            />
            {/* Behåller en subtil gradient för bättre övergång till content */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

            {/* Hover overlay med expand-ikon */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 p-4 rounded-full transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
                <FaExpandAlt className="text-white text-xl" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </h3>

            <p className="text-slate-300 text-base mb-6 leading-relaxed font-light">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {projectLink && (
                <Link
                  href={projectLink}
                  className="group/btn relative flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative w-full px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    <span className="relative z-10">Visa projekt</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
              )}

              {codeLink && (
                <Link
                  href={codeLink}
                  className="group/btn relative flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative w-full px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                    <span className="relative z-10">Visa kod</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
              )}
            </div>

            {/* Tech details */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-slate-400 text-sm">
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Teknik:
                </span>{" "}
                {tech}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeImageModal}
          ></div>

          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 group/close"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl blur-lg opacity-0 group-hover/close:opacity-100 transition duration-300"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/20 p-3 rounded-xl hover:bg-slate-800/80 transition-colors duration-300">
                <FaTimes className="text-white text-xl" />
              </div>
            </button>

            {/* Image Container */}
            <div className="relative group/modal flex flex-col items-center max-w-full max-h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-60"></div>

              {/* Image */}
              <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-4 shadow-2xl mb-6">
                <Image
                  src={image}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-2xl max-w-full max-h-[70vh] w-auto h-auto object-contain"
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
