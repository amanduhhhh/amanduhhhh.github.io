import { Link } from "react-router-dom";
import "./Home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import Logo from "./Logo";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "amanda".split("");

  useEffect(() => {
    return () => {
      setTimeout(() => setLetterClass("text-animate-hover"), 3000);
    };
  }, []);
  return (
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
            letterClass={letterClass}
            strArray={nameArray}
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
      <Logo></Logo>
    </div>
  );
}
export default Home;
