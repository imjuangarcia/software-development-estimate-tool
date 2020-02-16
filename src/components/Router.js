import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateEstimateForm from './components/CreateEstimateForm';
import Auth from './Auth';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route exact path="/create/" component={CreateEstimateForm} />
      <Route path="/estimate/:estimateId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
