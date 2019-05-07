import React from "react";
import PropTypes from "prop-types";

class AddResourceForm extends React.Component {
  // Refs
  addResourceFormRef = React.createRef();
  resourceQuantityRef = React.createRef();
  resourceTypeRef = React.createRef();
  resourceAvailabilityRef = React.createRef();

  // Proptypes
  static propTypes = {
    auth: PropTypes.object,
    addResource: PropTypes.func
  };

  // Lifecycle methods
  componentDidUpdate() {
    // if they're not logged in
    if (Object.keys(this.props.auth).length === 0) {
      this.addResourceFormRef.current.classList.add("hidden");
    }
    // if they're logged in, but they're now owners
    else if (this.props.auth.owner !== this.props.auth.uid) {
      this.addResourceFormRef.current.classList.add("hidden");
    }
    // if they're owners
    else {
      this.addResourceFormRef.current.classList.remove("hidden");
    }
  }

  // Custom functions
  addAnotherResource = event => {
    event.preventDefault();

    const resource = {
      quantity: parseFloat(this.resourceQuantityRef.current.value),
      type: this.resourceTypeRef.current.value,
      availability: parseFloat(this.resourceAvailabilityRef.current.value)
    };

    this.props.addResource(resource);
  };
  render() {
    return (
      <tr ref={this.addResourceFormRef}>
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
