/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-15 08:48:28
 * @LastEditors: songone
 * @LastEditTime: 2021-08-17 14:06:38
 */
import "./App.scss";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "@/layouts/index";

import Index from "@/pages/index/index";
import LoginPage from "@/pages/user/login";

import UserManagePage from "@/pages/system/userManage";
import SourcesManagePage from "./pages/system/sourcesManage";

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
              <Route path={`${path}system/sources-manage`}>
              <SourcesManagePage></SourcesManagePage>
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
