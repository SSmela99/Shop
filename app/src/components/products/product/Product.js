import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product, addToCart, setId }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          image={product.image}
          title={product.title}
          style={{ height: "100px", backgroundSize: "contain" }}
        />
        <CardContent>
          <div
            style={{ height: "30px", overflow: "hidden", marginBottom: "10px" }}
          >
            <Typography
              variant="h5"
              gutterBottom
              className={classes.title}
              component={Link}
              align="right"
              onClick={() => setId(product.id)}
              to={{ pathname: `/product/${product.id}` }}
            >
              {product.title}
            </Typography>
          </div>
          <Typography gutterBottom className={classes.overflow}>
            {product.price} PLN
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.description}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => console.log(product.title, product.id)}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            klik
          </Button>
          <Button
            onClick={() => addToCart(product)}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "green",
              color: "#fff",
            }}
          >
            Dodaj do koszyka
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  setId: PropTypes.func,
};

export default Product;
