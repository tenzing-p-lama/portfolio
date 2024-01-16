import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="section about" id="about">
      <div className="section-title">
        <h2 className="section-title__content">About Me</h2>
      </div>

      <p className="about__copy">Hi!</p>
      <p className="about__copy">I am Tenzing</p>
      <p className="about__copy">A frontend developer focusing on React.js</p>
      <p className="about__copy">
        I have been working on web technologies building responsive and
        interactive websites since 2019
      </p>
      <p className="about__copy">
        My background in graphic design and photography give me a keen eye for
        aesthetics and user experience
      </p>
    </div>
  );
}

export default AboutMe;
