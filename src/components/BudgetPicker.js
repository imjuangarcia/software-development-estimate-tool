import React from "react";
import { getFunName } from "../helpers";

class BudgetPicker extends React.Component {
  myInput = React.createRef();
  goToBudget = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Get the text from the input
    const budget = this.myInput.current.value;
    // Change the page
    this.props.history.push(`/budget/${budget}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToBudget}>
        <h2>Please Enter a Name</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter the name for the tool"
          defaultValue={getFunName()}
        />
        <button type="submit">Go to the tool</button>
      </form>
    );
  }
}

export default BudgetPicker;
