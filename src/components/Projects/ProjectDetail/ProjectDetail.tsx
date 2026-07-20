import Loader from "react-loaders";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  getProject,
  type Project,
  type ProjectMedia,
} from "../projectsData";
import "./ProjectDetail.scss";

function MediaItem({
  media,
  onEnlarge,
}: {
  media: ProjectMedia;
  onEnlarge: (src: string) => void;
}) {
  if (media.type === "youtube") {
    return (
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
  }
  if (media.type === "video") {
    return (
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
  }
  return (
    <img
      className="media-image"
      src={media.src}
      alt={media.alt ?? ""}
      loading="lazy"
      onClick={() => onEnlarge(media.src)}
    />
  );
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  const related = (project.related ?? [])
    .map(getProject)
    .filter((p): p is Project => Boolean(p));

  return (
    <>
      <div className={`project-detail-page ${lightbox ? "blurred" : ""}`}>
        <div className="detail-container">
          <Link to="/projects" className="back-link">
            &larr; projects
          </Link>
          <h1 className="highlighted">{project.title}</h1>

          <div className="detail-body">
            <div className="detail-text">
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
                <h2>Technical Specs</h2>
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
                    <span className="highlighted-2">Tools &amp; Libraries: </span>
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

            {related.length > 0 && (
              <div className="related-projects">
                <h2>See more!</h2>
                <div className="related-list">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/projects/${r.slug}`}
                      className="related-item"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            </div>

            {!!project.media?.length && (
              <div className="detail-media">
                {project.media.map((m, i) => (
                  <MediaItem key={i} media={m} onEnlarge={setLightbox} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="modal" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Enlarged" className="enlarged-image" />
        </div>
      )}
      <Loader type="pacman" active={true} />
    </>
  );
};

export default ProjectDetail;
