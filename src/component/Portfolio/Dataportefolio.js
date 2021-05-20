import tdg from "../../media/tdg.jpg";
import bank from "../../media/bank.jpg";
import gaming from "../../media/gaming.jpg";
import swapi from "../../media/swapi.jpg";
import healcerion from '../../media/healcerion.jpg';
import cd from '../../media/cd.jpg';
import immo from '../../media/norimmo.jpg';







const stockData = [
    {
        Project: "Terre de Geek",
      Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>],
      Time:"Project after 4 weeks learning Code",
      Detail: "In this project the goal was to make a responsive website using only HTML and CSS.",
      media: tdg,
      link : 'https://github.com/trobillard/terredegeek',
      website:'https://trobillard.github.io/terredegeek/',
    },
    {
      Project: "NorImmo",
    Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-javascript"></ion-icon>],
    Time:"Project after 6 weeks learning Code",
    Detail: "Learning the DOM, doing a website with some bootstrap but mostly only JS/HTML/CSS",
    media: immo,
      link : 'https://github.com/trobillard/Norimmo',
      website:'https://trobillard.github.io/Norimmo/',
  },
  {
    Project: "TㅆB Bank",
  Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-javascript"></ion-icon>],
  Time:"Project after 7 weeks learning Code",
  Detail: "Learning the API. I have decided to do a Korean look a like Banking website.",
  media: bank,
    link : 'https://github.com/trobillard/T-BBank',
    website:'https://trobillard.github.io/T-BBank/',
},
  {
    Project: "Taishibo Gaming",
  Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-javascript"></ion-icon>],
  Time:"Project after 8 weeks learning Code",
  Detail: "What about do a full oldschool Gaming website ? Using 3 projects we made to finaly have only 1 website. ",
  media: gaming,
      link : 'https://github.com/trobillard/Pairsgames',
      website:'https://trobillard.github.io/Pairsgames/',
},
{
  Project: "SWAPI",
Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-javascript"></ion-icon>,<ion-icon name="logo-nodejs"></ion-icon>,<ion-icon name="logo-react"></ion-icon>],
Time:"Project after 10 weeks learning Code",
Detail: "API and ReactJS for this project, with SWAPI.",
media: swapi,
      link : 'https://github.com/trobillard/reactjsstarwars',
      website:'https://trobillard.github.io/reactjsstarwars/',
},
{
  Project: "TㅆB Bank",
    Language: [<ion-icon name="logo-html5"></ion-icon>,<ion-icon name="logo-css3"></ion-icon>,<ion-icon name="logo-javascript"></ion-icon>,<ion-icon name="logo-nodejs"></ion-icon>,<ion-icon name="code-slash-outline"></ion-icon>],
    Time:"Project after 12 weeks learning Code",
    Detail: "Learning PHP, convert my Korean bank website into PHP",
    media: bank,
      link : 'https://github.com/trobillard/T-BBank-PHP',
      website:'https://github.com/trobillard/T-BBank-PHP',
  },
{
Project: "Cryo Diffusion",
Language: [<ion-icon name="logo-wordpress"></ion-icon>],
Time:"Website for CryoDiffusion",
Detail: "First website I have ever made under Joomla.",
media: cd,
      link : 'https://www.cryodiffusion.com/',
      website:'https://www.cryodiffusion.com/',
},
{
Project: "Healcerion",
Language: [<ion-icon name="logo-wordpress"></ion-icon>],
Time:"Website for Healcerion",
Detail: "Second website under Wordpress.",
media: healcerion,
      link : 'https://www.healcerion.com/main',
      website:'https://www.healcerion.com/main',
}
]

export default stockData