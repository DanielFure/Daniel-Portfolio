import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Daniel de Linos",
  role: "Technical Game Designer",
  introduction: "Technical Game Designer | Producer | Generalist Game Developer | Contact: danieldelinosgarcia@gmail.com",
  description: " Highly passionate Game Designer with a focus on creativity and innovative gameplay mechanics, having won several creativity related video game and gamejam awards. Very knowledgeable in different areas of video game development, making working with other departments easier and more productive. ",
  image: `${process.env.PUBLIC_URL}/images/Profile.png`,
  cvUri: `${process.env.PUBLIC_URL}/files/Daniel de Linos - Technical Game Designer - CV.pdf`,
  links: {
    itchIO: "https://fure4.itch.io",
    linkedIn: "https://www.linkedin.com/in/daniel-de-linos",
    
  }
};

export const games: Game[] = [
  {
    name: "Midnight Snack",
    description: `A surreal horror game with microwave controls, published on Steam with thousands of downloads, very positive reviews, and viral exposure on Reddit, BlueSky, and YouTube.`,
    inChargeOf: ["Game Design", "Level Design", "Production", "Marketing", "Pixel art", "Texturing"],
    genres: ["Horror", "Surreal", "Alternative Controls"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://jaime-hernandez.itch.io/midnight-snack" },
      { source: LinkImageSource.steam, url: "https://store.steampowered.com/app/3363200/Midnight_Snack/" },
      { source: LinkImageSource.twitter, url: "https://x.com/MidnightSnackTG" },
      
    ],
    media: [
      { source: "/images/games/Midnight Snack/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=SKZzzzW-5VQ", type: MediaType.YouTube },
      { source: "/images/games/Midnight Snack/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Midnight Snack/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Midnight Snack/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Unannounced Project",
    description: "A cozy game about exploring an alien planet and cataloguing its ecosystems and creatures.",
    inChargeOf: ["Game Design", "Worldbuilding", "Writing", "Prototyping", "Animation"],
    genres: ["Exploration", "Flying", "Cozy"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/Unannounced Project/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Unannounced Project/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Unannounced Project/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Unannounced Project/Screenshot_4.png", type: MediaType.Image },
    ],
  },
   {
    name: "El Desván de la Bur-Bruja",
    description: "An asymmetrical co-op game in which you'll have to prepare strange dishes in a dungeon using a Dance Pad and a PDF.",
    inChargeOf: ["Game Design", "Level Design", "Texturing"],
    genres: ["Co-op", "Dungeon Crawler", "Alternative Controls"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://chusky8.itch.io/bur-bruja" },
    ],
    media: [
      { source: "/images/games/El Desván de la Bur-Bruja/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=0MmbTIA5VBk", type: MediaType.YouTube },
      { source: "/images/games/El Desván de la Bur-Bruja/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/El Desván de la Bur-Bruja/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/El Desván de la Bur-Bruja/Screenshot_4.png", type: MediaType.Image },
    ],
  },
   {
    name: "Crabfinder",
    description: "A Newsgame for mobile devices about a hermit crab dating app. Focused on how pollution affects hermit crab's enviroment and behaviour.",
    inChargeOf: ["Game Design", "Writing", "Marketing"],
    genres: ["Newsgame", "Dating sim", "Comedy"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/crabfinder" },
      { source: LinkImageSource.twitter, url: "https://x.com/crabfindergame" },
    ],
    media: [
      { source: "/images/games/Crabfinder/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Crabfinder/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Crabfinder/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Crabfinder/Screenshot_4.png", type: MediaType.Image },
    ],
  },
   {
    name: "Beacon",
    description: "A horror metroidvania in wich you descend a mysterious lighthouse in search of your dead daughter, only equipped with a flashlight.",
    inChargeOf: ["Game Design", "Level Design", "Narrative Design", "Writing", "Additional Programming", "Marketing"],
    genres: ["Metroidvania", "Horror", "2D Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/beacon" },
      { source: LinkImageSource.twitter, url: "https://x.com/Beacon_GameDev" },
    ],
    media: [
      { source: "/images/games/Beacon/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=l6u_QC_Xqmk", type: MediaType.YouTube },
      { source: "/images/games/Beacon/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Beacon/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Beacon/Screenshot_4.png", type: MediaType.Image },
    ],
  },
   {
    name: "README",
    description: "An escape room-type game where you complete puzzles with the help of a mysterious computer.",
    inChargeOf: ["Game Design", "Puzzle Design", "Narrative Design", "Pixel Art"],
    genres: ["Escape Room", "Puzzle", "Mystery"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/readme" },
    ],
    media: [
      { source: "/images/games/README/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/README/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/README/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/README/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];
