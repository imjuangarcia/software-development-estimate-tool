import React from "react";
import AddTaskForm from "./AddTaskForm";

class Tasks extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Tasks</h2>
        <AddTaskForm addTask={this.props.addTask} />
        <button onClick={this.props.loadSampleTasks}>Load Sample Tasks</button>
      </div>
    );
  }
}

export default Tasks;
