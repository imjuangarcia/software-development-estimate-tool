import React from "react";
import PropTypes from "prop-types";
import Header from "./layout/Header";
import Estimate from "./Estimate";
import Client from "./Client";
import Tasks from "./Tasks";
import TechStack from "./TechStack";
import Technologies from "./Technologies";
import Terms from "./Terms";
import sampleTasks from "../sample-tasks";
import base from "../firebase";

class App extends React.Component {
  state = {
    client: {},
    tasks: {},
    estimate: {},
    auth: {},
    resources: {},
    technologies: {}
  };

  static propTypes = {
    match: PropTypes.object.isRequired
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

    this.ref = base.syncState(`${params.estimateId}/resources`, {
      context: this,
      state: "resources"
    });

    this.ref = base.syncState(`${params.estimateId}/technologies`, {
      context: this,
      state: "technologies"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addResource = resource => {
    // Take a copy of the existing state we'll be updating
    const resources = {
      ...this.state.resources
    };
    // Add new resource to resource variable
    resources[`resource${Date.now()}`] = resource;

    // Set the new tasks and sections objects to state
    this.setState({
      resources
    });
  };

  updateResource = (key, updatedResource) => {
    const resources = { ...this.state.resources };
    resources[key] = updatedResource;
    this.setState({
      resources
    });
  };

  deleteResource = key => {
    const resources = { ...this.state.resources };
    resources[key] = null;
    this.setState({
      resources
    });
  };

  addClient = () => {
    // If there's a client set...
    if (
      this.props.location.client !== undefined ||
      Object.keys(this.state.client).length !== 0
    ) {
      // Let's save its data into state...
      this.setState({
        client: this.props.location.client
      });
    } else {
      this.props.history.push({
        pathname: `/`
      });
    }
  };

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

  addTechStack = tech => {
    // Take a copy of the existing state we'll be updating
    const technologies = { ...this.state.technologies };
    // Add new task to tasks variable
    technologies[`tech${Date.now()}`] = tech;

    // Set the new tasks and sections objects to state
    this.setState({
      technologies
    });
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

  propagateAuthState = state => {
    this.setState({
      auth: {
        owner: state.owner,
        uid: state.uid
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Client details={this.state.client} addClient={this.addClient} />
        <Estimate
          tasks={this.state.tasks}
          estimate={this.state.estimate}
          removeFromEstimate={this.removeFromEstimate}
          estimateId={this.props.match.params.estimateId}
          auth={this.state.auth}
          addResource={this.addResource}
          updateResource={this.updateResource}
          deleteResource={this.deleteResource}
          resources={this.state.resources}
        />
        <Technologies details={this.state.technologies} />
        <Terms details={this.state.client} />
        <Tasks
          addTask={this.addTask}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
          loadSampleTasks={this.loadSampleTasks}
          addToEstimate={this.addToEstimate}
          tasks={this.state.tasks}
          estimateId={this.props.match.params.estimateId}
          propagateAuthState={this.propagateAuthState}
        />
        <TechStack auth={this.state.auth} addTechStack={this.addTechStack} />
      </React.Fragment>
    );
  }
}

export default App;
