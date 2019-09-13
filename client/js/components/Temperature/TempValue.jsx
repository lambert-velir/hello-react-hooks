import React from "react";
import { node, string } from "prop-types";

const propTypes = {
  label: string.isRequired,
  children: node.isRequired
};

const TempValue = props => {
  const { label, children } = props;
  return (
    <div className="temp-value">
      <div className="temp-value__label">{label}</div>
      <div className="temp-value__value">{children}</div>
    </div>
  );
};

TempValue.propTypes = propTypes;
export default TempValue;
