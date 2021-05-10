import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Register from "./register/Register";
import Login from "./login/Login";

import { CssBaseline } from "@material-ui/core";
import useStyles from "./styles";

const LoginRegister = ({
  loggedIn,
  setLoggedIn,
  username,
  setUsername,
  password,
  setPassword,
  user,
  setUser,
  logout,
}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <div className={classes.margin} />
      <main className={classes.main}>
        {location.pathname === "/account/register" ? (
          <Register loggedIn={loggedIn} logout={logout} />
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
            logout={logout}
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
  username: PropTypes.string,
  setUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  password: PropTypes.string,
  setPassword: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  setUser: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  logout: PropTypes.func,
};

export default LoginRegister;
