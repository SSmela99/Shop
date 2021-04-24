import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  loading: {
    width: "80px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loadingCircle: {
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
  margin: {
    minHeight: "100px",
    transition: ".5s",
    [theme.breakpoints.down("sm")]: {
      minHeight: "70px",
      transition: ".5s",
    },
  },
  text: {
    textAlign: "right",
    padding: "8px",
  },
  desc: {
    textAlign: "right",
  },
  image: {
    minWidth: "400px",
    backgroundSize: "contain",
    marginRight: "80px",
  },
}));
