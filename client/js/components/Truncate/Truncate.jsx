import React, { useState } from "react";
import { number, string } from "prop-types";

const propTypes = {
  text: string.isRequired,
  maxLength: number
};

const defaultProps = {
  maxLength: 32
};

const Truncate = props => {
  const { text, maxLength } = props;

  const [isHidden, setIsHidden] = useState(false);

  return (
    <span>
      {isHidden ? text.substr(0, maxLength) : text}
      {isHidden && text.length > maxLength ? (
        <button type="button" onClick={() => setIsHidden(false)}>
          show more
        </button>
      ) : (
        <button type="button" onClick={() => setIsHidden(true)}>
          show less
        </button>
      )}
    </span>
  );
};

Truncate.propTypes = propTypes;
Truncate.defaultProps = defaultProps;
export default Truncate;
