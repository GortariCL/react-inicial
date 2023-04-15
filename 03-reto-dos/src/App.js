import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock/ClockClassComponent";
import { ClockFunctionComponent } from "./components/Clock/ClockFunctionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock /> */}
        <ClockFunctionComponent />
      </header>
    </div>
  );
}

export default App;
