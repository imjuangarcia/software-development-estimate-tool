import React from "react";

class AddTaskForm extends React.Component {
  taskRef = React.createRef();
  sectionRef = React.createRef();
  minHoursRef = React.createRef();
  avgHoursRef = React.createRef();
  maxHoursRef = React.createRef();

  createTask = event => {
    // Stop the form from submitting
    event.preventDefault();

    // Do math to calculate the expected hours
    const minHours = parseFloat(this.minHoursRef.current.value);
    const avgHours = parseFloat(this.avgHoursRef.current.value);
    const maxHours = parseFloat(this.maxHoursRef.current.value);
    const expectedHours = parseFloat((maxHours + minHours + avgHours * 4) / 6);

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
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createTask}>
        <input
          required
          name="task"
          ref={this.taskRef}
          type="text"
          placeholder="Task"
        />
        <select required name="section" ref={this.sectionRef}>
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
          required
          name="minhours"
          ref={this.minHoursRef}
          type="number"
          placeholder="Minimum Hours"
        />
        <input
          required
          name="avghours"
          ref={this.avgHoursRef}
          type="number"
          placeholder="Average Hours"
        />
        <input
          required
          name="maxhours"
          ref={this.maxHoursRef}
          type="number"
          placeholder="Maximum Hours"
        />
        <button type="submit">+ Add Task</button>
      </form>
    );
  }
}

export default AddTaskForm;
