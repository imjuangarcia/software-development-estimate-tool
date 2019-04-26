import React from "react";

class BudgetPicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter a Name</h2>
        <input type="text" required placeholder="Enter the name for the tool" />
        <button type="submit">Go to the tool</button>
      </form>
    );
  }
}

export default BudgetPicker;
