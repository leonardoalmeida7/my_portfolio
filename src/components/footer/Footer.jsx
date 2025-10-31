import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { personalInfo } from "../../data/portfolio";
import { scrollToElement } from "../../utils";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    scrollToElement("home", 0);
  };

  return (
    <footer>
      <div className="texts">
        <div>
          <span className="text-effect" onClick={handleScrollToTop}>
            Portfolio
          </span>
          <p>
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
          </p>
        </div>
        <div className="links-social">
          <div
            className="btn-link"
            onClick={() => window.open(personalInfo.github, "_blank")}
          >
            <FiGithub className="icon" />
          </div>
          <div
            className="btn-link"
            onClick={() => window.open(personalInfo.linkedin, "_blank")}
          >
            <FiLinkedin className="icon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-copy">
        <p>
          Feito com <FaRegHeart className="heart" /> por um desenvolvedor
          apaixonado
        </p>
        <p className="copyright">
          &copy; {currentYear} Portfolio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
