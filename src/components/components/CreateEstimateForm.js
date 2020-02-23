import React, { Fragment, useRef, useEffect } from "react";

import { slugify } from "../../utilities/helpers";
import base from "../../firebase";

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const EstimateCreator = (props) => {
  // Refs
  const projectNameRef = useRef();
  const clientNameRef = useRef();
  const dateRef = useRef();
  const versionNumberRef = useRef();
  const estimateNumberRef = useRef();

  useEffect(() => {
    // Fetch the existing projects on the db
    base.fetch('/', {
      context: this,
      asArray: true,
    }).then(data => {
      // Set the count of projects + 1 as the value for the input
      if(estimateNumberRef.current === null) {
        return;
      } else {
        estimateNumberRef.current.value = data.length + 1;
      }
    })
  }, []);

  // state = {
  //   auth: {},
  //   estimateNumber: 1,
  // };

  // componentDidMount() {
    // We check if the user is authenticated
    // const { owner, uid } = this.props.history.location.auth || '';
    // // If it is, we set that data to state
    // if(owner && uid) {
    //   this.setState({
    //     auth: {
    //       owner: this.props.history.location.auth.owner,
    //       uid: this.props.history.location.auth.uid,
    //     }
    //   });
    // } 
    // // If not, we redirect them to the log in page
    // else {
    //   this.props.history.push('/');
    // }
  // }

  const goToEstimate = async event => {
    event.preventDefault();

    // Get the text from the input and create the slug
    const estimate = slugify(projectNameRef.current.value);

    // Send this data to firebase
    await base.post(`${estimate}/`, {
      data: {
        // owner: props.history.location.auth.owner,
        client: {
          projectName: projectNameRef.current.value,
          clientName: clientNameRef.current.value,
          date: dateRef.current.value,
          versionNumber: parseFloat(versionNumberRef.current.value),
          estimateNumber: parseFloat(estimateNumberRef.current.value)
        }
      }
    });

    // const auth = this.state.auth;

    // Redirect to tasks list
    // this.props.history.push({ pathname: `/estimate/${estimate}`, auth});
    props.history.push({ pathname: `/estimate/${estimate}`});
  };

  return (
    <Fragment>
      <Header history={props.history} />
      <section className="create-project">
        <form action="" onSubmit={goToEstimate}>
          <h2>Please Enter the details of the project to estimate</h2>
          <fieldset>
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              ref={projectNameRef}
              required
              placeholder="Enter the Project Name Here"
              name="projectName"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="clientName">Client Name</label>
            <input
              type="text"
              ref={clientNameRef}
              required
              placeholder="Enter the Client Name Here"
              name="clientName"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="date">Estimate Date</label>
            <input type="date" ref={dateRef} required name="date" />
          </fieldset>
          <fieldset>
            <label htmlFor="versionNumber">Estimate Version Number</label>
            <input
              type="number"
              ref={versionNumberRef}
              required
              placeholder="Enter Version Number Here"
              name="versionNumber"
              defaultValue={1.0}
              step="0.1"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="estimateNumber">Estimate Number</label>
            <input
              type="number"
              ref={estimateNumberRef}
              required
              name="estimateNumber"
              defaultValue={1}
              placeholder="Enter Estimate Number Here"
            />
          </fieldset>
          <button type="submit">Go to the estimate</button>
        </form>
      </section>
      <Footer />
    </Fragment>
  );
}

export default EstimateCreator;
