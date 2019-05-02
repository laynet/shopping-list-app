import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontsize: "200px"
  };
  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
