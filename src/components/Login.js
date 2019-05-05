import React from "react";
import PropTypes from "prop-types";

const Login = props => {
  return (
    <section className="tasks">
      <h1>
        Admin Area: <strong>Login</strong>
      </h1>
      <p>Sign in to manage the tasks on this estimate</p>
      <button className="github" onClick={() => props.authenticate("Github")}>
        Log in with GitHub
      </button>
      <button className="twitter" onClick={() => props.authenticate("Twitter")}>
        Log in with Twitter
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Log in with Facebook
      </button>
    </section>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
