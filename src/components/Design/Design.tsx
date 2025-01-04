import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import "./Design.scss";

const Design = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [imageClass, setImageClass] = useState("image-animate");
  const imgs = [
    "src/assets/art/celeste4.6CA.png",
    "src/assets/art/pipo3.png",
    "src/assets/art/landscap1.4.png",
    "src/assets/art/uhhhC.png",
    "src/assets/art/500days.png",
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageClass("image-hover");
      setLetterClass("text-animate-hover");
    }, 3600);
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
          <p>
            <span className="highlighted-2"> Programs: </span>Clip Studio Paint,
            Adobe Photoshop
          </p>
        </div>
        <div className="gallery">
          {imgs.map((pic, index) => {
            return (
              <div className="img-container">
                <img className={imageClass} src={pic} id={"img_" + index} />
              </div>
            );
          })}
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Design;
