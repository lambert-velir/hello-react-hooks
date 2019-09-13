import React, {
  useContext,
  useEffect,
  useState
} from "react";
import TempValue from "./TempValue.jsx";
import SwapButton from "./SwapButton.jsx";
import { ThemeContext } from "./context.jsx";
import cx from "classnames";
import {
  CELCIUS,
  convert,
  otherScale,
  summaryString
} from "./temperatureScale.js";

const Temperature = props => {
  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState(
    CELCIUS
  );
  const theme = useContext(
    ThemeContext
  );

  const change =
    scale === CELCIUS ? 5 : 9;

  useEffect(() => {
    document.title = summaryString(
      scale,
      temp
    );
  });

  const [width, setWidth] = useState(
    window.innerWidth
  );
  useEffect(() => {
    const handleResize = e => {
      setWidth(window.innerWidth);
    };
    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  });

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
    <div
      className={cx(
        "converter",
        theme,
        {
          "converter--vertical":
            width < 520
        }
      )}
    >
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
