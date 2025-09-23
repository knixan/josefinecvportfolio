import Image from "next/image";
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaSuitcase,
  FaGraduationCap,
  FaDownload,
} from "react-icons/fa";

const programs = [
  "Adobe Photoshop",
  "Illustrator",
  "In Design",
  "Figma",
  "Html & CSS",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Git/GitHub",
  "GitHub Copilot",
];

const languages = ["Svenska", "Engelska"];

const certifications = ["Truckkort", "B-kort - pågående"];

const cvPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20"></div>
      <div className="fixed top-1/4 left-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container max-w-7xl mx-auto pt-24 pb-20 p-4 flex gap-8 flex-wrap lg:flex-nowrap">
        {/* ASIDE */}
        <aside className="left-column flex-none w-full lg:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Profile Image Section */}
              <div className="relative">
                <div className="w-full">
                  <Image
                    src="/Image/josefineErikssonProfilBild.jpg"
                    alt="Avatar"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-t-3xl"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="backdrop-blur-xl animate-bounce bg-white/20 border border-white/30 px-6 py-3 rounded-2xl">
                    <h2 className="font-bold text-white text-lg">Hej hej!</h2>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: FaBriefcase,
                      text: "Josefine Eriksson, Fullstackutvecklare & Grafisk/Webbdesigner",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      icon: FaHome,
                      text: "Mjölby, Sverige",
                      color: "from-pink-400 to-rose-400",
                    },
                    {
                      icon: FaEnvelope,
                      text: "josefineeriksson@live.se",
                      color: "from-rose-400 to-orange-400",
                    },
                    {
                      icon: FaPhone,
                      text: "0762484234",
                      color: "from-orange-400 to-cyan-400",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="text-white text-sm" />
                      </div>
                      <p className="text-slate-200 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Download CV Button */}
                <div className="mb-8">
                  <a
                    href="/Pdf/josefineerikssoncv.pdf"
                    download="Josefine_Eriksson_CV.pdf"
                    className="group/btn relative block w-full"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover/btn:opacity-60 transition duration-500"></div>
                    <button className="relative w-full px-6 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 border border-white/20">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                          <FaDownload className="text-white text-sm" />
                        </div>
                        <span className="relative z-10 text-lg">
                          Ladda ner CV
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </a>
                </div>

                {/* Skills Sections */}
                <div className="space-y-8">
                  {/* Programs */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Program
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {programs.map((program, index) => (
                        <span
                          key={index}
                          className="backdrop-blur-xl bg-purple-500/20 border border-purple-300/30 text-purple-200 text-xs font-semibold px-3 py-2 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                      Språk
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language, index) => (
                        <span
                          key={index}
                          className="backdrop-blur-xl bg-pink-500/20 border border-pink-300/30 text-pink-200 text-xs font-semibold px-3 py-2 rounded-full hover:bg-pink-500/30 transition-colors duration-300"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-cyan-400 bg-clip-text text-transparent">
                      Körkort
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((certification, index) => (
                        <span
                          key={index}
                          className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 text-xs font-semibold px-3 py-2 rounded-full hover:bg-cyan-500/30 transition-colors duration-300"
                        >
                          {certification}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
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
                    title: "Webbdesigner (sido project)",
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
      </div>
    </div>
  );
};

export default cvPage;
