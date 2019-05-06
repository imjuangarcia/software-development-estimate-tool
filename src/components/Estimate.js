import React from "react";
import PropTypes from "prop-types";
import AddResourceForm from "./AddResourceForm";
import EditResourceForm from "./EditResourceForm";
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

    // if they're not logged in
    if (Object.keys(this.props.auth).length === 0) {
      this.adminTimeRef.current.setAttribute("disabled", true);
      this.hourlyValueRef.current.setAttribute("disabled", true);
    }
    // if they're logged in, but they're now owners
    else if (this.props.auth.owner !== this.props.auth.uid) {
      this.adminTimeRef.current.setAttribute("disabled", true);
      this.hourlyValueRef.current.setAttribute("disabled", true);
    }
    // if they're owners
    else {
      this.adminTimeRef.current.removeAttribute("disabled");
      this.hourlyValueRef.current.removeAttribute("disabled");
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
        <tr key={key}>
          <td>
            {count} {count > 1 ? "units" : "unit"} of {task.taskName}
            <button
              ref={this.removeFromEstimateRef}
              onClick={() => this.props.removeFromEstimate(key)}
              className={
                Object.keys(this.props.auth) !== 0 ||
                this.props.auth.owner !== this.props.auth.uid
                  ? "hidden"
                  : ""
              }
            >
              &times;
            </button>
          </td>
          <td>{task.section}</td>
          <td>{task.minHours}</td>
          <td>{task.avgHours}</td>
          <td>{task.maxHours}</td>
          <td>{task.expectedHours}</td>
        </tr>
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
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.resources).map(key => (
                <EditResourceForm
                  key={key}
                  index={key}
                  resource={this.props.resources[key]}
                  updateResource={this.props.updateResource}
                  deleteResource={this.props.deleteResource}
                  auth={this.props.auth}
                />
              ))}
              <AddResourceForm
                auth={this.props.auth}
                addResource={this.props.addResource}
              />
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
          <hr />
          <h2>Task Estimation</h2>
          <p>
            The following section contains the detailed estimation of stages and
            tasks for the project and the expected time for each. The
            calculation is done through the 6-sigma methodology, use the
            following formula to calculate the expected time:{" "}
            <span>exp = (max + min + 4*avg)/6</span>. The measurement unit used
            is Hours, and values will be rounded if necessary. Any stage or task
            not envisioned below and added after the budget's approval should be
            quoted separately.
          </p>
          <table>
            <thead>
              <tr>
                <td>Task</td>
                <td>Stage</td>
                <td>Minimum Hours</td>
                <td>Average Hours</td>
                <td>Maximum Hours</td>
                <td>Expected Hours</td>
              </tr>
            </thead>
            <tbody>{estimateIds.map(this.renderEstimate)}</tbody>
          </table>
        </section>
      </React.Fragment>
    );
  }
}

export default Estimate;
