import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Tasks extends React.Component {
  static propTypes = {
    tasks: PropTypes.object,
    updateTask: PropTypes.func,
    deleteTask: PropTypes.func,
    loadSampleTasks: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    // Look up the current estimate on database
    const estimate = await base.fetch(this.props.estimateId, { context: this });
    // Claim it if there is no owner
    if (!estimate.owner) {
      // Save it
      await base.post(`${this.props.estimateId}/owner`, {
        data: authData.user.uid
      });
    }
    // Set the state of the inventory to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: estimate.owner || authData.user.uid
    });
    this.props.propagateAuthState(this.state);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out</button>;
    // check if they're logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // Check if they're not the owner of the estimate
    if (this.state.uid !== this.state.owner) {
      return (
        <section className="tasks">
          <h1>Admin Area</h1>
          <h2>Sorry, you're not the owner</h2>
          <p>
            That means that you have read-only access to this estimate. If you
            want to suggest editions, please contact the author.
          </p>
          {logout}
        </section>
      );
    }

    // They must be the owner
    return (
      <section className="tasks edit">
        <div className="title">
          <h2>Tasks</h2>
          {logout}
        </div>
        {Object.keys(this.props.tasks).map(key => (
          <EditTaskForm
            key={key}
            index={key}
            task={this.props.tasks[key]}
            updateTask={this.props.updateTask}
            deleteTask={this.props.deleteTask}
          />
        ))}
        <h3>Add a New Task</h3>
        <AddTaskForm addTask={this.props.addTask} />
        <button className="sample" onClick={this.props.loadSampleTasks}>
          Load Sample Tasks
        </button>
      </section>
    );
  }
}

export default Tasks;
