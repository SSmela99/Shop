import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  CssBaseline,
  TextField,
  Button,
  Typography,
  Checkbox,
} from "@material-ui/core";
import useStyles from "./styles";

const LoginRegister = ({ loggedIn, setLoggedIn }) => {
  const classes = useStyles();
  const location = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const Login = () => (
    <div className={classes.account}>
      <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
        <Typography variant="h6">Logowanie</Typography>
        <TextField
          name="username"
          label="username"
          variant="outlined"
          className={classes.input}
          placeholder="username"
        />
        <TextField
          name="password"
          label="hasło"
          variant="outlined"
          className={classes.input}
          placeholder="hasło"
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={() => setLoggedIn(!loggedIn)}
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

  const Register = () => (
    <div className={classes.account}>
      <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
        <Typography variant="h6">Rejestracja</Typography>
        <TextField
          name="username"
          label="username"
          variant="outlined"
          required
          className={classes.input}
          placeholder="username"
        />
        <TextField
          name="firstName"
          label="imię"
          variant="outlined"
          required
          className={classes.input}
          placeholder="imię"
        />
        <TextField
          name="lastName"
          label="nazwisko"
          variant="outlined"
          required
          className={classes.input}
          placeholder="nazwisko"
        />
        <TextField
          name="email"
          label="e-mail"
          variant="outlined"
          required
          className={classes.input}
          placeholder="e-mail"
        />
        <TextField
          name="password"
          label="hasło"
          variant="outlined"
          required
          className={classes.input}
          placeholder="hasło"
          type="password"
        />
        <div style={{ display: "flex", maxWidth: "320px" }}>
          <Checkbox required color="primary" style={{ height: "30px" }} />
          <Typography variant="subtitle2" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            iaculis condimentum aliquet. Sed tempus nisi dapibus finibus
            placerat. Donec sit amet sem quis justo commodo varius id at ipsum.
            Cras commodo sollicitudin velit, ac viverra tellus pulvinar ut.
          </Typography>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Zarejestruj się
        </Button>
        <Typography
          variant="subtitle"
          color="textSecondary"
          style={{ padding: "20px 0" }}
        >
          Masz już konto?&nbsp;
          <Link to="/account/login">Zaloguj się</Link>
        </Typography>
      </form>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <div className={classes.margin} />
      <main className={classes.main}>
        {location.pathname === "/account/register" ? <Register /> : <Login />}

        <div className={classes.bg} />
      </main>
    </>
  );
};

LoginRegister.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.any,
};

export default LoginRegister;
