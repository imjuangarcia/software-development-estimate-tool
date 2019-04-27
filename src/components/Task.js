import React from "react";

class Task extends React.Component {
  render() {
    const {
      taskName,
      minHours,
      avgHours,
      maxHours,
      expectedHours
    } = this.props.details;
    return (
      <li className="menu-fish">
        <h3 className="fish-name">{taskName}</h3>
        <p>{minHours}</p>
        <p>{avgHours}</p>
        <p>{maxHours}</p>
        <p>{expectedHours}</p>
        <button onClick={() => this.props.addToEstimate(this.props.index)}>
          Add to Estimate
        </button>
      </li>
    );
  }
}

export default Task;
