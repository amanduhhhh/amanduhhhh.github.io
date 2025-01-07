import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import logo from "../../assets/images/logo.png";
import {
  faBrush,
  faEnvelope,
  faFolder,
  faHome,
  faUser,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
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
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolder} color="#60837F" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/design"
        >
          <FontAwesomeIcon icon={faBrush} color="#60837F" />
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
          <a
            target="blank"
            href="https://drive.google.com/file/d/19EHVbFxRjOp1ohoivOMM3_Mv4--Ka_S-/view?usp=sharing"
          >
            <FontAwesomeIcon icon={faFile} color="#60837F" />
          </a>
        </li>
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
