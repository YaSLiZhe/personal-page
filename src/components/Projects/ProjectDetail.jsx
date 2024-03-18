import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../../public/assets/js/projectsData";
import PageNav from "../PageNav";

function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = projects.find((p) => p.id.toString() === projectId);
    setProject(projectData);
    if (projectData) {
      document.title = projectData.name; // Optionally update page title
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="text-center pt-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <PageNav />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            {project.name} <i className="fa fa-github"></i>
          </a>
        </h1>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2"></h2>
          <div className="flex flex-wrap">
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
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Highlights:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.highlight.map((item, index) => (
              <li key={index} className="text-gray-600 text-md">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Project Preview:</h2>
          <img
            src={project.imageSrc}
            alt="Project preview"
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Video thumbnail */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Project Demo: (Will jump to Youtube)
          </h2>
          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={project.videoThumbnail}
              alt={`Preview of ${project.name}`}
              className="w-full h-auto rounded-lg shadow-md hover:opacity-75 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
