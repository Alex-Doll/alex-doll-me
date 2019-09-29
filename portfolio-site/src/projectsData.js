import rickPic from './Images/rick-morty.png';
import fallingStars from './Images/falling-stars.png';
import canvasCreations from './Images/canvas-creations.png';
import yelpCamp from './Images/yelp-camp.png';
import warbler from './Images/warbler.png';
import roscoGames from './Images/rosco-games.png';

const projectsData = [
  {
    imgSrc: rickPic,
    title: 'Rick and Morty Soundboard',
    description: 'Playback your favorite quotes from the hit TV show "Rick and Morty"',
    linkTo: 'https://rick-morty-soundboard.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'React', 'Audio']
  },
  {
    imgSrc: fallingStars,
    title: 'Falling Stars',
    description: 'This simple game built in the Phaser JavaScript game engine is simple to play but hard to master',
    linkTo: 'https://play-falling-stars.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'Node', 'Game']
  },
  {
    imgSrc: canvasCreations,
    title: 'Canvas Creations',
    description: 'Check out some of the coolest creations on the internet using the HTML 5 canvas element or post your own!',
    linkTo: 'https://canvas-creations.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'Node', 'Express', 'Mongo', 'Rest', 'Auth']
  },
  {
    imgSrc: yelpCamp,
    title: 'YelpCamp',
    description: 'This "Yelp!" clone will help you find the best campgrounds around.',
    linkTo: 'https://yelp-camp-1010.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'Node', 'Express', 'Mongo', 'Rest', 'Auth']
  },
  {
    imgSrc: warbler,
    title: 'Warbler',
    description: 'Want to see a basic clone of Twitter? Then Warbler is the web app for you!',
    linkTo: 'https://warbler-1010.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'React', 'Node', 'Express', 'Mongo', 'Rest', 'Auth']
  },
  {
    imgSrc: roscoGames,
    title: 'Rosco1010',
    description: 'Here you go, a bunch of JavaScript games written from the ground up. No engines included!',
    linkTo: 'https://warbler-1010.herokuapp.com/',
    technologiesUsed: ['JavaScript', 'Game']
  }
];

export default projectsData;