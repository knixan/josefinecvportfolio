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
          </p>
        </section>

        <section className="bg-gray-700 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-400 border-b-2 border-pink-400 pb-2 mb-4 text-2xl">
            Bakgrund
          </h2>
          <p className="mb-4 text-gray-300">
            Jag är en passionerad fullstackutvecklare som älskar att skapa
            digitala upplevelser från grunden. Min resa inom IT började redan
            2007 när jag gick IT-programmet på Kristinehamns folkhögskola.
            Samtidigt designade jag banners och bloggar åt vänner och bekanta –
            ofta fick jag frågor om hur man lade in koden. Även om jag inte
            kunde det då, tog jag snabbt reda på hur det fungerade, och snart
            hade jag designat hundratals bloggar på plattformar som Blogg.se och
            Blogspot. När bloggandet senare minskade i popularitet fortsatte jag
            att utforska digitalt skapande genom att designa kläder i spel och
            skriva enklare script – fortfarande på hobbynivå. År 2016 startade
            jag en egen webbutik där jag sålde egendesignade posters,
            nyckelringar och andra produkter, både via min egen plattform och
            genom återförsäljare som Fyndiq. Efter några år kände jag dock att
            entreprenörskapet tog mer fokus från min kreativitet, och jag valde
            att ta en paus från IT-världen. Idag är jag tillbaka där jag trivs
            bäst – i IT. Jag har utbildat mig till fullstackutvecklare för att
            kunna förena min erfarenhet inom grafisk design och webbdesign med
            systemutveckling, och på så sätt bygga helhetslösningar från backend
            till frontend. Det jag uppskattar mest är att få följa en idé hela
            vägen – från en enkel skiss till en färdig, interaktiv webbplats.
            För mig är kod och design en kreativ process där varje beslut bidrar
            till en bättre användarupplevelse. Jag drivs av utmaningen att skapa
            lösningar som är både estetiska och funktionella, och jag ser fram
            emot att bidra till att förverkliga digitala visioner.
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
