import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {
  title: string;
  description: React.ReactNode;
  projectLink: string;
  year: string;
  imageLink: string;
  className: string;
  id: string;
}
function ProjectCard({
  title,
  description,
  projectLink,
  year,
  imageLink,
  className,
  id,
}: Props) {
  return (
    <a target="_blank" href={projectLink}>
      <div className={`card-container ${className}`} id={id}>
        <span className="link-icon">
          <FontAwesomeIcon
            className="repo-link"
            icon={faGithub}
            color="#f9c6cf"
          />
        </span>
        <img className="card-image" src={imageLink} alt={title} />
        <div className="card-text">
          <h2>{title}</h2>
          <p id="desc">{description}</p>
        </div>
        <h3 id="year">{year}</h3>
      </div>
    </a>
  );
}

export default ProjectCard;
