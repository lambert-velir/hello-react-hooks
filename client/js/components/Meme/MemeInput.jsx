import React from "react";

export default function MemeInput(props) {
  const { label, ...otherProps } = props;
  return (
    <label>
      <div>Top Text</div>
      <input type="text" {...otherProps} />
    </label>
  );
}
