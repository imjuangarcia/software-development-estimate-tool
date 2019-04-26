import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EstimateCreator from "./EstimateCreator";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={EstimateCreator} />
      <Route path="/estimate/:estimateId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
