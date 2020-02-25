import React from "react";
import AddResourceForm from "../components/AddResourceForm";
import EditResourceForm from "../components/EditResourceForm";
import TaskEstimation from "../components/TaskEstimation";
import base from "../../firebase";

class Estimate extends React.Component {
  // Refs
  totalTimeRef = React.createRef();
  adminTimeRef = React.createRef();
  hourlyValueRef = React.createRef();
  minTimeRef = React.createRef();
  avgTimeRef = React.createRef();
  maxTimeRef = React.createRef();
  expectedTimeRef = React.createRef();

  // State
  state = {
    time: {},
    resources: {},
    cost: {}
  };

  // Lifecycle methods
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
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

    this.calculateDeadlines();
  };

  calculateDeadlines = () => {
    const calculation = Math.round(
      this.state.time.totalTime /
        Object.values(this.props.resources).reduce(function(
          prevNumber,
          resource
        ) {
          return +prevNumber + +resource.availability;
        },
        "")
    );

    this.minTimeRef.current.innerHTML = calculation;
    this.avgTimeRef.current.innerHTML = calculation * 1.5;
    this.maxTimeRef.current.innerHTML = calculation * 2;
    this.expectedTimeRef.current.innerHTML =
      (+this.maxTimeRef.current.innerHTML +
        +this.minTimeRef.current.innerHTML +
        +this.avgTimeRef.current.innerHTML * 4) /
      6;
  };

  render() {
    const estimateIds = this.props.estimate ? Object.keys(this.props.estimate) : '';
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
                <td>Ideal Hours (rounded)</td>
                <td>Extra % for Admin Time</td>
                <td>Total Hours (rounded)</td>
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
                    defaultValue={estimateIds ? estimateIds.reduce((prevTotal, key) => {
                      const task = this.props.tasks[key];
                      if (task !== undefined) {
                        const count = this.props.estimate[key];
                        const totalHours = parseFloat(
                          prevTotal + count * task.expectedHours
                        );
                        return Math.round(totalHours);
                      } else {
                        return 0;
                      }
                    }, "") : ''}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    ref={this.adminTimeRef}
                    name="admin"
                    onChange={this.calculateTotalHours}
                    defaultValue={this.state.time.adminTime}
                    disabled={this.props.user === undefined || this.props.user.uid !== this.props.owner}
                    placeholder="Add Admin Time Here"
                    required
                  />
                  %
                </td>
                <td>{Math.round(this.state.time.totalTime)}</td>
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
                    disabled={this.props.user === undefined || this.props.user.uid !== this.props.owner}
                  />
                </td>
                <td>
                  <strong>${Math.round(this.state.cost.totalPrice)}</strong>
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
              {this.props.resources ? Object.keys(this.props.resources).map(key => (
                <EditResourceForm
                  key={key}
                  index={key}
                  resource={this.props.resources[key]}
                  updateResource={this.props.updateResource}
                  deleteResource={this.props.deleteResource}
                  user={this.props.user}
                  owner={this.props.owner}
                />
              )) : <tr></tr>}
              { this.props.user && this.props.user.uid === this.props.owner ? <AddResourceForm
                user={this.props.user}
                owner={this.props.owner}
                addResource={this.props.addResource}
              /> : <tr></tr> }
            </tbody>
          </table>
          <h3>
            Deadlines<sup>*</sup> (rounded)
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
                <td>
                  <span ref={this.minTimeRef} /> weeks
                </td>
                <td>
                  <span ref={this.avgTimeRef} /> weeks
                </td>
                <td>
                  <span ref={this.maxTimeRef} /> weeks
                </td>
                <td>
                  <strong>
                    <span ref={this.expectedTimeRef} /> weeks
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <TaskEstimation 
            estimate={this.props.estimate}
            tasks={this.props.tasks}
            owner={this.props.owner}
            user={this.props.user}
            removeFromEstimate={this.props.removeFromEstimate}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Estimate;
