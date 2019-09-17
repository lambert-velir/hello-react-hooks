import React from "react";
import ReactDOM from "react-dom";

import Notes from "./components/Notes/Notes.jsx";
// import DanAbramovClass from "./components/DanAbramov/DanAbramovClass.jsx";
// import DanAbramovHooks1 from "./components/DanAbramov/DanAbramovHooks1.jsx";
// import DanAbramovHooks2 from "./components/DanAbramov/DanAbramovHooks2.jsx";
import Meme from "./components/Meme/Meme.jsx";
// import Meme0 from "./components/Meme/Meme0.jsx";
// import Meme1 from "./components/Meme/Meme1.jsx";
// import Meme2 from "./components/Meme/Meme2.jsx";
// import Meme3 from "./components/Meme/Meme3.jsx";
// import Meme4 from "./components/Meme/Meme4.jsx";
// import Meme5 from "./components/Meme/Meme5.jsx";
// import Meme6 from "./components/Meme/Meme6.jsx";
import Temperature from "./components/Temperature/Temperature.jsx";
// import Temperature0 from "./components/Temperature/Temperature0.jsx";
// import Temperature1 from "./components/Temperature/Temperature1.jsx";
// import Temperature2 from "./components/Temperature/Temperature2.jsx";
// import Temperature3 from "./components/Temperature/Temperature3.jsx";
// import Temperature4 from "./components/Temperature/Temperature4.jsx";
// import Temperature5 from "./components/Temperature/Temperature5.jsx";
// import Temperature6 from "./components/Temperature/Temperature6.jsx";
import TemperatureClass from "./components/Temperature/TemperatureClass.jsx";
// import TemperatureClass1 from "./components/Temperature/TemperatureClass1.jsx";
// import TemperatureClass2 from "./components/Temperature/TemperatureClass2.jsx";
// import TemperatureClass3 from "./components/Temperature/TemperatureClass3.jsx";
// import TemperatureClass4 from "./components/Temperature/TemperatureClass4.jsx";

import ThemeContext from "./components/Temperature/ThemeContext.jsx";

ReactDOM.render(
  <div className="container">
    <div className="class-example">
      <ThemeContext.Provider value="converter--class">
        {/* <TemperatureClass1 /> */}
        {/* <TemperatureClass2 /> */}
        {/* <TemperatureClass3 /> */}
        {/* <TemperatureClass4 /> */}
        <TemperatureClass />
      </ThemeContext.Provider>
    </div>

    <div className="hooks-example">
      <ThemeContext.Provider value="converter--hooks">
        {/* <Temperature0 /> */}
        {/* <Temperature1 /> */}
        {/* <Temperature2 /> */}
        {/* <Temperature3 /> */}
        {/* <Temperature4 /> */}
        {/* <Temperature5 /> */}
        {/* <Temperature6 /> */}
        <Temperature />
      </ThemeContext.Provider>
    </div>

    <div className="meme-example">
      {/* <Meme0 /> */}
      {/* <Meme1 /> */}
      {/* <Meme2 /> */}
      {/* <Meme3 /> */}
      {/* <Meme4 /> */}
      {/* <Meme5 /> */}
      {/* <Meme6 /> */}
      <Meme />
    </div>
    {/* <Notes /> */}
    {/* <DanAbramovClass /> */}
    {/* <DanAbramovHooks1 /> */}
    {/* <DanAbramovHooks2 /> */}
  </div>,
  document.querySelector(".js-mount")
);
