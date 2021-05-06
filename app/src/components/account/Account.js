import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginRegister from "./loginRegister/LoginRegister";
import useStyles from "./styles";

import { Loading } from "../Extras";

const Account = ({ loggedIn, logout, user }) => {
  const classes = useStyles();

  const LoggedIn = () => (
    <>
      <div className={classes.center}>
        <p style={{ margin: 0 }}>zalogowany</p>
        <button onClick={() => logout()}>Wyloguj mnie</button>
        {user.length === 0 ? <Loading /> : <p>{user[0].user.username}</p>}
      </div>
    </>
  );

  const NotLoggedIn = () => (
    <>
      <div className={classes.center}>
        <p style={{ margin: 0 }}>niezalogowany</p>
        <Link to="/account/login">Zaloguj się tutaj!</Link>
      </div>
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
