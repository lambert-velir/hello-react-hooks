import React from "react";
import TempValue from "./TempValue.jsx";
import {
  CELCIUS,
  FAHRENHEIT
} from "./temperatureScale.js";

const Temperature = props => {
  return (
    <div className="converter">
      <TempValue label={CELCIUS}>
        0
      </TempValue>
      <TempValue label={FAHRENHEIT}>
        32
      </TempValue>
    </div>
  );
};

export default Temperature;
