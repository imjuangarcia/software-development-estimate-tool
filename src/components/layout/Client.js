import React from "react";

class Client extends React.Component {
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
