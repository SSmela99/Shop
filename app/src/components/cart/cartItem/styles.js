import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    padding: "10px",
    margin: "10px 0",
    alignItems: "center",
  },
  grow: {
    flexGrow: "1",
  },
  image: {
    width: "100px",
    height: "100px",
    backgroundSize: "contain",
  },
  cartButton: {
    border: "1px solid black",
    borderRadius: "50%",
    fontSize: "14px",
    backgroundColor: "#fff",
  },
}));
