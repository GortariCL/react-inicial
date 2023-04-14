import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/Greeting";
import GreetingF from "./components/pure/GreetingF";
import TaskList from "./components/container/TaskList";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import { MiComponenteonContexto } from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Fernando" /> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Fernando" /> */}
        {/* Componente de listado de tareas */}
        {/* <TaskList /> */}
        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteonContexto /> */}
        <Ejemplo4 nombre="Fernando">
          {/* Todo lo que hay aquí, es tratado como props.children | children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;