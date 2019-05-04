import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../helpers";

class EstimateCreator extends React.Component {
  projectNameRef = React.createRef();
  clientNameRef = React.createRef();
  dateRef = React.createRef();
  versionNumberRef = React.createRef();
  estimateNumberRef = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToEstimate = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Store the rest of the info on an object
    const client = {
      projectName: this.projectNameRef.current.value,
      clientName: this.clientNameRef.current.value,
      date: this.dateRef.current.value,
      versionNumber: this.versionNumberRef.current.value,
      estimateNumber: this.estimateNumberRef.current.value
    };
    // Get the text from the input
    const estimate = slugify(this.projectNameRef.current.value);
    // Change the page
    this.props.history.push({ pathname: `/estimate/${estimate}`, client });
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToEstimate}>
        <h2>Please Enter the details of the project to estimate</h2>
        <input
          type="text"
          ref={this.projectNameRef}
          required
          placeholder="Project name"
        />
        <input
          type="text"
          ref={this.clientNameRef}
          required
          placeholder="Client name"
        />
        <input type="date" ref={this.dateRef} required placeholder="Date" />
        <input
          type="number"
          ref={this.versionNumberRef}
          required
          placeholder="Version Number"
          defaultValue={1.0}
          step="0.1"
        />
        <input
          type="number"
          ref={this.estimateNumberRef}
          required
          placeholder="Estimate Number"
        />
        <button type="submit">Go to the estimate</button>
      </form>
    );
  }
}

export default EstimateCreator;
