import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              POČETNA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              KO SMO MI
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                IZABERI USLUGU &nbsp;
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <NavLink
                  to="/teambuilding"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Tim Bilding
                </NavLink>
                <NavLink
                  to="/dataentry"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Unos podataka
                </NavLink>
                <NavLink
                  to="/textforsite"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Pisanje tekstova za sajt
                </NavLink>
                <NavLink
                  to="/qrcode"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Izrada QR koda
                </NavLink>
                <NavLink
                  to="/advertising"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Google oglašavanje
                </NavLink>
                <NavLink
                  to="/socialmedia"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Društvene mreže
                </NavLink>
                <NavLink
                  to="/humanresources"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Ljudski resursi(HRM)
                </NavLink>
                <NavLink
                  to="/biznisideas"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Biznis ideje
                </NavLink>
                <NavLink
                  to="/eventsorganization"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Organizacija događaja
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              VA BLOG
            </NavLink>
          </li>
          {/* <li>
          <NavLink
            to="/footer"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            KONTAKTIRAJ NAS
          </NavLink>
        </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
