import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="section contact" id="contact">
        <div className="section-title">
          <h2>Let's Talk</h2>
        </div>

        <a
          className="contact__mail"
          href="mailto:tenzingpalden520@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Mail me</p>
        </a>
      </div>
    </>
  );
}

export default Contact;
