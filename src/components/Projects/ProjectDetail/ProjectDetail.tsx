import Loader from "react-loaders";
import { Link, useParams } from "react-router-dom";
import { getProject, projects, type ProjectMedia } from "../projectsData";
import "./ProjectDetail.scss";

function MediaItem({ media }: { media: ProjectMedia }) {
  let el;
  if (media.type === "youtube") {
    el = (
      <div className="media-embed">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${media.src}`}
          title={media.alt ?? "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  } else if (media.type === "video") {
    el = (
      <video
        className="media-video"
        controls
        playsInline
        preload="none"
        poster={media.poster}
      >
        <source src={media.src} />
      </video>
    );
  } else {
    el = (
      <img
        className="media-image"
        src={media.src}
        alt={media.alt ?? ""}
        loading="lazy"
      />
    );
  }

  return (
    <figure className="media-figure">
      {el}
      {media.caption && (
        <figcaption className="media-caption">{media.caption}</figcaption>
      )}
    </figure>
  );
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <>
        <div className="project-detail-page">
          <div className="detail-container">
            <h1>not found</h1>
            <p>
              That project doesn't exist.{" "}
              <Link to="/projects">Back to projects</Link>.
            </p>
          </div>
        </div>
        <Loader type="pacman" active={true} />
      </>
    );
  }

  const currentProjectIndex = projects.findIndex((p) => p.slug === project.slug);
  const previousProject =
    projects[(currentProjectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  return (
    <>
      <div className="project-detail-page" key={project.slug}>
        <div className="detail-container">
          <div className="detail-body">
            <div className="detail-text">
              <Link to="/projects" className="back-link">
                &larr; projects
              </Link>
              <h1 className="highlighted">{project.title}</h1>

              <div className="detail-tags">
                {project.developedFor && (
                  <p className="detail-meta">
                    <span className="highlighted-2">Developed for: </span>
                    {project.developedFor}
                  </p>
                )}
                {!!project.role?.length && (
                  <p className="detail-meta">
                    <span className="highlighted-2">Role: </span>
                    {project.role.join(", ")}
                  </p>
                )}
                {project.date && (
                  <p className="detail-meta">
                    <span className="highlighted-2">Published: </span>
                    {project.date}
                  </p>
                )}
              </div>

              <p className="detail-blurb">
                {project.description ?? project.cardBlurb}
              </p>

              {project.specs && (
                <div className="detail-specs">
                  {!!project.specs.frameworks?.length && (
                    <p>
                      <span className="highlighted-2">Frameworks: </span>
                      {project.specs.frameworks.join(", ")}
                    </p>
                  )}
                  {!!project.specs.languages?.length && (
                    <p>
                      <span className="highlighted-2">Languages: </span>
                      {project.specs.languages.join(", ")}
                    </p>
                  )}
                  {!!project.specs.tools?.length && (
                    <p>
                      <span className="highlighted-2">
                        Tools &amp; Libraries:{" "}
                      </span>
                      {project.specs.tools.join(", ")}
                    </p>
                  )}
                </div>
              )}

              {(project.viewProject || project.viewRepo) && (
                <div className="detail-buttons">
                  {project.viewProject && (
                    <a
                      className="flat-button"
                      href={project.viewProject}
                      target="_blank"
                      rel="noreferrer"
                    >
                      view project
                    </a>
                  )}
                  {project.viewRepo && (
                    <a
                      className="flat-button"
                      href={project.viewRepo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      view repo
                    </a>
                  )}
                </div>
              )}

            </div>

            {!!project.media?.length && (
              <div className="detail-media">
                {project.media.map((m, i) => (
                  <MediaItem key={i} media={m} />
                ))}
              </div>
            )}
          </div>

          <nav className="project-nav" aria-label="Project navigation">
            <Link
              to={`/projects/${previousProject.slug}`}
              className="project-nav-link"
            >
              <span>previous</span>
              {previousProject.title}
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="project-nav-link project-nav-link-next"
            >
              <span>next</span>
              {nextProject.title}
            </Link>
          </nav>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default ProjectDetail;
