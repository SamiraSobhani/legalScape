import React from "react";
import lawyer from "../assets/myimage.svg";
import mentor from "../assets/mentor.svg";
function HomeSearch() {
  return (
    <div>
      <h2 className="search__header">Common Searches</h2>
      <section className="search__div">
        <div className="search__firstDiv">
          <img className="search__firstimg" src={lawyer}/>
          <h3 className="search__firstTitle">Lawyers</h3>
          <p className="search__content">Explore lawyers in your area.</p>
        </div>
        <div className="search__secondDiv">
          <img className="search__secondimg" src={mentor}></img>
          <h3 className="search__secondTitle">Mentorship</h3>
          <p className="search__secondContent">Find assistance from mentors in your area</p>
        
        </div>
      </section>
    </div>
  );
}

export default HomeSearch;
