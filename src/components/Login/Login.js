import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

const Login = ({ logIn }) => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>V-Conf.</h1>
        <p>Learn more about V-Conf.</p>
        <Button onClick={logIn}>Login with Google</Button>
      </div>
    </div>
  );
};

export default Login;
