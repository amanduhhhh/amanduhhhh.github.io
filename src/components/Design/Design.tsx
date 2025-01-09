import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import "./Design.scss";
import img1 from "../../assets/art/celeste4.6CA.png";
import img2 from "../../assets/art/pipo3.png";
import img3 from "../../assets/art/landscap1.4.png";
import img4 from "../../assets/art/uhhhC.png";
import img5 from "../../assets/art/500days.png";

const Design = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [letterClass, setLetterClass] = useState("text-animate");
  const [imageClass, setImageClass] = useState("image-animate");
  const imgs = [img1, img2, img3, img4, img5];

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageClass("image-hover");
      setLetterClass("text-animate-hover");
      const designPage = document.querySelector(".design-page") as HTMLElement;
      if (designPage) {
        designPage.style.overflowY = "auto";
      }
    }, 3600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={`design-page ${isModalOpen && "blurred"}`}>
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
              <div className="img-container" key={index}>
                <img
                  className={imageClass}
                  src={pic}
                  id={"img_" + index}
                  onClick={() => handleImageClick(pic)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImageSrc} alt="Enlarged" className="enlarged-image" />
        </div>
      )}
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Design;
