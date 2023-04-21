import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/Greeting";
import GreetingF from "./components/pure/GreetingF";
import TaskList from "./components/container/TaskList";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import { MiComponenteConContexto } from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import { GreetingStyled } from "./components/pure/GreetingStyled";
import { Father } from "./components/container/Father";
import { OptionalRender } from "./components/pure/OptionalRender";
import { LoginFormik } from "./components/pure/forms/LoginFormik";
import { RegisterFormik } from "./components/pure/forms/RegisterFormik";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Fernando" /> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="Fernando" /> */}
      {/* Componente de listado de tareas */}
      {/* Ejemplo de uso de HOOKS */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto /> */}
      {/* <Ejemplo4 nombre="Fernando"> */}
      {/* Todo lo que hay aquí, es tratado como props.children | children */}
      {/* <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Fernando" /> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father /> */}

      {/* Ejemplo de Renderizado condicional */}
      {/* <OptionalRender /> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik /> */}
      <RegisterFormik />

      {/* PROYECTO FINAL */}
      {/* <TaskList /> */}
    </div>
  );
}

export default App;
