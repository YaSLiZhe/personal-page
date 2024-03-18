// projectsData.js
import project1 from "../images/project1.png";
import project1Thumbnail from "../images/projectThumbnail/project1.png";
import project2 from "../images/project2.png";

const projectsData = [
  {
    id: 1,
    name: "Travel Booking Website - Natours",
    description:
      "A Tour booking Website with Stripe integration, email notifications, JWT cookies authorization, and it's built with technologies like Express, Node.js, MongoDB, and Stripe, deployable on Heroku.",
    highlight: [
      "Developed a robust REST API following the CRUD approach using Javascript(Node.js, Express), implemented responsive user interface using HTML/CSS (Pug). MongoDB and Mongoose for efficient data management.",
      "Implemented features including JWT-based login system with Nodemailer for secure authentication, Mapbox API for interactive tour location displays, and Stripe API for transaction processing.",
      "Conducted API validation through Postman and deployed on Heroku with CI/CD pipeline.",
    ],
    videoThumbnail: project1Thumbnail,
    videoUrl: "https://www.youtube.com/watch?v=O5cmLDVTgAs&t=10344s",
    imageSrc: project1,
    technologies: ["React", "Node.js", "Express"],
    githubLink: "https://github.com/luomi16/Natours",
  },
  {
    id: 2,
    name: "Travel List",
    description: "Description for Project 2",
    highlight: [
      "Developed a robust REST API following the CRUD approach using Javascript(Node.js, Express), implemented responsive user interface using HTML/CSS (Pug). MongoDB and Mongoose for efficient data management.",
      "Implemented features including JWT-based login system with Nodemailer for secure authentication, Mapbox API for interactive tour location displays, and Stripe API for transaction processing.",
      "Conducted API validation through Postman and deployed on Heroku with CI/CD pipeline.",
    ],
    videoThumbnail: project1Thumbnail,
    videoUrl: "https://www.youtube.com/watch?v=O5cmLDVTgAs&t=10344s",
    imageSrc: project2,
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/luomi16/Awesome-simple-react",
  },
  {
    id: 3,
    name: "Natours",
    description:
      "A Tour booking Website with Stripe integration, email notifications, JWT cookies authorization, and it's built with technologies like Express, Node.js, MongoDB, and Stripe, deployable on Heroku.",
    highlight: [
      "Developed a robust REST API following the CRUD approach using Javascript(Node.js, Express), implemented responsive user interface using HTML/CSS (Pug). MongoDB and Mongoose for efficient data management.",
      "Implemented features including JWT-based login system with Nodemailer for secure authentication, Mapbox API for interactive tour location displays, and Stripe API for transaction processing.",
      "Conducted API validation through Postman and deployed on Heroku with CI/CD pipeline.",
    ],
    videoThumbnail: project1Thumbnail,
    videoUrl: "https://www.youtube.com/watch?v=O5cmLDVTgAs&t=10344s",
    imageSrc: project1,
    technologies: ["React", "Node.js", "Express"],
    githubLink: "https://github.com/luomi16/Natours",
  },
  {
    id: 4,
    name: "Travel List",
    description: "Description for Project 2",
    highlight: [
      "Developed a robust REST API following the CRUD approach using Javascript(Node.js, Express), implemented responsive user interface using HTML/CSS (Pug). MongoDB and Mongoose for efficient data management.",
      "Implemented features including JWT-based login system with Nodemailer for secure authentication, Mapbox API for interactive tour location displays, and Stripe API for transaction processing.",
      "Conducted API validation through Postman and deployed on Heroku with CI/CD pipeline.",
    ],
    videoThumbnail: project1Thumbnail,
    videoUrl: "https://www.youtube.com/watch?v=O5cmLDVTgAs&t=10344s",
    imageSrc: project2,
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/luomi16/Awesome-simple-react",
  },
];

export default projectsData;
