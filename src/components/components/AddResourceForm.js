import React, { useRef } from "react";

const AddResourceForm = (props) => {
  // Refs
  const addResourceFormRef = useRef();
  const resourceQuantityRef = useRef();
  const resourceTypeRef = useRef();
  const resourceAvailabilityRef = useRef();

  const addAnotherResource = event => {
    event.preventDefault();

    const resource = {
      quantity: parseFloat(resourceQuantityRef.current.value),
      type: resourceTypeRef.current.value,
      availability: parseFloat(resourceAvailabilityRef.current.value)
    };

    props.addResource(resource);
  };
  return (
    <tr ref={addResourceFormRef}>
      <td>
        <input
          type="number"
          name="resourceQuantity"
          placeholder="Set Quantity here"
          ref={resourceQuantityRef}
        />
      </td>
      <td>
        <input
          type="text"
          name="resourceType"
          placeholder="Type of resouce here"
          ref={resourceTypeRef}
        />
      </td>
      <td>
        <input
          type="number"
          name="resourceAvailability"
          placeholder="Set Availability here"
          ref={resourceAvailabilityRef}
        />
        hours/week
      </td>
      <td>
        <button type="submit" onClick={addAnotherResource}>
          Add resource
        </button>
      </td>
    </tr>
  );
}

export default AddResourceForm;
