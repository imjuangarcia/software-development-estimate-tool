import React from "react";
import PropTypes from "prop-types";

class AddTechStackForm extends React.Component {
  imageRef = React.createRef();
  typeRef = React.createRef();
  nameRef = React.createRef();

  createTechStack = event => {
    // Stop the form from submitting
    event.preventDefault();

    // Create the tech object
    const tech = {
      image: this.imageRef.current.value,
      type: this.typeRef.current.value,
      name: this.nameRef.current.value
    };
    this.props.addTechStack(tech);
    // Refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.createTechStack}>
        <fieldset>
          <label htmlFor="image">Image URL</label>
          <input
            required
            name="image"
            ref={this.imageRef}
            type="text"
            placeholder="Add Image URL"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="type">Technology Type</label>
          <select required name="type" ref={this.typeRef}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Tooling">Tooling</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="name">Technology Name</label>
          <input
            required
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name of the Tech Used"
          />
        </fieldset>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddTechStackForm;
