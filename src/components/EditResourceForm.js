import React from "react";
import PropTypes from "prop-types";

class EditResourceForm extends React.Component {
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
          <button onClick={() => this.props.deleteResource(this.props.index)}>
            Remove resource
          </button>
        </td>
      </tr>
    );
  }
}

export default EditResourceForm;
