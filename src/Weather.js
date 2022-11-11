import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconURL: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      date: "Saturday 12:00",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last Updated on {weatherData.date}</li>
        </ul>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <span className="main-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°</span>
              </li>
            </ul>
          </div>
          <div className="col-4 mt-2">
            <ul className="high-low-section">
              <li>
                <span className="current-high-low">High:</span>
                <span> {Math.round(weatherData.high)}</span>
                <span className="high-low-units">°</span>
              </li>
              <li>
                <span className="current-high-low">Low:</span>
                <span> {Math.round(weatherData.low)}</span>
                <span className="high-low-units">°</span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <img
                  src={weatherData.iconURL}
                  alt={weatherData.icon}
                  className="main-weather-icon"
                />
              </li>
              <li className="current-condition text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e37af8b7e5570ed34e9bd67d3c3d2d12";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    return "Loading temperature...";
  }
}
