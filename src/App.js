import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Weather() {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCityName] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  const units = "metric";

  function updateSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (searchTerm.trim() !== "") {
      setCityName(searchTerm);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=${units}`
        )
        .then((response) => {
          setTemperature(response.data.main.temp);
          setHumidity(response.data.main.humidity);
          setWindSpeed(response.data.wind.speed);
          setDescription(response.data.weather[0].description);
          setErrorMessage(null);
        })
        .catch((error) => {
          console.log(error);
          setTemperature(null);
          setHumidity(null);
          setWindSpeed(null);
          setDescription("");
          setErrorMessage("City not found. Please try again.");
        });
    } else {
      setErrorMessage("Please enter a city name.");
    }
  }

  return (
    <div>
      {temperature !== null ? (
        <div>
          <h4>
            The temperature in {city} is {Math.round(temperature)}°C
          </h4>
          <p>Description: {description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} km/h</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Type a city..."
            onChange={updateSearchTerm}
          />
          <button type="submit">Search</button>
        </form>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
