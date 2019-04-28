import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../helpers";

class EstimateCreator extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();
  goToEstimate = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Get the text from the input
    const estimate = slugify(this.myInput.current.value);
    // Change the page
    this.props.history.push(`/estimate/${estimate}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToEstimate}>
        <h2>Please Enter the name of the project to estimate</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter the project name"
        />
        <button type="submit">Go to the estimate</button>
      </form>
    );
  }
}

export default EstimateCreator;
