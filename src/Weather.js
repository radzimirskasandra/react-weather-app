import "./Weather.css";

export default function Weather() {
  let weatherProperties = {
    city: "Katowice",
    date: "24th April",
    time: "13:46",
    description: "rain",
    temperature: 20,
    humidity: 38,
    wind: 6,
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-6">
          <div className="row city-date justify-content-start">
            <h1 className="mt-2 text-left">{weatherProperties.city}</h1>
            <h3 className="text-left">
              {weatherProperties.date}, {weatherProperties.time}
            </h3>
            <h4 className="text-left">
              Humidity: {weatherProperties.humidity}%
            </h4>
            <h4 className="text-left">Wind: {weatherProperties.wind} km/h</h4>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row justify-content-around">
            <h1 className="mt-2">
              {weatherProperties.temperature}
              <span className="celsius">°C</span>
            </h1>
            <div className=" weather-icon">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Rain"
              />
            </div>
            <h2>{weatherProperties.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
