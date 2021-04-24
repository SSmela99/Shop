import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import Product from "./product/Product";
import useStyles from "./styles";

const Products = ({ products, addToCart, id, setId }) => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.productsContainer}>
        <div className={classes.margin} />

        <Grid
          container
          justify="center"
          spacing={4}
          style={{ width: "100%", margin: 0 }}
        >
          {products.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product
                  product={product}
                  addToCart={addToCart}
                  id={id}
                  setId={setId}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setId: PropTypes.func,
  addToCartConfirmation: PropTypes.bool,
};

export default Products;
