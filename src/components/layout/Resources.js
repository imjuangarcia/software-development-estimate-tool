import React from 'react';
import AddResourceForm from "../components/AddResourceForm";
import EditResourceForm from "../components/EditResourceForm";

const Resources = (props) => {
  return (
    <React.Fragment>
      <h3>Resources</h3>
      <table>
        <thead>
          <tr>
            <td>Quantity</td>
            <td>Type</td>
            <td>Availability</td>
            <td>&nbsp;</td>
          </tr>
        </thead>
        <tbody>
          {props.resources ? Object.keys(props.resources).map(key => (
            <EditResourceForm
              key={key}
              index={key}
              resource={props.resources[key]}
              updateResource={props.updateResource}
              deleteResource={props.deleteResource}
              user={props.user}
              owner={props.owner}
            />
          )) : <tr></tr>}
          { props.user && props.user.uid === props.owner ? <AddResourceForm
            user={props.user}
            owner={props.owner}
            addResource={props.addResource}
          /> : <tr></tr> }
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Resources;