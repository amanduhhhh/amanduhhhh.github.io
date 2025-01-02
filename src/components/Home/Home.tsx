import { Link } from "react-router-dom";
import "./Home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";
import Loader from "react-loaders";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return () => {
      setTimeout(() => setLetterClass("text-animate-hover"), 2600);
    };
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-area">
          <h1>
            <span className={letterClass}>h</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>y</span>
            <span className={`${letterClass} _14`}>a</span>{" "}
            <span className={`${letterClass} _15`}>!</span>
            <br />
            <span className={`${letterClass} _16`}>i</span>
            <span className={`${letterClass} _16`}>'m</span>{" "}
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"amanda".split("")}
              idx={17}
            />
            <br />
          </h1>
          <h2>
            cs student @{" "}
            <a target="blank" href="https://uwaterloo.ca">
              university of waterloo
            </a>
          </h2>
          <Link to="/contact" className="flat-button">
            contact me
          </Link>
        </div>
        <Logo />
        <div className="alert">
          <h3>
            * view on desktop for best experience... <br /> pretty please
          </h3>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
}
export default Home;
