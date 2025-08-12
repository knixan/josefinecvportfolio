import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#eeeeee] mb-12">
          Min Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projekt 1: Ledningsteknik */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/Image/mockup-ledningsteknik.jpg"
                alt="Ledningsteknik"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#3a0ca3] mb-2">
                Ledningsteknik AB
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Detta är en modern, responsiv och mobilanpassad hemsida
                utvecklad för Ledningsteknik AB, ett företag verksamt inom
                relining och rörinspektion i Norr- och Västerbotten, Sverige.
                Syftet med projektet var att uppdatera deras gamla hemsida och
                skapa en modern, tydlig, lättnavigerad och visuell webbplats som
                informerar besökare om företagets tjänster, personal och
                kontaktvägar.
              </p>
              <p className="text-gray-600 font-semibold text-xs mb-4">
                **Teknik:** HTML, Tailwind CSS, JavaScript
              </p>
              <Link
                href="https://ledningsteknik.pages.dev/"
                className="inline-block bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#4361ee] hover:to-[#4cc9f0] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visa projekt
              </Link>
            </div>
          </div>

          {/* Projekt 2: Memory */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
              <h3 className="text-2xl font-semibold text-[#3a0ca3] mb-2">
                🧠 MMemory 2-Spelare
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Ett klassiskt memory-spel för två spelare där du har 1 minut på
                dig att hitta alla par. Den spelare som samlar flest poäng
                vinner. Spelet är utvecklat i HTML, CSS och JavaScript.
              </p>
              <p className="text-gray-600 font-semibold text-xs mb-4">
                **Teknik:** Javascript, HTML, CSS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://github.com/knixan/memory2spelare"
                  className="inline-block bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#4361ee] hover:to-[#4cc9f0] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 3: Mammas Väder */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
              <h3 className="text-2xl font-semibold text-[#3a0ca3] mb-2">
                Mammas Väder
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Mammas Väderapp är en väderwebb som ger personliga och konkreta
                råd från "mamma" om vad barnen ska ha på sig beroende på vädret.
                Det är som att alltid ha en omtänksam förälder i fickan som
                säger "Ta på dig mössa!" när det snöar eller "Glöm inte vatten!"
                när solen gassar.
              </p>
              <p className="text-gray-600 font-semibold text-xs mb-4">
                **Teknik:** HTML, Tailwind CSS, JavaScript
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://mammasvader.pages.dev/"
                  className="inline-block bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#4361ee] hover:to-[#4cc9f0] transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/mammas-vader"
                  className="inline-block bg-gradient-to-r from-[#f72585] to-[#7209b7] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#7209b7] hover:to-[#f72585] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa kod (GitHub)
                </Link>
              </div>
            </div>
          </div>

          {/* Projekt 4: Skeninge VVS AB */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
              <h3 className="text-2xl font-semibold text-[#3a0ca3] mb-2">
                Skeninge VVS AB
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Hemsida för Skeninge VVS AB i Skänninge. Gullig och personlig
                hemsida för ett litet familjeföretag som jobbar med
                VVS-tjänster. Hemsidan är responsiv och mobilanpassad, vilket
                gör den lätt att använda på alla enheter.
              </p>
              <p className="text-gray-600 font-semibold text-xs mb-4">
                **Teknik:** HTML, Tailwind CSS, JavaScript
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://skeningevvsab.vercel.app/"
                  className="inline-block bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#4361ee] hover:to-[#4cc9f0] transition-all duration-300 mb-2 md:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visa projekt
                </Link>
                <Link
                  href="https://github.com/knixan/skeningevvsab"
                  className="inline-block bg-gradient-to-r from-[#f72585] to-[#7209b7] text-white font-bold py-2 px-6 rounded-full text-sm hover:from-[#7209b7] hover:to-[#f72585] transition-all duration-300"
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
