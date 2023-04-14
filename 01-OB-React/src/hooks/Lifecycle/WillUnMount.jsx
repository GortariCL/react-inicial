/**
 * Ejemplo de uso del método componenteWillUnmount para componente clase
 * Ejemplo de uso hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <h1>WillMount</h1>
      </div>
    );
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    // aquí no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WilUnmount</h1>
    </div>
  );
};
