import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import logo from "../assets/images/logo.png";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="navigation">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#60837F" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#60837F" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#60837F" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/amandamxi/">
            <FontAwesomeIcon icon={faLinkedin} color="#60837F" />
          </a>
        </li>
        <li>
          <a target="blank" href="https://github.com/amanduhhhh">
            <FontAwesomeIcon icon={faGithub} color="#60837F" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
