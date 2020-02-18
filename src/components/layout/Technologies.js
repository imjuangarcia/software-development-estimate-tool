import React from "react";

class Technologies extends React.Component {

  // Custom functions
  renderTech = key => {
    const tech = this.props.details[key];
    if (tech) {
      return (
        <li key={key}>
          <div style={{ backgroundImage: "url(" + tech.image + ")" }} />
          <p>{tech.name}</p>
        </li>
      );
    }
  };

  render() {
    const techIds = Object.keys(this.props.details);
    return (
      <React.Fragment>
        <section className="technologies">
          <div className="title">
            <hr />
            <h2>Tech Stack</h2>
          </div>
          <ul>{techIds.map(this.renderTech)}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Technologies;
