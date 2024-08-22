import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <footer>
      This was coded by{" "}
      <a href="https://github.com/steph-sketch850">Stephanie Rodriguez</a> and
      open-sourced on <br />
      <a href="https://github.com/steph-sketch850/create-react-app">
        Github
      </a>{" "}
      and hosted on{" "}
      <a href="https://66c67e7b8fbd1e0007278ef8--react-project-wthr.netlify.app/">
        Netlify
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
