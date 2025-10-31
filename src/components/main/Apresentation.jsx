import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { personalInfo } from "../../data/portfolio";
import { TYPEWRITER_CONFIG } from "../../constants";
import Button from "../ui/Button";
import { scrollToElement } from "../../utils";

const Apresentation = () => {
  const { textRef, cursorRef } = useTypewriter(TYPEWRITER_CONFIG.texts);

  const handleViewProjects = () => {
    scrollToElement("projects", 80);
  };

  const handleContact = () => {
    scrollToElement("contact", 80);
  };

  const handleScrollToAbout = () => {
    scrollToElement("about", 80);
  };
  return (
    <div className="apresentation" id="home">
      <div className="lights-bg">
        <div className="light-1"></div>
      </div>

      <h1 className="text-effect">
        <span ref={textRef}></span>
        <span ref={cursorRef} className="typewriter-cursor">
          |
        </span>
      </h1>

      <span className="job">{personalInfo.role}</span>

      <p className="text">{personalInfo.description}</p>

      <div className="buttons">
        <button
          type="button"
          className="btn-projects"
          onClick={handleViewProjects}
        >
          Ver Projetos
        </button>
        <button type="button" className="btn-contact" onClick={handleContact}>
          Entrar em Contato
        </button>
      </div>

      <div className="mouse-scroll" onClick={handleScrollToAbout}>
        <div className="mouse">
          <div className="scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Apresentation;
