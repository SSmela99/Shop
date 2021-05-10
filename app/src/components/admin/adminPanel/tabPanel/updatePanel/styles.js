import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  center: {
    minHeight: "calc(100vh - 100px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 70px)",
    },
  },
}));
