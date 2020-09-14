import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <section className="contact__contents">
          <div className="contents">
            <div className="contact__contents__picture">picture</div>
            <div className="contact__contents__linkbox">
              <i className="fab fa-github">
                <br></br>
                <a href="https://github.com/powderBlue91">
                  https://github.com/powderBlue91
                </a>
              </i>
              <i className="fas fa-envelope-open-text">
                <br></br>
                <a href="https://github.com/powderBlue91">
                  dydrnjs518@gmail.com
                </a>
                <br></br>
                <a href="https://github.com/powderBlue91">
                  dydrnjs518@naver.com
                </a>
              </i>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
