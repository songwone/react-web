import "./App.scss";

import { Switch, Route } from "react-router-dom";
import Layout from "@/layouts/index";

import Index from "@/pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/a">
          <Index></Index>
        </Route>
        <Route path="/">
        <Layout>
          123456
        </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
