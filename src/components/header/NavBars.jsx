import React from "react";
import { navigationItems } from "../../data/portfolio";
import { scrollToElement } from "../../utils";

const NavBars = ({ onItemClick }) => {
  const handleNavClick = (item) => {
    scrollToElement(item.id, 80);
    if (onItemClick) onItemClick();
  };

  return (
    <nav>
      <ul>
        {navigationItems.map((item, index) => (
          <li key={index} onClick={() => handleNavClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>
      <button type="button" className="btn-nav">
        Fale Comigo
      </button>
    </nav>
  );
};

export default NavBars;
