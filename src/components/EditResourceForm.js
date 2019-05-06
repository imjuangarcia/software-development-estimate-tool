import React from "react";
import PropTypes from "prop-types";

class EditResourceForm extends React.Component {
  // Refs
  removeResourceButtonRef = React.createRef();
  resourceQuantityRef = React.createRef();
  resourceTypeRef = React.createRef();
  resourceAvailabilityRef = React.createRef();

  componentDidUpdate() {
    // if they're not logged in
    if (Object.keys(this.props.auth).length === 0) {
      this.resourceQuantityRef.current.setAttribute("disabled", true);
      this.resourceTypeRef.current.setAttribute("disabled", true);
      this.resourceAvailabilityRef.current.setAttribute("disabled", true);
      this.removeResourceButtonRef.current.classList.add("hidden");
    }
    // if they're logged in, but they're now owners
    else if (this.props.auth.owner !== this.props.auth.uid) {
      this.resourceQuantityRef.current.setAttribute("disabled", true);
      this.resourceTypeRef.current.setAttribute("disabled", true);
      this.resourceAvailabilityRef.current.setAttribute("disabled", true);
      this.removeResourceButtonRef.current.classList.add("hidden");
    }
    // if they're owners
    else {
      this.resourceQuantityRef.current.removeAttribute("disabled");
      this.resourceTypeRef.current.removeAttribute("disabled");
      this.resourceAvailabilityRef.current.removeAttribute("disabled");
      this.removeResourceButtonRef.current.classList.remove("hidden");
    }
  }

  handleChange = event => {
    const updatedResource = {
      ...this.props.resources,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateResource(this.props.index, updatedResource);
  };
  render() {
    return (
      <tr>
        <td>
          <input
            type="number"
            name="quantity"
            placeholder="Set Quantity here"
            required
            ref={this.resourceQuantityRef}
            onChange={this.handleChange}
            value={this.props.resource.quantity}
          />
        </td>
        <td>
          <input
            type="text"
            name="type"
            placeholder="Type of resouce here"
            required
            ref={this.resourceTypeRef}
            onChange={this.handleChange}
            value={this.props.resource.type}
          />
        </td>
        <td>
          <input
            type="number"
            name="availability"
            placeholder="Set Availability here"
            required
            ref={this.resourceAvailabilityRef}
            onChange={this.handleChange}
            value={this.props.resource.availability}
          />
          hours/week
        </td>
        <td>
          <button
            onClick={() => this.props.deleteResource(this.props.index)}
            ref={this.removeResourceButtonRef}
          >
            Remove resource
          </button>
        </td>
      </tr>
    );
  }
}

export default EditResourceForm;
