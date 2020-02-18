import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { slugify } from "../../utilities/helpers";
import base from "../../firebase";

import Header from '../layout/Header'
import Footer from '../layout/Footer'

class EstimateCreator extends React.Component {
  projectNameRef = React.createRef();
  clientNameRef = React.createRef();
  dateRef = React.createRef();
  versionNumberRef = React.createRef();
  estimateNumberRef = React.createRef();

  state = {
    auth: {},
    estimateNumber: 1,
  };

  componentDidMount() {
    // We check if the user is authenticated
    const { owner, uid } = this.props.history.location.auth || '';
    // If it is, we set that data to state
    if(owner && uid) {
      this.setState({
        auth: {
          owner: this.props.history.location.auth.owner,
          uid: this.props.history.location.auth.uid,
        }
      });
    } 
    // If not, we redirect them to the log in page
    else {
      this.props.history.push('/');
    }

    // Fetch the existing projects on the db
    base.fetch('/', {
      context: this,
      asArray: true,
    }).then(data => {
      // Set the count of projects + 1 as the value for the input
      if(this.estimateNumberRef.current === null) {
        return;
      } else {
        this.estimateNumberRef.current.value = data.length + 1;
      }
    })
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  goToEstimate = async event => {
    event.preventDefault();
    // Get the text from the input and create the slug
    const estimate = slugify(this.projectNameRef.current.value);

    // Send this data to firebase
    await base.post(`${estimate}/`, {
      data: {
        owner: this.props.history.location.auth.owner,
        client: {
          projectName: this.projectNameRef.current.value,
          clientName: this.clientNameRef.current.value,
          date: this.dateRef.current.value,
          versionNumber: parseFloat(this.versionNumberRef.current.value),
          estimateNumber: parseFloat(this.estimateNumberRef.current.value)
        }
      }
    });

    const auth = this.state.auth;

    // Redirect to tasks list
    this.props.history.push({ pathname: `/estimate/${estimate}`, auth});
  };
  render() {
    return (
      <Fragment>
        <Header history={this.props.history} />
        <section className="create-project">
          <form action="" onSubmit={this.goToEstimate}>
            <h2>Please Enter the details of the project to estimate</h2>
            <fieldset>
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                ref={this.projectNameRef}
                required
                placeholder="Enter the Project Name Here"
                name="projectName"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                ref={this.clientNameRef}
                required
                placeholder="Enter the Client Name Here"
                name="clientName"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="date">Estimate Date</label>
              <input type="date" ref={this.dateRef} required name="date" />
            </fieldset>
            <fieldset>
              <label htmlFor="versionNumber">Estimate Version Number</label>
              <input
                type="number"
                ref={this.versionNumberRef}
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
                ref={this.estimateNumberRef}
                required
                name="estimateNumber"
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
}

export default EstimateCreator;
