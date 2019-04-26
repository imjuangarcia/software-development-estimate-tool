import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BudgetPicker from "./BudgetPicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BudgetPicker} />
      <Route path="/budget/:budgetId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
