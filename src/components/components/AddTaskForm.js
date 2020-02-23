import React, { useRef } from "react";

const AddTaskForm = (props) => {
  const taskRef = useRef();
  const sectionRef = useRef();
  const minHoursRef = useRef();
  const avgHoursRef = useRef();
  const maxHoursRef = useRef();
  const expectedHoursRef = useRef();

  const createTask = event => {
    event.preventDefault();

    const minHours = parseFloat(minHoursRef.current.value);
    const avgHours = parseFloat(avgHoursRef.current.value);
    const maxHours = parseFloat(maxHoursRef.current.value);
    const expectedHours = parseFloat(expectedHoursRef.current.value);

    const task = {
      taskName: taskRef.current.value,
      sectionName: sectionRef.current.value,
      minHours,
      avgHours,
      maxHours,
      expectedHours
    };
    props.addTask(task);

    event.currentTarget.reset();
  };

  const setExpectedHours = () => {
    if (
      maxHoursRef.current.value &&
      minHoursRef.current.value !== "undefined"
    ) {
      const sum =
        +maxHoursRef.current.value + +minHoursRef.current.value;
      const sigma = +avgHoursRef.current.value * 4;
      expectedHoursRef.current.value = (sum + sigma) / 6;
    }
  };
  return (
    <form onSubmit={createTask}>
      <fieldset>
        <label htmlFor="taskName">Task Name</label>
        <input
          required
          name="taskName"
          ref={taskRef}
          type="text"
          placeholder="Task"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="sectionName">Section Name</label>
        <select required name="sectionName" ref={sectionRef}>
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
        <label htmlFor="minHours">Minimum hours</label>
        <input
          required
          name="minHours"
          ref={minHoursRef}
          type="number"
          placeholder="Minimum Hours"
          onChange={setExpectedHours}
          step=".5"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="avgHours">Average hours</label>
        <input
          required
          name="avgHours"
          ref={avgHoursRef}
          type="number"
          placeholder="Average Hours"
          onChange={setExpectedHours}
          step=".5"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="maxHours">Maximum hours</label>
        <input
          required
          name="maxHours"
          ref={maxHoursRef}
          type="number"
          placeholder="Maximum Hours"
          onChange={setExpectedHours}
          step=".5"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="expectedHours">Expected hours</label>
        <input
          required
          name="expectedHours"
          ref={expectedHoursRef}
          type="text"
          placeholder="Expected Hours"
          disabled
          step=".5"
        />
      </fieldset>
      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default AddTaskForm;
