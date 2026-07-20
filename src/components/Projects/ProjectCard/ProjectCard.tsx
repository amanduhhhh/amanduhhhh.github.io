import { Link } from "react-router-dom";
import "./ProjectCard.scss";

interface Props {
  slug: string;
  title: string;
  description: React.ReactNode;
  year: string;
  imageLink: string;
  className: string;
  id: string;
}
function ProjectCard({
  slug,
  title,
  description,
  year,
  imageLink,
  className,
  id,
}: Props) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className={`card-container ${className}`} id={id}>
        <img className="card-image" src={imageLink} alt={title} />
        <div className="card-text">
          <h2>{title}</h2>
          <p id="desc">{description}</p>
        </div>
        <h3 id="year">{year}</h3>
      </div>
    </Link>
  );
}

export default ProjectCard;
