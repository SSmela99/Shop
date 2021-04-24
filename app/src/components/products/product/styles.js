import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
    position: "relative",
    margin: "0!important",
  },
  button: {
    position: "absolute",
    bottom: "15px",
  },
  $title: {
    overflow: "hidden",
    height: "30px",
  },
  description: {
    overflow: "auto",
    height: "140px",
    [theme.breakpoints.down("sm")]: {
      height: "235px",
    },
    wordWrap: "break-word",
    "&::-webkit-scrollbar": {
      width: "3px",
      backgroundColor: "black",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "3px",
      backgroundColor: "#3f51b5",
    },
  },
}));
