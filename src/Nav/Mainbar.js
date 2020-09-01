import React from "react";
import "./Mainbar.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Navigation from "./Navigation";

class Mainbar extends React.Component {
  render() {
    return (
      <div className="mainbar">
        <HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </HashRouter>
      </div>
    );
    // return <div className="mainbar">arrow</div>;
  }
}

export default Mainbar;
