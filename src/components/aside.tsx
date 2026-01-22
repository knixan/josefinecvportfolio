import Image from "next/image";
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaPhone,
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
  "Sanity CMS",
  "Material UI",
  "Zod",
  "Azure",
  "PostgreSQL",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Git/GitHub",
  "GitHub Copilot",
];

const languages = ["Svenska", "Engelska"];

export default function Aside() {
  return (
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

                
                </div>
              </div>
            </div>
          </div>
        </aside>
  );
}