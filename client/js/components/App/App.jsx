import React from "react";
import TruncateClass from "../Truncate/TruncateClass.jsx";
import Truncate from "../Truncate/Truncate.jsx";

const App = props => {
  return (
    <div>
      <TruncateClass
        text={
          "Truncate Class: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in illo magni dolores necessitatibus. Aliquid eveniet voluptas neque, tenetur veniam possimus fugiat ab repellendus. Nobis labore accusamus nam, consectetur sed."
        }
      />
      <br />
      <br />
      <br />
      <Truncate
        text={
          "Truncate Hooks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in illo magni dolores necessitatibus. Aliquid eveniet voluptas neque, tenetur veniam possimus fugiat ab repellendus. Nobis labore accusamus nam, consectetur sed."
        }
      />
    </div>
  );
};

export default App;
