import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "10px",
    margin: "10px 0",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "200px",
    },
  },
  grow: {
    flexGrow: "1",
  },
  box: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "right",
    },
    "& p, & h6": {
      paddingRight: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      "& p, & h6": {
        paddingRight: "8px",
      },
    },
  },
  image: {
    width: "100px",
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "160px",
      minWidth: "160px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "80px",
      minWidth: "80px",
    },
    backgroundSize: "contain",
  },
  totalPrize: {
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  actions: {
    justifyContent: "flex-end",
  },
  deleteBtn: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  cartButton: {
    border: "1px solid black",
    borderRadius: "50%",
    fontSize: "14px",
    backgroundColor: "#fff",
  },
}));
