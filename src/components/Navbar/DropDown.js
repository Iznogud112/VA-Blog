import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

import "./DropDown.css";

const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(true)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
