import React from "react";

const Meme = props => {
  return (
    <div className="meme-editor">
      <div className="meme-editor__controls">
        <label>
          <div>Text</div>
          <input type="text" />
        </label>
      </div>
      <div className="meme-editor__meme">
        <div className="meme">
          <div className="meme__text-top">some meme text</div>
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
