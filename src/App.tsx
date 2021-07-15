import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Index from "@/pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/a">
          <Index></Index>
        </Route>
        <Route path="/">12334565465</Route>
      </Switch>
    </div>
  );
}

export default App;
