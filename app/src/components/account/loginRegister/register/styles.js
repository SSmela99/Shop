import { makeStyles } from "@material-ui/core/styles";

import bgImage from "../../../../assets/accBG.jpg";

export default makeStyles((theme) => ({
  main: {
    display: "flex",
    height: "100%",
  },
  margin: {
    minHeight: "84px",
    transition: ".5s",
    [theme.breakpoints.down("sm")]: {
      minHeight: "64px",
      transition: ".5s",
    },
  },
  account: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "calc(100vh - 64px)",
      minHeight: "720px",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      width: "80%",
      margin: "30px auto",
      display: "flex",
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
      margin: 0,
      paddingBottom: "20px",
    },
  },
  input: {
    margin: "10px 0",
    width: "270px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  checkbox: {
    display: "flex",
    maxWidth: "280px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
}));
