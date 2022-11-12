import React from "react";
import Date from "./Date";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>Last Updated on Thursday</li>
      </ul>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <span className="main-temp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°</span>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-2">
          <ul className="high-low-section">
            <li>
              <span className="current-high-low">High:</span>
              <span> {Math.round(props.data.high)}</span>
              <span className="high-low-units">°</span>
            </li>
            <li>
              <span className="current-high-low">Low:</span>
              <span> {Math.round(props.data.low)}</span>
              <span className="high-low-units">°</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <img
                src={props.data.iconURL}
                alt={props.data.icon}
                className="main-weather-icon"
              />
            </li>
            <li className="current-condition text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
