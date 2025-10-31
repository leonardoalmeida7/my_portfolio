import { useState } from "react";
import NavBars from "./NavBars";
import Button from "../ui/Button";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { classNames, scrollToElement } from "../../utils";
import "./Header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  const handleContactClick = () => {
    scrollToElement("contact", 80);
    closeNav();
  };

  return (
    <>
      <header>
        <div>
          <span className="text-header">Leonardo|Portfolio</span>
        </div>
        <div className="icons" onClick={toggleNav}>
          <div className={navActive ? `hidden` : ""}>
            <FiMenu className="icon-menu" />
          </div>
          <div className={navActive ? "" : "hidden"}>
            <IoCloseOutline className="icon-close" />
          </div>
        </div>
      </header>
      <div className={`nav-bars ${!navActive ? "hidden" : ""}`}>
        <NavBars onItemClick={closeNav} />
      </div>
    </>
  );
};

export default Header;
