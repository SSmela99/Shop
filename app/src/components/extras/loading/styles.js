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
  "@keyframes pushup": {
    "0%": {
      marginTop: 0,
    },
    "50%": {
      marginTop: "10px",
      backgroundColor: "#A6ABAB",
    },

    "100%": {
      marginTop: 0,
    },
  },
  container: {
    width: "80px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)",
  },
  circle: {
    width: "25px",
    height: "15px",
    backgroundColor: "#818585",
    margin: "0 5px",
    borderRadius: "50%",
    animation: "$pushup 1s infinite",
    "&:first-child": {
      animationDelay: "0.1s",
    },
    "&:nth-child(2)": {
      animationDelay: "0.4s",
    },
    "&:last-child": {
      animationDelay: "0.7s",
    },
  },
}));
