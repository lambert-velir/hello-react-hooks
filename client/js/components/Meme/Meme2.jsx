import React, { useState } from "react";

const Meme = props => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

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

export default Meme;
