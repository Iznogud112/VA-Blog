/* import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import DropDown from "./DropDown";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 600) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 600) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="navbar-links">
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              onClick={closeMobileMenu}
            >
              POČETNA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              onClick={closeMobileMenu}
            >
              KO SMO MI
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <button className="dropbtn">
              IZABERI USLUGU
              <i className="fa fa-caret-down" />
            </button>
             <li className="dropdown-content"> 
            {dropDown && <DropDown />}
             <NavLink
                  to="/teambuilding"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Tim Bilding
                </NavLink>
                <NavLink
                  to="/dataentry"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Unos podataka
                </NavLink>
                <NavLink
                  to="/textforsite"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Pisanje tekstova za sajt
                </NavLink>
                <NavLink
                  to="/qrcode"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Izrada QR koda
                </NavLink>
                <NavLink
                  to="/socialmedia"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Društvene mreže
                </NavLink>
                <NavLink
                  to="/humanresources"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Ljudski resursi(HRM)
                </NavLink>
                <NavLink
                  to="/biznisideas"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={closeMobileMenu}
                >
                  Biznis ideje
                </NavLink> 
             </li> 
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              onClick={closeMobileMenu}
            >
              VA BLOG
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import logo from "../../assets/images/logo.png";

import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 600) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 600) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Logo" className="titleLogo" />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                POČETNA
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                KO SMO MI
              </NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={() => setDropDown(!dropDown)}
            >
              <button className="nav-dropdown">
                IZABERI USLUGU&nbsp;
                <i className="fas fa-caret-down" />
              </button>
              <li onClick={closeMobileMenu}>{dropDown && <DropDown />}</li>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                VA Blog
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
