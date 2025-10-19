import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSearch, FaHistory, FaPlay } from "react-icons/fa";

const AboutPage = () => {
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

              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              Jag heter Josefine, är 40 år och bor i Mjölby med mina två tonårsdöttrar. Jag ser mig själv som driven och gillar att ta mig an nya utmaningar – utveckling är något jag värdesätter högt.

<br/><br/> När jag inte kodar gillar jag att vara ute i naturen, spela piano och umgås med nära och kära. Att pyssla med hantverk eller spela datorspel är också ett bra sätt att koppla av.
              </p>

              {/* Video Section */}
              <div className="relative group/video">
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

          {/* Söker Section */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                <FaSearch className="mr-4 text-pink-400" />
                Söker
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Jag studerar just nu till fullstackutvecklare på Lexicon i Linköping. Jag brinner för att bygga webbplatser som är både snygga och funktionella.
              </p>
            </div>
          </section>

          {/* Bakgrund Section */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                <FaHistory className="mr-4 text-cyan-400" />
                Bakgrund
              </h2>

              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Mitt intresse för IT började redan 2007. Jag har alltid älskat att skapa digitalt – allt från att designa bloggar och banners till att skriva enklare script och starta en egen webbutik för designade produkter.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed font-light">
                 Efter en paus är jag nu tillbaka där jag trivs bäst: i IT-världen. Som fullstackutvecklare får jag använda både min erfarenhet av design och systemutveckling. Det bästa är att få se en idé växa, från en enkel skiss till en komplett och interaktiv webbplats. För mig är kod och design en kreativ process, där målet alltid är att skapa den bästa användarupplevelsen. Jag ser fram emot att bidra med mina kunskaper och förverkliga nya digitala visioner.
                </p>

               

                {/* Image with styling */}
                <div className="flex justify-center mt-8">
                  <div className="relative group/image">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded-2xl blur-lg group-hover/image:blur-xl transition-all duration-300"></div>
                    <div className="relative backdrop-blur-xl bg-slate-800/40 border border-white/20 rounded-2xl p-4">
                      <Image
                        src="/Image/kodochdesign.png"
                        alt="Kod och Design"
                        width={300}
                        height={300}
                        className="rounded-xl shadow-2xl transition-transform duration-500 group-hover/image:scale-105"
                      />
                    </div>
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
};

export default AboutPage;
