import React from "react";
import "./About.css";
import myImg from "./YongKwon.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <section className="about__contents">
          <article className="about__contents__who">
            <div className="about__contents__who__subject">who?</div>
            <img className="about__contents__who__image" src={myImg}></img>
            <div className="about__contents__who__text">
              <ul>
                <li>
                  사랑<hr></hr>
                </li>
                <li>
                  믿음<hr></hr>
                </li>
                <li>
                  소망<hr></hr>
                </li>
                <li>
                  희망<hr className="lastHR"></hr>
                </li>
              </ul>
              <div className="about__contents__who__text__intruduce">
                adadsadadasdddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddasdasdadadsa
              </div>
            </div>
          </article>
          <article className="about__contents__skill">
            <div className="about__contents__skill__subject">
              Skill
              <div className="about__contents__skill__stack">frontend</div>
              <ul className="about__contents__skill__list">
                <li>
                  <img src="https://img.icons8.com/color/96/000000/html-5.png" />
                  <span>HTML</span>
                </li>
                <li>
                  <img src="https://img.icons8.com/color/96/000000/css3.png" />
                  <span>CSS</span>
                </li>
                <li>
                  <img src="https://img.icons8.com/color/96/000000/javascript-logo-1.png" />
                  <span>Javascript</span>
                </li>
                <li>
                  <img src="/image/es6.jpg" />
                  <span>es6</span>
                </li>
                <li>
                  <img src="https://img.icons8.com/color/96/000000/react-native.png" />
                  <span>React</span>
                </li>
                <li>
                  <img src="/image/babel.png" />
                  <span>Babel</span>
                </li>
                <li>
                  <img src="/image/pug.png" />
                  <span>pug</span>
                </li>
              </ul>
              <div className="about__contents__skill__stack">backend</div>
              <ul className="about__contents__skill__list">
                <li>
                  <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                  <span>node.js(express)</span>
                </li>
                <li>
                  <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
                  <span>MongoDB</span>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default About;
