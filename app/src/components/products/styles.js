import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  productsContainer: {
    width: "100%",
  },
  margin: {
    minHeight: "100px",
    transition: ".5s",
    [theme.breakpoints.down("sm")]: {
      minHeight: "70px",
      transition: ".5s",
    },
  },
}));
