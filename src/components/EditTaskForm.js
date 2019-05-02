import React from "react";
import PropTypes from "prop-types";

class EditTaskForm extends React.Component {
  static propTypes = {
    task: PropTypes.shape({
      taskName: PropTypes.string,
      sectionName: PropTypes.string,
      minHours: PropTypes.number,
      avgHours: PropTypes.number,
      maxHours: PropTypes.number,
      expectedHours: PropTypes.string
    }),
    index: PropTypes.string,
    updateTask: PropTypes.func
  };
  handleChange = event => {
    // Update the task
    const updatedTask = {
      ...this.props.task,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateTask(this.props.index, updatedTask);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="taskName"
          onChange={this.handleChange}
          value={this.props.task.taskName}
        />
        <select
          name="sectionName"
          onChange={this.handleChange}
          value={this.props.task.section}
        >
          <option value="Definición">Definici&oacute;n</option>
          <option value="Iniciación">Iniciaci&oacute;n</option>
          <option value="Realización: Frontend">
            Realizaci&oacute;n: Frontend
          </option>
          <option value="Backend: APIs">Backend: APIs</option>
          <option value="Backend: Base de datos">Backend: Base de datos</option>
          <option value="Realización: Backend">
            Realizaci&oacute;n: Backend
          </option>
          <option value="Responsive: Frontend">Responsive: Frontend</option>
          <option value="Responsive: Backend">Responsive: Backend</option>
          <option value="Testing">Testing</option>
        </select>
        <input
          type="text"
          name="minHours"
          onChange={this.handleChange}
          value={this.props.task.minHours}
        />
        <input
          type="text"
          name="avgHours"
          onChange={this.handleChange}
          value={this.props.task.avgHours}
        />
        <input
          type="text"
          name="maxHours"
          onChange={this.handleChange}
          value={this.props.task.maxHours}
        />
        <input
          type="text"
          name="expectedHours"
          onChange={this.handleChange}
          value={this.props.task.expectedHours}
        />
        <button onClick={() => this.props.deleteTask(this.props.index)}>
          Remove Task
        </button>
      </div>
    );
  }
}

export default EditTaskForm;
