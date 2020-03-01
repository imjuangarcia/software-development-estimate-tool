import React from 'react';

const Time = (props) => {
  return (
    <React.Fragment>
      <h3>Time</h3>
      <table>
        <thead>
          <tr>
            <td>Ideal Hours (rounded)</td>
            <td>Extra % for Admin Time</td>
            <td>Total Hours (rounded)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                ref={props.totalTimeRef}
                name="total"
                disabled
                defaultValue={props.estimate ? Object.keys(props.estimate).reduce((prevTotal, key) => {
                  const task = props.tasks[key];
                  if (task !== undefined) {
                    const count = props.estimate[key];
                    const totalHours = parseFloat(
                      prevTotal + count * task.expectedHours
                    );
                    return Math.round(totalHours);
                  } else {
                    return 0;
                  }
                }, "") : ''}
              />
            </td>
            <td>
              <input
                type="number"
                ref={props.adminTimeRef}
                name="admin"
                onChange={props.calculateTotalHours}
                defaultValue={props.time ? props.time.adminTime : ''}
                disabled={props.user === undefined || props.user.uid !== props.owner}
                placeholder="Add Admin Time Here"
                required
              />
              %
            </td>
            <td>{props.time ? props.time.totalTime : ''}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Time;