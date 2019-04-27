import React from "react";

class AddTaskForm extends React.Component {
  taskRef = React.createRef();
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
    const expHours = parseFloat((maxHours + minHours + avgHours * 4) / 6);

    // Create the task object
    const task = {
      taskName: this.taskRef.current.value,
      minHours,
      avgHours,
      maxHours,
      expectedHours: expHours
    };
    this.props.addTask(task);
    // Refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createTask}>
        <input name="task" ref={this.taskRef} type="text" placeholder="Task" />
        <input
          name="minhours"
          ref={this.minHoursRef}
          type="number"
          placeholder="Minimum Hours"
        />
        <input
          name="avghours"
          ref={this.avgHoursRef}
          type="number"
          placeholder="Average Hours"
        />
        <input
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
