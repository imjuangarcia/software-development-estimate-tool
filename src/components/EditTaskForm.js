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
      expectedHours: PropTypes.number
    }),
    index: PropTypes.string,
    updateTask: PropTypes.func
  };
  handleChange = event => {
    switch (event.currentTarget.name) {
      case "minHours":
        let sum = +this.props.task.maxHours + +event.currentTarget.value;
        let sigma = +this.props.task.avgHours * 4;
        this.props.task.expectedHours = (sum + sigma) / 6;
        break;
      case "avgHours":
        sum = +this.props.task.minHours + +this.props.task.maxHours;
        sigma = +event.currentTarget.value * 4;
        this.props.task.expectedHours = (sum + sigma) / 6;
        break;
      case "maxHours":
        sum = +this.props.task.minHours + +event.currentTarget.value;
        sigma = +this.props.task.avgHours * 4;
        this.props.task.expectedHours = (sum + sigma) / 6;
        break;
    }
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
          type="number"
          name="minHours"
          onChange={this.handleChange}
          value={this.props.task.minHours}
          step=".01"
        />
        <input
          type="number"
          name="avgHours"
          onChange={this.handleChange}
          value={this.props.task.avgHours}
          step=".01"
        />
        <input
          type="number"
          name="maxHours"
          onChange={this.handleChange}
          value={this.props.task.maxHours}
          step=".01"
        />
        <input
          type="number"
          name="expectedHours"
          onChange={this.handleExpectedHoursChange}
          value={this.props.task.expectedHours}
          step=".01"
          disabled
        />
        <button onClick={() => this.props.deleteTask(this.props.index)}>
          Remove Task
        </button>
      </div>
    );
  }
}

export default EditTaskForm;
