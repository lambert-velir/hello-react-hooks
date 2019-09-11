import React, { useEffect, useState } from "react";

const propTypes = {};

const Meme = props => {
  const [topText, setTopText] = useState(localStorage.getItem("topText") || "");
  const [bottomText, setBottomText] = useState(
    localStorage.getItem("bottomText") || ""
  );

  useEffect(() => {
    localStorage.setItem("topText", topText);
    localStorage.setItem("bottomText", bottomText);
  }, [bottomText, topText]);

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
        <div className="meme">
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

Meme.propTypes = propTypes;
export default Meme;
