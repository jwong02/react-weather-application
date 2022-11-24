import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-2">Thu</div>
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherForcast-maxTemp mt-1">45°</div>
          <div className="WeatherForcast-minTemp">30°</div>
        </div>
      </div>
    </div>
  );
}
