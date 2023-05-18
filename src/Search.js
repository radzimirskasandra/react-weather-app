import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Date from "./Date";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38146ecc463f344c9fc5c923d091b549&units=metric`;
    axios.get(url).then(showTemperature);
  }

  let form = (
    <div className="Search">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Type a city"
              aria-label="Type a city"
              autoComplete="off"
              autoFocus="on"
              className="form-control border-black border-1 mb-2"
              onChange={handleCity}
            />
          </div>

          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              className="search-button btn btn-light btn-sm shadow-sm border-black border-1 mb-2"
              on
            />
          </div>
          <div className="col-sm-2">
            <button
              id="button"
              type="button"
              className="current-button btn btn-dark btn-sm"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded === true) {
    return (
      <div>
        {form}
        <div className="Weather">
          <div className="row">
            <div className="col-sm-6">
              <div className="row city-date justify-content-start">
                <h1 className="mt-2 text-left">{city}</h1>
                <h3 className="text-left">
                  <Date />
                </h3>
                <h4 className="text-left">
                  Humidity: {Math.round(weather.humidity)}%
                </h4>
                <h4 className="text-left">
                  Wind: {Math.round(weather.wind)} km/h
                </h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row justify-content-around">
                <h1 className="mt-2">
                  {Math.round(weather.temperature)}
                  <span className="celsius">°C</span>
                </h1>
                <div className=" weather-icon">
                  <img src={weather.icon} alt={weather.description} />
                </div>
                <h2>{weather.description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
