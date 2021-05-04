import { makeStyles } from "@material-ui/core/styles";

import bgImage from "../../../assets/accBG.jpg";

export default makeStyles((theme) => ({
  main: {
    display: "flex",
    height: "calc(100vh - 84px)",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 64px)",
    },
  },
  bg: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "blur(3px)",
    width: "100%",
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
    borderRight: "1px solid black",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    margin: "10px 0",
    minWidth: "320px",
  },
}));
