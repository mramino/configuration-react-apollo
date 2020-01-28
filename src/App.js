import React from "react";
import logo from "./logo.svg";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./containers/Home/Home";
import "./bootstrap.min.css";
import "antd/dist/antd.css";
import Layout from "./components/layout/layout";
import SinglePost from "./containers/SinglePost/SinglePost";
import User from "./containers/User/User";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:postId" component={SinglePost} />
          <Route exact path="/user/:userId" component={User} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
