import rapidfireQuizImage from "../assets/RapidFire Quiz.png";
import PT1 from "../assets/PT 1.png";
import PT2 from "../assets/PT 2.png";
import PT3 from "../assets/PT 3.png";
import alienGame from "../assets/alien-game.mp4";
import PSM from "../assets/certificates/PSM.png";
import WCAG from "../assets/certificates/WCAG.png";
import D3 from "../assets/certificates/D3JS.png";
import Leadership from "../assets/certificates/Practical Leadership skills.png";
import ReactAccessibility from "../assets/certificates/React Accessibility.png";
import ReactTesting from "../assets/certificates/React Testing Library.png";
import Agile from "../assets/certificates/agile fundamentals.jpg";

export const projectsData = [
  {
    id: 1,
    title: "RapidFire Quiz",
    image: rapidfireQuizImage,
    link: "https://rapidfire-quiz.vercel.app/",
    description:
      "This app is designed to help candidates revise interview questions and sharpen their quick-thinking skills. It simulates the experience of a real interviews, helping them to get interview-ready with rapid-fire questions!",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vitest"],
  },
  {
    id: 2,
    title: "Pogress Tracker",
    image: [PT1, PT2, PT3],
    link: "",
    description:
      "The purpose of this application is to assist aspiring candidates in tracking the problems they solve while preparing for interviews. The application comprises three main components:",

    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Hook Form",
      "D3.js",
      "Tanstack Table",
      "Shadcn",
      "Zod",
      "Yup",
    ],
  },
  {
    id: 3,
    title: "Alien Invasion",
    image: rapidfireQuizImage,
    videoLink: alienGame,
    link: "",
    description:
      "This is a game from the book Python Crash Course. It is built using Python and Pygame, the game features responsive controls and dynamic animations. It showcases key programming concepts like object-oriented design, collision detection, and game loop mechanics.",
    tags: ["Python", "Pygame"],
  },
];

export const expData = [
  {
    id: 1,
    companyName: "Publicis Sapient",
    projectName: "Cargill",
    time: "JUNE - NOV 2023",
    description:
      "Implemented a multi-form structure for Cargill's Live Animal Procurement project, saving 60% of the time required for data entry. Utilized React, Context API, and a custom component library, alongside Azure DevOps, SonarQube, Vela, and GitHub to drive efficient and high-quality project development and deployment.",
    tags: ["React", "Azure DevOps", "SonarQube", "Vela"],
  },
  {
    id: 2,
    companyName: "ThinkJS",
    projectName: "Embibe | Emtap",
    time: "SEPTEMBER 2020 - APRIL 2023",
    description:
      "Led the frontend development of a high-impact marketing tool application as the project owner and developer. Developed a comprehensive marketing tool supporting email, WhatsApp, push notifications, and SMS campaigns, enhancing multi-channel communication and engagement. This application eliminated the cost of external marketing tools, resulting in 100% cost savings for the organization.",
    tags: ["React", "Redux Toolkit", "TypeScript", "Material UI"],
  },
  {
    id: 3,
    companyName: "ThinkJS",
    projectName: "Embibe | Student App",
    time: "SEPTEMBER 2020 - APRIL 2023",
    description:
      "Contributed to the core frontend revamp team for the Embibe platform, building a modern and interactive education platform. Utilized React and Redux while integrating Google Analytics and Google Tag Manager to monitor user click data effectively. The rebuilt website improved user experience, boosting student engagement by 80%.",
    tags: ["React", "Redux", "React Charts", "Google Analytics"],
  },
  {
    id: 4,
    companyName: "ThinkJS",
    projectName: "Legal Desk - SRL Diagnostic Franchisee Onboarding",
    time: "SEPTEMBER 2020 - APRIL 2023",
    description:
      "Created an interactive dynamic form utilizing React components, integrating drag-and-drop functionality using react-dropzone for enhanced user interaction. Managed and mentored a team of 3, providing guidance and ensuring successful project execution.",
    tags: ["React", "Redux", "React Dropzone"],
  },
  {
    id: 5,
    companyName: "Krazybee",
    projectName: "Customer Support Admin Panel",
    time: "JUNE 2019 - MARCH 2020",
    description:
      "Created customer support admin panel dashboard website using React, streamlining support management and improving user interactions. Led various research initiatives focused on integrating emerging technologies such as Svelte, Flutter, and Micro-frontend concepts, fostering exploration and experimentation for futureforward development strategies.",
    tags: ["React", "Redux"],
  },
];

export const certificationData = [
  {
    id: 1,
    titile: "Professional Scrum Master™ I (PSM I)",
    link: PSM,
  },
  {
    id: 2,
    titile: "Introduction to Web Accessibility by eDX",
    link: WCAG,
  },
  {
    id: 3,
    titile: "Leadership: Practical Leadership Skills",
    link: Leadership,
  },
  {
    id: 4,
    titile: "D3JS",
    link: D3,
  },
  {
    id: 5,
    titile: "React: Accessibility",
    link: ReactAccessibility,
  },
  {
    id: 6,
    titile: "React Testing Library and Jest",
    link: ReactTesting,
  },
  {
    id: 7,
    titile: "Agile Fundamentals",
    link: Agile,
  },
];
