import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  //define terms

  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("0");

  //Capture search city
  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showWeather(response) {
    setTemperature(`• Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`• Description: ${response.data.weather[0].description}`);
    setHumidity(`• Humidity: ${Math.round(response.data.main.humidity)}%`);
    setWind(`• Windspeed: ${Math.round(response.data.wind.speed)}km/h`);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    //define API values

    let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    //call the API
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div>
      <h1>Weather App</h1>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={searchCity} />
          <input type="submit" />
        </form>
      </div>
      <div className="weatherList">
        <ul>
          <li>{temperature}</li>
          <li>{description}</li>
          <li>{humidity}</li>
          <li>{wind}</li>
          <li>
            <img src={icon} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
