import React from "react";
import PropTypes from "prop-types";

class AddResourceForm extends React.Component {
  // Refts
  resourceQuantityRef = React.createRef();
  resourceTypeRef = React.createRef();
  resourceAvailabilityRef = React.createRef();

  addAnotherResource = event => {
    event.preventDefault();
    console.log("test");

    const resource = {
      quantity: parseFloat(this.resourceQuantityRef.current.value),
      type: this.resourceTypeRef.current.value,
      availability: parseFloat(this.resourceAvailabilityRef.current.value)
    };

    this.props.addResource(resource);
  };
  render() {
    return (
      <tr>
        <td>
          <input
            type="number"
            name="resourceQuantity"
            placeholder="Set Quantity here"
            ref={this.resourceQuantityRef}
          />
        </td>
        <td>
          <input
            type="text"
            name="resourceType"
            placeholder="Type of resouce here"
            ref={this.resourceTypeRef}
          />
        </td>
        <td>
          <input
            type="number"
            name="resourceAvailability"
            placeholder="Set Availability here"
            ref={this.resourceAvailabilityRef}
          />
          hours/week
        </td>
        <td>
          <button type="submit" onClick={this.addAnotherResource}>
            Add resource
          </button>
        </td>
      </tr>
    );
  }
}

export default AddResourceForm;
