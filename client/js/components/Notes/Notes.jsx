import React from "react";

const Notes = props => {
  return (
    <div>
      <h2>Todo app</h2>

      <h2>State</h2>
      <ul>
        <li>Counter &lt;&lt; lesson</li>
        <li>text input (form) &lt;&lt; exercise</li>
        <li>truncate?</li>
      </ul>

      <h2>Multiple useState calls</h2>
      <ul>
        <li>Counter increment amount &lt;&lt; lesson</li>
        <li>lastname of form &lt;&lt; exercise</li>
      </ul>

      <h2>Effects - no clean up</h2>
      <ul>
        <li>document.title (name from form) &lt;&lt; exercise</li>
        <li>local storage</li>
        <li>fetch data?</li>
      </ul>

      <h2>Effects - clean up</h2>
      <ul>
        <li>fairy dust &lt;&lt; exercise</li>
        <li>resize listener?</li>
      </ul>

      <h2>Custom hooks</h2>
      <ul>
        <li>getWindowWidth</li>
        <li>useMouseDown</li>
      </ul>
    </div>
  );
};

export default Notes;
