// Definiendo estilos en constantes:

import { useState } from "react";

// ? Estilo para usuario logueado
const loggedStyle = {
  color: "white",
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

export const GreetingStyled = (props) => {
  // Generamos un estado para el componente
  // y así controlar si el usuariko está o no logueado
  const [logged, setLogged] = useState(false);

  //   const greetingUser = () => <p>Hola, {props.name}</p>;
  //   const pleaseLogin = () => <p>Please Login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, {props.name}</p> : <p>Please Login</p>}
      {/* {logged ? greetingUser() : pleaseLogin()} */}
      <button
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};
