import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0 10px",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  input: {
    margin: "10px 0",
  },
}));
