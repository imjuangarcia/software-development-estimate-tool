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
    estimateId: PropTypes.string,
    auth: PropTypes.object,
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
      <React.Fragment>
        <section className="estimate">
          <h2>Work Plan Summary</h2>
          <p>
            The following is a summary of the Time, Costs, Resources, and
            Deadlines estimates, all of which will be covered in further detail
            below.
          </p>
          <h3>Time</h3>
          <table>
            <thead>
              <tr>
                <td>Ideal Hours</td>
                <td>Extra % for Admin Time</td>
                <td>Total Hours</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
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
                      } else {
                        return 0;
                      }
                    }, "")}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    ref={this.adminTimeRef}
                    name="admin"
                    onChange={this.calculateTotalHours}
                    defaultValue={this.state.time.adminTime}
                    placeholder="Add Admin Time Here"
                    required
                  />
                  %
                </td>
                <td>{this.state.time.totalTime}</td>
              </tr>
            </tbody>
          </table>
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
                    ref={this.hourlyValueRef}
                    placeholder="Set Hourly Value Here"
                    onChange={this.calculateTotalPrice}
                    defaultValue={this.state.cost.hourlyValue}
                  />
                </td>
                <td>
                  <strong>${this.state.cost.totalPrice}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Resources</h3>
          <table>
            <thead>
              <tr>
                <td>Quantity</td>
                <td>Type</td>
                <td>Availability</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 (one)</td>
                <td>Front-End Developer</td>
                <td>10 hours/week</td>
              </tr>
              <tr>
                <td>1 (one)</td>
                <td>Back-End Developer</td>
                <td>10 hours/week</td>
              </tr>
            </tbody>
          </table>
          <h3>
            Deadlines<sup>*</sup>
          </h3>
          <table>
            <thead>
              <tr>
                <td>Minimum</td>
                <td>Average</td>
                <td>Maximum</td>
                <td>Expected</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4,5 weeks</td>
                <td>6 weeks</td>
                <td>8 weeks</td>
                <td>
                  <strong>6 weeks</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <ul className="tasks">{estimateIds.map(this.renderEstimate)}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Estimate;
