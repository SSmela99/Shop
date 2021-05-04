import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: "100%",
    height: "100px",
    backgroundColor: "rgba(61, 81, 181, 0.8)",
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
  },
  shopIconImg: {
    width: "60px",
  },
  leftFooter: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  rightFooter: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkBox: {
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
  },
  imgLink: {
    marginRight: "10px",
    width: "17px",
  },
  grow: {
    flexGrow: 1,
  },
}));
