import React from "react";
import PropTypes from "prop-types";

class AddTaskForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.addTechStack}>
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
            ref={this.techNameRef}
            type="text"
            placeholder="Name of the Tech Used"
          />
        </fieldset>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddTaskForm;
