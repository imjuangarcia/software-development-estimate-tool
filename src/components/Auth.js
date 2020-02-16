import React, { Fragment } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './components/Login';

const Auth = (props) => (
  <Fragment>
    <Header />
    <Login history={props.history} />
    <Footer />
  </Fragment>
);

export default Auth;
