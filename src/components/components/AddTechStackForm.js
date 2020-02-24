import React, { useRef } from "react";

import technologies from '../../utilities/technologies';

const AddTechStackForm = (props) => {
  // Refs
  const imageRef = useRef();
  const typeRef = useRef();
  const nameRef = useRef();

  const createTechStack = event => {
    event.preventDefault();

    const tech = {
      image: imageRef.current.value,
      type: typeRef.current.value,
      name: nameRef.current.value
    };
    props.addTechStack(tech);

    event.currentTarget.reset();
  };
  return (
    <form onSubmit={createTechStack}>
      <fieldset>
        <label htmlFor="name">Technology Name</label>
        <input
          required
          name="name"
          ref={nameRef}
          type="text"
          placeholder="Name of the Tech Used"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="type">Technology Type</label>
        <select required name="type" ref={typeRef}>
          {Object.values(technologies).map((technology, key) => <option key={key} value={technology.name}>{technology.name}</option>)}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="image">Image URL</label>
        <input
          required
          name="image"
          ref={imageRef}
          type="text"
          placeholder="Add Image URL"
        />
      </fieldset>
      <button type="submit">+ Add Item</button>
    </form>
  );
}

export default AddTechStackForm;
