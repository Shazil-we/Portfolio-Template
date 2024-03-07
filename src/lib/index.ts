interface project{
  src:string,
  name:string,
  languages:string,
  description:string,
  github:string
}
export const ProjectsItems:project[] = [
  {
    src:"/assets/Adventure.jpg",
    name: "Adventure Game",
    languages: "Typescript",
    description: "A CLI Based Adventure Game. Survive in the dungeon for as long as possible while fighting mobs",
    github: "https://github.com/Shazil-we/Adventure_game"
  },
  {
    src:"/assets/Pokemon.png",
    name: "Pokemon Guesser",
    languages: "Typescript - Javascript",
    description: "A remake of the famous game Akinator but for Pokemon! This CLI game will guess any Pokemon you can think of.",
   
    github: "https://github.com/Shazil-we/Pokemon-Guesser"
  },
  {
    src:"/assets/Wordle.jpg",
    name:"Worldle",
    languages:"Typescript",
    description: "A clone of the very popular Web Game WORDLE but for you CLI. Try and guess the Word Of The Day in 5 trys!!!",
    github: "https://github.com/Shazil-we/Wordle-Clone"
  },
  {
    src:"/assets/portfolio.png",
    name:"Portfolio",
    languages:"Typescript - NextJS - Tailwind CSS - ShadCN - Framer ",
    description: "A Portfolio mock-up. The Website you are currently on!!! Using libraries like Tailwind, ShadCN and Framer.",
    github: "https://github.com/Shazil-we/Portfolio-Mock"
  },
]
