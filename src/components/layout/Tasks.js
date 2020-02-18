import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";

class Tasks extends React.Component {
  render() {
    // They must be the owner
    return (
      <section className={this.props.auth === undefined || this.props.auth.owner !== this.props.auth.uid ? "hidden" : "tasks edit" }>
        <div className="title">
          <h2>Tasks</h2>
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
