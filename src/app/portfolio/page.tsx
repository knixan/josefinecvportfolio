import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Min Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projekt 4: GammelByggnadsmåleri */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-gammelbyggnadsmaleri.jpg"
                alt="Gammelbyggnads måleri"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                Gammel Byggnadsmåleri
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Exempel på hur jag skapar digitala lösningar som fångar essensen
                av mina kunders verksamhet. För Gammel Byggnadsmåleri har jag
                strävat efter att balansera det traditionella och tidlösa med
                ett modernt och funktionellt uttryck. Webbplatsen är byggd med
                Next.js för att erbjuda en robust och skalbar plattform.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React Next.js TypeScript Tailwind CSS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://gammelbyggnadsmaleri.vercel.app/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/gammelbyggnadsmaleri"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* B-Movies */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-bmovies.jpg"
                alt="B-movies"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                B-Movies
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Pågående skolprojekt: E-handel för B-movies. Projektidén kom
                från vårt gruppnamn ’Beta’, vilket utvecklades till temat
                B-movies. Jag har ansvarat för större delen av frontend med
                Tailwind och Shadcn samt implementerat centrala funktioner:
                cookies för varukorg och kassa, databashantering av kunder och
                ordrar, filmkort och carousel via API, adminsidor, checkout- och
                tack-sida med orderspecifikation, kundtjänstsida med formulär
                samt inloggnings- och registreringspopups.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React, Next.js, TypeScript, Tailwind CSS, Shadcn,
                PostgreSQL, Prisma, Zod, BetterAuth
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                {/* <Link
                  href="https://ledningsteknik.vercel.app/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/ledningsteknik"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link> */}
              </div>
            </div>
          </div>

          {/* Projekt 1: Ledningsteknik */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-ledningsteknik.jpg"
                alt="Ledningsteknik AB"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                Ledningsteknik AB
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Detta är en modern, responsiv och mobilanpassad hemsida
                utvecklad för Ledningsteknik AB, ett företag verksamt inom
                relining och rörinspektion i Norr- och Västerbotten, Sverige.
                Syftet med projektet var att uppdatera deras gamla hemsida och
                skapa en modern, tydlig, lättnavigerad och visuell webbplats som
                informerar besökare om företagets tjänster, personal och
                kontaktvägar.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React, Next.js, TypeScript, Tailwind CSS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://ledningsteknik.vercel.app/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/ledningsteknik"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 2: Memory */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/memory2spelare.jpg"
                alt="Memory 2-Spelare"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                🧠 MMemory 2-Spelare
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Ett klassiskt memory-spel för två spelare där du har 1 minut på
                dig att hitta alla par. Den spelare som samlar flest poäng
                vinner. Spelet är utvecklat i HTML, CSS och JavaScript.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** Javascript, HTML, CSS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://github.com/knixan/memory2spelare"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 3: Mammas Väder */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-mammas.jpg"
                alt="Mammas Väder"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                Mammas Väder
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Mammas Väderapp är en väderwebb som ger personliga och konkreta
                råd från mamma om vad barnen ska ha på sig beroende på vädret.
                Det är som att alltid ha en omtänksam förälder i fickan som
                säger Ta på dig mössa! när det snöar eller Glöm inte vatten! när
                solen gassar.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React, Next.js, TypeScript, Tailwind CSS,
                OpenWeatherMap API
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://mammasvader.vercel.app/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/mammasvader"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-blogpropp.jpg"
                alt="BlogPropP"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                BlogPropP
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Detta är ett bloggprojekt byggt med Next.js App Router, Prisma
                ORM, PostgreSQL och Better Auth. Projektet skapades under en
                lektion på Lexicon tillsammans med vår lärare Sebastian, där vi
                gick igenom: - Prisma & PostgreSQL - Hur autentisering fungerar
                med Better Auth - API-rutter i Next.js Efter lektionerna har
                projektet stylats med Tailwind CSS för en modern och responsiv
                design.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React Next.js TypeScript Tailwind CSS, Shadcn,
                Prisma, PostgreSQL, Better Auth
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://github.com/knixan/blogpropp"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 4: Skeninge VVS AB */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-skeningevvsab.jpg"
                alt="Skeninge VVS AB"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                Skeninge VVS AB
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Hemsida för Skeninge VVS AB i Skänninge. Gullig och personlig
                hemsida för ett litet familjeföretag som jobbar med
                VVS-tjänster. Hemsidan är responsiv och mobilanpassad, vilket
                gör den lätt att använda på alla enheter.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React Next.js TypeScript Tailwind CSS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://skeningevvs.se/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/skeningevvsab"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 3: Todo */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-todoprisma.jpg"
                alt="Todo-prisma"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                Todo webaplikation
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                En modern Todo app. Skapa, läs, uppdatera och ta bort.
                Ljust/mörkt läge.
              </p>
              <p className="text-gray-400 font-semibold text-xs mb-4">
                **Teknik:** React, Next.js, TypeScript, Tailwind CSS, Shadcn,
                Prisma, PostgreSQL.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://github.com/knixan/todoprisma"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm hover:from-purple-700 hover:to-pink-500 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
