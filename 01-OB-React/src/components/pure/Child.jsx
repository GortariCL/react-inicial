import React, { useRef } from "react";

export const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  const pressButton = () => {
    const text = messageRef.current.value;
    alert(`Text in input ${text}`);
  };

  const pressButtonParams = (text) => {
    alert(`Text: ${text}`);
  };

  const submitName = (e) => {
    e.preventDefault();
    update(nameRef.current.value);
  };

  return (
    <div style={{ backgroundColor: "cyan", padding: "30px" }}>
      <p onMouseOver={() => console.log("On mouse over")}>Hello, {name}</p>
      <button onClick={() => console.log("Pressed Button 1")}>Botón 1</button>
      <button onClick={pressButton}>Botón 2</button>
      <button onClick={() => pressButtonParams(`Hello ${name}`)}>
        Botón 3
      </button>
      <input
        placeholder="Send a text to your father"
        onFocus={() => console.log("INPUT FOCUSED")}
        onChange={(e) => console.log("Input change: ", e.target.value)}
        onCopy={() => console.log("Copied text from input")}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>

      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name" />
          <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
};
