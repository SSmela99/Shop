import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import useStyles from "./styles";

import { Typography, IconButton, Box } from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";

const RemovePanel = ({ products, setProducts }) => {
  const classes = useStyles();

  const [id, setId] = useState("");
  const [item, setItem] = useState("");

  const deleteItem = (product) => {
    setItem(product);
    setId(product.id);
    setProducts(products.filter((x) => x.id !== product.id));
  };

  useEffect(() => {
    const removeProduct = async () => {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`,
        item
      );
      const data = await response.data;
      console.log(data);

      console.log(`Przedmiot o id:${id} został usunięty`);
    };

    removeProduct();
  }, [id]);

  return (
    <>
      <Box className={classes.form}>
        <Typography variant="h5" style={{ margin: "0" }}>
          Usuń produkt
        </Typography>
        {products.map((product) => {
          return (
            <Box className={classes.flex} key={product.id}>
              <Typography variant="subtitle2">
                id {product.id}. {product.title}
              </Typography>
              <IconButton
                onClick={() => deleteItem(product)}
                className={classes.iconButton}
              >
                <BackspaceIcon />
              </IconButton>
            </Box>
          );
        })}
        <button onClick={() => console.log(item)}>id</button>
      </Box>
    </>
  );
};

RemovePanel.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default RemovePanel;
