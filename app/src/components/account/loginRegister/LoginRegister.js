import React from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

import Register from "./register/Register";
import Login from "./login/Login";

import {
  CssBaseline,
  // TextField,
  // Button,
  // Typography,
  // Checkbox,
} from "@material-ui/core";
import useStyles from "./styles";

const LoginRegister = ({
  loggedIn,
  setLoggedIn,
  regUsername,
  setRegUsername,
  regFirstname,
  setRegFirstname,
  regLastname,
  setRegLastname,
  regEmail,
  setRegEmail,
  regPassword,
  setRegPassword,
  username,
  setUsername,
  password,
  setPassword,
  user,
  setUser,
}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <div className={classes.margin} />
      <main className={classes.main}>
        {location.pathname === "/account/register" ? (
          <Register
            regUsername={regUsername}
            setRegUsername={setRegUsername}
            regFirstname={regFirstname}
            setRegFirstname={setRegFirstname}
            regLastname={regLastname}
            setRegLastname={setRegLastname}
            regEmail={regEmail}
            setRegEmail={setRegEmail}
            regPassword={regPassword}
            setRegPassword={setRegPassword}
          />
        ) : (
          <Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            user={user}
            setUser={setUser}
          />
        )}

        <div className={classes.bg} />
      </main>
    </>
  );
};

LoginRegister.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  regUsername: PropTypes.any,
  setRegUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  regFirstname: PropTypes.string,
  setRegFirstname: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  regLastname: PropTypes.string,
  setRegLastname: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  regEmail: PropTypes.string,
  setRegEmail: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  regPassword: PropTypes.string,
  setRegPassword: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  username: PropTypes.string,
  setUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  password: PropTypes.string,
  setPassword: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  user: PropTypes.string,
  setUser: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default LoginRegister;
