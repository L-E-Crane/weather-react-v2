import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <a href="https://github.com/L-E-Crane/weather-react-v2">
            GitHub Here
          </a>
        </footer>
      </div>
    </div>
  );
}
