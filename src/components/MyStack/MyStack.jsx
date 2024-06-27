import "./MyStack.scss";

import html from "../../assets/images/stack/HTML5_icon.svg";
import css from "../../assets/images/stack/css-icon.svg";
import sass from "../../assets/images/stack/sass-icon.svg";
import js from "../../assets/images/stack/javascript-icon.svg";
import react from "../../assets/images/stack/react-icon.svg";
import node from "../../assets/images/stack/nodejs-icon.svg";
import py from "../../assets/images/stack/python-icon.svg";
import sql from "../../assets/images/stack/mysql-logo.svg";

function MyStack() {
  return (
    <div className="section mystack" id="mystack">
      <div className="section-title">
        <h2>My Stack</h2>
      </div>

      <section className="mystack__content">
        <ul className="mystack-imgs">
          <img className="mystack__logo" src={html} alt="html logo" />
          <img className="mystack__logo" src={css} alt="css logo" />
          <img className="mystack__logo" src={js} alt="js logo" />
          <img className="mystack__logo" src={sass} alt="sass logo" />
          <img className="mystack__logo" src={react} alt="react logo" />
          <img className="mystack__logo" src={node} alt="node logo" />
          <img className="mystack__logo" src={py} alt="py logo" />
          <img className="mystack__logo" src={sql} alt="sql logo" />
        </ul>
      </section>
    </div>
  );
}

export default MyStack;
