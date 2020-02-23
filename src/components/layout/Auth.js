import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from '../components/Login';

const Auth = (props) => (
  <Fragment>
    <Header history={props.history} user={props.user} logout={props.logout} />
    <Login history={props.history} user={props.user} authenticate={props.authenticate} />
    <Footer />
  </Fragment>
);

export default Auth;
