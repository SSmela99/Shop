import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, withRouter, useHistory } from "react-router-dom";

import { TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Login = ({
  // loggedIn,
  setLoggedIn,
  username,
  setUsername,
  password,
  setPassword,
  setUser,
}) => {
  const classes = useStyles();
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    const sendData = await axios.post("http://localhost:4000/account/login/", {
      username: username,
      password: password,
    });

    const { data } = sendData;
    const { success } = data.info;

    console.log(`success: ${success}`);

    if (success) {
      console.log(data);
      setUser([data]);
      setLoggedIn(true);
      history.push("/");
    } else {
      console.log("wystapił błąd");
    }
  };

  return (
    <div className={classes.account}>
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
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Zaloguj się
        </Button>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          style={{ padding: "20px 0" }}
        >
          Nie masz jeszcze konta?&nbsp;
          <Link to="/account/register">Załóż je tutaj!</Link>
        </Typography>
      </form>
    </div>
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
};

export default withRouter(Login);
