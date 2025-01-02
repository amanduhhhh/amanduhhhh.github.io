import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";

const Design = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 2600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container design-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"art / design".split("")}
              idx={10}
            />
          </h1>
          <p>This page will be up shortly!!</p>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Design;
