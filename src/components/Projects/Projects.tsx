import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 2400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container project-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"projects".split("")}
              idx={12}
            />
          </h1>

          <p>
            This page is still under development! Please visit{" "}
            <a
              target="_blank"
              href="https://sites.google.com/view/amandaxisportfolio"
            >
              here{" "}
            </a>
            to see projects:
          </p>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Projects;
