"use client";

import { FaFigma } from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

const FIGMA_EMBEDS = [
  {
    src: "https://embed.figma.com/design/L7Vwr7ypRMxuGrZfo3o5bC/Skeninge-VVS?node-id=0-1&embed-host=share",
    titleKey: "figma.design2.title",
  },

  {
    src: "https://embed.figma.com/design/JE8FdREtjy44nce6vVGego/Untitled?node-id=0-1&embed-host=share",
    titleKey: "figma.design3.title",
  },

  {
    src: "https://embed.figma.com/design/JSDiPNGil5G61rvKzFxWam/Folket-hus-Tran%C3%A5s?node-id=0-1&embed-host=share",
    titleKey: "figma.design4.title",
  },
];

export default function FigmaSection() {
  const { t } = useTranslate();

  return (
    <section>
      <h2 className="flex items-center gap-3 text-2xl font-medium text-white">
        <FaFigma className="text-pink-500" />
        {t("figma.title")}
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {FIGMA_EMBEDS.map((embed) => (
          <div key={embed.src} className="card p-4 lg:p-6">
            <h3 className="mb-4 text-base font-medium text-white">
              {t(embed.titleKey)}
            </h3>
            <div className="relative w-full aspect-video overflow-hidden rounded-xl ring-1 ring-white/5">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={embed.src}
                title={t(embed.titleKey)}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
