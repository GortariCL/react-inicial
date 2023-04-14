import { useState } from "react";

export const RegisterForm = () => {
  const initialData = {
    user: "",
    name: "",
    enami: "",
    passord: "",
  };

  const [data, setData] = useState(initialData);

  return <div>RegisterForm</div>;
};
