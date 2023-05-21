import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";

export default function Search(props) {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
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
          <Weather weatherData={weather} />
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityOnLoad}&appid=38146ecc463f344c9fc5c923d091b549&units=metric`;
    axios.get(url).then(showTemperature);
  }
}
