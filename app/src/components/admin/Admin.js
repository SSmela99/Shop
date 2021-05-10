import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@material-ui/core";
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
          <Typography>Nie jesteś zalogowany jako admin!</Typography>
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
