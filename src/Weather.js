import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  const [temperature, setTemperature] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then((response) => {
    setTemperature(response.data.main.temp);
  });

  if (temperature) {
    return (
      <p>
        The temperature in {props.city} is currently {Math.round(temperature)}°C
      </p>
    );
  } else {
    return <p>Loading temperature for {props.city}..</p>;
  }
}
<footer>
  This project was coded by Stephanie Rodriguez and is open sourced on
  <a href="https://github.com/steph-sketch850/create-react-app">Github</a>
</footer>
