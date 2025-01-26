import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";
import ProjectCardInfo from "./ProjectCardInfo";
import froggyJump from "../../assets/images/FroggyJump.png";
import portfolio from "../../assets/images/logo.svg";
import refyne from "../../assets/images/refyne.png";
import huffman from "../../assets/images/Huffman.png";
import dash from "../../assets/images/Dash.png";
import physicsSim from "../../assets/images/Physics.png";
import tihkoosue from "../../assets/images/Tihkoosue.png";

const Projects = () => {
  const imgs = [
    portfolio,
    refyne,
    huffman,
    physicsSim,
    tihkoosue,
    froggyJump,
    dash,
  ];
  const [cardClass, setCardClass] = useState("card-animate");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardClass("card-animate-hover");
      setLetterClass("text-animate-hover");
      const projectPage = document.querySelector(
        ".project-page"
      ) as HTMLElement;
      if (projectPage) {
        projectPage.style.overflowX = "auto";
      }
    }, 3400);
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
          {ProjectCardInfo.map((project, index) => (
            <ProjectCard
              {...project}
              imageLink={imgs[index]}
              className={cardClass}
              key={index}
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
