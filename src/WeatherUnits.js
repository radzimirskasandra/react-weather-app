import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [temperature, setTemperature] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature("celsius");
  }

  if (temperature === "celsius") {
    return (
      <span className="weatherUnits">
        <h1 className="mt-2">
          {Math.round(props.celsius)}
          <span className="celsius">
            <span>°C</span> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="weatherUnits">
        <h1 className="mt-2">
          {Math.round(fahrenheit)}
          <span className="celsius">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | <span>°F</span>
          </span>
        </h1>
      </span>
    );
  }
}
