import React from "react";
import PropTypes from "prop-types";

class Task extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      taskName: PropTypes.string,
      sectionName: PropTypes.string,
      minHours: PropTypes.number,
      avgHours: PropTypes.number,
      maxHours: PropTypes.number,
      expectedHours: PropTypes.number
    }),
    addToEstimate: PropTypes.func
  };
  render() {
    const {
      taskName,
      sectionName,
      minHours,
      avgHours,
      maxHours,
      expectedHours
    } = this.props.details;
    return (
      <li className="menu-fish">
        <h3 className="fish-name">{taskName}</h3>
        <h6 className="fish-name">{sectionName}</h6>
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
