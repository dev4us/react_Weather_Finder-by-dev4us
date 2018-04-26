import React from "react";

const Form = ({ getWeather }) => (
  <form onSubmit={getWeather}>
    <div className="row padding">
      <span className="col-xs-12">
        <input type="text" name="city" placeholder="ex) Seoul, Busan" />
      </span>
      <span className="col-xs-12">
        <input type="text" name="country" placeholder="ex) KR, UK, US" />
      </span>
    </div>
    <button>Get Weather</button>
  </form>
);

export default Form;
