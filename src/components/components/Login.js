import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase";

import { firebaseApp } from '../../firebase';

class Login extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    this.setState({
      uid: authData.user.uid,
      owner: authData.user.uid
    });
    setTimeout(() => {
      const auth = this.state;
      this.props.history.push({ pathname: `/create/`, auth });
    }, 1000);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    return (
      <section className="tasks">
        <h1>
        Admin Area:
          {' '}
          <strong>Login</strong>
        </h1>
        <p>Sign in to create an estimate</p>
        <button type="button" className="github" onClick={() => this.authenticate('Github')}>
        Log in with GitHub
        </button>
        <button type="button" className="twitter" onClick={() => this.authenticate('Twitter')}>
        Log in with Twitter
        </button>
        <button
          type="button"
          className="facebook"
          onClick={() => this.authenticate('Facebook')}
        >
        Log in with Facebook
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
