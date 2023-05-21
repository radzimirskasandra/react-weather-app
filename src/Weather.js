import "./Weather.css";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon.js";
import WeatherUnits from "./WeatherUnits";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="row city-date justify-content-start">
          <h1 className="mt-2 text-left">{props.weatherData.city}</h1>
          <h3 className="text-left">
            <Date />
          </h3>
          <h4 className="text-left">
            Humidity: {Math.round(props.weatherData.humidity)}%
          </h4>
          <h4 className="text-left">
            Wind: {Math.round(props.weatherData.wind)} km/h
          </h4>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="row justify-content-around">
          <WeatherUnits celsius={props.weatherData.temperature} />
          <div className=" weather-icon">
            <WeatherIcon code={props.weatherData.icon} />
          </div>
          <h2>{props.weatherData.description}</h2>
        </div>
      </div>
    </div>
  );
}
