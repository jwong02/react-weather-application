import React from "react";
import Engine from "./Engine";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Engine />
        <Weather defaultCity="New York" />
      </div>
      <footer>
        {" "}
        This project was coded by Janet Wong and is {""}
        <a
          href="https://github.com/jwong02/react-weather-application"
          target="_blank"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
