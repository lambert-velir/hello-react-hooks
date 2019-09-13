import React, { useState } from "react";
import TempValue from "./TempValue.jsx";
import SwapButton from "./SwapButton.jsx";
import {
  CELCIUS,
  convert,
  otherScale
} from "./temperatureScale.js";

const Temperature = props => {
  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState(
    CELCIUS
  );

  const change =
    scale === CELCIUS ? 5 : 9;

  function handleDownClick(e) {
    setTemp(temp - change);
  }

  function handleUpClick(e) {
    setTemp(temp + change);
  }

  function handleSwapClick(e) {
    setTemp(convert(scale, temp));
    setScale(otherScale(scale));
  }

  return (
    <div className="converter">
      <TempValue label={scale}>
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
      <SwapButton
        onClick={handleSwapClick}
      />
      <TempValue
        label={otherScale(scale)}
      >
        {convert(scale, temp)}
      </TempValue>
    </div>
  );
};

export default Temperature;
