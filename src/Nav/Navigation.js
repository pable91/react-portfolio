import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div class="navigation">
      <Link class="link" to="/">
        Home
      </Link>
      <Link class="link" to="/about">
        About
      </Link>
      <Link class="link" to="/project">
        Project
      </Link>
      <Link class="link" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Navigation;
