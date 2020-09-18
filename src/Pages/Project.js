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
              <h3>Unknown Webpage</h3>
              <p>
                처음 만들어본 웹페이지로서, 구글링으로 찾은 임의의 웹페이지를
                클론코딩 하였습니다. 본 프로젝트를 통해 기본적인 HTML, CSS를
                익히게 되었습니다.
              </p>
              <div className="introduce__link">LIVE</div>
              <div className="introduce__link">CODE</div>
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
              <h3>Momentum App</h3>
              <p>
                Momentum이라는 앱을 비슷하게 만들어봤습니다. 이 프로젝트를 통해
                javaScript를 활용한 동적인 프로그래밍이 가능해졌습니다.
              </p>
              <div className="introduce__link">LIVE</div>
              <div className="introduce__link">CODE</div>
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
              <h3>Movie App</h3>
              <p>
                React.js를 사용한 첫 프로젝트로, 영화목록 데이터를 받아와서
                정렬하고 영화조회가 가능한 프로젝트입니다.
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
                NodeJS<br></br>FULL STACK
              </span>
            </div>
            <div className="introduce">
              <h3>ktube</h3>
              <p>NodeJS(epxress)를 사용해서 유튜브를 클론코딩하였습니다.</p>
            </div>
          </div>
          {/* <div className="project__contents__object">
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
          </div> */}
          {/* <div className="project__contents__object">
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
          </div> */}
        </section>
      </div>
    );
  }
}

export default Project;
