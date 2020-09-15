import React from "react";
import "./About.css";
import myImg from "./YongKwon.jpg";
import es6 from "./../image/es6.jpg";
import babel from "./../image/babel.png";
import pug from "./../image/pug.png";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <section className="about__contents">
          <article className="about__contents__who">
            <div className="about__contents__who__subject">who?</div>
            <img className="about__contents__who__image" src={myImg}></img>
            <div className="about__contents__who__text">
              <ul>
                <li>
                  책임감<hr></hr>
                </li>
                <li>
                  호기심<hr></hr>
                </li>
                <li>
                  긍정<hr className="lastHR"></hr>
                </li>
              </ul>
              <div className="about__contents__who__text__intruduce">
                안녕하세요.
                <br></br>
                <br></br>프론트엔드 개발자를 지원하게 된 김용권이라고 합니다.
                나만의 포트폴리오 웹사이트를 만들어보자라는 작은 동기로 웹
                프로그래밍 세계에 들어오게 되었습니다.
                <br></br>
                <br></br>많이 부족하지만 ( 맡은일에 대한 책임감 ), ( 개발에 대한
                호기심 ), ( 매사의 긍정적인 마인드 )라는 저만의 장점을 활용해 더
                실력있는 개발자가 되고 싶습니다.
                <br></br>
                <br></br>
                감사합니다.
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
                  <img src={es6} />
                  <span>es6</span>
                </li>
                <li>
                  <img src="https://img.icons8.com/color/96/000000/react-native.png" />
                  <span>React</span>
                </li>
                <li>
                  <img src={babel} />
                  <span>Babel</span>
                </li>
                <li>
                  <img src={pug} />
                  <span>pug</span>
                </li>
              </ul>
              <div className="about__contents__skill__stack">backend</div>
              <ul className="about__contents__skill__list">
                <li>
                  <div className="icon">
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                  </div>
                  <span>node.js</span>
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
