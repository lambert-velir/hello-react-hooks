import React, {
  useContext,
  useEffect,
  useState
} from "react";
import SwapButton from "./SwapButton.jsx";
import TempValue from "./TempValue.jsx";
import cx from "classnames";
import ThemeContext from "./ThemeContext.jsx";
import {
  CELCIUS,
  convert,
  summaryString,
  otherScale
} from "./temperatureScale.js";
const propTypes = {};

const Temperature = props => {
  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState(
    CELCIUS
  );
  const width = useWindowWidth();
  const theme = useContext(
    ThemeContext
  );

  const converted = convert(
    scale,
    temp
  );
  const change =
    scale === CELCIUS ? 5 : 9;

  const summary = summaryString(
    scale,
    temp
  );
  useDocumentTitle(summary);

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
        {converted}
      </TempValue>
    </div>
  );
};

Temperature.propTypes = propTypes;
export default Temperature;

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function useWindowWidth() {
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
  }, []);
  return width;
}
