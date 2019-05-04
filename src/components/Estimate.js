import React from "react";
import PropTypes from "prop-types";
import base from "../base";

class Estimate extends React.Component {
  totalTimeRef = React.createRef();
  adminTimeRef = React.createRef();
  hourlyRef = React.createRef();

  state = {
    time: {},
    resources: {},
    cost: {}
  };

  static propTypes = {
    tasks: PropTypes.object,
    estimate: PropTypes.object,
    removeFromEstimate: PropTypes.func
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.estimateId}/time`, {
      context: this,
      state: "time"
    });
  }

  componentDidUpdate() {
    if (this.totalTimeRef.current.value != "") {
      this.calculateTotalHours();
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  calculateTotalHours = () => {
    const adminTime = this.adminTimeRef.current.value;
    const thirdsRule =
      (this.totalTimeRef.current.value / 100) * this.adminTimeRef.current.value;
    const totalTime = (+this.totalTimeRef.current.value + thirdsRule).toFixed(
      2
    );
    this.setState({
      time: {
        subTotal: this.totalTimeRef.current.value,
        adminTime,
        totalTime
      }
    });
    this.calculateTotalPrice();
  };

  calculateTotalPrice = () => {
    console.log("calculating total price");
  };
  render() {
    const estimateIds = Object.keys(this.props.estimate);
    return (
      <div className="order-wrap">
        <h2>Estimate</h2>
        <ul className="order">{estimateIds.map(this.renderEstimate)}</ul>
        <div className="total">
          Total
          <input
            type="number"
            ref={this.totalTimeRef}
            name="total"
            disabled
            defaultValue={estimateIds.reduce((prevTotal, key) => {
              const task = this.props.tasks[key];
              if (task !== undefined) {
                const count = this.props.estimate[key];
                const totalHours = parseFloat(
                  prevTotal + count * task.expectedHours
                );
                return totalHours;
              }
            }, "")}
          />{" "}
          horas
        </div>
        <div className="admin">
          Admin time:
          <input
            type="number"
            ref={this.adminTimeRef}
            name="admin"
            onChange={this.calculateTotalHours}
            defaultValue={this.state.time.adminTime}
          />{" "}
          %
        </div>
        <div className="totaltime">Total Time: {this.state.time.totalTime}</div>
        <div className="hourly">
          Hourly Value{" "}
          <input
            type="number"
            required
            name="hour"
            ref={this.hourlyRef}
            placeholder="Hourly value for this project"
            onChange={this.calculateTotalPrice}
          />
        </div>
      </div>
    );
  }
}

export default Estimate;
