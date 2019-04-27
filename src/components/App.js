import React from "react";
import Header from "./Header";
import Estimate from "./Estimate";
import Tasks from "./Tasks";
import Task from "./Task";
import sampleTasks from "../sample-tasks";

class App extends React.Component {
  state = {
    tasks: {},
    estimate: {}
  };
  addTask = task => {
    // Take a copy of the existing array
    const tasks = { ...this.state.tasks };
    // Add new task to tasks variable
    tasks[`task${Date.now()}`] = task;
    // Set the new tasks object to state
    this.setState({
      tasks
    });
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
        <Estimate tasks={this.state.tasks} estimate={this.state.estimate} />
        <Tasks addTask={this.addTask} loadSampleTasks={this.loadSampleTasks} />
      </div>
    );
  }
}

export default App;
