import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserProvider, { UserContext } from '../context/UserContext';
import CreateEstimateForm from './components/CreateEstimateForm';
import Auth from './layout/Auth';
import App from './App';
import NotFound from './layout/NotFound';

const Router = () => (
  <BrowserRouter>
    <UserProvider>
      <UserContext.Consumer>
        {context => (
        <Switch>
          <Route exact path='/' render={(props) => <Auth history={props.history} user={context.user} authenticate={context.authenticate} logout={context.logout} />} />
          <Route exact path='/create' render={(props) => <CreateEstimateForm history={props.history} user={context.user} logout={context.logout} />} />
          <Route path="/estimate/:estimateId" render={(props) => <App {...props} user={context.user} logout={context.logout} />} />
          <Route component={NotFound} />
        </Switch>
        )}
      </UserContext.Consumer>
    </UserProvider>
  </BrowserRouter>
);

export default Router;
