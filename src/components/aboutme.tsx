"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

export default function AboutMe() {
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Bakgrundselement - Dämpade och lyxiga */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950"></div>
      <div className="fixed top-1/4 left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 container max-w-3xl mx-auto pt-32 pb-20 px-6">
        <main>
          {/* Om mig sektion */}
          <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 lg:p-10 shadow-xl backdrop-blur-md">
            
            {/* Rubrik */}
            <h2 className="flex items-center text-xl font-bold mb-8 text-white tracking-tight">
              <FaUser className="mr-3 text-indigo-400 text-lg" />
              {t("aboutMe.title")}
            </h2>

            {/* Brödtext */}
            <div className="space-y-5 text-slate-300 text-sm md:text-base leading-relaxed font-light">
              <p>{t("aboutMe.p1")}</p>
              <p>{t("aboutMe.p2")}</p>
              <p>{t("aboutMe.p3")}</p>
              <p>{t("aboutMe.p4")}</p>
              <p>{t("aboutMe.p5")}</p>
            </div>

            {/* Profilbild längst ner */}
            <div className="mt-10 pt-8 border-t border-slate-800/60">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden ">
                  <Image
                    src="/Image/josefineeriksson.png"
                    alt="Josefine Eriksson"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}