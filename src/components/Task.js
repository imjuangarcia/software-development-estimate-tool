import React from "react";
import PropTypes from "prop-types";

class Task extends React.Component {
  addToEstimateRef = React.createRef();

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
  componentDidUpdate() {
    if (this.props.auth.owner !== this.props.auth.uid) {
      this.addToEstimateRef.current.classList.add("hidden");
      this.addToEstimateRef.current.setAttribute("disabled", true);
    }
  }
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
        <button
          ref={this.addToEstimateRef}
          onClick={() => this.props.addToEstimate(this.props.index)}
        >
          Add to Estimate
        </button>
      </li>
    );
  }
}

export default Task;
