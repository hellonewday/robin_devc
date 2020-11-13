import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Chat from "./components/chat/Chat";

function Routes() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
