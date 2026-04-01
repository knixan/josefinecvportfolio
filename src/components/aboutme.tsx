import { FaUser, FaPlay } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20"></div>
      <div className="fixed top-1/4 left-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container max-w-4xl mx-auto pt-24 pb-20 px-4">
        <main className="space-y-8">
          {/* Om mig Section */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                <FaUser className="mr-4 text-violet-400" />
                Om mig
              </h2>

              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Jag heter Josefine, är 40 år och bor i Mjölby med mina två
                  tonårsdöttrar.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Jag är en driven person som trivs med att ta mig an nya
                  utmaningar. Att lära mig nya saker och bli bättre på det jag
                  redan kan är något jag verkligen värdesätter – både i
                  arbetslivet och privat.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Mitt intresse för IT sträcker sig tillbaka till 2007. Redan då
                  fastnade jag för det digitala skapandet – från att designa
                  bloggar och banners till att skriva enklare script och driva en
                  egen webbutik och fyndiq.se med egna designade produkter. Den
                  nyfikenheten har aldrig försvunnit.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Jag har sedan dess byggt upp en gedigen grund inom HTML, CSS
                  och JavaScript, och har nyligen utbildat mig till
                  fullstackutvecklare. Genom min pågående LIA-praktik hos
                  hitract.se har jag fått värdefull praktisk erfarenhet inom
                  modern webbutveckling.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Jag driver sidan kodochdesign.se där jag tar mindre uppdrag,
                  men mitt huvudmål är att hitta en anställning inom fullstack-
                  eller frontendutveckling där jag får växa i min yrkesroll och
                  bidra till innovativa projekt. Jag siktar på en start till
                  våren.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  När jag inte kodar laddar jag gärna ur i naturen, spelar piano,
                  pysslar med hantverk eller kopplar av med att spela dator eller
                  piano. Jag värdesätter balansen mellan att prestera och att
                  återhämta sig.
                </p>
              </div>

              {/* Video Section */}
              <div className="relative group/video mt-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover/video:blur-md transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-slate-800/50 border border-white/20 rounded-2xl p-4 overflow-hidden">
                  <div className="flex items-center mb-4">
                    <FaPlay className="text-pink-400 mr-3" />
                    <span className="text-slate-200 font-semibold">
                      Piano trudelutt
                    </span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/45WJX69-ZK0?si=1ChHTv36IAtv5Jp1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full aspect-video rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-500"></div>
    </div>
  );
}
