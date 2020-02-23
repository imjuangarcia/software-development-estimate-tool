import React, { useRef } from "react";

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
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Deployment">Deployment</option>
          <option value="Tooling">Tooling</option>
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
