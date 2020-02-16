import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EstimateForm from './EstimateForm';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={EstimateForm} />
      <Route path="/estimate/:estimateId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
