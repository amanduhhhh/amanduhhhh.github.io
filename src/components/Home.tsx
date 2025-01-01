import { Link } from "react-router-dom";
import "./Home.scss";
import { useState } from "react";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "amanda".split("");

  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          hiya ! <br />
          i'm <span style={{ color: "#F299A9" }}>amanda</span>
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
    </div>
  );
}
export default Home;
