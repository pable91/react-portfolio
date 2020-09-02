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
        </section>
      </div>
    );
  }
}

export default About;
