import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./contact.scss";
import { useEffect, useState } from "react";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return () => {
      setTimeout(() => setLetterClass("text-animate-hover"), 2600);
    };
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"contact me".split("")}
              idx={12}
            />
          </h1>
          <p>
            If you've got any opportunities, whether it be{" "}
            <span className="highlighted-2">projects or internships</span>,
            please shoot me a message!
          </p>
          <p>
            I'm also open to any inquiries, feedback, or just general chatter.
            Whatever it is, send it my way.
            <span className="highlighted-2">{` :)`}</span>
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="send"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Contact;
