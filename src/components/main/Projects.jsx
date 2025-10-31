import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Projects.css";

const Projects = () => {
  useScrollAnimation(".card", {
    fromVars: { opacity: 0, y: 50 },
    toVars: { opacity: 1, y: 0 },
    duration: 1.5,
    stagger: 0.2,
  });

  const handleDemoClick = (project) => {
    console.log("Demo clicked for project:", project.title, project.demoUrl);
    if (project.demoUrl && project.demoUrl !== "#") {
      window.open(project.demoUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Demo não disponível para este projeto.");
    }
  };

  const handleCodeClick = (project) => {
    console.log("Code clicked for project:", project.title, project.codeUrl);
    if (project.codeUrl && project.codeUrl !== "#") {
      window.open(project.codeUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Código não disponível para este projeto.");
    }
  };

  return (
    <section className="contain-projects" id="projects">
      <div>
        <h1 className="text-effect">Projetos</h1>
      </div>
      <div className="cards-projects">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img
              src={project.image}
              alt={`Preview do projeto ${project.title}`}
            />
            <div className="apresentation-project">
              <h2 className="project-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="btns-skills">
                {project.technologies.map((tech, index) => (
                  <button key={index} type="button" className="btn">
                    {tech}
                  </button>
                ))}
              </div>
              <div className="btns-links">
                <button
                  type="button"
                  className="btn-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDemoClick(project);
                  }}
                >
                  <FaExternalLinkAlt className="space" /> Demo
                </button>
                <button
                  type="button"
                  className="btn-git"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCodeClick(project);
                  }}
                >
                  <FiGithub className="space" /> Código
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
