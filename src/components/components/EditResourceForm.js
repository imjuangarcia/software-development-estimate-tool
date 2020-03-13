import React, { useRef } from "react";

const EditResourceForm = (props) => {
  const removeResourceButtonRef = useRef();

  return (
    props.resource ? 
    <tr>
      <td>
        <input
          type="number"
          name="quantity"
          placeholder="Set Quantity here"
          required
          disabled
          value={props.resource.quantity}
        />
      </td>
      <td>
        <input
          type="text"
          name="type"
          placeholder="Type of resouce here"
          required
          disabled
          value={props.resource.type}
        />
      </td>
      <td>
        <input
          type="number"
          name="availability"
          placeholder="Set Availability here"
          required
          disabled
          value={props.resource.availability}
        />
        hours/week
      </td>
      <td>
        <button
          onClick={() => props.deleteResource(props.index)}
          ref={removeResourceButtonRef}
        >
          Remove resource
        </button>
      </td>
    </tr>
    : ''
  );
}

export default EditResourceForm;
