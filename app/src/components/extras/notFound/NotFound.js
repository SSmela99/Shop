import React from "react";

import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
      <Box className={classes.margin} />
      <Typography variant="h2">404 Page NotFound</Typography>;
    </Box>
  );
};

export default NotFound;
