import React, { useEffect, useRef } from "react";

const EditResourceForm = (props) => {
  // Refs
  const removeResourceButtonRef = useRef();
  const resourceQuantityRef = useRef();
  const resourceTypeRef = useRef();
  const resourceAvailabilityRef = useRef();

  useEffect(() => {
    // if they're not logged in, of if they're logged in, but they're now owners
    if (props.auth === undefined || props.auth.owner !== props.auth.uid) {
      resourceQuantityRef.current.setAttribute("disabled", true);
      resourceTypeRef.current.setAttribute("disabled", true);
      resourceAvailabilityRef.current.setAttribute("disabled", true);
      removeResourceButtonRef.current.classList.add("hidden");
    }
    // if they're owners
    else {
      resourceQuantityRef.current.removeAttribute("disabled");
      resourceTypeRef.current.removeAttribute("disabled");
      resourceAvailabilityRef.current.removeAttribute("disabled");
      removeResourceButtonRef.current.classList.remove("hidden");
    }
  }, [props.auth]);

  // Custom functions
  const handleChange = event => {
    const updatedResource = {
      ...props.resources,
      [event.currentTarget.name]: event.currentTarget.value
    };

    props.updateResource(props.index, updatedResource);
  };

  return (
    <tr>
      <td>
        <input
          type="number"
          name="quantity"
          placeholder="Set Quantity here"
          required
          ref={resourceQuantityRef}
          onChange={handleChange}
          value={props.resource.quantity}
        />
      </td>
      <td>
        <input
          type="text"
          name="type"
          placeholder="Type of resouce here"
          required
          ref={resourceTypeRef}
          onChange={handleChange}
          value={props.resource.type}
        />
      </td>
      <td>
        <input
          type="number"
          name="availability"
          placeholder="Set Availability here"
          required
          ref={resourceAvailabilityRef}
          onChange={handleChange}
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
  );
}

export default EditResourceForm;
