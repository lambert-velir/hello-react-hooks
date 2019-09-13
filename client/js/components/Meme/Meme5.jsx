import React, { useEffect, useState } from "react";
import cx from "classnames";

const Meme = props => {
  const [topText, setTopText] = useState(localStorage.getItem("topText") || "");
  const [bottomText, setBottomText] = useState(
    localStorage.getItem("bottomText") || ""
  );

  useEffect(() => {
    localStorage.setItem("topText", topText);
    localStorage.setItem("bottomText", bottomText);
  }, [bottomText, topText]);

  const isMouseDown = useMouseDown();

  return (
    <div className="meme-editor">
      <div className="meme-editor__controls">
        <label>
          <div>Top Text</div>
          <input
            type="text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
        </label>
        <label>
          <div>Bottom Text</div>
          <input
            type="text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
        </label>
      </div>
      <div className="meme-editor__meme">
        <div className={cx("meme", { "meme--trippy": isMouseDown })}>
          <div className="meme__text-top">{topText}</div>
          <div className="meme__text-bottom">{bottomText}</div>
          <img
            src="img/squirrel.jpg"
            alt="Joseph with a squirrel on his shoulder"
          />
        </div>
      </div>
    </div>
  );
};

export default Meme;

function useMouseDown() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseDown = e => setIsMouseDown(true);
    const handleMouseUp = e => setIsMouseDown(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return isMouseDown;
}
