import React, { useState } from "react";
import { Child } from "../pure/Child";

export const Father = () => {
  const [name, setName] = useState("Fernando");
  const showMessage = (text) => {
    alert(`Message received: ${text}`);
  };

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <div style={{ backgroundColor: "tomato", padding: "10px" }}>
      <Child name={name} send={showMessage} update={updateName} />
    </div>
  );
};
