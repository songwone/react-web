/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-15 08:48:28
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 16:36:03
 */
import "./App.scss";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "@/layouts/index";

import Index from "@/pages/index";
import LoginPage from "@/pages/user/login";

import UserManagePage from "@/pages/system/userManage";

function App() {
  let { path } = useRouteMatch();
  console.log("🚀 ~ file: App.tsx ~ line 10 ~ App ~ path", path);
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/">
          <Layout>
            <Switch>
              <Route path={`${path}system/user-manage`}>
                <UserManagePage></UserManagePage>
              </Route>
              <Route path={`${path}111`}>
                <div>11111111111</div>
              </Route>
              <Route exact path={`/`}>
                <Index></Index>
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
