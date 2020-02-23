import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase";
import { firebaseApp } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        authHandler({ user });
      }
    });
  }, []);

  const authHandler = authData => {
    setUser({
      uid: authData.user.uid,
      owner: authData.user.uid
    });
  };

  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setUser({
      uid: null,
    });
  };

  return(
    <UserContext.Provider
      value={{
        user: user,
        authenticate: authenticate,
        logout: logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;