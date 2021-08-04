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
  name: 'Charlie',
  subtitle: "I'm a Full-stack Software Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I am Software Engineer, experienced in building applications with JavaScript, React, Express, Node.js, PostgreSQL, and MongoDB.`,
  paragraphTwo: `I'm also a podcast host for JavaUnscripted, which explores the journey of software development. Working on various projects over the years has allowed me to become a jack of all trades while working in multiple industries!`,
  paragraphThree: `My interests include exploring my creativity through music, video and programming.  Let's connect and create something awesome!`,
  resume: 'https://drive.google.com/file/d/1-5j5DRy8BJ7AKj1_JOnzoj02yxjax0p4/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
    info: `A service to help those who want to work from home, in another home. This application enables users to find office spaces to rent out during a typical 9-5 work day. Users can also list their own space to rent if they choose to! The application uses front end technologies such as React, MaterialUI, and Leaflet.JS in combination with the Google Maps API. This project was initially built on the MERN stack, but ultimitely our team decided a relational database would be more efficient for this project. I rebuilt the backend to implement a PostgreSQL database to have relational data stored and accessible and also meet ACID compliance with strict schemas. I also implemented Bcrypt and JWT's for authentication and authorization benefits. JWT's made it so the client themselves would have info about the user and the server would not have to query the database to authenticate any request.`,
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
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
