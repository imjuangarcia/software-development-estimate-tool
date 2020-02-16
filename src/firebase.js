import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8dUEtyAkwkRSpAued29RIVj7btJc53Jg",
  authDomain: "software-estimation-tool-26e17.firebaseapp.com",
  databaseURL: "https://software-estimation-tool-26e17.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
