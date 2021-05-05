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
}) => {
  const classes = useStyles();
  const location = useLocation();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     const registered = {
  //       username: regUsername,
  //       firstname: regFirstname,
  //       lastname: regLastname,
  //       email: regEmail.toLowerCase(),
  //       password: regPassword.trim(),
  //     };

  //     axios
  //       .post("http://localhost:4000/account/register", registered)
  //       .then((response) => console.log(response.data));

  //     setRegUsername("");
  //     setRegFirstname("");
  //     setRegLastname("");
  //     setRegEmail("");
  //     setRegPassword("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const Login = () => (
  //   <div className={classes.account}>
  //     <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
  //       <Typography variant="h6" className={classes.title}>
  //         Logowanie
  //       </Typography>
  //       <TextField
  //         name="username"
  //         label="username"
  //         variant="outlined"
  //         className={classes.input}
  //         placeholder="username"
  //       />
  //       <TextField
  //         name="password"
  //         label="hasło"
  //         variant="outlined"
  //         className={classes.input}
  //         placeholder="hasło"
  //         type="password"
  //       />
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         style={{ marginTop: "10px" }}
  //         onClick={() => setLoggedIn(!loggedIn)}
  //       >
  //         Zaloguj się
  //       </Button>
  //       <Typography
  //         variant="subtitle1"
  //         color="textSecondary"
  //         style={{ padding: "20px 0" }}
  //       >
  //         Nie masz jeszcze konta?&nbsp;
  //         <Link to="/account/register">Załóż je tutaj!</Link>
  //       </Typography>
  //     </form>
  //   </div>
  // );

  // const Register = () => (
  //   <div className={classes.account}>
  //     <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
  //       <Typography variant="h6" className={classes.title}>
  //         Rejestracja
  //       </Typography>
  //       <TextField
  //         name="username"
  //         label="username"
  //         variant="outlined"
  //         required
  //         onChange={(e) => setRegUsername(e.target.value)}
  //         value={regUsername}
  //         className={classes.input}
  //         placeholder="username"
  //       />
  //       <TextField
  //         name="firstname"
  //         label="imię"
  //         variant="outlined"
  //         required
  //         onChange={(e) => setRegFirstname(e.target.value)}
  //         value={regFirstname}
  //         className={classes.input}
  //         placeholder="imię"
  //       />
  //       <TextField
  //         name="lastname"
  //         label="nazwisko"
  //         variant="outlined"
  //         required
  //         onChange={(e) => setRegLastname(e.target.value)}
  //         value={regLastname}
  //         className={classes.input}
  //         placeholder="nazwisko"
  //       />
  //       <TextField
  //         name="email"
  //         label="e-mail"
  //         variant="outlined"
  //         required
  //         onChange={(e) => setRegEmail(e.target.value)}
  //         defaultValue={regEmail}
  //         className={classes.input}
  //         placeholder="e-mail"
  //       />
  //       <TextField
  //         name="password"
  //         label="hasło"
  //         variant="outlined"
  //         required
  //         onChange={(e) => setRegPassword(e.target.value)}
  //         value={regPassword}
  //         className={classes.input}
  //         placeholder="hasło"
  //         type="password"
  //       />
  //       <div className={classes.checkbox}>
  //         <Checkbox required color="primary" style={{ height: "30px" }} />
  //         <Typography variant="subtitle2" color="textSecondary">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
  //           iaculis condimentum aliquet. Sed tempus nisi dapibus finibus
  //           placerat. Donec sit amet sem quis justo commodo varius id at ipsum.
  //           Cras commodo sollicitudin velit, ac viverra tellus pulvinar ut.
  //         </Typography>
  //       </div>
  //       <Button
  //         type="submit"
  //         variant="contained"
  //         color="primary"
  //         style={{ marginTop: "20px" }}
  //       >
  //         Zarejestruj się
  //       </Button>
  //       <Typography
  //         variant="subtitle"
  //         color="textSecondary"
  //         style={{ padding: "20px 0" }}
  //       >
  //         Masz już konto?&nbsp;
  //         <Link to="/account/login">Zaloguj się</Link>
  //       </Typography>
  //     </form>
  //   </div>
  // );

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
};

export default LoginRegister;
