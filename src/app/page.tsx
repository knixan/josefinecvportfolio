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
    <div className="container max-w-7xl mx-auto mt-16 p-4 flex gap-8 flex-wrap lg:flex-nowrap bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* ASIDE */}
      <aside className="left-column flex-none w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden">
        <div className="relative">
          <div className="w-full mt-12">
            <Image
              src="/Image/josefineErikssonProfilBild.jpg"
              alt="Avatar"
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
          <h2 className="absolute bottom-2.5 left-2.5 font-bold animate-bounce text-gray-100 bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-md">
            Hej hej!
          </h2>
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="my-2 text-pink-500 dark:text-pink-400">
            <FaBriefcase className="mr-2 inline-block" /> Designer
          </p>
          <p className="my-2 text-pink-500 dark:text-pink-400">
            <FaHome className="mr-2 inline-block" /> Mjölby, Sverige
          </p>
          <p className="my-2 text-pink-500 dark:text-pink-400">
            <FaEnvelope className="mr-2 inline-block" />{" "}
            josefineeriksson@live.se
          </p>
          <p className="my-2 text-pink-500 dark:text-pink-400">
            <FaPhone className="mr-2 inline-block" /> 0762484234
          </p>

          {/* Färdigheter */}
          <h3 className="mt-4 mb-2 text-xl text-purple-600 dark:text-purple-400">
            Program
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {programs.map((program, index) => (
              <span
                key={index}
                className="bg-purple-700 dark:bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {program}
              </span>
            ))}
          </div>

          {/* Språk */}
          <h3 className="mt-4 mb-2 text-xl text-purple-600 dark:text-purple-400">
            Språk
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((language, index) => (
              <span
                key={index}
                className="bg-purple-700 dark:bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {language}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-xl mb-2 text-purple-600 dark:text-purple-400">
            Körkort
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {certifications.map((certification, index) => (
              <span
                key={index}
                className="bg-purple-700 dark:bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
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
        <section className="card bg-white dark:bg-gray-800 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-500 dark:text-pink-400 border-b-2 border-pink-500 dark:border-pink-400 pb-2 mb-4 text-2xl">
            <FaSuitcase className="mr-2 inline-block" />
            Arbetslivserfarenhet
          </h2>

          <div className="job-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Webbdesigner (sido project)
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" />
              Pågående - tills vidare
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              kodochdesign.se - <em>Responsiva webbplatser</em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Grafisk Design / Webbdesign
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2022 - 2025
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              posterstillhemmet.se -
              <em> Webdesign, Social Media, Grafisk Design </em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Butiksbiträde
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2023 - 2025
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Flügger färg -
              <em>
                Försäljning av färg, verktyg och måleritillbehör. Färgrådgivare.
              </em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Säljare
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2022 - 2023
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Bygghemma - <em>Försäljning av badrum, fönster och dörrar.</em>
            </p>
          </div>
          <div className="job-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Grafisk Designer
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2016 - 2022
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Esmilia Design -
              <em>
                Grafisk Design, webdesign, logistik, försäljning, social media
              </em>
            </p>
          </div>
        </section>
        {/* Utbildning */}
        <section className="card bg-white dark:bg-gray-800 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-500 dark:text-pink-400 border-b-2 border-pink-500 dark:border-pink-400 pb-2 mb-4 text-2xl">
            <FaSuitcase className="mr-2 inline-block" />
            Utbildning
          </h2>

          <div className="education-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Fullstack - Pågående utbildning
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2025 - 2026
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Lexicon Linköping <br />
              <em>
                React, Next.js, HTML, CSS, JavaScript/TypeScript, Prisma, SQL,
                Tailwind CSS, Bootstrap, PostgreSQL, Git/GitHub, AI, Node.js
              </em>
            </p>
          </div>
          <div className="education-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              IT Profil
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2006 - 2007
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Kristinehamns Folkhögskola
            </p>
          </div>
          <div className="education-entry mb-6">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">
              Bygg- och hantverksprogrammet, måleri
            </h5>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="mr-2 inline-block" /> 2002 - 2005
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-300">
              Tullängsskolan Örebro
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default cvPage;
