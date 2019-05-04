import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Estimate from "./Estimate";
import Client from "./Client";
import Tasks from "./Tasks";
import Task from "./Task";
import sampleTasks from "../sample-tasks";
import base from "../base";

class App extends React.Component {
  state = {
    client: {},
    tasks: {},
    estimate: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.estimateId}/tasks`, {
      context: this,
      state: "tasks"
    });

    this.ref = base.syncState(`${params.estimateId}/estimate`, {
      context: this,
      state: "estimate"
    });

    this.ref = base.syncState(`${params.estimateId}/client`, {
      context: this,
      state: "client"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTask = task => {
    // Take a copy of the existing state we'll be updating
    const tasks = { ...this.state.tasks };
    // Add new task to tasks variable
    tasks[`task${Date.now()}`] = task;

    // Set the new tasks and sections objects to state
    this.setState({
      tasks
    });
  };

  addClient = () => {
    if (this.props.location.client !== undefined) {
      this.setState({
        client: this.props.location.client
      });
    }
  };

  updateTask = (key, updatedTask) => {
    // Copy of the current state
    const tasks = { ...this.state.tasks };
    // Update state
    tasks[key] = updatedTask;
    // Set that to state
    this.setState({
      tasks
    });
  };

  deleteTask = key => {
    // take a copy of state
    const tasks = { ...this.state.tasks };
    // remove the item
    tasks[key] = null;
    // Update State
    this.setState({ tasks });
  };

  loadSampleTasks = () => {
    this.setState({ tasks: sampleTasks });
  };

  addToEstimate = key => {
    // take a copy of state
    const estimate = { ...this.state.estimate };
    // add to the order or update the number
    estimate[key] = estimate[key] + 1 || 1;
    // Call setState to update our state
    this.setState({ estimate });
  };

  removeFromEstimate = key => {
    // take a copy of state
    const estimate = { ...this.state.estimate };
    // remove item from estimate
    estimate[key] = null;
    // Call setState to update our state
    this.setState({ estimate });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Juan Martín García – Product Designer &amp; Frontend Developer" />
          <ul className="fishes">
            {Object.keys(this.state.tasks).map(key => (
              <Task
                key={key}
                index={key}
                details={this.state.tasks[key]}
                addToEstimate={this.addToEstimate}
              />
            ))}
          </ul>
        </div>
        <Estimate
          tasks={this.state.tasks}
          estimate={this.state.estimate}
          removeFromEstimate={this.removeFromEstimate}
        />
        <Client details={this.state.client} addClient={this.addClient} />
        <Tasks
          addTask={this.addTask}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
          loadSampleTasks={this.loadSampleTasks}
          tasks={this.state.tasks}
          estimateId={this.props.match.params.estimateId}
        />
      </div>
    );
  }
}

export default App;
