import React from "react";

const Technologies = (props) => {
  
  const renderTech = key => {
    const tech = props.details[key];
    if (tech) {
      return (
        <li key={key}>
          { props.user && props.owner === props.user.uid ? <button type="button" onClick={() => props.deleteTechStack(key)}>x</button> : ''}
          <div style={{ backgroundImage: "url(" + tech.image + ")" }} />
          <p>{tech.name}</p>
        </li>
      );
    }
  };

  return (
    <React.Fragment>
      <section className="technologies">
        <div className="title">
          <hr />
          <h2>Tech Stack</h2>
        </div>
        <ul>{props.details ? Object.keys(props.details).map(renderTech) : ''}</ul>
      </section>
    </React.Fragment>
  );
}

export default Technologies;
