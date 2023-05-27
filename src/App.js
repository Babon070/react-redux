import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Index from "./components/header/Header";
import Routes from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Index />
      <Routes />
    </div>
  );
}

export default App;
