import React from "react";
import PropTypes from "prop-types";
import AddTechStackForm from "./AddTechStackForm";

class TechStack extends React.Component {
  // Refs
  techStackFormRef = React.createRef();

  // Lifecycle methods
  componentDidUpdate() {
    if (this.techStackFormRef.current !== null) {
      if (Object.keys(this.props.auth).length === 0) {
        // if they're not logged in
        this.techStackFormRef.current.classList.add("hidden");
      }
      // if they're logged in, but they're now owners
      else if (this.props.auth.owner !== this.props.auth.uid) {
        this.techStackFormRef.current.classList.add("hidden");
      }
      // if they're owners
      else {
        this.techStackFormRef.current.classList.remove("hidden");
      }
    }
  }

  render() {
    return (
      <section className="tech edit" ref={this.techStackFormRef}>
        <div className="title">
          <h2>Technologies to use</h2>
        </div>
        <h3>Add a New Tech</h3>
        <AddTechStackForm addTechStack={this.props.addTechStack} />
      </section>
    );
  }
}

export default TechStack;
