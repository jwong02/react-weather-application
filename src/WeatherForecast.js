import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "e37af8b7e5570ed34e9bd67d3c3d2d12";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiURL).then(handleResponse);

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
