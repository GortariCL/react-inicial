/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "Fernando",
    email: "fernando.gortari@gmail.com",
  };

  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean
   * parte del estado del componente para así poder gestionar su cambio
   * y que éste se vea reflejado en la vista del componente
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para actualizar el estado privado que contiene el contador
   */
  const incrementarContador = () => {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  };

  /**
   * Función para actualizar el estado de persona en el componente
   */
  const actualizarPersona = () => {
    setPersona({
      nombre: "Juan",
      email: "juan@gmail.com",
    });
  };

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>EMAIL: {persona.email}</h3>
      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
