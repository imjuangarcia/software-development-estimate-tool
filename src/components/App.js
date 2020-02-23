import React from "react";
import firebase from "firebase";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Estimate from "./layout/Estimate";
import Client from "./layout/Client";
import Tasks from "./layout/Tasks";
import TechStack from "./layout/TechStack";
import Technologies from "./layout/Technologies";
import Terms from "./layout/Terms";
import sampleTasks from "../utilities/sample-tasks";
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

  authHandler = async authData => {
    this.setState({
      auth: {
        uid: authData.user.uid,
        owner: authData.user.uid
      }
    });
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

    this.setState({
      auth: this.props.location.auth
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
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

  deleteTechStack = key => {
    const technologies = { ...this.state.technologies };
    technologies[key] = null;
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
        <Header history={this.props.history} auth={this.state.auth} />
        <Client details={this.state.client} />
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
        <Technologies details={this.state.technologies} deleteTechStack={this.deleteTechStack} />
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
          auth={this.state.auth}
        />
        <TechStack auth={this.state.auth} addTechStack={this.addTechStack} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
