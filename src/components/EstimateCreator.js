import React from "react";

class EstimateCreator extends React.Component {
  myInput = React.createRef();
  goToEstimate = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Get the text from the input
    const estimate = this.myInput.current.value;
    // Change the page
    this.props.history.push(`/estimate/${estimate}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToEstimate}>
        <h2>Please Enter a Number for the estimate</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter the estimate number"
        />
        <button type="submit">Go to the estimate</button>
      </form>
    );
  }
}

export default EstimateCreator;
