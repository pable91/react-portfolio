import React from "react";
import "./Project.css";

class Project extends React.Component {
  render() {
    return (
      <div id="project">
        <section className="project__contents">
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "black",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>HTML, CSS</span>
            </div>
            <div className="introduce">
              <h3>Project1</h3>
              <p>dasdsassssssssssssssssssssssssssssssssssssssssssssssss</p>
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "rgb(54, 52, 53, 1)",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>HTML, CSS</span>
            </div>
            <div className="introduce">
              <h3>Project2</h3>
              <p>
                dasdsa dsadasdasdasddasdasdasdasdasdasdsadsadasdas
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
              </p>
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "rgb(85, 17, 18, 1)",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>React</span>
            </div>
            <div className="introduce">
              <h3>Project3</h3>
              <p>
                dasdsa dsadasdasdasddasdasdasdasdasdasdsadsadasdas
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
              </p>
            </div>
          </div>

          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "rgb(34, 152, 152, 1)",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>
                JAVA SCRIPT<br></br>FULL STACK
              </span>
            </div>
            <div className="introduce">
              <h3>Project4</h3>
              <p>
                dasdsa dsadasdasdasddasdasdasdasdasdasdsadsadasdas
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
              </p>
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>
                JAVA SCRIPT
              </span>
            </div>
            <div className="introduce">
              <h3>Project5</h3>
              <p>
                dasdsa dsadasdasdasddasdasdasdasdasdasdsadsadasdas
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
              </p>
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              <span style={{ color: "rgb(209, 180, 140, 1)" }}>
                JAVA SCRIPT<br></br>FULL STACK
              </span>
            </div>
            <div className="introduce">
              <h3>Project6</h3>
              <p>
                dasdsa dsadasdasdasddasdasdasdasdasdasdsadsadasdas
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Project;
