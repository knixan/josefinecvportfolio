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
    title: "Fakey Nails",
    description: "Hemsida och bokning för en nagelsalong.",
    image: "/Image/mockupbilder/fakeynails.jpg",
    alt: "Kod och Design",
    tech: "React, Next.js, Sanity CMS, TypeScript, TailwindCSS, Shadcn, Nodmailer",
    projectLink: "https://fakey-nails.vercel.app/"
  },

  {
    "title": "B-Movies",
    "description": "Webbutik för B-movies",
    "image": "/Image/mockup-bmovies.jpg",
    "alt": "B-movies",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth, API",
    "codeLink": "https://github.com/knixan/b-movies"
  },

    {
    "title": "Dagens Dons",
    "description": "Nyhetssida",
    "image": "/Image/mockupbilder/dagensdos.jpg",
    "alt": "Dagens Dos",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma, Zod, BetterAuth",
    "codeLink": "https://github.com/knixan/dagens-dos"
  },
       {
    "title": "Motionzone i Växjö",
    "description": "En hemsida för en dansstudi i Växjö.",
    "image": "/Image/mockupbilder/motionzone.jpg",
    "alt": "Motionzone i Växjö",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, PostgreSQL, Prisma",
    "projectLink": "https://dev.motionzoneworld.com/",
    "codeLink": "https://github.com/motionzoneproject/motionzoneproject"
  },
  {
    "title": "Kläder efter väder",
    "description": "En väderapplikation som ger kommentarer och visar bilder klädförslag beroende på vädret. ",
    "image": "/Image/mockupbilder/vaderefterklader.jpg",
    "alt": "Väder efter kläder",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, OpenWeatherMap API",
    "projectLink": "https://vaderefterklader.se",
    "codeLink": "https://github.com/knixan/vaderefterklader"
  },
      {
    "title": "Skeninge VVS AB",
    "description": "Hemsida för Skeninge VVS AB i Skänninge. ",
    "image": "/Image/mockupbilder/skenningevvs.jpg",
    "alt": "Skeninge VVS AB",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://skeningevvs.se/",
    "codeLink": "https://github.com/knixan/skeningevvsab"
  },
 {
    "title": "Väderskuggan",
    "description": "Väderapplikation som ger lite sakastiska kommentarer beroende på vädret.",
    "image": "/Image/mockup-vaderskuggan.png",
    "alt": "Väderskuggan",
    "tech": "React, Next.js, TypeScript, Tailwind CSS, API",
    "projectLink": "https://vaderskuggan.vercel.app/",
    "codeLink": "https://github.com/knixan/vaderskuggan"
  },

   {
    "title": "Studenthubben",
    "description": "Frontend-sida för att demonstrera ett studentnätverk",
    "image": "/Image/mockup-studenthubben.png",
    "alt": "Studenthubben",
    "tech": "React, Next.js, TypeScript, Material UI",
    "projectLink": "https://studenthubben-six.vercel.app/",
    "codeLink": "https://github.com/knixan/studenthubben"
  },

 {
    "title": "Sweettime-UF",
    "description": "Hemsida för offerter åt UF-företaget Sweettime-UF, ",
    "image": "/Image/mockup-sweettime-uf.png",
    "alt": "Sweettime-UF",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://sweettime-uf.se/",
    "codeLink": "https://github.com/Ludde2525/sweettime/tree/main"
  },
   
 {
    "title": "Gammel Byggnadsmåleri",
    "description": "Hemsida för ett företag som jobbar med traditionellt måleri och byggnadsvård",
    "image": "/Image/mockupbilder/gammelbygg-mockup.jpg",
    "alt": "Gammelbyggnads måleri",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://gammelbyggnadsmaleri.vercel.app/",
    "codeLink": "https://github.com/knixan/gammelbyggnadsmaleri"
  },
  {
    "title": "Ledningsteknik AB",
    "description": "En uppdaterad hemsida åt Leningsteknik AB",
    "image": "/Image/mockupbilder/ledningsteknink-mockup.jpg",
    "alt": "Ledningsteknik AB",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://ledningsteknik.vercel.app/",
    "codeLink": "https://github.com/knixan/ledningsteknik"
  },


  //  {
  //   "title": "BlogPropP",
  //   "description": "Detta är ett bloggprojekt byggt med Next.js App Router, Prisma ORM, PostgreSQL och Better Auth. ",
  //   "image": "/Image/mockup-blogpropp.jpg",
  //   "alt": "BlogPropP",
  //   "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, Prisma, PostgreSQL, Better Auth",
  //   "codeLink": "https://github.com/knixan/blogpropp"
  // }, 
 

      {
    "title": "Jonny Eriksson - Kosnstnär",
    "description": "Konstnärsportfolio",
    "image": "/Image/mockupbilder/jonnyeriksson-mockup.jpg",
    "alt": "Jonny Eriksson - Kosnstnär",
    "tech": "React, Next.js, TypeScript, Tailwind CSS",
    "projectLink": "https://jonnyeriksson.vercel.app/",
    "codeLink": "https://github.com/knixan/jonnyeriksson-ART"
  },
   

  // {
  //   "title": "Memory för plugg",
  //   "description": "Detta spel är utvecklat med pedagogisk medvetenhet för att hjälpa barn och ungdomar med särskilda behov att: - Memorera historiska fakta på ett visuellt och engagerande sätt - Förbereda sig inför prov",
  //   "image": "/Image/memoryforstuddies.png",
  //   "alt": "Memory for Studdy",
  //   "tech": "React Next js, Typescript, Tailwind",
  //    "projectLink": "https://memoryforplugg.vercel.app/",
  //   "codeLink": "https://github.com/knixan/memory-for-studdy"
  // },

 
  

  // {
  //   "title": "Todo Webapplikation",
  //   "description": "En modern Todo app. Skapa, läs, uppdatera och ta bort. Ljust/mörkt läge.",
  //   "image": "/Image/mockup-todoprisma.jpg",
  //   "alt": "Todo-prisma",
  //   "tech": "React, Next.js, TypeScript, Tailwind CSS, Shadcn, Prisma, PostgreSQL",
  //   "codeLink": "https://github.com/knixan/todoprisma"
  // }
]
