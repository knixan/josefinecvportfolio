"use client";

import { useTranslate } from "@/locales/use-locales";

const FIGMA_EMBEDS = [
  {
    src: "https://embed.figma.com/design/fjj2iJsqWaueN5rBOvPs1c/Untitled?node-id=0-1&embed-host=share",
    titleKey: "figma.design1.title",
  },
];

export default function FigmaSection() {
  const { t } = useTranslate();

  return (
    <section className="bg-slate-950 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="space-y-12">
          {FIGMA_EMBEDS.map((embed, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 lg:p-6 shadow-xl backdrop-blur-md"
            >
              <h3 className="text-base font-semibold text-white mb-4">
                {t(embed.titleKey)}
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden border border-slate-800/60" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embed.src}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
