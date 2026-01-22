import {
  FaCalendarAlt,
  FaSuitcase,
  FaGraduationCap,
} from "react-icons/fa";

export default function CV() {
  return (
    <main className="right-column flex-1 w-full lg:w-2/3 space-y-8">
          {/* Work Experience */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <FaSuitcase className="mr-4 text-purple-400" />
                Arbetslivserfarenhet
              </h2>

              <div className="space-y-8">
                {[
                    {
                    title: "Frontend utvecklare React Next.js Material UI",
                    period: "Pågående - Maj 2026",
                    company: "hitract.se",
                    description:
                    "LIA - Praktik hitract.se är en plattform för Studeter och studentkårer. Arbetar med Frontend utveckling i React, Next,js med Matierial UI efter Figma design från UX/UI designer.",
                    gradient: "from-purple-500 to-pink-500",
                  },

                  {
                    title: "Fullstack utvecklare / Webbdesigner (sido project)",
                    period: "Pågående - tills vidare",
                    company: "kodochdesign.se",
                    description:
                      "Kombinerar teknik och design för att skapa helhetslösningar – från modern kod och användarvänliga UX/UI-gränssnitt till visuella identiteter med logotyper, banners och trycksaker. Fokus på professionella och engagerande lösningar som stärker varumärken och tjänster.",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "Grafisk Design / Webbdesign",
                    period: "2022 - 2025",
                    company: "posterstillhemmet.se",
                    description: "Webdesign, Social Media, Grafisk Design",
                    gradient: "from-pink-500 to-rose-500",
                  },
                  {
                    title: "Butiksbiträde",
                    period: "2023 - 2025",
                    company: "Flügger färg",
                    description:
                      "Försäljning av färg, verktyg och måleritillbehör. Färgrådgivare.",
                    gradient: "from-rose-500 to-orange-500",
                  },
                  {
                    title: "Säljare",
                    period: "2022 - 2023",
                    company: "Bygghemma",
                    description: "Försäljning av badrum, fönster och dörrar.",
                    gradient: "from-orange-500 to-amber-500",
                  },
                  {
                    title: "Grafisk Designer",
                    period: "2016 - 2022",
                    company: "Esmilia Design",
                    description:
                      "Grafisk Design, webdesign, logistik, försäljning, social media",
                    gradient: "from-amber-500 to-cyan-500",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-gradient group/item"
                  >
                    <div
                      className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r ${job.gradient} rounded-full border-2 border-slate-900`}
                    ></div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group-hover/item:bg-white/10 transition-colors duration-300">
                      <h5
                        className={`font-bold text-xl mb-2 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}
                      >
                        {job.title}
                      </h5>
                      <p className="flex items-center text-slate-300 mb-2">
                        <FaCalendarAlt className="mr-2" />
                        {job.period}
                      </p>
                      <p className="text-slate-200 font-semibold mb-2">
                        {job.company}
                      </p>
                      <p className="text-slate-300 italic">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="flex items-center text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                <FaGraduationCap className="mr-4 text-cyan-400" />
                Utbildning
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Fullstack - Pågående utbildning",
                    period: "2025 - 2026",
                    school: "Lexicon Linköping",
                    description:
                      "React, Next.js, HTML, CSS, JavaScript/TypeScript, Prisma, SQL, Tailwind CSS, Bootstrap, PostgreSQL, Git/GitHub, AI, Node.js",
                    gradient: "from-cyan-500 to-blue-500",
                  },
                  {
                    title: "IT Profil",
                    period: "2006 - 2007",
                    school: "Kristinehamns Folkhögskola",
                    description: "",
                    gradient: "from-blue-500 to-indigo-500",
                  },
                  {
                    title: "Bygg- och hantverksprogrammet, måleri",
                    period: "2002 - 2005",
                    school: "Tullängsskolan Örebro",
                    description: "",
                    gradient: "from-indigo-500 to-purple-500",
                  },
                ].map((education, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-gradient group/item"
                  >
                    <div
                      className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r ${education.gradient} rounded-full border-2 border-slate-900`}
                    ></div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group-hover/item:bg-white/10 transition-colors duration-300">
                      <h5
                        className={`font-bold text-xl mb-2 bg-gradient-to-r ${education.gradient} bg-clip-text text-transparent`}
                      >
                        {education.title}
                      </h5>
                      <p className="flex items-center text-slate-300 mb-2">
                        <FaCalendarAlt className="mr-2" />
                        {education.period}
                      </p>
                      <p className="text-slate-200 font-semibold mb-2">
                        {education.school}
                      </p>
                      {education.description && (
                        <p className="text-slate-300 italic">
                          {education.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
  );
}
