import React from "react";
import ReactDOM from "react-dom";

import Notes from "./components/Notes/Notes.jsx";
import Counter from "./components/Counter/Counter.jsx";
import DanAbramovClass from "./components/DanAbramov/DanAbramovClass.jsx";
import DanAbramovHooks1 from "./components/DanAbramov/DanAbramovHooks1.jsx";
import DanAbramovHooks2 from "./components/DanAbramov/DanAbramovHooks2.jsx";
import FairyDust from "./components/FairyDust/FairyDust.jsx";
import Meme from "./components/Meme/Meme.jsx";

ReactDOM.render(
  <div>
    <Meme />
    {/* <DanAbramovClass /> */}
    {/* <DanAbramovHooks1 /> */}
    {/* <DanAbramovHooks2 /> */}
    {/* <Notes /> */}
    {/* <Counter /> */}
    {/* <FairyDust /> */}
  </div>,
  document.querySelector(".js-mount")
);
