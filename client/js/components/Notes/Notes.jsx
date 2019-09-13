import React from "react";

const Notes = props => {
  return (
    <div>
      <h2>Dan Abromov in video</h2>
      <ol>
        <li>
          1. <strong>useState</strong> - make firstname controlled
        </li>
        <li>
          2. <strong>2nd useState</strong> - make lastname controlled
        </li>
        <li>
          <strike>
            3. <strong>useContext</strong> - demostrates render props
          </strike>
        </li>
        <li>
          3. <strong>useEffect - no cleanup</strong> - update document
          title
        </li>
        <li>
          4. <strong>useEffect - cleanup</strong> - use window width
        </li>
        <li>
          5. <strong>custom hook</strong> - useWindowWidth
        </li>
        <li>
          6. <strong>custom hook with params</strong> -
          useDocumentTitle
        </li>
        <li>
          <strong>custom hook with params</strong> - useFormInput
        </li>
      </ol>
      <h2>Temperature App</h2>
      <ol>
        <li>
          1. <strong>useState</strong> - store celcius, add buttons
        </li>
        <li>
          2. <strong>2nd useState</strong> - store scale, swap button
        </li>
        <li>
          2.1<strong>rules of hooks slide</strong>
        </li>
        <li>
          3.<strong>useContext</strong> ThemeContext
        </li>
        <li>
          3.1<strong>useEffect - no cleanup</strong> - update document
          title (no dependency array yet)
        </li>
        <li>
          4. <strong>useEffect - cleanup</strong>
          <br />- use window width
          <br />- demostrate the need for empty dependency array
          <br />- show that document title useEffect should have
          dependency array
          <br />- illustrate that the dep array is just like the
          contents of a DOM element
        </li>

        <li>
          5. <strong>custom hook</strong> - useWindowWidth
        </li>
        <li>
          6. <strong>custom hook with params</strong> -
          useDocumentTitle
        </li>
      </ol>
      <h2>Meme App</h2>
      <ol>
        <li>
          1. <strong>useState</strong> - Top text input
        </li>
        <li>
          2. <strong>2nd useState</strong> - Bottom text input
        </li>
        <li>
          3. <strong>useEffect - no cleanup</strong> - Save to
          localStorage
        </li>
        <li>
          4. <strong>useEffect - cleanup</strong> - is mouse down
          (useState/useEffect)
        </li>
        <li>
          5. <strong>custom hook</strong> - useMouseDown
        </li>
        <li>
          6. <strong>useEffect with dependency array</strong> - fairy
          dust on mouse down
        </li>
      </ol>
      {/* <h2>Ideas</h2>

      <h3>State</h3>
      <ul>
        <li>Counter &lt;&lt; lesson</li>
        <li>text input (form) &lt;&lt; exercise</li>
        <li>truncate?</li>
      </ul>

      <h3>Multiple useState calls</h3>
      <ul>
        <li>Counter increment amount &lt;&lt; lesson</li>
        <li>lastname of form &lt;&lt; exercise</li>
      </ul>

      <h3>Effects - no clean up</h3>
      <ul>
        <li>document.title (name from form) &lt;&lt; exercise</li>
        <li>local storage</li>
        <li>fetch data?</li>
      </ul>

      <h3>Effects - clean up</h3>
      <ul>
        <li>fairy dust &lt;&lt; exercise</li>
        <li>resize listener?</li>
      </ul>

      <h3>Custom hooks</h3>
      <ul>
        <li>getWindowWidth</li>
        <li>useMouseDown</li>
      </ul> */}
    </div>
  );
};

export default Notes;
