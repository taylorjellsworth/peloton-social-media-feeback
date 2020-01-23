import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Main/Home";
import RetreivedPosts from "./Api/RetreivedPosts";

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:product/:socialMedia" component={RetreivedPosts} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default Routes;
