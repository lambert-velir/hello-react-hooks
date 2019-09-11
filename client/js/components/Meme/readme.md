# Tasks

#### 1. **useState**

_Task:_ Add ability to change the text with the `<input />`

- ```javascript
  import React, { useState } from "react";
  ```
- Make the input a _controlled component_.
  - https://reactjs.org/docs/forms.html#controlled-components
  - Give the `<input />` a `value` and `onChange` prop
- render the value of the input in the
  ```javascript
  <div className="meme__text-top">
  ```

#### 2. **useState**

_Task:_ Add another input for the "bottom text"

```javascript
<label>
  <div>Bottom Text</div>
  <input type="text" value={"..."} onChange={e => {}} />
</label>
```

```javascript
<div className="meme__text-bottom">
```

#### 3. **useEffect**

_Task:_ Save the `textTop` and `textBottom` values to `localStorage`

- ```javascript
  import React, { useEffect } from "react";
  ```
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Make sure to initialize your state from `localStorage` (https://reactjs.org/docs/hooks-reference.html#usestate)

#### 4. **useState** + **useEffect**

_Task:_ Detect if the user's mouse is down

- Store a boolean in state
- use the window "mousedown" and "mouseup" events
- remember to "clean up" https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
- use the `classnames` packages to add a classname of `meme--trippy` to the meme when the mouse is down

  - https://github.com/JedWatson/classnames

  ```javascript
  import cx from "classnames";
  ```

  ```javascript
  <div className={cx("meme", { "meme--trippy": isMouseDown })}>
  ```

#### 5. Custom hook

_Task:_ make useMouseDown hook

- abstract out the code to detect if the mouse is down into it's own custom hook function.
- usage:
  - ```javascript
    const isMouseDown = useMouseDown();
    ```
  - https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook

#### 6. **useEffect** with dependency array

_Task:_ Apply the fairy dust when the user's mouse is down

- ```javascript
  import fairyDustCursor from "../../common/fairyDustCursor.js";
  ```
- `fairyDustCursor.init()` will show fairy dust when the mouse moves
- `fairyDustCursor.destroy()`
