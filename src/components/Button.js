import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.png";

function Button() {
  return (
    <div>
      <Link to="/page2">
        <button className="button">
          <img className="searchIcon" src={search}></img>How can we help?
        </button>
      </Link>
    </div>
  );
}

export default Button;
