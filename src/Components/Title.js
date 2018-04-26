import React from "react";

const Titles = ({ color }) => (
  <div>
    <h2
      className={`title-container__title ${color === "white" && "whiteColor"}`}
    >
      Weather Finder
    </h2>
    <h3
      className={`title-container__subtitle ${color === "white" &&
        "whiteColor"}`}
    >
      <p>Find out temperature, conditions and more...</p>
    </h3>
  </div>
);

export default Titles;
