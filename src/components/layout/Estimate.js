import React from "react";
import EstimateProvider, { EstimateContext } from "../../context/EstimateContext";
import Time from "./Time";
import Costs from "./Costs";
import Resources from "./Resources";
import Deadlines from "./Deadlines";
import TaskEstimation from "../components/TaskEstimation";

const Estimate = (props) => {
  return (
    <React.Fragment>
      <EstimateProvider estimateId={props.estimateId}>
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
                estimate={props.estimate}
                tasks={props.tasks}
                time={context.time}
                adminTimeRef={context.adminTimeRef}
                totalTimeRef={context.totalTimeRef}
                calculateTotalHours={context.calculateTotalHours}
                owner={props.owner}
                user={props.user}
              />
              <Costs
                hourlyValueRef={context.hourlyValueRef}
                owner={props.owner}
                user={props.user}
                cost={context.cost}
                calculateTotalPrice={context.calculateTotalPrice}
              />
              <Resources
                resources={props.resources}
                addResource={props.addResource}
                updateResource={props.updateResource}
                deleteResource={props.deleteResource}
                user={props.user}
                owner={props.owner}
              />
              <Deadlines
                time={context.time ? context.time : ''}
                resources={props.resources}
                minTimeRef={context.minTimeRef}
                avgTimeRef={context.avgTimeRef}
                maxTimeRef={context.maxTimeRef}
                expectedTimeRef={context.expectedTimeRef}
                calculateDeadlines={context.calculateDeadlines}
              />
              <TaskEstimation 
                estimate={props.estimate}
                tasks={props.tasks}
                owner={props.owner}
                user={props.user}
                removeFromEstimate={props.removeFromEstimate}
              />
            </section>
          )}
        </EstimateContext.Consumer>
      </EstimateProvider>
    </React.Fragment>
  );
}

export default Estimate;
