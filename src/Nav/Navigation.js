import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/project">
        Project
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Navigation;
