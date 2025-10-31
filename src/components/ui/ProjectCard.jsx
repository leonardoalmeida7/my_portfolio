import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../ui/Button";
import SkillTag from "../ui/SkillTag";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    demoUrl,
    codeUrl,
    featured,
  } = project;

  return (
    <div className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__image">
        <img src={image} alt={`Preview do projeto ${title}`} />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__technologies">
          {technologies.map((tech, index) => (
            <SkillTag key={index} skill={tech} size="small" />
          ))}
        </div>

        <div className="project-card__actions">
          <Button
            variant="primary"
            size="small"
            onClick={() => window.open(demoUrl, "_blank")}
            icon={<FaExternalLinkAlt />}
          >
            Demo
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={() => window.open(codeUrl, "_blank")}
            icon={<FiGithub />}
          >
            Código
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
