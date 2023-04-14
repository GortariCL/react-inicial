/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import { useState, useContext, createContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

const Componente3 = () => {
  return <div></div>;
};

export const MiComponenteonContexto = () => {
  const initialState = { token: "1234567", sesion: 1 };

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(initialState);

  const actualizarSesion = () => {
    const random = Math.floor(Math.random() * Date.now());
    setSessionData({
      token: `JWT${random}`,
      sesion: sessionData.sesion + 1,
    });
  };

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
      {/* Además, si se actualiza, los componentes de aquí, también lo actualizan  */}
      <h1>*** Ejemplo de useState y useContext ***</h1>
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
};
