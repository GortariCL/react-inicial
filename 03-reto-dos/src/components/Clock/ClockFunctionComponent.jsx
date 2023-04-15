import { useState, useEffect } from "react";
import "../../styles/clock.scss";

export const ClockFunctionComponent = (props) => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [userState, setUserState] = useState(initialState);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setUserState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad: edad,
      };
    });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {userState.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {userState.nombre} {userState.apellidos}
      </h3>
      <h1>Edad: {userState.edad}</h1>
    </div>
  );
};
