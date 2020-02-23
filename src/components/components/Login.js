import React, { useEffect, useState } from 'react';

import Loading from './Loading';

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(props.user.uid !== null) {
      setLoading(true);
      setTimeout(() => {
        props.history.push('/create');
      }, 1000);
    }
  }, [props.history, props.user.uid]);

  return (
    <React.Fragment>
      <section className="tasks">
        { loading === true ? <Loading /> : '' }
        <h1>
        Admin Area:
          {' '}
          <strong>Login</strong>
        </h1>
        <p>Sign in to create an estimate</p>
        <React.Fragment>
          <button type="button" className="github" onClick={() => props.authenticate('Github')}>
          Log in with GitHub
          </button>
          <button type="button" className="twitter" onClick={() => props.authenticate('Twitter')}>
          Log in with Twitter
          </button>
          <button
            type="button"
            className="facebook"
            onClick={() => props.authenticate('Facebook')}
          >
          Log in with Facebook
          </button>
        </React.Fragment>
      </section>
    </React.Fragment>
  );
}

export default Login;
