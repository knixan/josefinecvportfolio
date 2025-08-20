import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-20 bg-gray-900 text-gray-200">
      <main className="About-column">
        {/* Om mig */}
        <section className="bg-gray-800 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-400 border-b-2 border-pink-400 pb-2 mb-4 text-2xl">
            Om mig
          </h2>
          <p className="mb-4 text-gray-300">
            Hej! Jag heter Josefine och är 40 år, och jag bor numera i Mjölby.
            Jag är ursprungligen från Örebro och har två tonårsdöttrar. Jag är
            en driven och målmedveten person som ser positivt på nya utmaningar
            och utveckling.
            <br />
            <br />
            Min fritid ägnar jag åt att umgås med familj och vänner, vara ute i
            naturen, spela piano och datorspel samt utöva olika typer av
            hantverk.
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/45WJX69-ZK0?si=1ChHTv36IAtv5Jp1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </div>
        </section>
        {/* Söker */}
        <section className="bg-gray-700 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-400 border-b-2 border-pink-400 pb-2 mb-4 text-2xl">
            Söker
          </h2>
          <p className="mb-4 text-gray-300">
            Jag studerar för närvarande till fullstackutvecklare på Lexicon i
            Linköping och söker en 12-veckors praktikplats med start i slutet av
            året. Jag brinner för att skapa webbplatser som är både funktionella
            och visuellt tilltalande.
            <br /> <br />
            Med bakgrund inom webbdesign och grafisk design har jag nu valt att
            fördjupa mig inom fullstackutveckling för att behärska hela
            processen – från idé till färdig lösning. <br /> <br /> Mitt mål är
            att arbeta med utveckling av responsiva och användarvänliga
            webbplatser där design och teknik samspelar för att ge en optimal
            användarupplevelse. Jag har även erfarenhet av eget företagande, där
            jag drev en webbutik och sålde produkter jag själv designat.
          </p>
        </section>

        <section className="bg-gray-700 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-400 border-b-2 border-pink-400 pb-2 mb-4 text-2xl">
            Kod och Design
          </h2>
          <p className="mb-4 text-gray-300">
            Kod och Design är ett projekt som föddes ur min passion för att
            skapa vackra och funktionella webblösningar. Som fullstackutvecklare
            kombinerar jag modern design med ren och effektiv kod för att hjälpa
            företag och privatpersoner att förverkliga sina digitala idéer. Jag
            tror på ett nära samarbete med mina kunder för att säkerställa att
            varje projekt blir en framgång, oavsett om det handlar om en enklare
            landningssida eller en mer komplex webbapplikation. I framtiden vill
            jag erbjuda prisvärda lösningar som gör professionella webbplatser
            tillgängliga för alla budgetar. Men till en början kommer jag att
            fokusera på att bygga upp en stark portfolio och skapa project åt
            mig, vänner och företag tills jag känner mig redo att ta emot
            kunder.
            <Image
              src="/Image/kodochdesign.png"
              alt="Kod och Design"
              width={300}
              height={300}
              className="mt-4 item-center mx-auto "
            />
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
