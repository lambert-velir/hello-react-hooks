# Tasks

#### 1. **useState**

_Task:_ Add the ability to change the text with the `<input />`.

- ```javascript
  import React, { useState } from "react";
  ```
- Make the input a _controlled component_.
  - By giving the `<input />` a `value` and `onChange` prop.
  - https://reactjs.org/docs/forms.html#controlled-components
- Render the value of the input in the `meme__text-top` div.
  ```javascript
  <div className="meme__text-top">
  ```

#### 2. **useState**

_Task:_ Add another input for the bottom text and render in a new div.

```javascript
<label>
  <div>Bottom Text</div>
  <input type="text" />
</label>
```

```javascript
  <div className="meme__text-bottom">
```

#### 3. **useEffect**

_Task:_ Save the top/bottom text values to `localStorage`.

- ```javascript
  import React, { useEffect, useState } from "react";
  ```
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Make sure to initialize the text states from `localStorage`.
  - https://reactjs.org/docs/hooks-reference.html#usestate

#### 4. **useState** + **useEffect**

_Task:_ Detect if the user's mouse is down.

- Store a boolean in state.
- Use the `window` `mousedown` and `mouseup` events.
- Remember to "clean up"
  - https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
- Use the `classnames` packages to add a classname of `meme--trippy` to the meme when the mouse is down
  - https://github.com/JedWatson/classnames
  ```javascript
  import cx from "classnames";
  ```
  ```javascript
  <div className={cx("meme", { "meme--trippy": isMouseDown })}>
  ```

#### 5. Custom hook

_Task:_ Make a `useMouseDown` custom hook.

- Abstract out the code to detect if the mouse is down into it's own custom hook function.
- Usage:
  - ```javascript
    const isMouseDown = useMouseDown();
    ```
  - https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook

#### 6. **useEffect** with dependency array

_Task:_ Apply the fairy dust when the user's mouse is down.

- ```javascript
  import fairyDustCursor from "../../common/fairyDustCursor.js";
  ```
- `fairyDustCursor.init()` will show fairy dust when the mouse moves.
- `fairyDustCursor.destroy()` will remove the mouse move listener.
- The fairy dust should only be active when the mouse is _down_.
- Keep an eye on the console for warnings from the fairy dust code.
