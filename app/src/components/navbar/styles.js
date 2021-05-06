import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    transition: ".5s",
    "& img": {
      width: "64px",
      marginRight: "20px",
      transition: ".5s",
      [theme.breakpoints.down("sm")]: {
        width: "48px",
        marginRight: "8px",
        transition: ".5s",
      },
    },
    "& p": {
      fontSize: "1rem",
      transition: ".5s",
      [theme.breakpoints.down("xs")]: {
        transition: ".5s",
        fontSize: ".8rem",
      },
    },
  },
  account: {
    color: "#fff",
    textDecoration: "none",
  },
  headerContainer: {
    transition: ".5s",
    minHeight: "84px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "64px",
      transition: ".5s",
    },
    display: "flex",
    justifyContent: "center",
  },
}));
