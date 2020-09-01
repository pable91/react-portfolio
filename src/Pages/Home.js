import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="contents">
          <hr className="decoration__line"></hr>
          <div className="contents__image"></div>
          <div className="contents__name"> Kim Yong Kwon</div>
          <div className="contents__introduce"> Front-end Developer </div>
          <hr className="decoration__line"></hr>
        </div>
      </div>
    );
  }
}

export default Home;
