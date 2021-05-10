import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Typography, IconButton } from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";

const RemovePanel = ({ products, setProducts }) => {
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
      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Typography variant="h5" style={{ margin: "0" }}>
          Usuń produkt
        </Typography>
        {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle2">
                id {product.id}. {product.title}
              </Typography>
              <IconButton
                onClick={() => deleteItem(product)}
                style={{ leftMargin: "10px" }}
              >
                <BackspaceIcon />
              </IconButton>
            </div>
          );
        })}
        <button onClick={() => console.log(item)}>id</button>
      </main>
    </>
  );
};

RemovePanel.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default RemovePanel;
