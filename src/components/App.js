import React from "react";
import Header from "./Header";
import Estimate from "./Estimate";
import Tasks from "./Tasks";

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
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Juan Martín García – Product Designer &amp; Frontend Developer" />
        </div>
        <Estimate />
        <Tasks addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
