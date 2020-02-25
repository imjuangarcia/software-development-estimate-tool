import React, { useRef } from 'react';

const TaskEstimation = (props) => {
  // Refs
  const removeFromEstimateRef = useRef();

  const renderEstimate = key => {
    const task = props.tasks[key];
    const count = props.estimate[key];
    
    if (task) {
      return (
        <tr key={key}>
          <td className="left">
            {count} {count > 1 ? "units" : "unit"} of {task.taskName}
            <button
              ref={removeFromEstimateRef}
              onClick={() => props.removeFromEstimate(key)}
              className={
                props.user === undefined ||
                props.owner !== props.user.uid
                  ? "cross hidden"
                  : "cross"
              }
            >
              &times;
            </button>
          </td>
          <td>{task.sectionName}</td>
          <td>{task.minHours}</td>
          <td>{task.avgHours}</td>
          <td>{task.maxHours}</td>
          <td>{Math.round(task.expectedHours)}</td>
        </tr>
      );
    }
  };
  return(
    <React.Fragment>
      <hr />
      <h2>Task Estimation</h2>
      <p>
        The following section contains the detailed estimation of stages and
        tasks for the project and the expected time for each. The
        calculation is done through the 6-sigma methodology, use the
        following formula to calculate the expected time:{" "}
        <span>exp = (max + min + 4*avg)/6</span>. The measurement unit used
        is Hours, and values will be rounded if necessary. Any stage or task
        not envisioned below and added after the budget's approval should be
        quoted separately.
      </p>
      <table>
        <thead>
          <tr>
            <td>Task</td>
            <td>Stage</td>
            <td>Minimum Hours</td>
            <td>Average Hours</td>
            <td>Maximum Hours</td>
            <td>Expected Hours</td>
          </tr>
        </thead>
        <tbody>{props.estimate ? Object.keys(props.estimate).map(renderEstimate) : <tr></tr>}</tbody>
      </table>
    </React.Fragment>
  )
}

export default TaskEstimation;