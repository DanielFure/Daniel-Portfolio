import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Daniel de Linos",
  role: "Technical Game Designer",
  introduction: "Contact: danieldelinosgarcia@gmail.com",
  description: " Highly passionate Game Designer with a focus on creativity and innovative gameplay mechanics, having won several creativity related video game and gamejam awards. Very knowledgeable in different areas of video game development, making working with other departments easier and more productive. ",
  image: `${process.env.PUBLIC_URL}/images/Profile.png`,
  cvUri: `${process.env.PUBLIC_URL}/files/Daniel de Linos - Technical Game Designer - CV.pdf`,
  links: {
    github: "https://github.com/ddelinosgarciaMM2021",
    itchIO: "https://fure4.itch.io",
    linkedIn: "https://www.linkedin.com/in/daniel-de-linos",
    
  }
};

export const games: Game[] = [
  {
    name: "Midnight Snack",
    description: "A short and surreal first-person horror game where you wander through an eerie forest using the dials of a microwave.",
    genres: ["Horror", "Surreal", "Alternative Controls"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://jaime-hernandez.itch.io/midnight-snack" },
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
    description: "A cozy game about exploring an alien planet and its ecosystems and creatures.",
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
    genres: ["Newsgame", "Dating sim", "Comedy"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/crabfinder" },
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
    genres: ["Metroidvania", "Horror", "2D Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/beacon" },
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
    genres: ["Escape Room", "Puzzle", "Mystery"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://fure4.itch.io/readme" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];
