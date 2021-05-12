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
  },
  box: {
    maxWidth: "800px",
    padding: "30px",
    marginBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 15px",
    },
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      alignItems: "baseline",
      marginTop: "20px",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
}));
