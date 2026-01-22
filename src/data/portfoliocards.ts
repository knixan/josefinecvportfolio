export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string;
  projectLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    title: "Kod och Design",
    description: "Frilans project",
    image: "/Image/mockup-kodochdesign-tai.png",
    alt: "Kod och Design",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    projectLink: "https://kodochdesign.se"
  },

  {
    "title": "B-Movies",
    "description": "Skolproject - Projektidén kom från vårt gruppnamn ’Beta’, vilket utvecklades till temat B-movies. Målet är att skapa en e-handelsplattform där användare kan bläddra bland och köpa B-filmer. Projektet använder Next.js App Router, Prisma ORM, PostgreSQL och Better Auth för autentisering. Designen är responsiv och mobilanpassad med hjälp av Tailwind CSS och Shadcn UI-komponenter.",
    "image": "/Image/mockup-bmovies.jpg",
    "alt": "B-movies",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth",
    "codeLink": "https://github.com/knixan/b-movies"
  },
 {
    "title": "Väderskuggan",
    "description": "Väderskuggan är en ren och intuitiv väderapplikation som tillhandahåller väderdata i realtid och för den kommande tiden för svenska platser. Applikationen visar olika kommentarer beroende på vad det är för väder",
    "image": "/Image/mockup-vaderskuggan.png",
    "alt": "Ledningsteknik AB",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, API",
    "projectLink": "https://vaderskuggan.vercel.app/",
    "codeLink": "https://github.com/knixan/vaderskuggan"
  },

   {
    "title": "Studenthubben",
    "description": "Denna mockup är byggd med Next.js, React och Material UI, och illustrerar hur ett studentcommunity kan se ut – med fokus på nätverkande, samarbete och tillgänglighet för studenter, kårer och arbetsgivare.",
    "image": "/Image/mockup-studenthubben.png",
    "alt": "Studenthubben",
    "tech": "React, Next.js, TypeScript, Material UI",
    "projectLink": "https://studenthubben-six.vercel.app/",
    "codeLink": "https://github.com/knixan/studenthubben"
  },

 {
    "title": "Sweettime-UF",
    "description": "Sweet Time UF är en Next.js-applikation byggd för att visa och sälja premiumgodis i bulk. Projektet använder Next.js App Router, Tailwind CSS och TypeScript, och är strukturerat för enkel vidareutveckling och distribution. Apllikationen visar olika kommentarer beroende på vad det är för väder",
    "image": "/Image/mockup-sweettime-uf.png",
    "alt": "Sweettime-UF",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://sweettime-uf.se/",
    "codeLink": "https://github.com/Ludde2525/sweettime/tree/main"
  },
   
 {
    "title": "Gammel Byggnadsmåleri",
    "description": "För Gammel Byggnadsmåleri har jag strävat efter att balansera det traditionella och tidlösa med ett modernt och funktionellt uttryck. Webbplatsen är byggd med Next.js för att erbjuda en robust och skalbar plattform.",
    "image": "/Image/mockup-gammelbyggnadsmaleri.jpg",
    "alt": "Gammelbyggnads måleri",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://gammelbyggnadsmaleri.vercel.app/",
    "codeLink": "https://github.com/knixan/gammelbyggnadsmaleri"
  },
  {
    "title": "Ledningsteknik AB",
    "description": "Detta är en modern, responsiv och mobilanpassad hemsida utvecklad för Ledningsteknik AB, ett företag verksamt inom relining och rörinspektion i Norr- och Västerbotten, Sverige. Syftet med projektet var att uppdatera deras gamla hemsida och skapa en modern, tydlig, lättnavigerad och visuell webbplats som informerar besökare om företagets tjänster, personal och kontaktvägar.",
    "image": "/Image/mockup-ledningsteknik.jpg",
    "alt": "Ledningsteknik AB",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://ledningsteknik.vercel.app/",
    "codeLink": "https://github.com/knixan/ledningsteknik"
  },
   {
    "title": "BlogPropP",
    "description": "Detta är ett bloggprojekt byggt med Next.js App Router, Prisma ORM, PostgreSQL och Better Auth. ",
    "image": "/Image/mockup-blogpropp.jpg",
    "alt": "BlogPropP",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, Prisma, PostgreSQL, Better Auth",
    "codeLink": "https://github.com/knixan/blogpropp"
  }, 

      {
    "title": "Jonny Eriksson - Kosnstnär",
    "description": "Hemsida för konstnären Jonny Eriksson. En enkel och stilren portfoliohemsida för att visa upp hans konstverk och kontaktinformation.",
    "image": "/Image/mockup-jonnyeriksson.png",
    "alt": "Jonny Eriksson - Kosnstnär",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://jonnyeriksson.vercel.app/",
    "codeLink": "https://github.com/knixan/jonnyeriksson-ART"
  },
   
    {
    "title": "Skeninge VVS AB",
    "description": "Hemsida för Skeninge VVS AB i Skänninge. Gullig och personlig hemsida för ett litet familjeföretag som jobbar med VVS-tjänster. Hemsidan är responsiv och mobilanpassad, vilket gör den lätt att använda på alla enheter.",
    "image": "/Image/mockup-skeningevvsab.jpg",
    "alt": "Skeninge VVS AB",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://skeningevvs.se/",
    "codeLink": "https://github.com/knixan/skeningevvsab"
  },
  {
    "title": "Memory för plugg",
    "description": "Detta spel är utvecklat med pedagogisk medvetenhet för att hjälpa barn och ungdomar med särskilda behov att: - Memorera historiska fakta på ett visuellt och engagerande sätt - Förbereda sig inför prov",
    "image": "/Image/memoryforstuddies.png",
    "alt": "Memory for Studdy",
    "tech": "React Next js, Typescript, Tailwind",
     "projectLink": "https://memoryforplugg.vercel.app/",
    "codeLink": "https://github.com/knixan/memory-for-studdy"
  },
  {
    "title": "Mammas Väder",
    "description": "Mammas Väderapp är en väderwebb som ger personliga och konkreta råd från mamma om vad barnen ska ha på sig beroende på vädret. Det är som att alltid ha en omtänksam förälder i fickan som säger 'Ta på dig mössa!' när det snöar eller 'Glöm inte vatten!' när solen gassar.",
    "image": "/Image/mockup-mammas.jpg",
    "alt": "Mammas Väder",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, OpenWeatherMap API",
    "projectLink": "https://mammasvader.vercel.app/",
    "codeLink": "https://github.com/knixan/mammasvader"
  },
 
  

  {
    "title": "Todo Webapplikation",
    "description": "En modern Todo app. Skapa, läs, uppdatera och ta bort. Ljust/mörkt läge.",
    "image": "/Image/mockup-todoprisma.jpg",
    "alt": "Todo-prisma",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, Prisma, PostgreSQL",
    "codeLink": "https://github.com/knixan/todoprisma"
  }
]
