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
              // removeFromEstimate={this.removeFromEstimate}
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
              // addToEstimate={this.addToEstimate}
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

// class App extends React.Component {

//   addToEstimate = key => {
//     // take a copy of state
//     const estimate = { ...this.state.estimate.estimate };
//     // add to the order or update the number
//     estimate[key] = estimate[key] + 1 || 1;
//     // Call setState to update our state
//     this.setState({ 
//       estimate: {
//         estimate
//       }
//     });
//   };

//   removeFromEstimate = key => {
//     // take a copy of state
//     const estimate = { ...this.state.estimate.estimate };
//     // remove item from estimate
//     estimate[key] = null;
//     // Call setState to update our state
//     this.setState({ 
//       estimate: {
//         estimate
//       }
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Header history={this.props.history} user={this.props.user} />
//         <Client details={this.state.estimate.client} />
//         <Estimate
//           tasks={this.state.estimate.tasks}
//           estimate={this.state.estimate.estimate}
//           removeFromEstimate={this.removeFromEstimate}
//           estimateId={this.props.match.params.estimateId}
//           user={this.props.user}
//           owner={this.state.estimate.owner}
//           addResource={this.addResource}
//           updateResource={this.updateResource}
//           deleteResource={this.deleteResource}
//           resources={this.state.estimate.resources}
//         />
//         <Technologies details={this.state.estimate.technologies} deleteTechStack={this.deleteTechStack} user={this.props.user} owner={this.state.estimate.owner} />
//         <Terms details={this.state.estimate.client} />
//         <Tasks
//           addTask={this.addTask}
//           updateTask={this.updateTask}
//           deleteTask={this.deleteTask}
//           loadSampleTasks={this.loadSampleTasks}
//           addToEstimate={this.addToEstimate}
//           tasks={this.state.estimate.tasks}
//           estimateId={this.props.match.params.estimateId}
//           owner={this.state.estimate.owner}
//           user={this.props.user}
//         />
//         <TechStack user={this.props.user} owner={this.state.estimate.owner} addTechStack={this.addTechStack} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;
