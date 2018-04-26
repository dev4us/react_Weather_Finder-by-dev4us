import React from "react";

const Form = ({ getWeather }) => (
  <form onSubmit={getWeather}>
    <div className="row padding">
      <span className="col-xs-12">
        <input type="text" name="city" placeholder="City.." />
      </span>
      <span className="col-xs-12">
        <input type="text" name="country" placeholder="country" />
      </span>
    </div>
    <button>Get Weather</button>
  </form>
);

export default Form;
