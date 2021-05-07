import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

import AdminPanel from "./adminPanel/AdminPanel";

const Admin = ({ username, products }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.margin} />
      <Box className={classes.center}>
        {username === "admin" ? (
          <AdminPanel products={products} />
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
};

export default Admin;
