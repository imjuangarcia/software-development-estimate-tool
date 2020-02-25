import React from "react";
import EstimateProvider, { EstimateContext } from "../../context/EstimateContext";
import Time from "./Time";
import Costs from "./Costs";
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
                  time={context.time}
                  adminTimeRef={context.adminTimeRef}
                  totalTimeRef={context.totalTimeRef}
                  calculateTotalHours={context.calculateTotalHours}
                  owner={this.props.owner}
                  user={this.props.user}
                />
                <Costs
                  hourlyValueRef={context.hourlyValueRef}
                  owner={this.props.owner}
                  user={this.props.user}
                  cost={context.cost}
                  calculateTotalPrice={context.calculateTotalPrice}
                />
                <Resources
                  resources={this.props.resources}
                  addResource={this.props.addResource}
                  updateResource={this.props.updateResource}
                  deleteResource={this.props.deleteResource}
                  user={this.props.user}
                  owner={this.props.owner}
                />
                <Deadlines
                  time={context.time ? context.time : ''}
                  resources={this.props.resources}
                  minTimeRef={context.minTimeRef}
                  avgTimeRef={context.avgTimeRef}
                  maxTimeRef={context.maxTimeRef}
                  expectedTimeRef={context.expectedTimeRef}
                  calculateDeadlines={context.calculateDeadlines}
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
