import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="About-column">
        {/* Om mig */}
        <section className="bg-white dark:bg-gray-800 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-500 dark:text-pink-400 border-b-2 border-pink-500 dark:border-pink-400 pb-2 mb-4 text-2xl">
            Om mig
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Hej! Jag heter Josefine och är 40 år gammal. Jag har två
            tonårsdöttrar som är 15 och 16 år. Ursprungligen kommer jag från
            Örebro, men har bott i Hallsberg i 14 år. Den 1 augusti flyttar vi
            till Mjölby.
            <br />
            <br />
            Jag är en glad, driven och målmedveten person som ser positivt på
            utveckling och förändringar som leder till förbättring. Jag tycker
            om att stimulera hjärnan med nya utmaningar. På fritiden gillar jag
            att gå promenader, umgås med familj och vänner, pyssla med olika
            hantverk och spela piano.
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
        <section className="bg-gray-50 dark:bg-gray-700 mb-8 p-8 rounded-md shadow-md">
          <h2 className="text-pink-500 dark:text-pink-400 border-b-2 border-pink-500 dark:border-pink-400 pb-2 mb-4 text-2xl">
            Söker
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Just nu söker jag främst praktik då jag studerar till
            fullstackutvecklare på Lexicon i Linköping. Vi kommer i slutet av
            året att ha 12 veckors praktik som en del av utbildningen.
            <br />
            <br />
            Jag har tidigare arbetat med webbdesign och grafisk design, men
            valde att bredda mina kunskaper för att kunna jobba med hela kedjan
            – från backend till frontend.
            <br />
            <br />
            På sikt ser jag fram emot att främst jobba med Frontend och UX/UI
            Design, där jag kan kombinera min tekniska kompetens med mitt
            intresse för form och användarvänlighet.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
