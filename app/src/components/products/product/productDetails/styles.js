import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  margin: {
    minHeight: "100px",
    transition: ".5s",
    [theme.breakpoints.down("sm")]: {
      minHeight: "70px",
      transition: ".5s",
    },
  },
  center: {
    minHeight: "calc(100vh - 100px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 70px)",
    },
    display: "flex",
    alignItems: "center",
  },
  content: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  text: {
    textAlign: "right",
    padding: "8px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      fontSize: "22px",
      padding: "5px 0",
    },
  },
  desc: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  image: {
    minWidth: "400px",
    backgroundSize: "contain",
    marginRight: "80px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "140px",
      minWidth: "140px",
      marginRight: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "100px",
      minWidth: "100px",
      marginRight: "0",
    },
  },
}));
