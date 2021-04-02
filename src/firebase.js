import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeGY2rlHYllVtUyiJeJMLYhGNUa-QSrxs",
  authDomain: "test-func-af7d7.firebaseapp.com",
  projectId: "test-func-af7d7",
  storageBucket: "test-func-af7d7.appspot.com",
  messagingSenderId: "561319259445",
  appId: "1:561319259445:web:c2e109ea2c8e043685b07c",
  measurementId: "G-J5YW7PG7B0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
// export default db;
