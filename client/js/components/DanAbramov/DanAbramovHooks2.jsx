import React, { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth.js";

const propTypes = {};

const DanAbramovHooks = props => {
  const [firstName, setFirstName] = useState("Mary");
  const [lastName, setLastName] = useState("Poppins");

  useEffect(() => {
    document.title = `${firstName} ${lastName}`;
  });

  const windowWidth = useWindowWidth();

  const handleFirstNameChange = e => setFirstName(e.target.value);
  const handleLastNameChange = e => setLastName(e.target.value);

  return (
    <div>
      <label>
        <div>First Name</div>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        <div>Last Name</div>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        <div>Window Width</div>
        {windowWidth}
      </label>
    </div>
  );
};

DanAbramovHooks.propTypes = propTypes;
export default DanAbramovHooks;
