import "./App.css";
import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import VideoCall from "./components/VideoCallPage/VideoCall.js";

import { v4 as uuidv4 } from "uuid";
import { auth, provider } from "./firebase.js";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [meetingCode, setMeetingCode] = useState();

  const history = useHistory();

  const handleSubmit = () => {
    setMeetingCode(uuidv4());
    console.log("meeting code created and connected successfully...");
    console.log(typeof meetingCode);
    customHistory.push(`/${meetingCode}`);
  };

  function requireAuth(nextState, replace) {
    if (!user?.displayName) {
      replace({
        pathname: "/",
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }

  const logIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        console.log(res.user.displayName);
        console.log(res.user.email);
        console.log(res.user.photoURL);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user); //add user by setUser
        // history.push("/home");
        customHistory.push("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {!user ? (
            <Route path="/" exact>
              <Login logIn={logIn}></Login>
            </Route>
          ) : (
            <Route path="/home" exact onEnter={requireAuth}>
              <Header currentUser={user}></Header>
              <Home></Home>
            </Route>
          )}
          <Route path="/:code" exact component={VideoCall}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// useEffect(() => {
//   const getData = async () => {
//     const dataFromServer = await fetchDatas();
//   };

//   getData();
// }, []);

// const fetchDatas = async () => {
//   const response = await fetch("/api/greeting");
//   const data = await response.json();

//   console.log(data.greeting);
//   return data;
// };
