import React from "react";
import { FaReact, FaNodeJs, FaPhp, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiTypescript, SiNextdotjs, SiHtml5, SiCss3 } from "react-icons/si";
import { skills } from "../../data/portfolio";
import "./Skills.css";

const Skills = () => {
  // Mapear ícones para cada skill
  const skillIcons = {
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    PHP: <FaPhp />,
    Bootstrap: <FaBootstrap />,
    JavaScript: <DiJavascript1 />,
    MySQL: <GrMysql />,
    TypeScript: <SiTypescript />,
    "Next.js": <SiNextdotjs />,
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
  };

  // Renderizar círculos baseado no nível da skill
  const renderSkillLevel = (level) => {
    const circles = [];
    const filledCircles = Math.round(level / 20); // Converter 0-100 para 0-5

    for (let i = 0; i < 5; i++) {
      circles.push(
        <div
          key={i}
          className="circle"
          style={{
            backgroundColor: i < filledCircles ? "#4D88FF" : "transparent",
          }}
        />
      );
    }
    return circles;
  };

  return (
    <div className="about-skills">
      <h3>Habilidades Técnicas</h3>
      <div className="skills">
        {skills.slice(0, 8).map((skill, index) => (
          <div
            key={index}
            className="skill"
            id={`icon-${skill.name.toLowerCase().replace(/[.\s]/g, "")}`}
          >
            <div className="icons">
              {skillIcons[skill.name] || <DiJavascript1 />}
            </div>
            <span>{skill.name}</span>
            <div className="circles">{renderSkillLevel(skill.level)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
