import Skills from "./Skills";
import SkillTag from "../ui/SkillTag";
import { aboutMe, skills } from "../../data/portfolio";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./About.css";

const About = () => {
  useScrollAnimation(".about-me", {
    fromVars: { opacity: 0, y: 60 },
    toVars: { opacity: 1, y: 0 },
    duration: 1.2,
  });

  const mainSkills = skills.filter((skill) =>
    ["React", "Next.js", "TypeScript", "PHP", "Node.js", "MySQL"].includes(
      skill.name
    )
  );

  return (
    <section className="about-me" id="about">
      <div>
        <h1>{aboutMe.title}</h1>
      </div>
      <div className="container">
        <div className="about-me-text">
          <h2>{aboutMe.subtitle}</h2>

          {aboutMe.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="btns-skills">
            {mainSkills.map((skill, index) => (
              <button key={index} type="button" className="btn">
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
};

export default About;
