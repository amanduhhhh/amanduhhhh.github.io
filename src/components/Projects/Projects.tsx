import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";
import { projects } from "./projectsData";

const Projects = () => {
  const [cardClass, setCardClass] = useState("card-animate");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardClass("card-animate-hover");
      setLetterClass("text-animate-hover");
      const projectPage = document.querySelector(
        ".project-page",
      ) as HTMLElement;
      if (projectPage) {
        projectPage.style.overflowX = "auto";
      }
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="project-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"projects".split("")}
              idx={12}
            />
          </h1>

          <p>demo videos available on github page!</p>
        </div>
        <div className="project-showcase">
          {projects.map((project, index) => (
            <ProjectCard
              slug={project.slug}
              title={project.title}
              description={project.cardBlurb}
              year={project.date}
              imageLink={project.cardImage}
              className={cardClass}
              key={project.slug}
              id={`card_${index}`}
            />
          ))}
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Projects;
