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
  const stack = [
    { src: html, alt: "html logo", title: "HTML5" },
    { src: css, alt: "css logo", title: "CSS3" },
    { src: js, alt: "js logo", title: "JavaScript" },
    { src: sass, alt: "sass logo", title: "Sass" },
    { src: react, alt: "react logo", title: "React.js" },
    { src: node, alt: "node logo", title: "Node.js" },
    { src: py, alt: "py logo", title: "Python" },
    { src: sql, alt: "sql logo", title: "MySQL" },
  ];

  return (
    <div className="section mystack" id="mystack">
      <div className="section-title">
        <h2>My Stack</h2>
      </div>

      <section className="mystack__content">
        <ul className="mystack-imgs">
          {stack.map((item, index) => (
            <li key={index} className="mystack__item">
              <img src={item.src} alt={item.alt} className="mystack__logo" />
              <span className="mystack__title">
                <h3>{item.title}</h3>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MyStack;
