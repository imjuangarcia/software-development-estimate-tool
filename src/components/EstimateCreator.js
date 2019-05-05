import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../helpers";

class EstimateCreator extends React.Component {
  projectNameRef = React.createRef();
  clientNameRef = React.createRef();
  dateRef = React.createRef();
  versionNumberRef = React.createRef();
  estimateNumberRef = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToEstimate = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Store the rest of the info on an object
    const client = {
      projectName: this.projectNameRef.current.value,
      clientName: this.clientNameRef.current.value,
      date: this.dateRef.current.value,
      versionNumber: parseFloat(this.versionNumberRef.current.value),
      estimateNumber: parseFloat(this.estimateNumberRef.current.value)
    };
    // Get the text from the input
    const estimate = slugify(this.projectNameRef.current.value);
    // Change the page
    this.props.history.push({ pathname: `/estimate/${estimate}`, client });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>
            Software Development <strong>Estimate</strong>
          </h1>
          <p>
            Juan Mart&iacute;n Garc&iacute;a – Product Designer &amp; Frontend
            Developer
          </p>
          <hr />
        </header>
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
        <footer>
          &copy; {new Date().getFullYear()} JMG. Designed and Developed by{" "}
          <a
            href="https://www.juangarcia.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juan Mart&iacute;n Garc&iacute;a
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default EstimateCreator;
