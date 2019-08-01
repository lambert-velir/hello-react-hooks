import React, { useState, useEffect } from "react";
// import { } from "prop-types";
import fairyDustCursor from "./fairyDustCursor.js";
import useMouseDown from "./useMouseDown.js";

const propTypes = {};

const LOCALSTORAGE_KEY = "poo";

const Step01 = props => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const isMouseDown = useMouseDown();

  const handleSubmit = e => {
    e.preventDefault();
    setItems([value, ...items]);
    setValue("");
  };

  const removeItem = itemToRemove => {
    setItems(items.filter(item => item && item !== itemToRemove));
  };

  useEffect(() => {
    const items = localStorage.getItem(LOCALSTORAGE_KEY);

    if (items) {
      setItems(JSON.parse(items));
    }
  }, []);

  useEffect(
    () => {
      document.title = `${items.length} items!`;
      console.log("hi");
    },
    [items.length]
  );

  useEffect(
    () => {
      if (isMouseDown) {
        fairyDustCursor.init();
        return () => fairyDustCursor.destroy();
      }
    },
    [isMouseDown]
  );

  useEffect(
    () => {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(items));
    },
    [items]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {items.map((item, i) => {
        return (
          <div key={i} onClick={() => removeItem(item)}>
            {item}
          </div>
        );
      })}
    </form>
  );
};

Step01.propTypes = propTypes;
export default Step01;
