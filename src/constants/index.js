import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Third Culture Apparel",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2019 - Present",
    points: [
      "Co-founded a growing clothing and lifestyle brand with an international cultural experience at its core.",
      "Collaborated with a team of designers, brand managers, and videographers to create and launch fall/winter collections and marketing materials.",
    ],
  },
  {
    title: "Junior Project Manager Co-Op",
    company_name: "Crosslinx Transit Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Aug 2020",
    points: [
      "Collaborated cross-functionally with project managers and department heads to identify risks and establish contingency plans.",
      "Kept track of new vendors and identi ed a cost-cutting strategy, saving the FLOCT (Fiber, Lighting, OCS, Cable, and Trackwork) installation team $12,000.",
      "Forecasted and presented COVID-19 impact logs, allowing managers to make calculated decisions on a $9 billion commuter transit project.",
    ],
  },
  {
    title: "Engineer in Training/Systems Project Coordinator",
    company_name: "Dragados",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2021 - June 2022",
    points: [
      "Led weekly production and operations contractor meetings to develop and maintain a strategic program roadmap and help resolve critical deficiencies, improving productivity by 20%.",
      "Improved the cost tracking and progress reporting process by developing creative data retrieval and reporting tools to reflect project performance metrics.",
      "Achieved a $250,000 cost reduction for Traction Power Substation delivery by negotiating changes in design with civil designers and the City of Toronto representatives.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company_name: "ELEAT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Collaborated with a team of developers to create a scalable dining application with contactless dining experience..",
      "Translated business requirements into technical solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
