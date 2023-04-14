/**
 * Componente que va a contener un formulario para
 * autenticación de usuarios
 */

import { useState } from "react";

export const LoginForm = () => {
  const initialCredentials = {
    user: "",
    passord: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  return <div>LoginForm</div>;
};
