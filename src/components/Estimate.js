import React from "react";
import base from "../base";

class Estimate extends React.Component {
  renderEstimate = key => {
    const task = this.props.tasks[key];
    const count = this.props.estimate[key];
    return (
      <li key={key}>
        {count} unidad {task.taskName}
      </li>
    );
  };
  render() {
    const estimateIds = Object.keys(this.props.estimate);
    const total = estimateIds.reduce((prevTotal, key) => {
      const task = this.props.tasks[key];
      const count = this.props.estimate[key];

      return prevTotal + count * task.expectedHours;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Estimate</h2>
        <ul className="order">{estimateIds.map(this.renderEstimate)}</ul>
        <div className="total">
          Total
          <strong>{total}</strong> horas
        </div>
      </div>
    );
  }
}

export default Estimate;
