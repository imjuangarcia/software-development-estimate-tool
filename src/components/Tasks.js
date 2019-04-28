import React from "react";
import PropTypes from "prop-types";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";

class Tasks extends React.Component {
  static propTypes = {
    tasks: PropTypes.object,
    updateTask: PropTypes.func,
    deleteTask: PropTypes.func,
    loadSampleTasks: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h2>Tasks</h2>
        {Object.keys(this.props.tasks).map(key => (
          <EditTaskForm
            key={key}
            index={key}
            task={this.props.tasks[key]}
            updateTask={this.props.updateTask}
            deleteTask={this.props.deleteTask}
          />
        ))}
        <AddTaskForm addTask={this.props.addTask} />
        <button onClick={this.props.loadSampleTasks}>Load Sample Tasks</button>
      </div>
    );
  }
}

export default Tasks;
