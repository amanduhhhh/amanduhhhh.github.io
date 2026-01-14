import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import resumeLink from "../../assets/resume.pdf";
import {
  faCss,
  faHtml5,
  faJava,
  faPython,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"about me".split("")}
              idx={12}
            />
          </h1>
          <p>
            I'm a <span className="highlighted-2">CS + Co-op student</span> at
            the University of Waterloo. I've built countless full-stack applications, from web apps for crochet pattern design to patient portal mobile apps. Learn more in my {" "}
            <Link to="/projects">projects!</Link>
          </p>
          <p>
            Or, for just the gist of it, take a look at my {" "}
            <a target="blank" href={resumeLink}>
              resume.
            </a>
          </p>
          <p>
            Besides coding, I'm an absolute puzzle fiend. Be it <span className="highlighted-2">minesweeper</span>, <span className="highlighted-2">crosswords</span>, or <span className="highlighted-2">90's point and click adventure games</span> (LucasArts especially), if I'm not coding, I've got my head buried in one of these.
          </p>
          <p>
            That, or a drawing. {" "}
            <Link to="/design">Take a peek at my art!</Link>
          </p>
          <h2>what i've been up to:</h2>
          <ul>
            <li>
              Currently in the process of completing a {" "}
              <span className="highlighted-2">
                Ubisoft mentorship
              </span>, where I'll be developing a game under industry leadership!
            </li>
            <li>
              This term, I'll also be a developer on <span className="highlighted-2">UWaterloo's Blueprint chapter</span>.
            </li>
            <li>
              From May - December 2025, I completed a software internship at {""}
              <span className="highlighted-2">
                Oak Ridges Heart Centre
              </span>, where I developed an <span className="highlighted-2">AI clinic scribe</span>, a <span className="highlighted-2">food portion size model</span>, and a <span className="highlighted-2">mobile app</span>, amongst other things.  
            </li>
          </ul>
        </div>
        <div className="stage-cube">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="indianred" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="gold" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="lightsalmon" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss} color="dodgerblue" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSquareJs} color="Khaki" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="deepskyblue" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default About;
