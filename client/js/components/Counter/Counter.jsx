import React, { useState } from "react";
import {} from "prop-types";

const propTypes = {};

const Counter = props => {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={incrementAmount}
        onChange={e => setIncrementAmount(parseInt(e.target.value))}
      />
      <br />
      <button type="button" onClick={() => setCount(c => c + incrementAmount)}>
        +{incrementAmount}
      </button>
      <button type="button" onClick={() => setCount(c => c - incrementAmount)}>
        -{incrementAmount}
      </button>

      <br />
      <button type="button" onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};

Counter.propTypes = propTypes;
export default Counter;
