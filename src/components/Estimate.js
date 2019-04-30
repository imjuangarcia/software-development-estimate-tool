import React from "react";
import PropTypes from "prop-types";

class Estimate extends React.Component {
  static propTypes = {
    tasks: PropTypes.object,
    estimate: PropTypes.object,
    removeFromEstimate: PropTypes.func
  };

  renderEstimate = key => {
    const task = this.props.tasks[key];
    const count = this.props.estimate[key];
    if (task) {
      return (
        <li key={key}>
          {count} unidad {task.taskName}
          <button onClick={() => this.props.removeFromEstimate(key)}>
            &times;
          </button>
        </li>
      );
    }
  };
  render() {
    const estimateIds = Object.keys(this.props.estimate);
    return (
      <div className="order-wrap">
        <h2>Estimate</h2>
        <ul className="order">{estimateIds.map(this.renderEstimate)}</ul>
        <div className="total">
          Total
          <strong>
            {estimateIds.reduce((prevTotal, key) => {
              const task = this.props.tasks[key];
              if (task != undefined) {
                const count = this.props.estimate[key];
                return prevTotal + count * task.expectedHours;
              }
            }, 0)}
          </strong>{" "}
          horas
        </div>
      </div>
    );
  }
}

export default Estimate;
