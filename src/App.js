import React from "react";
import logo from "./logo.svg";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./containers/Home/Home";
import "./bootstrap.min.css"
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </Layout>
  );
}

export default App;
