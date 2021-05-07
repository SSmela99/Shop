import React from "react";
import PropTypes from "prop-types";

import { Select, MenuItem } from "@material-ui/core";

const UpdatePanel = ({ products }) => {
  return (
    <div>
      <h2>Select</h2>
      <Select>
        {products.map((product) => {
          return <MenuItem key={product.id}>{product.title}</MenuItem>;
        })}
      </Select>
    </div>
  );
};

UpdatePanel.propTypes = {
  products: PropTypes.array,
};

export default UpdatePanel;
