import React from "react";

const EditTaskForm = (props) => {

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case "minHours":
        let sum = +props.task.maxHours + +event.currentTarget.value;
        let sigma = +props.task.avgHours * 4;
        props.task.expectedHours = (sum + sigma) / 6;
        break;
      case "avgHours":
        sum = +props.task.minHours + +props.task.maxHours;
        sigma = +event.currentTarget.value * 4;
        props.task.expectedHours = (sum + sigma) / 6;
        break;
      case "maxHours":
        sum = +props.task.minHours + +event.currentTarget.value;
        sigma = +props.task.avgHours * 4;
        props.task.expectedHours = (sum + sigma) / 6;
        break;
      default:
        break;
    }

    const updatedTask = {
      ...props.task,
      [event.currentTarget.name]: event.currentTarget.value
    };
    props.updateTask(props.index, updatedTask);
  };
  
  return (
    <React.Fragment>
      <h3>Task: {props.task.taskName}</h3>
      <form>
        <fieldset>
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            name="taskName"
            onChange={handleChange}
            value={props.task.taskName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="sectionName">Section Name</label>
          <select
            name="sectionName"
            onChange={handleChange}
            defaultValue={props.task.sectionName}
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
            onChange={handleChange}
            value={props.task.minHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="avgHours">Average Hours</label>
          <input
            type="number"
            name="avgHours"
            onChange={handleChange}
            value={props.task.avgHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="maxHours">Maximum Hours</label>
          <input
            type="number"
            name="maxHours"
            onChange={handleChange}
            value={props.task.maxHours}
            step=".01"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="expectedHours">Expected Hours</label>
          <input
            type="number"
            name="expectedHours"
            onChange={props.handleExpectedHoursChange}
            value={props.task.expectedHours}
            step=".01"
            disabled
          />
        </fieldset>
        <button
          className="remove"
          onClick={() => props.deleteTask(props.index)}
        >
          Remove Task
        </button>
        <button
          type="button"
          className="add"
          onClick={() => props.addToEstimate(props.index)}
        >
          {" "}
          Add To Estimate
        </button>
      </form>
    </React.Fragment>
  );
}

export default EditTaskForm;
