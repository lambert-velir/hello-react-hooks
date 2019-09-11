# Tasks

1. Add ability to change the text with the `<input />`

- `import React, { useState } from "react";`
- Make the input a _controlled component_.
  - https://reactjs.org/docs/forms.html#controlled-components
  - Give the `<input />` a `value` and `onChange` prop

1. Add another input for the "bottom text"

- ```javascript
  <label>
    <div>Bottom Text</div>
    <input type="text" value={"..."} onChange={e => {}} />
  </label>
  ```
- ```javascript
  <div className="meme__text-bottom">{bottomText}</div>
  ```

```

```
