import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="contents">
          <hr className="decoration__line"></hr>
          <div className="contents__image"></div>
          <div className="contents__name"> Kim Yong Kwon</div>
          <div className="contents__introduce"> Front-end Developer </div>
          <div className="contents__icons">
            <a href="https://github.com/powderBlue91">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/?hl=ko">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <hr className="decoration__line"></hr>
        </section>
      </div>
    );
  }
}

export default Home;
