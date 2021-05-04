import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginRegister from "./loginRegister/LoginRegister";
import useStyles from "./styles";

const Account = ({ loggedIn, setLoggedIn }) => {
  const classes = useStyles();

  const LoggedIn = () => (
    <>
      <div className={classes.center}>
        <p style={{ margin: 0 }}>niezalogowany</p>
        <button onClick={() => setLoggedIn(false)}>Wyloguj mnie</button>
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
};

export default Account;
