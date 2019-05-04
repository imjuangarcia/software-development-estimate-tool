import React from "react";
import PropTypes from "prop-types";

class Client extends React.Component {
  componentDidMount() {
    this.props.addClient();
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
      <div>
        <button onClick={this.props.addClient}>Load Client Data</button>
        <p>{clientName}</p>
        <p>{projectName}</p>
        <p>{date}</p>
        <p>{estimateNumber}</p>
        <p>{versionNumber}</p>
      </div>
    );
  }
}

export default Client;
