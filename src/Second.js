import React from "react";
import filter from "./assets/filter.png";
import "./styles/secondPage.scss";
import lefticon from "./assets/chevron.left.png";
import base from "./assets/Base.png";
import footer from "./assets/footer.svg";

function Second() {
  return (
    <div>
      <img src={base} alt="" />
      <button className="button">
        How can we help? <img className="filterIcon" src={filter}></img>
      </button>
      <div className="paragraph__container">
        <h1 className="paragraph__heading">Popular Searches</h1>
        <div className="paragraph__para">
          <p className="paragraph__text">
            How do i write a will and what are my legal rights?

          </p>
        </div>
        <div className="paragraph__para">
          <p className="paragraph__text">
            Whats are my rights if i were to get in an accident?
          
          </p>
        </div>
        <div className="paragraph__para">
          <p className="paragraph__text">
            How do i apply for a morgage?
            
          </p>
        </div>
        <div className="paragraph__para">
          <p className="paragraph__text">
            What do i do if i get stopped by the police?
            
          </p>
        </div>
        <div className="paragraph__para">
          <p className="paragraph__text">
            what are my rights as an indigenous person in Canada?
            
          </p>
        </div>
        <div>
          <img className="footer" src={footer}></img>
        </div>
      </div>
    </div>
  );
}

export default Second;
