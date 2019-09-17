import React from "react";

const Notes = props => {
  return (
    <div>
      <h2>Dan Abromov in video</h2>
      <ol>
        <li>
          <strong>useState</strong> - make firstname controlled
        </li>
        <li>
          <strong>2nd useState</strong> - make lastname controlled
        </li>
        <li>
          <strike>
            <strong>useContext</strong> - demostrates render props
          </strike>
          <br />
          <strong>useEffect - no cleanup</strong> - update document
          title
        </li>

        <li>
          <strong>useEffect - cleanup</strong> - use window width
        </li>
        <li>
          <strong>custom hook</strong> - useWindowWidth
        </li>
        <li>
          <strong>custom hook with params</strong> - useDocumentTitle
        </li>
        <li>
          <strong>custom hook with params</strong> - useFormInput
        </li>
      </ol>
      <h2>Temperature App</h2>
      <ol>
        <li>
          <strong>useState</strong> - store celcius, add buttons
        </li>
        <li>
          <strong>2nd useState</strong> - store scale, swap button
        </li>
        <li>
          <strong>useEffect - no cleanup</strong>
          <br />- first show <strong>useContext</strong> ThemeContext
          <br />- update document title (no dependency array yet)
        </li>
        <li>
          <strong>useEffect - cleanup</strong>
          <br />- story window width and use to add
          converter--vertical &lt; 520
          <br />- show classnames package
          <br />- demostrate the need for empty dependency array
          <br />- show that document title useEffect should have
          dependency array
          <br />- illustrate that the dep array is just like the
          contents of a DOM element
        </li>

        <li>
          <strong>Custom hooks</strong>
          <br /> - useWindowWidth
          <br />- with params, useDocumentTitle
        </li>
      </ol>
      <h2>Meme App</h2>
      <ol>
        <li>
          <strong>useState</strong> - Top text input
        </li>
        <li>
          <strong>2nd useState</strong> - Bottom text input
        </li>
        <li>
          <strong>useEffect - no cleanup</strong> - Save to
          localStorage
        </li>
        <li>
          <strong>useEffect - cleanup</strong> - is mouse down
          (useState/useEffect)
        </li>
        <li>
          <strong>custom hook</strong> - useMouseDown
        </li>
        <li>
          <strong>useEffect with dependency array</strong> - fairy
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
