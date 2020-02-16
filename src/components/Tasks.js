import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import Login from "./components/Login";
import base, { firebaseApp } from "../firebase";

class Tasks extends React.Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    loadSampleTasks: PropTypes.func.isRequired
  };

  render() {
    const logout = (
      <button className="logout" onClick={this.logout}>
        Log Out
      </button>
    );
    // check if they're logged in
    // if (!this.state.uid) {
    //   return <Login authenticate={this.authenticate} />;
    // }

    // Check if they're not the owner of the estimate
    // if (this.state.uid !== this.state.owner) {
    //   return (
    //     <section className="tasks">
    //       <h1>Admin Area</h1>
    //       <h2>Sorry, you're not the owner</h2>
    //       <p>
    //         That means that you have read-only access to this estimate. If you
    //         want to suggest editions, please contact the author.
    //       </p>
    //       {logout}
    //     </section>
    //   );
    // }

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
            addToEstimate={this.props.addToEstimate}
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
