import React from "react";
import PropTypes from "prop-types";
import base from "../base";

class Estimate extends React.Component {
  removeFromEstimateRef = React.createRef();
  totalTimeRef = React.createRef();
  adminTimeRef = React.createRef();
  hourlyValueRef = React.createRef();

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
    this.ref = base.syncState(`${this.props.estimateId}/cost`, {
      context: this,
      state: "cost"
    });
  }

  componentDidUpdate() {
    if (
      this.totalTimeRef.current.value !== "" &&
      this.adminTimeRef.current.value !== undefined &&
      this.adminTimeRef.current.value !== ""
    ) {
      this.calculateTotalHours();
    }

    if (this.props.auth.owner !== this.props.auth.uid) {
      this.adminTimeRef.current.setAttribute("disabled", true);
      this.hourlyValueRef.current.setAttribute("disabled", true);
      this.removeFromEstimateRef.current.classList.add("hidden");
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
          <button
            ref={this.removeFromEstimateRef}
            onClick={() => this.props.removeFromEstimate(key)}
          >
            &times;
          </button>
        </li>
      );
    }
  };

  calculateTotalHours = () => {
    const adminTime = this.adminTimeRef.current.value;
    const totalPrice =
      this.state.time.totalTime * this.hourlyValueRef.current.value;
    const thirdsRule = (this.totalTimeRef.current.value / 100) * adminTime;
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
    if (isNaN(totalPrice) || totalPrice === 0) {
    } else {
      this.calculateTotalPrice();
    }
  };

  calculateTotalPrice = () => {
    const hourlyValue = parseFloat(this.hourlyValueRef.current.value);
    const totalPrice = this.state.time.totalTime * hourlyValue;

    this.setState({
      cost: {
        hourlyValue,
        totalPrice
      }
    });
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
            ref={this.hourlyValueRef}
            placeholder="Hourly value for this project"
            onChange={this.calculateTotalPrice}
            defaultValue={this.state.cost.hourlyValue}
          />
        </div>
        <div className="totaltime">
          Total Price: ${this.state.cost.totalPrice}
        </div>
      </div>
    );
  }
}

export default Estimate;
