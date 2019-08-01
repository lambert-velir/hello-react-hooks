import React from "react";
import ReactDOM from "react-dom";

import Notes from "./components/Notes/Notes.jsx";
import Counter from "./components/Counter/Counter.jsx";
import FairyDust from "./components/FairyDust/FairyDust.jsx";

ReactDOM.render(
  <div>
    <Notes />
    <Counter />
    {/* <FairyDust /> */}
  </div>,
  document.querySelector(".js-mount")
);
