import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

import AdminPanel from "./adminPanel/AdminPanel";

const Admin = ({ username, products, setProducts }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.margin} />
      <Box className={classes.center}>
        {username === "admin" ? (
          <AdminPanel products={products} setProducts={setProducts} />
        ) : (
          <Box className={classes.flex}>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="subtitle2" style={{ fontSize: "16px" }}>
                Nie jesteś zalogowany jako admin!
              </Typography>
              <Typography variant="subtitle2">Login: admin</Typography>
              <Typography variant="subtitle2">hasło: admin</Typography>
              <Button
                component={Link}
                to="/account/login"
                variant="contained"
                color="primary"
              >
                Przejdź do logowania
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

Admin.propTypes = {
  username: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default Admin;
