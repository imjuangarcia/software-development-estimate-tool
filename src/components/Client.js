import React from "react";
import PropTypes from "prop-types";

class Client extends React.Component {
  // Refs
  loadClientDataButtonRef = React.createRef();

  // Proptypes
  static propTypes = {
    details: PropTypes.shape({
      clientName: PropTypes.string,
      projectName: PropTypes.string,
      date: PropTypes.string,
      estimateNumber: PropTypes.number,
      versionNumber: PropTypes.number
    }),
    addClient: PropTypes.func
  };

  // Lifecycle methods
  componentDidUpdate() {
    if (Object.keys(this.props.details).length !== 0) {
      this.loadClientDataButtonRef.current.classList.add("hidden");
    }
  }
  render() {
    const {
      clientName,
      projectName,
      date,
      estimateNumber,
      versionNumber
    } = this.props.details;
    return (
      <section className="client">
        <h3>Client &amp; Project Details</h3>
        <button
          ref={this.loadClientDataButtonRef}
          onClick={this.props.addClient}
        >
          Load Client Data
        </button>
        <table>
          <tbody>
            <tr>
              <td>
                <h4>Project:</h4> {projectName}
              </td>
              <td>
                <h4>Client:</h4> {clientName}
              </td>
            </tr>
            <tr>
              <td>
                <h4>Date:</h4> {date}
              </td>
              <td>
                <h4>Author:</h4> Juan Mart&iacute;n Garc&iacute;a
              </td>
            </tr>
            <tr>
              <td>
                <h4>Version:</h4> {versionNumber}
              </td>
              <td>
                <h4>Estimate Number:</h4> {estimateNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Client;
