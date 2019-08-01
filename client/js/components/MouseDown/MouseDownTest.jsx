import React from "react";
import { string } from "prop-types";
import useMouseDown from "../Todo/useMouseDown.js";
const propTypes = {};

const MouseDownTest = props => {
  const isMouseDown = useMouseDown();

  return <div>the mouse is {isMouseDown ? "DOWN" : "UP"}!</div>;
};

MouseDownTest.propTypes = propTypes;
export default MouseDownTest;
