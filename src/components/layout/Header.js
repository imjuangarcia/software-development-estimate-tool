import React from "react";

import { UserContext } from '../../context/UserContext';

const Header = () => {
  return(
    <UserContext.Consumer>
      {context => (
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
          { context.user.uid === null ? '' : <button onClick={context.logout}>Logout</button>}
          <hr />
        </header>
      )}
    </UserContext.Consumer>
  );
}

export default Header;
