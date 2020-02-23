import React from "react";

class EditTaskForm extends React.Component {
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
      default:
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
      <React.Fragment>
        <h3>Task: {this.props.task.taskName}</h3>
        <form>
          <fieldset>
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              name="taskName"
              onChange={this.handleChange}
              value={this.props.task.taskName}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="sectionName">Section Name</label>
            <select
              name="sectionName"
              onChange={this.handleChange}
              defaultValue={this.props.task.sectionName}
            >
              <option value="Definition">Definition</option>
              <option value="Initiation">Initiation</option>
              <option value="Design">Design</option>
              <option value="Realization">Realization</option>
              <option value="Adaptation">Adaptation</option>
              <option value="Backend: APIs">Backend: APIs</option>
              <option value="Backend: Database">Backend: Database</option>
              <option value="Backend">Backend</option>
              <option value="Testing">Testing</option>
              <option value="Wordpress">Wordpress</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="minHours">Minimum Hours</label>
            <input
              type="number"
              name="minHours"
              onChange={this.handleChange}
              value={this.props.task.minHours}
              step=".01"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="avgHours">Average Hours</label>
            <input
              type="number"
              name="avgHours"
              onChange={this.handleChange}
              value={this.props.task.avgHours}
              step=".01"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="maxHours">Maximum Hours</label>
            <input
              type="number"
              name="maxHours"
              onChange={this.handleChange}
              value={this.props.task.maxHours}
              step=".01"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="expectedHours">Expected Hours</label>
            <input
              type="number"
              name="expectedHours"
              onChange={this.handleExpectedHoursChange}
              value={this.props.task.expectedHours}
              step=".01"
              disabled
            />
          </fieldset>
          <button
            className="remove"
            onClick={() => this.props.deleteTask(this.props.index)}
          >
            Remove Task
          </button>
          <button
            type="button"
            className="add"
            onClick={() => this.props.addToEstimate(this.props.index)}
          >
            {" "}
            Add To Estimate
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default EditTaskForm;