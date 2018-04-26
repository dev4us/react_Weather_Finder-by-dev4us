import React from "react";
import Titles from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "dfa6bb48579ffc905a19c7841e4a156c";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );

    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      //setState
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value"
      });
    }
  };
  render() {
    const { getWeather } = this;
    const {
      temperature,
      city,
      country,
      humidity,
      error,
      description
    } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-4 title-container">
                  <Titles />
                </div>
                <div className="col-xs-12 col-md-7 form-container">
                  <Titles color="white" />
                  <Form getWeather={getWeather} />
                  <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
