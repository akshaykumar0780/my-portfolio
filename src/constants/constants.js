import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hcltech,
  chatapp,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "HCLTech",
    icon: hcltech,
    iconBg: "#3544cc",
    date: "Jan 2022 - Present",
    points: [
      "Developed and maintained scalable, responsive web applications using React.js, ensuring seamless user experiences across devices.",
      "Integrated RESTful APIs and WebSockets to enable real-time data interaction and dynamic updates in web applications.",
      "Migrated legacy projects to React.js, improving performance, scalability, and maintainability.",
      "Collaborated with designers and backend developers to create user-friendly interfaces and seamless integrations.",
    ],
  },
  {
    title: "MERN-Stack Developer",
    company_name: "HCLTech",
    icon: hcltech,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Designed and developed scalable, high-performance backend services and APIs using Node.js and Express.js.",
      "Designed and optimized database schemas with MongoDB and Mongoose, ensuring efficient data storage and retrieval.",
      "Integrated authentication and authorization mechanisms using JWT to ensure secure data access.",
      "Built RESTful APIs and integrated third-party services to enable seamless communication between client and server.",
    ],
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "MERN Chat App is a real-time messaging application built using the MERN stack. It allows users to communicate seamlessly through direct messages or group chats. The app is designed to provide an intuitive and responsive user experience while ensuring efficient and secure data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/akshaykumar0780/mern-chat-app",
  },
  {
    name: "Netflix GPT",
    description:
      "Netflix GPT is a responsive movie recommendation platform built with React.js that uses the Gemini API to provide intelligent search results. The application allows users to search for movies by genre, title, or mood (e.g., comedy movies) and dynamically displays a list of relevant movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/akshaykumar0780/netflix-gpt",
  },
];

export { services, technologies, experiences, projects };
