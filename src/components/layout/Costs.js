import React from 'react';

const Costs = (props) => {
  return (
    <React.Fragment>
      <h3>Costs</h3>
      <table>
        <thead>
          <tr>
            <td>Hourly Value based on the Project Complexity</td>
            <td>Cost according to Total Hours</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              $
              <input
                type="number"
                required
                name="hour"
                ref={props.hourlyValueRef}
                placeholder="Set Hourly Value Here"
                onChange={props.calculateTotalPrice}
                defaultValue={props.cost ? props.cost.hourlyValue : ''}
                disabled={props.user === undefined || props.user.uid !== props.owner}
              />
            </td>
            <td>
              <strong>${Math.round(props.cost ? props.cost.totalPrice : '')}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Costs;