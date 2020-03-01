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
import sampleTasks from "../utilities/sample-tasks";
import base from "../firebase";

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
              // removeFromEstimate={this.removeFromEstimate}
              // addResource={this.addResource}
              // updateResource={this.updateResource}
              // deleteResource={this.deleteResource}
            />
            <Technologies
              details={context.estimate.technologies}
              // deleteTechStack={this.deleteTechStack}
              user={props.user}
              owner={context.estimate.owner}
            />
            <Terms details={context.estimate.client} />
            <Tasks
              // addTask={this.addTask}
              // updateTask={this.updateTask}
              // deleteTask={this.deleteTask}
              // loadSampleTasks={this.loadSampleTasks}
              // addToEstimate={this.addToEstimate}
              tasks={context.estimate.tasks}
              estimateId={props.match.params.estimateId}
              owner={context.estimate.owner}
              user={props.user}
            />
            <TechStack 
              user={props.user}
              owner={context.estimate.owner}
              // addTechStack={this.addTechStack}
            />
            <Footer />
          </React.Fragment>
        )}
      </EstimateContext.Consumer>
    </EstimateProvider>
  )
}

// class App extends React.Component {
//   state = {
//     estimate: {}
//   };

//   componentDidMount() {
//     const { params } = this.props.match;
//     this.ref = base.syncState(`${params.estimateId}/`, {
//       context: this,
//       state: "estimate"
//     });
//   }

//   componentWillUnmount() {
//     base.removeBinding(this.ref);
//   }

//   addResource = resource => {
//     // Take a copy of the existing state we'll be updating
//     const resources = {
//       ...this.state.estimate.resources
//     };
//     // Add new resource to resource variable
//     resources[`resource${Date.now()}`] = resource;

//     // Set the new tasks and sections objects to state
//     this.setState({
//       estimate: {
//         resources
//       }
//     });
//   };

//   updateResource = (key, updatedResource) => {
//     const resources = { ...this.state.estimate.resources };
//     resources[key] = updatedResource;
//     this.setState({
//       estimate: {
//         resources
//       }
//     });
//   };

//   deleteResource = key => {
//     const resources = { ...this.state.estimate.resources };
//     resources[key] = null;
//     this.setState({
//       estimate: {
//         resources
//       }
//     });
//   };

//   addTask = task => {
//     // Take a copy of the existing state we'll be updating
//     const tasks = { ...this.state.estimate.tasks };
//     // Add new task to tasks variable
//     tasks[`task${Date.now()}`] = task;

//     // Set the new tasks and sections objects to state
//     this.setState({
//       estimate: {
//         tasks
//       }
//     });
//   };

//   updateTask = (key, updatedTask) => {
//     // Copy of the current state
//     const tasks = { ...this.state.estimate.tasks };
//     // Update state
//     tasks[key] = updatedTask;
//     // Set that to state
//     this.setState({
//       estimate: {
//         tasks
//       }
//     });
//   };

//   deleteTask = key => {
//     // take a copy of state
//     const tasks = { ...this.state.estimate.tasks };
//     // remove the item
//     tasks[key] = null;
//     // Update State
//     this.setState({ 
//       estimate: {
//         tasks
//       }
//      });
//   };

//   loadSampleTasks = () => {
//     this.setState({ 
//       estimate: {
//         tasks: sampleTasks
//       }
//      });
//   };

//   addTechStack = tech => {
//     // Take a copy of the existing state we'll be updating
//     const technologies = { ...this.state.estimate.technologies };
//     // Add new task to tasks variable
//     technologies[`tech${Date.now()}`] = tech;

//     // Set the new tasks and sections objects to state
//     this.setState({
//       estimate: {
//         technologies
//       }
//     });
//   };

//   deleteTechStack = key => {
//     const technologies = { ...this.state.estimate.technologies };
//     technologies[key] = null;
//     this.setState({
//       estimate: {
//         technologies
//       }
//     });
//   };

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
