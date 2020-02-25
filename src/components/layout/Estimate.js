import React from "react";
import EstimateProvider, { EstimateContext } from "../../context/EstimateContext";
import Time from "./Time";
import Resources from "./Resources";
import Deadlines from "./Deadlines";
import TaskEstimation from "../components/TaskEstimation";
import base from "../../firebase";

class Estimate extends React.Component {

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

  // componentDidUpdate() {
  //   if (
  //     this.totalTimeRef.current.value !== "" &&
  //     this.adminTimeRef.current.value !== undefined &&
  //     this.adminTimeRef.current.value !== ""
  //   ) {
  //     this.calculateTotalHours();
  //   }
  // }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <React.Fragment>
        <EstimateProvider>
          <EstimateContext.Consumer>
            {context => (
              <section className="estimate">
                <h2>Work Plan Summary</h2>
                <p>
                  The following is a summary of the Time, Costs, Resources, and
                  Deadlines estimates, all of which will be covered in further detail
                  below.
                </p>
                <Time
                  estimate={this.props.estimate}
                  tasks={this.props.tasks}
                  time={context.estimate.time}
                  adminTimeRef={context.adminTimeRef}
                  totalTimeRef={context.totalTimeRef}
                  calculateTotalHours={context.calculateTotalHours}
                  owner={this.props.owner}
                  user={this.props.user}
                />
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
                          ref={context.hourlyValueRef}
                          placeholder="Set Hourly Value Here"
                          onChange={context.calculateTotalPrice}
                          defaultValue={context.cost ? context.cost.hourlyValue : ''}
                          disabled={this.props.user === undefined || this.props.user.uid !== this.props.owner}
                        />
                      </td>
                      <td>
                        <strong>${Math.round(context.cost ? context.cost.totalPrice : '')}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Resources
                  resources={this.props.resources}
                  addResource={this.props.addResource}
                  updateResource={this.props.updateResource}
                  deleteResource={this.props.deleteResource}
                  user={this.props.user}
                  owner={this.props.owner}
                />
                <Deadlines
                  time={context.estimate.time ? context.estimate.time : ''}
                  resources={this.props.resources}
                />
                <TaskEstimation 
                  estimate={this.props.estimate}
                  tasks={this.props.tasks}
                  owner={this.props.owner}
                  user={this.props.user}
                  removeFromEstimate={this.props.removeFromEstimate}
                />
              </section>
            )}
          </EstimateContext.Consumer>
        </EstimateProvider>
      </React.Fragment>
    );
  }
}

export default Estimate;
