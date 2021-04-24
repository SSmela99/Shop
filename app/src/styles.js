import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
