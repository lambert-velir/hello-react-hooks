import React from "react";
import ReactDOM from "react-dom";

import Notes from "./components/Notes/Notes.jsx";
import Counter from "./components/Counter/Counter.jsx";
import DanAbramovClass from "./components/DanAbramov/DanAbramovClass.jsx";
import DanAbramovHooks1 from "./components/DanAbramov/DanAbramovHooks1.jsx";
import DanAbramovHooks2 from "./components/DanAbramov/DanAbramovHooks2.jsx";
import FairyDust from "./components/FairyDust/FairyDust.jsx";
import Meme0 from "./components/Meme/Meme0.jsx";
import Meme1 from "./components/Meme/Meme1.jsx";
import Meme2 from "./components/Meme/Meme2.jsx";
import Meme3 from "./components/Meme/Meme3.jsx";
import Meme4 from "./components/Meme/Meme4.jsx";
import Meme5 from "./components/Meme/Meme5.jsx";
import Meme6 from "./components/Meme/Meme6.jsx";

ReactDOM.render(
  <div>
    {/* <Meme0 /> */}
    {/* <Meme1 /> */}
    {/* <Meme2 /> */}
    {/* <Meme3 /> */}
    {/* <Meme4 /> */}
    {/* <Meme5 /> */}
    <Meme6 />
    <Notes />
    {/* <DanAbramovClass /> */}
    {/* <DanAbramovHooks1 /> */}
    {/* <DanAbramovHooks2 /> */}
    {/* <Counter /> */}
    {/* <FairyDust /> */}
  </div>,
  document.querySelector(".js-mount")
);
