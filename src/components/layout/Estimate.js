import React from "react";
import Time from "./Time";
import Costs from "./Costs";
import Resources from "./Resources";
import Deadlines from "./Deadlines";
import TaskEstimation from "../components/TaskEstimation";

const Estimate = (props) => {
  return (
    <React.Fragment>
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
          time={props.time}
          adminTimeRef={props.adminTimeRef}
          totalTimeRef={props.totalTimeRef}
          calculateTotalHours={props.calculateTotalHours}
          calculateTotalPrice={props.calculateTotalPrice}
          owner={props.owner}
          user={props.user}
        />
        <Costs
          hourlyValueRef={props.hourlyValueRef}
          owner={props.owner}
          user={props.user}
          cost={props.cost}
          calculateTotalPrice={props.calculateTotalPrice}
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
          time={props.time ? props.time : ''}
          resources={props.resources}
          minTimeRef={props.minTimeRef}
          avgTimeRef={props.avgTimeRef}
          maxTimeRef={props.maxTimeRef}
          expectedTimeRef={props.expectedTimeRef}
          calculateDeadlines={props.calculateDeadlines}
        />
        <TaskEstimation 
          estimate={props.estimate}
          tasks={props.tasks}
          owner={props.owner}
          user={props.user}
          removeFromEstimate={props.removeFromEstimate}
        />
      </section>
    </React.Fragment>
  );
}

export default Estimate;
