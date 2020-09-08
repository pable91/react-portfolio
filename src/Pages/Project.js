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
                backgroundColor: "blue",
              }}
            >
              HTML, CSS
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              HTML, CSS
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              React
            </div>
          </div>

          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              JAVA SCRIPT FULL STACK
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              JAVA SCRIPT
            </div>
          </div>
          <div className="project__contents__object">
            <div
              className="subject"
              style={{
                backgroundColor: "blue",
              }}
            >
              JAVA SCRIPT FULL STACK
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Project;
