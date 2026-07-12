import Loader from "react-loaders";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { writings, formatDate } from "./writings";
import "./Writings.scss";

const Writings = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="writings-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"writings".split("")}
              idx={12}
            />
          </h1>

          <p>
            archived here because i refuse to pollute substack with even more
            derivative drivel. most of these are quite old, written for high
            school magazines, but i think are nonetheless a good introduction to
            me and the type of things i think about.
          </p>
          <ul className="writings-list">
            {writings.map((writing) => (
              <li key={writing.slug}>
                <Link to={`/writings/${writing.slug}`}>
                  <h2>{writing.title}</h2>
                </Link>
                {writing.date && (
                  <span className="writing-date">
                    {formatDate(writing.date)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Writings;
