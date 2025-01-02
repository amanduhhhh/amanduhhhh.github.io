import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refForm = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setTimeout(() => setLetterClass("text-animate-hover"), 2600);
    };
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (refForm.current) {
      const formData = new FormData(refForm.current);
      const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        reply_to: formData.get("email"),
      };

      emailjs
        .send(
          "service_m2sc9gs",
          "template_zav2vyr",
          templateParams,
          "lUMBD9n0gVREwLrwU"
        )
        .then(
          () => {
            alert("sent!");
            navigate("/amandaxi");
          },
          (error) => {
            alert("failed, here's what's wrong: \n" + error);
            navigate("/amandaxi");
          }
        );
    } else {
      console.error("issues with form");
    }
  };
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
            <form ref={refForm} onSubmit={sendEmail}>
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
                    disabled={isSubmitting}
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
