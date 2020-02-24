import React, { useRef } from "react";
import AddTechStackForm from "../components/AddTechStackForm";

const TechStack = (props) => {
  // Refs
  const techStackFormRef = useRef();

  return (
    <section className={props.user && props.owner === props.user.uid ? 'tech edit' : 'tech edit hidden'} ref={techStackFormRef}>
      <div className="title">
        <h2>Technologies to use</h2>
      </div>
      <h3>Add a New Tech</h3>
      <AddTechStackForm addTechStack={props.addTechStack} />
    </section>
  );
}

export default TechStack;
