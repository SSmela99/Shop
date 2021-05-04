import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login/Login";
import Register from "./register/Register";

import { Link } from "react-router-dom";

const Account = ({ loggedIn, setLoggedIn }) => {
  const LoggedIn = () => (
    <>
      <p>Zalogowany</p>

      <button onClick={() => setLoggedIn(false)}>Wyloguj mnie</button>
    </>
  );

  const NotLoggedIn = () => (
    <>
      <p>niezalogowany</p>
      <Link to="/account/login">Zaloguj się tutaj!</Link>
    </>
  );

  return (
    <main>
      <div style={{ marginTop: "100px" }} />
      {loggedIn ? <LoggedIn /> : <NotLoggedIn />}
      <Router>
        <Switch>
          <Route exact path="/account/register">
            <Register />
          </Route>
          <Route exact path="/account/login">
            <Login />
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
