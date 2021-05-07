import tdg from "../../media/tdg.jpg";
import bank from "../../media/bank.jpg";
import gaming from "../../media/gaming.jpg";
import swapi from "../../media/swapi.jpg";







const stockData = [
    {
        Project: "Terre de Geek",
      Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>],
      Time:"Project after 3 weeks",
      Detail: "First production with AFPA to learn HTML and CSS",
      media: tdg,
      link : 'https://github.com/trobillard/terredegeek',
      website:'https://trobillard.github.io/terredegeek/',
    },
    {
      Project: "TㅆB Bank",
    Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-nodejs"></ion-icon>],
    Time:"Project after 4 weeks",
    Detail: "Project to learn how to compil Bootstrap with HTML and CSS",
    media: bank,
      link : 'https://github.com/trobillard/T-BBank',
      website:'https://trobillard.github.io/T-BBank/',
  },
  {
    Project: "Taishibo Gaming",
  Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-nodejs"></ion-icon>],
  Time:"Project after 6 weeks",
  Detail: "This project compli the 2 first project we made in JS aka Rock/Paper/Scissors, Hangman and Memory Game. I have decided to make a full website to introduce all those little project ine one bigger one",
  media: gaming,
      link : 'https://github.com/trobillard/Pairsgames',
      website:'https://trobillard.github.io/Pairsgames/',
},
{
  Project: "SWAPI",
Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-nodejs"></ion-icon>,<ion-icon name="logo-react"></ion-icon>],
Time:"Project 10",
Detail: "First project using reactjs",
media: swapi,
      link : 'https://github.com/trobillard/reactjsstarwars',
      website:'https://trobillard.github.io/reactjsstarwars/',
},
]

export default stockData