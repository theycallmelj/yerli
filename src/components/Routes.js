import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./Feed";
import Map from "./Map";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      {/* <Route exact path="/map">
        <Map />
      </Route> */}
    </Switch>
  );
}
