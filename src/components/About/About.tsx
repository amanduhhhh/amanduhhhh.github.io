import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
    return () => {
      setTimeout(() => setLetterClass("text-animate-hover"), 2400);
    };
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
            the University of Waterloo, with extensive experience in languages
            such as Java, Python, HTML, CSS, and Javascript, as well as
            frameworks like React. Make sure to take a look at my{" "}
            <Link to="/amandaxi/projects">projects!</Link>
          </p>
          <p>
            Besides coding, I'm also a digital artist proficient in{" "}
            <span className="highlighted-2">
              art, animation, and graphic design.
            </span>{" "}
            <Link to="/amandaxi/design">Take a peek!</Link>
          </p>

          <h2>awards and achievements:</h2>
          <ul>
            <li>
              Governor General's Academic Medal{" "}
              <span className="highlighted-2">
                (Highest Grade 11/12 average)
              </span>
            </li>
            <li>
              CanHack CTF 2022 -{" "}
              <span className="highlighted-2">
                First Place School Team in Canada
              </span>
            </li>
            <li>
              <span className="highlighted-2">Top 25%</span> in CCC Jr 2022
            </li>
            <li>
              <span className="highlighted-2">Top 25%</span> in CCC Sr 2024
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
