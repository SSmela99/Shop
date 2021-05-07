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
    height: "calc(100vh - 100px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 70px)",
    },
  },
}));
