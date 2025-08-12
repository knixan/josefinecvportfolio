import Image from "next/image";
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaSuitcase,
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
    <div className="container max-w-7xl mx-auto mt-16 p-4 flex gap-8 flex-wrap lg:flex-nowrap">
      {/* ASIDE */}
      <aside className="left-column flex-none w-full lg:w-1/3 bg-[#ffffff] rounded-md shadow-md overflow-hidden">
        <div className="relative">
          <div className="w-full mt-12">
            <Image
              src="/Image/josefineErikssonProfilBild.jpg"
              alt="Avatar"
              width={500}
              height={400}
            />
          </div>
          <h2 className="absolute bottom-2.5 left-2.5 font-bold animate-bounce text-[#eeeeee] bg-gradient-to-r from-[#3a0ca3] to-[#f72585] px-4 py-2 rounded-md">
            Hej hej!
          </h2>
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="my-2 text-[#f72585]">
            <FaBriefcase className="mr-2 inline-block" /> Designer
          </p>
          <p className="my-2 text-[#f72585]">
            <FaHome className="mr-2 inline-block" /> Mjölby, Sverige
          </p>
          <p className="my-2 text-[#f72585]">
            <FaEnvelope className="mr-2 inline-block" />{" "}
            josefineeriksson@live.se
          </p>
          <p className="my-2 text-[#f72585]">
            <FaPhone className="mr-2 inline-block" /> 0762484234
          </p>

          {/* Färdigheter */}
          <h3 className="mt-4 mb-2 text-xl text-[#3a0ca3]">Program</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {programs.map((program, index) => (
              <span
                key={index}
                className="bg-[#7209b7] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {program}
              </span>
            ))}
          </div>

          {/* Språk */}
          <h3 className="mt-4 mb-2 text-xl text-[#3a0ca3]">Språk</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((language, index) => (
              <span
                key={index}
                className="bg-[#7209b7] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {language}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-xl mb-2 text-[#3a0ca3]">Körkort</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {certifications.map((certification, index) => (
              <span
                key={index}
                className="bg-[#7209b7] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {certification}
              </span>
            ))}
          </div>
        </div>
      </aside>
      {/* Main */}
      <main className="right-column flex-1 w-full lg:w-2/3">
        {/* Arbetslivserfarenhet */}
        <section className="card bg-[#ffffff] mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-[#f72585] border-b-2 border-[#f72585] pb-2 mb-4 text-2xl">
            <FaSuitcase className="mr-2 inline-block" />
            Arbetslivserfarenhet
          </h2>

          <div className="job-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Webbdesigner (sido project)
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" />
              Pågående - tills vidare
            </p>
            <p className="my-1 text-[#333333]">
              kodochdesign.se - <em>Responsiva webbplatser</em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Grafisk Design / Webbdesign
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2022 - 2025
            </p>
            <p className="my-1 text-[#333333]">
              posterstillhemmet.se -{" "}
              <em> Webdesign, Social Media, Grafisk Design </em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Butiksbiträde
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2023 - 2025
            </p>
            <p className="my-1 text-[#333333]">
              Flügger färg -{" "}
              <em>
                Försäljning av färg, verktyg och måleritillbehör. Färgrådgivare.
              </em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">Säljare</h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2022 - 2023
            </p>
            <p className="my-1 text-[#333333]">
              Bygghemma - <em>Försäljning av badrum, fönster och dörrar.</em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Grafisk Designer
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2016 - 2022
            </p>
            <p className="my-1 text-[#333333]">
              Esmilia Design -{" "}
              <em>
                Grafisk Design, webdesign, logistik, försäljning, social media
              </em>
            </p>
          </div>
        </section>
        {/* Utbildning */}
        <section className="card bg-[#ffffff] mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-[#f72585] border-b-2 border-[#f72585] pb-2 mb-4 text-2xl">
            <FaSuitcase className="mr-2 inline-block" />
            Utbildning
          </h2>

          <div className="education-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Fullstack - Pågående utbildning
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2025 - 2026
            </p>
            <p className="my-1 text-[#333333]">
              Lexicon Linköping <br />
              <em>
                React, Next.js, HTML, CSS, JavaScript/TypeScript, Prisma, SQL,
                Tailwind CSS, Bootstrap, PostgreSQL, Git/GitHub, AI, Node.js
              </em>
            </p>
          </div>
          <div className="education-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">IT Profil</h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2006 - 2007
            </p>
            <p className="my-1 text-[#333333]">Kristinehamns Folkhögskola</p>
          </div>
          <div className="education-entry mb-6">
            <h5 className="font-bold text-[#7209b7] text-lg mb-1">
              Bygg- och hantverksprogrammet, måleri
            </h5>
            <p className="my-1 text-[#333333]">
              <FaCalendarAlt className="mr-2 inline-block" /> 2002 - 2005
            </p>
            <p className="my-1 text-[#333333]">Tullängsskolan Örebro</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default cvPage;
