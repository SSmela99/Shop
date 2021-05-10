import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, withRouter, useHistory } from "react-router-dom";

import { TextField, Button, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const Login = ({
  loggedIn,
  setLoggedIn,
  username,
  setUsername,
  password,
  setPassword,
  setUser,
  logout,
}) => {
  const classes = useStyles();
  let history = useHistory();

  const [errMessage, setErrMessage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const sendData = await axios.post("http://localhost:4000/account/login/", {
      username: username,
      password: password,
    });

    const { data } = sendData;
    const { success } = data.info;

    console.log(`success: ${success}`);
    console.log(sendData);

    if (success === true) {
      setLoggedIn(true);
      console.log(data);
      setUser([data]);
      sessionStorage.setItem("user", JSON.stringify([data]));
      sessionStorage.setItem("logged", JSON.stringify((loggedIn = true)));
      sessionStorage.setItem("username", JSON.stringify(username));
      setErrMessage(false);
      history.push("/");
    } else {
      console.log(data);
      setErrMessage(true);
    }
  };

  return (
    <>
      {loggedIn ? (
        <Box className={classes.account}>
          <Typography variant="subtitle1" style={{ padding: "20px" }}>
            Sesja w której jesteś posiada już zalogowanego użytkownika,&nbsp;
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => logout()}
            >
              Wyloguj się!
            </span>
          </Typography>
        </Box>
      ) : (
        <Box className={classes.account}>
          <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
            <Typography variant="h6" className={classes.title}>
              Logowanie
            </Typography>
            <TextField
              name="username"
              label="username"
              variant="outlined"
              className={classes.input}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="username"
              required
            />
            <TextField
              name="password"
              label="hasło"
              variant="outlined"
              className={classes.input}
              placeholder="hasło"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ marginTop: "10px" }}
            >
              Zaloguj się
            </Button>
            <Typography style={{ color: "red", marginTop: "20px" }}>
              {errMessage ? "Taki użytkownik nie istnieje!" : null}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ padding: "20px 0" }}
            >
              Nie masz jeszcze konta?&nbsp;
              <Link to="/account/register">Załóż je tutaj!</Link>
            </Typography>
          </form>
        </Box>
      )}
    </>
  );
};

Login.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  username: PropTypes.string,
  setUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  password: PropTypes.string,
  setPassword: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  setUser: PropTypes.func,
  logout: PropTypes.func,
};

export default withRouter(Login);
