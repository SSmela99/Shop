import React from "react";

import { Box, Typography } from "@material-ui/core";

const AddPanel = () => {
  return (
    <Box style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h5" style={{ margin: "0" }}>
        Dodaj produkt
      </Typography>
    </Box>
  );
};

export default AddPanel;
