import React, { useEffect } from "react";

import fairyDustCursor from "./fairyDustCursor.js";
import useMouseDown from "./useMouseDown.js";

const propTypes = {};

const FairyDust = props => {
  const isMouseDown = useMouseDown();

  useEffect(
    () => {
      if (isMouseDown) {
        fairyDustCursor.init();
        return () => fairyDustCursor.destroy();
      }
    },
    [isMouseDown]
  );

  return <div>the mouse is {isMouseDown ? "DOWN" : "UP"}!</div>;
};

FairyDust.propTypes = propTypes;
export default FairyDust;
