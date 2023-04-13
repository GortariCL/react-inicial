import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/Greeting";
import GreetingF from "./components/pure/GreetingF";
import TaskList from "./components/container/TaskList";

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
        <TaskList />
      </header>
    </div>
  );
}

export default App;
