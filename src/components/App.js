import React from "react";

import EstimateProvider, { EstimateContext } from "../context/EstimateContext";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Estimate from "./layout/Estimate";
import Client from "./layout/Client";
import Tasks from "./layout/Tasks";
import TechStack from "./layout/TechStack";
import Technologies from "./layout/Technologies";
import Terms from "./layout/Terms";

const App = (props) => {

  return(
    <EstimateProvider estimateId={props.match.params.estimateId}>
      <EstimateContext.Consumer>
        {context => (
          <React.Fragment>
            <Header history={props.history} user={props.user} />
            <Client details={context.estimate.client} />
            <Estimate
              tasks={context.estimate.tasks}
              cost={context.estimate.cost}
              time={context.estimate.time}
              estimate={context.estimate.estimate}
              estimateId={props.match.params.estimateId}
              user={props.user}
              owner={context.estimate.owner}
              resources={context.estimate.resources}
              minTimeRef={context.minTimeRef}
              avgTimeRef={context.avgTimeRef}
              maxTimeRef={context.maxTimeRef}
              adminTimeRef={context.adminTimeRef}
              totalTimeRef={context.totalTimeRef}
              hourlyValueRef={context.hourlyValueRef}
              expectedTimeRef={context.expectedTimeRef}
              calculateTotalHours={context.calculateTotalHours}
              calculateTotalPrice={context.calculateTotalPrice}
              addResource={context.addResource}
              deleteResource={context.deleteResource}
              removeFromEstimate={context.removeFromEstimate}
            />
            <Technologies
              details={context.estimate.technologies}
              deleteTechStack={context.deleteTechStack}
              user={props.user}
              owner={context.estimate.owner}
            />
            <Terms details={context.estimate.client} />
            <Tasks
              addTask={context.addTask}
              updateTask={context.updateTask}
              deleteTask={context.deleteTask}
              loadSampleTasks={context.loadSampleTasks}
              addToEstimate={context.addToEstimate}
              tasks={context.estimate.tasks}
              estimateId={props.match.params.estimateId}
              owner={context.estimate.owner}
              user={props.user}
            />
            <TechStack 
              user={props.user}
              owner={context.estimate.owner}
              addTechStack={context.addTechStack}
            />
            <Footer />
          </React.Fragment>
        )}
      </EstimateContext.Consumer>
    </EstimateProvider>
  )
}

export default App;
