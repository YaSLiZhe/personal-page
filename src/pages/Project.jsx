import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
function Projects() {
  const projects = [
    {
      id: 1,
      name: "Natours",
      description:
        "A Tour booking Website with Stripe integration, email notifications, JWT cookies authorization, and it's built with technologies like Express, Node.js, MongoDB, and Stripe, deployable on Heroku.",
      imageSrc: project1,
      technologies: ["React", "Node.js", "Express"],
      link: "https://github.com/luomi16/Natours",
    },
    {
      id: 2,
      name: "Travel List",
      description: "Description for Project 2",
      imageSrc: project2,
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "/project2",
    },
    {
      id: 3,
      name: "Natours",
      description:
        "A Tour booking Website with Stripe integration, email notifications, JWT cookies authorization, and it's built with technologies like Express, Node.js, MongoDB, and Stripe, deployable on Heroku.",
      imageSrc: project1,
      technologies: ["React", "Node.js", "Express"],
      link: "https://github.com/luomi16/Natours",
    },
    {
      id: 4,
      name: "Travel List",
      description: "Description for Project 2",
      imageSrc: project2,
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "/project2",
    },
  ];
  return (
    <div>
      <PageNav />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={project.link}>
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 rounded-full text-xs mr-2 mb-2 border border-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
