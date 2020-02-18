import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from '../components/Login';

const Auth = (props) => (
  <Fragment>
    <Header history={props.history} />
    <Login history={props.history} />
    <Footer />
  </Fragment>
);

export default Auth;
