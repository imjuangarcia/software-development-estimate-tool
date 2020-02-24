import React from "react";

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
    owner: '',
    user: {},
    resources: {},
    technologies: {}
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
    
    this.ref = base.syncState(`${params.estimateId}/owner`, {
      context: this,
      state: "owner"
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      if(this.props.user.uid !== '') {
        this.setState({
          user: this.props.user,
        });
      }
    }, 1000);
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

  render() {
    return (
      <React.Fragment>
        <Header history={this.props.history} user={this.state.user} />
        <Client details={this.state.client} />
        <Estimate
          tasks={this.state.tasks}
          estimate={this.state.estimate}
          removeFromEstimate={this.removeFromEstimate}
          estimateId={this.props.match.params.estimateId}
          user={this.state.user}
          owner={this.state.owner}
          addResource={this.addResource}
          updateResource={this.updateResource}
          deleteResource={this.deleteResource}
          resources={this.state.resources}
        />
        <Technologies details={this.state.technologies} deleteTechStack={this.deleteTechStack} user={this.state.user} owner={this.state.owner} />
        <Terms details={this.state.client} />
        <Tasks
          addTask={this.addTask}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
          loadSampleTasks={this.loadSampleTasks}
          addToEstimate={this.addToEstimate}
          tasks={this.state.tasks}
          estimateId={this.props.match.params.estimateId}
          owner={this.state.owner}
          user={this.state.user}
        />
        <TechStack user={this.state.user} owner={this.state.owner} addTechStack={this.addTechStack} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
