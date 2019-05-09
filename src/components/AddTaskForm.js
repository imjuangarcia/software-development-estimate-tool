import React from "react";
import PropTypes from "prop-types";

class AddTaskForm extends React.Component {
  taskRef = React.createRef();
  sectionRef = React.createRef();
  minHoursRef = React.createRef();
  avgHoursRef = React.createRef();
  maxHoursRef = React.createRef();
  expectedHoursRef = React.createRef();

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  createTask = event => {
    // Stop the form from submitting
    event.preventDefault();

    // Do math to calculate the expected hours
    const minHours = parseFloat(this.minHoursRef.current.value);
    const avgHours = parseFloat(this.avgHoursRef.current.value);
    const maxHours = parseFloat(this.maxHoursRef.current.value);
    const expectedHours = parseFloat(this.expectedHoursRef.current.value);

    // Create the task object
    const task = {
      taskName: this.taskRef.current.value,
      sectionName: this.sectionRef.current.value,
      minHours,
      avgHours,
      maxHours,
      expectedHours
    };
    this.props.addTask(task);
    // Refresh the form
    event.currentTarget.reset();
  };

  setExpectedHours = () => {
    if (
      this.maxHoursRef.current.value &&
      this.minHoursRef.current.value !== "undefined"
    ) {
      const sum =
        +this.maxHoursRef.current.value + +this.minHoursRef.current.value;
      const sigma = +this.avgHoursRef.current.value * 4;
      this.expectedHoursRef.current.value = (sum + sigma) / 6;
    }
  };
  render() {
    return (
      <form onSubmit={this.createTask}>
        <fieldset>
          <label htmlFor="task">Task Name</label>
          <input
            required
            name="task"
            ref={this.taskRef}
            type="text"
            placeholder="Task"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="section">Section Name</label>
          <select required name="section" ref={this.sectionRef}>
            <option value="Definition">Definition</option>
            <option value="Initiation">Initiation</option>
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
          <label htmlFor="minhours">Minimum hours</label>
          <input
            required
            name="minhours"
            ref={this.minHoursRef}
            type="number"
            placeholder="Minimum Hours"
            onChange={this.setExpectedHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="avghours">Average hours</label>
          <input
            required
            name="avghours"
            ref={this.avgHoursRef}
            type="number"
            placeholder="Average Hours"
            onChange={this.setExpectedHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="maxhours">Maximum hours</label>
          <input
            required
            name="maxhours"
            ref={this.maxHoursRef}
            type="number"
            placeholder="Maximum Hours"
            onChange={this.setExpectedHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="expectedhours">Expected hours</label>
          <input
            required
            name="expectedhours"
            ref={this.expectedHoursRef}
            type="text"
            placeholder="Expected Hours"
            disabled
            step=".01"
          />
        </fieldset>
        <button type="submit">+ Add Task</button>
      </form>
    );
  }
}

export default AddTaskForm;
