import TboAfpa from '../../media/tboafpa.JPG'
import Normandy from '../../media/moi.jpg'
import Student from '../../media/student.jpg'
import Business from '../../media/business.jpg'
import More from '../../media/more.jpg'

const items = [
    {
        title: "Who am I",
      cardTitle: "Thibaud Robillard",
      cardSubtitle:"Born the 5th February 1989",
      cardDetailedText: "I am a French man and I have lived abroad half of my life (South Korea, Japan, Thailand and Island).",
      media: {
        type: "IMAGE",
        source: {
          url: Normandy
        }
      }
    },
    {
        title: "Studies",
      cardTitle: "Science, Business and Korean",
      cardSubtitle:"From France to South Korea",
      cardDetailedText: "I have been doing all my scholarship in Rouen (France), until my University I have decided to move by myself to Seoul (South Korea). In High School I am gratuated in Science and in University I am graduated from Korean Language from Yonsei University in Seoul and from Technical Sales in Rouen University. ",
      media: {
        type: "IMAGE",
        source: {
          url: Student
        }
      }
    },
    {
        title: "Working Life",
      cardTitle: "Sales",
      cardSubtitle:"France/Korea/Thailand",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: Business
        }
      }
    },
    {
      title: "Becoming a Web Developer",
    cardTitle: "AFPA Course",
    cardSubtitle:"Starting my Web Developper formatiom",
    cardDetailedText: "6months of class and 2 months internship to learn Back-end and Front-end",
    media: {
      type: "IMAGE",
      source: {
        url: TboAfpa
      }
    }
  },
    {
        title: "More About Me",
      cardTitle: "South Korea",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: More
        }
      }
    }
    
]

export default items