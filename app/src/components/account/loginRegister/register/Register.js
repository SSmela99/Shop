import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { TextField, Button, Typography, Checkbox } from "@material-ui/core";
import useStyles from "./styles";

const Register = ({
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
}) => {
  const classes = useStyles();

  const [check, setCheck] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const registered = {
        username: regUsername,
        firstname: regFirstname,
        lastname: regLastname,
        email: regEmail.toLowerCase(),
        password: regPassword.trim(),
      };

      axios
        .post("http://localhost:4000/account/register", registered)
        .then((response) => console.log(response.data));

      setRegUsername("");
      setRegFirstname("");
      setRegLastname("");
      setRegEmail("");
      setRegPassword("");

      setCheck(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={classes.account}>
        <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
          <Typography variant="h6" className={classes.title}>
            Rejestracja
          </Typography>
          <TextField
            name="username"
            label="username"
            variant="outlined"
            required
            onChange={(e) => setRegUsername(e.target.value)}
            value={regUsername}
            className={classes.input}
            placeholder="username"
            autoComplete="new-password"
          />
          <TextField
            name="firstname"
            label="imię"
            variant="outlined"
            required
            onChange={(e) => setRegFirstname(e.target.value)}
            value={regFirstname}
            className={classes.input}
            placeholder="imię"
            autoComplete="new-password"
          />
          <TextField
            name="lastname"
            label="nazwisko"
            variant="outlined"
            required
            onChange={(e) => setRegLastname(e.target.value)}
            value={regLastname}
            className={classes.input}
            placeholder="nazwisko"
            autoComplete="new-password"
          />
          <TextField
            name="email"
            label="e-mail"
            variant="outlined"
            required
            onChange={(e) => setRegEmail(e.target.value)}
            value={regEmail}
            className={classes.input}
            placeholder="e-mail"
            autoComplete="new-password"
          />
          <TextField
            name="password"
            label="hasło"
            variant="outlined"
            required
            onChange={(e) => setRegPassword(e.target.value)}
            value={regPassword}
            className={classes.input}
            placeholder="hasło"
            type="password"
          />
          <div className={classes.checkbox}>
            <Checkbox
              required
              checked={!check ? false : true}
              onClick={() => setCheck(!check)}
              color="primary"
              style={{ height: "30px" }}
            />
            <Typography variant="subtitle2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              iaculis condimentum aliquet. Sed tempus nisi dapibus finibus
              placerat. Donec sit amet sem quis justo commodo varius id at
              ipsum. Cras commodo sollicitudin velit, ac viverra tellus pulvinar
              ut.
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
            variant="subtitle1"
            color="textSecondary"
            style={{ padding: "20px 0" }}
          >
            Masz już konto?&nbsp;
            <Link to="/account/login">Zaloguj się</Link>
          </Typography>
        </form>
      </div>
    </>
  );
};

Register.propTypes = {
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
};

export default Register;
