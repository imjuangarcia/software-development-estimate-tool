import React from "react";
import firebase from "firebase";

const Header = (props) => {
  const logout = async () => {
    await firebase.auth().signOut();
    props.history.push('/');
  };

  return(
    <header>
      <div className="text-container">
        <h1>
          Software Development <strong>Estimate</strong>
        </h1>
        <p>
          Juan Mart&iacute;n Garc&iacute;a – Product Designer &amp; Frontend
          Developer
        </p>
      </div>
      { props.auth === undefined ? '' : <button onClick={logout}>Logout</button>}
      <hr />
    </header>
  );
}

export default Header;
