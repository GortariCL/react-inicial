import { useState } from "react";

export const ColorBox = () => {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  };

  const stopColorChange = () => {
    setColor("black");
  };

  const handleDoubleClick = () => {
    document.removeEventListener("mouseover", changeColor);
  };

  return (
    <div
      style={{
        width: "255px",
        height: "255px",
        backgroundColor: color,
      }}
      onMouseEnter={() => {
        document.addEventListener("mouseover", changeColor);
      }}
      onMouseLeave={() => {
        document.removeEventListener("mouseover", changeColor);
        stopColorChange();
      }}
      onDoubleClick={handleDoubleClick}
    />
  );
};
