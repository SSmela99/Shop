import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginRegister from "./loginRegister/LoginRegister";
import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

import { Loading } from "../Extras";

const Account = ({ loggedIn, logout, user }) => {
  const classes = useStyles();

  const LoggedIn = () => (
    <>
      <Box className={classes.center}>
        <Box style={{ textAlign: "center" }}>
          {user.length === 0 ? (
            <Loading />
          ) : (
            <Typography variant="subtitle2">
              zalogowany, {user[0].user.username}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={() => logout()}
          >
            Wyloguj mnie
          </Button>
        </Box>
      </Box>
    </>
  );

  const NotLoggedIn = () => (
    <>
      <Box className={classes.center}>
        <Typography
          variant="subtitle2"
          style={{ margin: 0, textAlign: "center" }}
        >
          Jesteś niezalogowany!
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/account/login"
            style={{ margin: "10px" }}
          >
            Zaloguj się tutaj!
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/account/register"
            style={{ margin: "10px" }}
          >
            Zarejestruj się tutaj!
          </Button>
        </Box>
      </Box>
    </>
  );

  return (
    <main>
      <div className={classes.margin} />
      {loggedIn ? <LoggedIn /> : <NotLoggedIn />}
      <Router>
        <Switch>
          <Route exact path="/account/register">
            <LoginRegister />
          </Route>
          <Route exact path="/account/login">
            <LoginRegister />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

Account.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.any,
  logout: PropTypes.func,
  setIsLoading: PropTypes.func,
  isLoading: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Account;
