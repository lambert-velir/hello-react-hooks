import React, { useEffect } from "react";

import fairyDustCursor from "../../common/fairyDustCursor.js";
import useMouseDown from "../../common/useMouseDown.js";

const propTypes = {};

const FairyDust = props => {
  const isMouseDown = useMouseDown();

  useEffect(() => {
    if (isMouseDown) {
      fairyDustCursor.init();
      return () => fairyDustCursor.destroy();
    }
  }, [isMouseDown]);

  return <div>the mouse is {isMouseDown ? "DOWN" : "UP"}!</div>;
};

FairyDust.propTypes = propTypes;
export default FairyDust;
