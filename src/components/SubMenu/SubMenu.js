import React, { useState } from "react";
import "./Sb.css";

const SubMenu = ({ items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  const handleItemClick = (item) => {
    onItemClick(item);
    setIsOpen(false);
  };

  return (
    <div
      className="submenu-container"
      onMouseEnter={() => setIsProductsHovered(true)}
      onMouseLeave={() => setIsProductsHovered(false)}
    >
      <div className={`submenu ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
          <a
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;