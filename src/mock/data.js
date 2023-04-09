import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Charlie Malave - Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Charlie!',
  subtitle: "I'm a Software Engineer",
  cta: 'More Info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `My name is Charlie. I'm a software engineer, audio engineer and soon to be father.`,
  paragraphTwo: 'See About.jsx line 44',
  // paragraphThree: `I'm passionate about connecting with like minded individuals to build communities centered around creating awesome projects! My interests include exploring my creativity through music, video and programming.  Let's connect and create something awesome!`,
  paragraphThree: `I'm experienced in building elegant user-facing applications while leveraging multiple tech stacks, leading SCRUM practices, and honoring essential UX/UI design principles. As a musician and creative, I've had my hand in multiple projects that have enabled me to become a jack of all trades while working in multiple industries. Let's connect and create something awesome.`,
  resume: 'https://docs.google.com/document/d/1g6pfwE-_47SIXdmBSBa_j-PNE3t7qF5-o0JbIkoWdwE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'image5.png',
    title: 'RediQLess',
    info: `One part Redis, one part GraphQL, this is RediQLess - a caching tool for APIs in the form of a lightweight NPM Package. Utilizing GraphQL’s efficient and elegant querying language and Redis’ lightweight caching, we've leveraged these two features to generate a cache of API results. Built for developers, by developers, to facilitate lightweight and performant applications.`,
    info2: `Leveraging GraphQL’s declarative query language and strongly typed API with Redis’ inimitable caching mechanism, RediQLess caches unique calls to third-party APIs for ultimate comportability and maximum reusability. RediQLess’ cache functions as a replacement for the API, which can be memory-intensive on the client and server side.`,
    url: 'https://www.rediqless.com/',
    repo: 'https://github.com/oslabs-beta/rediQLess', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'image1.png',
    title: 'Locals-Only',
    info: `An application on the web that allows a user to support local businesses wherever they are. The application uses front end technologies such as React, MaterialUI, and the Google Maps API. The backend uses express, PostreSQL, and bcrypt. This was a team project using the SCRUM method that held daily standups and sprint discussions. Click source code to view the repository and view the README for a more detailed view of the code and thought process.`,
    info2: '',
    url: '',
    repo: 'https://github.com/GoblinShark2021/Locals-Only', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'image2.png',
    title: 'Next/Room',
    info: `A service to help those who want to work from home, in another home. This application enables users to find office spaces to rent out during a typical 9-5 work day. Users can also list their own space to rent if they choose to! The application uses front end technologies such as React, MaterialUI, and Leaflet.JS in combination with the Google Maps API. This project was initially built on the MERN stack, but ultimitely our team decided a relational database would be more efficient for this project. I rebuilt the backend to implement a PostgreSQL database to have relational data stored while maintaining ACID compliance with strict schemas. I also implemented Bcrypt and JWT's for authentication and authorization benefits.`,
    info2: ``,
    url: '',
    repo: 'https://github.com/teamShapeUps/NextRoom', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'image3.png',
    title: 'Trakr',
    info: `A minimal Fitness Tracker to track calories, distances, and calories burned. This application was built from scratch using the MERN Technology Stack. Mongo DB was utilized by way of effectively setting up Schema’s which made it easier to implement the CRUD functionality. React was used to maximize components’ modularity and maintainability by separating stateful and presentational components in an SPA. I also leveraged Material-UI to efficiently develop the UX/UI of the front-end. I built my own front-end design system by implementing Material UI styled components and React hook tools.`,
    info2: '',
    url: '',
    repo: 'https://github.com/cmalave13/trakr', // if no repo, the button will not show up
  },
];
// PROJECTS DATA
export const podcastData = [
  {
    id: nanoid(),
    img: 'java.jpeg',
    title: 'JavaUnscripted',
    info: `A podcast that talks about the journey we take to learn to code, to become proficient, and the challenges we face. Not strictly a podcast about tech but also about our life experiences and the experiences of our guests.`,
    url: 'https://anchor.fm/javaunscripted',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together? Great!',
  btn: `Lets connect!`,
  email: 'malavecharles@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/maxxatlast',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charlesmalave/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cmalave13',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
