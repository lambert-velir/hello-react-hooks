import React, { useState } from "react";
import TempValue from "./TempValue.jsx";
import {
  CELCIUS,
  FAHRENHEIT,
  convert
} from "./temperatureScale.js";

const Temperature = props => {
  const [temp, setTemp] = useState(0);
  const change = 5;

  function handleDownClick(e) {
    setTemp(temp - change);
  }

  function handleUpClick(e) {
    setTemp(temp + change);
  }

  return (
    <div className="converter">
      <TempValue label={CELCIUS}>
        <button
          type="button"
          onClick={handleDownClick}
        >
          -{change}
        </button>
        {temp}
        <button
          type="button"
          onClick={handleUpClick}
        >
          +{change}
        </button>
      </TempValue>
      <TempValue label={FAHRENHEIT}>
        {convert(CELCIUS, temp)}
      </TempValue>
    </div>
  );
};

export default Temperature;
