import "./Contact.scss";
import RotatingBtn from "../RotatingBtn/RotatingBtn";

function Contact() {
  return (
    <>
      <div className="section contact" id="contact">
        <div className="section-title">
          <h2>Let's Build Something Cool Together!</h2>
        </div>

        <a
          className="contact__mail"
          href="mailto:tenzingpalden520@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <RotatingBtn textString="Contact Me" />
        </a>
      </div>
    </>
  );
}

export default Contact;
