import React from "react";
import "./SkillTag.css";

const SkillTag = ({ skill, onClick, size = "medium" }) => {
  const sizeClass = `skill-tag--${size}`;

  return (
    <span
      className={`skill-tag ${sizeClass}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {skill}
    </span>
  );
};

export default SkillTag;
