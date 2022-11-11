import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let apiKey = e37af8b7e5570ed34e9bd67d3c3d2d12;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Last Updated on Saturday 12:00</li>
      </ul>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <span className="main-temp">70</span>
              <span className="units">°</span>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-2">
          <ul className="high-low-section">
            <li>
              <span className="current-high-low">High:</span>
              <span> 80</span>
              <span className="high-low-units">°</span>
            </li>
            <li>
              <span className="current-high-low">Low:</span>
              <span> 60</span>
              <span className="high-low-units">°</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt=""
                className="main-weather-icon"
              />
            </li>
            <li className="current-condition">Sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
